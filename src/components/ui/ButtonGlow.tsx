import React from "react";
import { motion } from "framer-motion";

interface ButtonGlowProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

const ButtonGlow: React.FC<ButtonGlowProps> = ({ children, type }) => {
  return (
    <motion.button
      type={type}
      className="uppercase rounded-md px-3.5 py-2.5 text-center text-sm font-bold font-heading text-black shadow-sm bg-gradient-to-r from-tertiary to-primary_orange "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        filter: "drop-shadow(0px 0px 6px rgba(245, 158, 11, 0.8))",
      }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonGlow;
