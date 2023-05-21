import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Image
          src="./logo2.svg"
          width={0}
          height={0}
          alt="Logo"
          className="w-32 aspect-auto"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;

/* import React, { useState } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (event, info) => {
    setPosition({ x: info.offset.x, y: info.offset.y });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        userSelect: "none",
      }}
    >
      <motion.img
        src="/logo2.svg"
        alt="Logo"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: isDragging ? 2 : 1,
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={0.5}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
};

export default Logo; */
