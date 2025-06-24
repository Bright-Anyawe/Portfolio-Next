"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Call Gemini API (placeholder)
  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((msgs) => [...msgs, { sender: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    try {
      // TODO: Replace with your Gemini API call
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await response.json();
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: data.reply || "Sorry, I couldn't understand that." },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Error: Unable to reach the chatbot API." },
      ]);
    } finally {
      setLoading(false);
      setTimeout(scrollToBottom, 100);
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
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2" style={{ maxHeight: 320 }}>
              {messages.length === 0 && (
                <div className="text-center text-white/60 mt-8">How can I help you?</div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[80%] text-sm shadow
                      ${msg.sender === "user" ? "bg-accent text-white" : "bg-gray-800 text-white/90"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-700 bg-gray-950 rounded-b-xl">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                aria-label="Chat message input"
              />
              <button
                onClick={sendMessage}
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
