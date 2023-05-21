import { RectangleStackIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Skill from "./Skill";
const skills = [
  {
    name: "React.js",
    icon: "/icons/react--icon.svg",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript--icon.svg",
  },
  {
    name: "Next.js",
    icon: " /icons/nextjs--icon.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind--icon.svg",
  },
  {
    name: "Framer Motion",
    icon: "/icons/react.svg",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript--icon.svg",
  },
];

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = () => {
    setIsHovered(true);
  };

  return (
    <section className="bg-gray-900 py-12">
      <h2 className="text-3xl text-white font-bold mb-8">Skills</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => {
          return <Skill key={skill.name} skill={skill} isHovered={isHovered} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
