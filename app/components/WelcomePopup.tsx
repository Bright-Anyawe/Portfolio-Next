"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative max-w-md w-full mx-4 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
          >
            <button
              onClick={() => setIsVisible(false)}
              aria-label="Close welcome popup"
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full p-3 mb-2 shadow-md">
                <span className="text-3xl" role="img" aria-label="Waving hand">
                  👋
                </span>
              </div>
              <motion.h2
                id="welcome-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl font-extrabold mb-2 text-gray-800 dark:text-white text-center"
              >
                Welcome to My Portfolio!
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 dark:text-gray-300 mb-6 text-center text-base sm:text-lg"
            >
              I&apos;m excited to share my work with you.
              <br />Feel free to explore my projects and get in touch!
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <button
                onClick={() => setIsVisible(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;