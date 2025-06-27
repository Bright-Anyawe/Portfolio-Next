"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const QUICK_REPLIES = [
  "Show me your projects",
  "Tell me about your experience",
  "What skills do you have?",
  "Contact info",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Greet user by name if provided
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            sender: "bot",
            text: name
              ? `Hi ${name}! How can I help you today?`
              : "Hi! What's your name?",
          },
        ]);
      }, 300);
    }
  }, [open, name, messages.length]);

  // Handle user input and conversation memory
  async function sendMessage(msg?: string) {
    setError("");
    const userMsg = (msg ?? input).trim();
    if (!userMsg) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    try {
      // If name not set, treat first message as name
      if (!name) {
        setName(userMsg);
        setMessages((msgs) => [
          ...msgs,
          {
            sender: "bot",
            text: `Nice to meet you, ${userMsg}! How can I help you today?`,
          },
        ]);
        setLoading(false);
        return;
      }
      // Send last 4 exchanges as context
      const history = messages
        .slice(-4)
        .map((m) => ({ role: m.sender, text: m.text }));
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessages((msgs) => [...msgs, { sender: "bot", text: data.reply }]);
      } else {
        setError(data.reply || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !loading) sendMessage();
  }

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-all"
        onClick={() => setOpen(true)}
        aria-label="Open Chatbot"
        style={{ display: open ? "none" : "block" }}
      >
        <FaComments size={28} />
      </button>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-gray-900 text-white rounded-xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-accent rounded-t-xl">
              <span className="font-semibold">Chatbot</span>
              <button onClick={() => setOpen(false)} aria-label="Close Chatbot">
                <FaTimes size={20} />
              </button>
            </div>
            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-2 space-y-2"
              style={{ maxHeight: 320 }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[80%] text-sm shadow
                      ${
                        msg.sender === "user"
                          ? "bg-accent text-white"
                          : "bg-gray-800 text-white/90"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg bg-gray-800 text-white/70 text-sm animate-pulse">
                    <span>Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {/* Error Message */}
            {error && (
              <div className="px-4 py-2 text-red-400 text-sm bg-gray-950 border-t border-red-700">
                {error}
              </div>
            )}
            {/* Quick Replies */}
            {name && (
              <div className="flex overflow-x-auto gap-2 px-4 py-2 border-t border-gray-700 bg-gray-950 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    className="flex-shrink-0 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs hover:bg-accent/40 transition whitespace-nowrap"
                    onClick={() => sendMessage(q)}
                    disabled={loading}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-700 bg-gray-950 rounded-b-xl">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50"
                placeholder={
                  name ? "Type your message..." : "Enter your name..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                aria-label="Chat message input"
                autoFocus
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="p-2 rounded-full bg-accent hover:bg-accent/80 transition disabled:opacity-50"
                aria-label="Send message"
              >
                <FaPaperPlane size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
