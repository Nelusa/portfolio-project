import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillProps {
  skill: {
    name: string;
    icon: string;
  };
  isHovered: boolean;
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = () => {
    setIsHovered(true);
  };

  const handleShowLogo = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-center bg-gray-800 rounded-full w-44 h-44 mx-auto">
      <motion.div
        className="flex items-center mx-auto border-2 border-gray-500 rounded-full w-40 h-40 border-dotted"
        /*  whileHover={{
          rotateY: 360,
          transition: {
            duration: 0.7,
          },
        }} */
      >
        <motion.div
          onMouseEnter={handleIsHovered}
          onMouseLeave={handleShowLogo}
          className="flex items-center justify-center h-32 w-32 rounded-full  mx-auto bg-tertiary/70 hover:cursor-pointer"
          whileHover={{
            //rotateY: 360,
            transition: {
              duration: 0.7,
            },
          }}
        >
          {isHovered ? (
            <h3 className="text-black text-lg font-bold mb-2 px-3 text-center">
              {skill.name}
            </h3>
          ) : (
            <Image src={skill.icon} alt={skill.name} width={100} height={100} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
