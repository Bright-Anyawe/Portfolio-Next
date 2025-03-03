"use client";
import "../styles/home.css";
import { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["Web Developer", "Frontend Developer", "Responsive Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["white", "#cd3a4e", "yellow"];
  
  const TYPING_DURATION = 4000; // 4s total (3s typing + 1s pause)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, TYPING_DURATION);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      key={currentIndex}
      className="devSkill inline-block text-2xl xl:text-3xl 2xl:text-4xl"
      style={{ 
        color: colors[currentIndex],
        animation: `typing ${TYPING_DURATION}ms steps(${words[currentIndex].length}, end), blink 600ms step-end infinite`
      }}
    >
      {words[currentIndex]}
    </span>
  );
};

export default Typewriter;
