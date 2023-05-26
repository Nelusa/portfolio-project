import React from "react";
import Image from "next/image";
import { Project } from "@/pages/projects/[slug]";
import Card from "../ui/Card";

interface ProjectCardProps {
  project: Project;
  disabled: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, disabled }) => {
  const imagePath = `/images/projects/${project.image}`;
  const linkPath = `/projects/${project.slug}`;

  return (
    <Card
      linkPath={disabled ? undefined : linkPath}
      key={project.id}
      disabled={disabled}
    >
      <Image
        width={320}
        height={320}
        className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
        src={imagePath}
        alt=""
      />
      <h3 className="mt-6 text-base font-bold text-gray-300 tracking-wider uppercase">
        {project.name}
      </h3>
      <dl className="mt-1 flex flex-grow flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-sm text-gray-500">{project.excerpt}</dd>
        <dt className="sr-only">Topic</dt>
        <dd className="mt-3">
          <span className="inline-flex items-center rounded-md bg-tertiary px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-800/20">
            {project.topic}
          </span>
        </dd>
      </dl>
    </Card>
  );
};

export default ProjectCard;
