import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="flex justify-between items-center bg-transparent h-20 px-3"
      initial={{
        y: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Logo />
      <Navigation />
    </motion.header>
  );
};

export default Header;
