"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <>
          <motion.div
            key="progress"
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 z-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 pointer-events-none z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            key="slide"
            className="fixed inset-0 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm z-30"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <motion.div
            key="glow"
            className="fixed inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 pointer-events-none z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default PageTransition; 