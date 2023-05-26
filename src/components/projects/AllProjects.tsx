import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/pages/projects/[slug]";

interface AllProjectsProps {
  projects: Project[];
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects }) => {
  const projectCategories = [
    { heading: "More complicated", type: "BIG" },
    { heading: "Smaller", type: "SMALL" },
  ];

  return (
    <section className="bg-gray-900 py-12 gap-20 flex flex-col">
      {projectCategories.map((category) => {
        const filteredProjects = projects.filter(
          (project) => project.type === category.type
        );

        return (
          <div key={category.heading}>
            <h2 className="text-3xl font-bold mb-8 ">{category.heading}</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {filteredProjects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.name}
                  disabled={category.type === "SMALL"}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default AllProjects;
