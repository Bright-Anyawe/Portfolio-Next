"use client";
import "../styles/home.css";
import { useTypewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Frontend Developer", "Responsive Designer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <span className="devSkill inline-block text-2xl xl:text-3xl 2xl:text-4xl">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterComponent;
