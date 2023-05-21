import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const BlinkingText = () => {
  const textVariants = {
    opacity8: { opacity: 0.8 },
    opacity6: { opacity: 0.6 },
    opacity4: { opacity: 0.4 },
    //opacity2: { opacity: 0.2 },
  };

  const randomVariant = () => {
    const variants = ["opacity8", "opacity6", "opacity4", "opacity2"];
    return variants[Math.floor(Math.random() * variants.length)];
  };

  return (
    /*     <motion.h2
      className="text-4xl text-center drop-shadow-xl decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-[#e5e4e4] to-[#b0b0b0]"
      variants={textVariants}
      animate={randomVariant()}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    > */
    <motion.h2
      className="text-4xl text-center drop-shadow-xl decoration-clone bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary"
      variants={textVariants}
      animate={randomVariant()}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      Hi, my name is Neluša!
    </motion.h2>
  );
};

const Hero = () => {
  const sloth = "\u{1F9A5}";
  const slothSliced = sloth.slice(1, 2);

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
      className="text-4xl mt-10 justify-center flex items-center gap-2 cursor-grab"
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* <span className="">{text}</span>
      <Cursor cursorColor="#F9BD06" /> */}
      <BlinkingText /> <span>🙋🏻‍♀️</span>
    </motion.div>
  );
};

export default Hero;
