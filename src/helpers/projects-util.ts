import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface ProjectData {
  slug: string;
  [key: string]: any;
  content: string;
}

export function getProjectsFiles(): string[] {
  return fs.readdirSync(path.join(process.cwd(), "src", "projects-content"));
}

export function getProjectData(projectIdentifier: string): ProjectData {
  const projectSlug = projectIdentifier.replace(/\.md$/, ""); //odstraní přípomu MD a nahradí ji prázdným stringem
  const filePath = path.join(
    process.cwd(),
    "src",
    "projects-content",
    `${projectSlug}.md`
  ); //celá cesta k souboru
  const fileContent = fs.readFileSync(filePath, "utf-8"); //čtení obsahu ze získaného souboru (pro jeden soubor)
  const { data, content } = matter(fileContent); //vrátí nám objekt se dvěma vlastnostmi - data (JS objekt) a content (string)

  const projectData: ProjectData = {
    slug: projectSlug,
    ...data, //metadata z MD souboru
    content: content,
  };

  return projectData;
}

// projde všechny MD soubory ve složce "content" a získá jejich metadata
export function getAllProjects(): ProjectData[] {
  const projectFiles = getProjectsFiles();

  //získáme data pro konkrétní příspěvky
  const allProjects = projectFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });

  //aby se poslední příspěvky zobrazovaly jako poslední
  const sortedProjects = allProjects.sort((projectA, projectB) =>
    projectA.date > projectB.date ? -1 : 1
  );

  return sortedProjects;
}

export function getFeaturedProjects(): ProjectData[] {
  const allProjects = getAllProjects();

  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  return featuredProjects;
}
