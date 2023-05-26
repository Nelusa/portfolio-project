interface Skill {
  name: string;
  icon: string;
  category: "Development" | "Design" | "Project Management";
}

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: "/icons/html--icon.svg",
    category: "Development",
  },
  {
    name: "CSS",
    icon: "/icons/css--icon.svg",
    category: "Development",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript--icon.svg",
    category: "Development",
  },
  {
    name: "React.js",
    icon: "/icons/react--icon.svg",
    category: "Development",
  },
  {
    name: "Next.js",
    icon: " /icons/nextjs--icon.svg",
    category: "Development",
  },
  {
    name: "Git",
    icon: "/icons/git--icon.svg",
    category: "Development",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind--icon.svg",
    category: "Development",
  },
  {
    name: "Framer Motion",
    icon: "/icons/framer-motion--icon.svg",
    category: "Development",
  },
  {
    name: "SASS",
    icon: "/icons/sass--icon.svg",
    category: "Development",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript--icon.svg",
    category: "Development",
  },
  {
    name: "Canva",
    icon: "/icons/canva--icon.svg",
    category: "Design",
  },
  {
    name: "Figma",
    icon: "/icons/figma--icon.svg",
    category: "Design",
  },
  {
    name: "Miro",
    icon: "/icons/miro--icon.svg",
    category: "Project Management",
  },
  {
    name: "Asana",
    icon: "/icons/asana--icon.svg",
    category: "Project Management",
  },
];
