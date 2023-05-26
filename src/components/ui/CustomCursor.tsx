import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [cursorColor, setCursorColor] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setCursorColor("red");
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 z-50 pointer-events-none ${
        isHovered ? "bg-primary/30" : ""
      }`}
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-primary/50 cursor-pointer"
        style={{ backgroundColor: cursorColor }}
        onClick={handleClick}
        whileHover={{ scale: 1.2 }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      />
    </motion.div>
  );
};

export default CustomCursor;
