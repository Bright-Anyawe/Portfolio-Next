"use client";
import { useMemo, useRef, useEffect, useState } from "react";
import WelcomePopup from "./WelcomePopup";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { QUICK_REPLIES, INITIAL_PROMPT, GREETING_PROMPT } from "./chatbotData";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  createdAt: number;
  provider?: "gemini" | "groq" | "fallback";
}

function formatTime(ts: number) {
  try {
    return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(ts));
  } catch {
    return "";
  }
}

function providerLabel(provider?: Message["provider"]) {
  if (provider === "gemini") return "AI";
  if (provider === "groq") return "Groq";
  if (provider === "fallback") return "Offline";
  return "—";
}

function providerBadgeClasses(provider?: Message["provider"]) {
  if (provider === "gemini") return "bg-emerald-500/15 text-emerald-200 border-emerald-500/30";
  if (provider === "groq") return "bg-sky-500/15 text-sky-200 border-sky-500/30";
  if (provider === "fallback") return "bg-amber-500/15 text-amber-200 border-amber-500/30";
  return "bg-gray-500/15 text-gray-200 border-gray-500/30";
}

function linkify(text: string): Array<string | { href: string; label: string }> {
  // Very small, safe linkifier (no HTML injection). Matches http(s) URLs.
  const urlRe = /(https?:\/\/[^\s)]+)(?![^<]*>)/g;
  const parts: Array<string | { href: string; label: string }> = [];
  let lastIndex = 0;
  for (const match of text.matchAll(urlRe)) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) parts.push(text.slice(lastIndex, idx));
    const href = match[0];
    parts.push({ href, label: href });
    lastIndex = idx + href.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function MessageBody({ text }: { text: string }) {
  // Render newlines and simple "- " lists nicely, without dangerous HTML.
  const lines = text.split("\n");
  const blocks: Array<{ type: "p" | "ul"; lines: string[] }> = [];
  for (const line of lines) {
    const isBullet = /^\s*-\s+/.test(line);
    const last = blocks[blocks.length - 1];
    if (isBullet) {
      const bullet = line.replace(/^\s*-\s+/, "");
      if (last?.type === "ul") last.lines.push(bullet);
      else blocks.push({ type: "ul", lines: [bullet] });
    } else {
      if (last?.type === "p") last.lines.push(line);
      else blocks.push({ type: "p", lines: [line] });
    }
  }

  return (
    <div className="space-y-2">
      {blocks.map((b, i) => {
        if (b.type === "ul") {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {b.lines.map((li, idx) => (
                <li key={idx} className="leading-relaxed">
                  {linkify(li).map((p, j) =>
                    typeof p === "string" ? (
                      <span key={j}>{p}</span>
                    ) : (
                      <a
                        key={j}
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 text-accent hover:text-accent/80"
                      >
                        {p.label}
                      </a>
                    )
                  )}
                </li>
              ))}
            </ul>
          );
        }

        const paragraph = b.lines.join("\n").trimEnd();
        return (
          <p key={i} className="whitespace-pre-wrap leading-relaxed">
            {linkify(paragraph).map((p, j) =>
              typeof p === "string" ? (
                <span key={j}>{p}</span>
              ) : (
                <a
                  key={j}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 text-accent hover:text-accent/80"
                >
                  {p.label}
                </a>
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState<string | null>(null);
  const [lastProvider, setLastProvider] = useState<Message["provider"]>();
  // Initialize from localStorage
  const [showWelcomePopup, setShowWelcomePopup] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("welcomePopupDismissed") !== "true";
    }
    return true;
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const headerBadge = useMemo(() => {
    const provider = lastProvider ?? (messages.slice().reverse().find((m) => m.sender === "bot")?.provider as Message["provider"]);
    return { provider };
  }, [lastProvider, messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Auto-focus input when opened
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  // Greet user by name if provided
  useEffect(() => {
    if (open && messages.length === 0 && !showWelcomePopup) {
      setTimeout(() => {
        setMessages([
          {
            id: crypto.randomUUID(),
            sender: "bot",
            text: INITIAL_PROMPT(name),
            createdAt: Date.now(),
          },
        ]);
      }, 300);
    }
  }, [open, name, messages.length, showWelcomePopup]);

  // Handle user input and conversation memory
  async function sendMessage(msg?: string) {
    setError("");
    const userMsg = (msg ?? input).trim();
    if (!userMsg) return;

    const userMessageObj: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      text: userMsg,
      createdAt: Date.now(),
    };

    const baseMessages = [...messages, userMessageObj];
    setMessages(baseMessages);
    setInput("");
    setLoading(true);
    try {
      // If name not set, treat first message as name
      if (!name) {
        setName(userMsg);
        const botMessageObj: Message = {
          id: crypto.randomUUID(),
          sender: "bot",
          text: GREETING_PROMPT(userMsg),
          createdAt: Date.now(),
          provider: "fallback",
        };
        setMessages((msgs: Message[]) => [...msgs, botMessageObj]);
        setLoading(false);
        return;
      }
      // Send last 4 exchanges as context
      const history = baseMessages
        .slice(-4)
        .map((m) => ({ role: m.sender, text: m.text }));
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history }),
      });
      const data = await response.json();
      if (response.ok) {
        const provider = (data?.provider as Message["provider"]) || "gemini";
        setLastProvider(provider);
        setMessages((msgs: Message[]) => [
          ...msgs,
          { id: crypto.randomUUID(), sender: "bot", text: data.reply, createdAt: Date.now(), provider },
        ]);
      } else {
        setError(data.reply || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey && !loading) {
      e.preventDefault();
      sendMessage();
    }
  }

  function clearChat() {
    setMessages([]);
    setName(null);
    setError("");
    setLoading(false);
    setLastProvider(undefined);
  }

  // Ensure localStorage is updated when popup is closed
  const handleCloseWelcomePopup = () => {
    setShowWelcomePopup(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("welcomePopupDismissed", "true");
    }
  };

  const handleStartChatFromPopup = (userName: string) => {
    setName(userName);
    setOpen(true);
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: "bot",
        text: GREETING_PROMPT(userName),
        createdAt: Date.now(),
        provider: "fallback",
      },
    ]);
    // Dismiss popup and persist
    setShowWelcomePopup(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("welcomePopupDismissed", "true");
    }
  };

  return (
    <div>
      {showWelcomePopup && (
        <WelcomePopup
          onClose={handleCloseWelcomePopup}
          onStartChat={handleStartChatFromPopup}
        />
      )}
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
        onClick={() => setOpen(true)}
        aria-label="Open Chatbot"
        style={{ display: open ? "none" : "block" }}
      >
        <FaComments size={28} />
      </button>

      {/* Welcome Popup */}


      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-end justify-center sm:items-end sm:justify-end pointer-events-none"
            style={{ background: "rgba(0,0,0,0.15)" }}
          >
            {/* Click-away overlay */}
            <button
              className="absolute inset-0 pointer-events-auto"
              aria-label="Close chat overlay"
              onClick={() => setOpen(false)}
              tabIndex={-1}
              style={{ background: "transparent" }}
            />

            <div className="relative w-full max-w-[95vw] sm:w-[380px] bg-gray-900 text-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col pointer-events-auto mb-0 sm:mb-6 sm:mr-6 border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-accent rounded-t-2xl sm:rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Chatbot</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border ${providerBadgeClasses(headerBadge.provider)}`}>
                    {providerLabel(headerBadge.provider)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={clearChat}
                    aria-label="Clear Chat"
                    className="text-sm px-2 py-1 rounded-md bg-white/15 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Clear Chat
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close Chatbot"
                    className="p-1 rounded-md hover:bg-white/15 transition focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>

              {headerBadge.provider === "fallback" && (
                <div className="px-4 py-2 text-xs text-amber-200 bg-amber-500/10 border-b border-amber-500/20">
                  Offline mode: AI is unavailable right now, but I can still answer using portfolio info.
                </div>
              )}

              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
                style={{ maxHeight: "min(520px, 62vh)" }}
                aria-live="polite"
              >
                {messages.map((msg, i) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className={`max-w-[85%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                      <div
                        className={`px-3 py-2.5 rounded-2xl text-sm shadow border
                          ${
                            msg.sender === "user"
                              ? "bg-accent text-white border-white/10"
                              : "bg-gray-800 text-white/90 border-white/10"
                          }`}
                      >
                        <MessageBody text={msg.text} />
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-white/50 px-1">
                        {msg.sender === "bot" && msg.provider && (
                          <span className={`px-1.5 py-0.5 rounded-full border ${providerBadgeClasses(msg.provider)}`}>
                            {providerLabel(msg.provider)}
                          </span>
                        )}
                        <span>{formatTime(msg.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="px-3 py-2 rounded-2xl bg-gray-800 text-white/70 text-sm border border-white/10">
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.2s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.1s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
                        </span>
                        <span>Typing…</span>
                      </span>
                    </div>
                  </div>

                )}
                <div ref={messagesEndRef} />
              </div>
              {/* Error Message */}
              {error && (
                <div className="px-4 py-2 text-red-200 text-sm bg-red-500/10 border-t border-red-500/20">
                  {error}
                </div>
              )}
              {/* Quick Replies */}
              {name && (
                <div className="flex overflow-x-auto gap-2 px-4 py-2 border-t border-white/10 bg-gray-950 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      className="flex-shrink-0 bg-accent/20 text-accent px-3 py-1.5 rounded-full text-xs hover:bg-accent/40 transition whitespace-nowrap disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-white/25"
                      onClick={() => sendMessage(q)}
                      disabled={loading}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {/* Input */}
              <div className="flex items-end gap-2 px-4 py-3 border-t border-white/10 bg-gray-950 rounded-b-2xl pb-[max(12px,env(safe-area-inset-bottom))]">
                <textarea
                  ref={inputRef}
                  rows={1}
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50 resize-none leading-relaxed max-h-28"
                  placeholder={
                    name ? "Type your message..." : "Enter your name..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  aria-label="Chat message input"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  className="p-2.5 rounded-full bg-accent hover:bg-accent/80 transition disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Send message"
                >
                  <FaPaperPlane size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
