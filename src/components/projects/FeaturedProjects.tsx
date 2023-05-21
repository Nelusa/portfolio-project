import FeaturedProject from "./FeaturedProject";
import { Project } from "@/pages/projects/[slug]";

const projects: Project[] = [
  {
    name: "Project 1",
    description: "About Project 1",
    topic: "React",
    code: "https://github.com/Nelusa",
    slug: "project-1",
    image: "project1.jpg",
  },
  {
    name: "Project 2",
    description: "About Project 2",
    topic: "React",
    code: "https://github.com/Nelusa",
    slug: "project-2",
    image: "project2.jpg",
  },
  {
    name: "Project 3",
    description: "About Project 3",
    topic: "React",
    code: "https://github.com/Nelusa",
    slug: "project-3",
    image: "project3.jpg",
  },
  {
    name: "Project 4",
    description: "About Project 4",
    topic: "React",
    code: "https://github.com/Nelusa",
    slug: "project-4",
    image: "project4.jpg",
  },
];

const FeaturedProjects = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      {projects.map((project) => (
        <FeaturedProject project={project} key={project.name} />
      ))}
    </ul>
  );
};

export default FeaturedProjects;
