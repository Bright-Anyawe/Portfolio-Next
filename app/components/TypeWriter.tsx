"use client";
import "../styles/home.css";
import { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["Web Developer", "Frontend Developer", "Responsive Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["white", "green", "yellow"];

  // Update the word every 4 seconds (or adjust as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    // The key is based on currentIndex so React re-mounts the span and re-triggers the CSS animation
    <span
      key={currentIndex}
      className="devSkill inline-block text-2xl xl:text-3xl 2xl:text-4xl"
      style={{ color: colors[currentIndex] }}
    >
      {words[currentIndex]}
    </span>
  );
};

export default Typewriter;
