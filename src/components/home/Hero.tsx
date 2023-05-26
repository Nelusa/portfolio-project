import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion, Variants, TargetAndTransition } from "framer-motion";

const BlinkingText: React.FC = () => {
  const textVariants: Variants = {
    opacity8: { opacity: 0.8 },
    opacity6: { opacity: 0.6 },
    opacity4: { opacity: 0.4 },
  };

  const randomVariant = (): string => {
    const variants: string[] = ["opacity8", "opacity6", "opacity4"];
    return variants[Math.floor(Math.random() * variants.length)];
  };

  return (
    <motion.h2
      className="relative text-4xl md:text-4xl xl:text-5xl text-center drop-shadow-xl decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-primary_orange to-tertiary"
      variants={textVariants}
      animate={randomVariant()}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      Hi, my name is Neluša! <span className="md:hidden">🙋🏻‍♀️</span>
    </motion.h2>
  );
};

const Hero: React.FC = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Neluša!",
      `I'm a sloth lover...`,
      "However, coding can be faster!",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 80,
  });

  return (
    <motion.div
      className="text-3xl md:text-4xl xl:text-5xl mt-10 justify-center flex items-center gap-5 cursor-grab"
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* <span>{text}</span>
      <Cursor cursorColor="#F9BD06" /> */}
      <BlinkingText />
      <span className="hidden md:block">🙋🏻‍♀️</span>
    </motion.div>
  );
};

export default Hero;
