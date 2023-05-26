import React from "react";
import SkillLayout from "./SkillLayout";
import { skills } from "../../data/skills";

const skillCategories = [
  { category: "Development" },
  { category: "Design" },
  { category: "Project Management" },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12 gap-20 flex flex-col">
      {skillCategories.map((category) => (
        <div key={category.category}>
          <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {skills
              .filter((skill) => skill.category === category.category)
              .map((skill) => (
                <SkillLayout
                  key={skill.name}
                  headingText={skill.name}
                  imageSrc={skill.icon}
                  imageAlt={skill.name}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
