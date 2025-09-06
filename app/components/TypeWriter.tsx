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
      style={{ position: "relative" }}
    >
      <span className="inline-block text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-blue-300">
        <Typewriter
          words={[
            "Creative Digital Expert",
            "Web Developer",
            "Graphic Designer",
            "Mobile App Developer",
            "Video Editor",
            "Social Media Manager",
            "Digital Marketer",
            "UI/UX Designer",
            "Brand Strategist",
          ]}
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
        style={{
          position: "absolute",
          bottom: "-0.25rem",
          left: 0,
          width: "100%",
          height: "0.125rem",
          background: "linear-gradient(to right, #60A5FA, #a78bfa)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default TypewriterComponent;
