import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomePopupProps {
  onClose: () => void;
  onStartChat: (name: string) => void;
}

export default function WelcomePopup({ onClose, onStartChat }: WelcomePopupProps) {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleStartChat = () => {
    if (userName.trim()) {
      onStartChat(userName.trim());
      setUserName(""); // Clear the input field after starting chat
      onClose();
    } else {
      setError("Please enter your name.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full text-center border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Welcome!</h2>
          <p className="text-gray-300 mb-6">What should I call you?</p>
          <input
            type="text"
            className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent mb-4"
            placeholder="Enter your name..."
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevent default form submission behavior
                handleStartChat();
              }
            }}
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            onClick={handleStartChat}
            className="w-full bg-accent text-white py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors"
          >
            Start Chatting
          </button>
          <button
            onClick={onClose}
            className="mt-3 w-full text-gray-400 hover:text-gray-200 transition-colors text-sm"
          >
            No thanks, maybe later
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}