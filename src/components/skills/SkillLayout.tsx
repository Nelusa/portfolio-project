import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillProps {
  headingText: string;
  imageSrc: string;
  imageAlt: string;
  isAnimated?: boolean;
}

const SkillLayout: React.FC<SkillProps> = ({
  headingText,
  imageSrc,
  imageAlt,
  isAnimated = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsFlipped(false);
  };

  const handleFlipStart = () => {
    setIsFlipped(true);
  };

  const handleFlipComplete = () => {
    setIsFlipped(false);
  };

  return (
    <div className="flex items-center bg-gray-800 rounded-full w-44 h-44 mx-auto shadow-lg">
      <motion.div
        className="relative flex items-center justify-center mx-auto w-44 h-44"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex items-center absolute border-2 border-gray-500 rounded-full w-40 h-40 border-dotted"
          style={{ rotateY: isAnimated && isHovered ? 180 : 0 }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isAnimated && isHovered ? 180 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex items-center justify-center h-32 w-32 rounded-full mx-auto bg-gradient-to-l from-primary_orange/80 to-tertiary/80"
            style={{ rotateY: isAnimated && isHovered ? 180 : 0 }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isAnimated && isHovered ? 180 : 0 }}
            transition={{ duration: 1 }}
            onHoverStart={handleFlipStart}
            onHoverEnd={handleFlipComplete}
          >
            {isHovered ? (
              <motion.h3
                className="text-black text-lg font-bold mb-2 px-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {headingText}
              </motion.h3>
            ) : (
              <motion.div
                style={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={imageSrc} alt={imageAlt} width={80} height={80} />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillLayout;
