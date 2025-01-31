

"use client";
import { motion } from "framer-motion";

export default function RotatingCircle() {
  return (
    <motion.svg
      className="w-[300px] xl:w-[406px] h-[300px] xl:h-[406px]"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      <circle
        cx="253"
        cy="253"
        r="250"
        fill="none"
        stroke="#ff0000" 
        strokeWidth="4"
        strokeDasharray="15.9145 26.60319 91.50123 71.64374"
      />
    </motion.svg>
  );
}
