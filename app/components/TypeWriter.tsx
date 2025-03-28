"use client";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const TypewriterComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <span className="inline-block text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-blue-300">
        <Typewriter
          words={["Web Developer", "Frontend Developer", "Responsive Designer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          cursorColor="#60A5FA"
          cursorBlinking={true}
        />
      </span>
      <motion.div
        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default TypewriterComponent;
