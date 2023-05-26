import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import Layout from "../layout/Layout";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

/* const project = {
  name: "Project 4",
  description: "About Project 4",
  topic: "React",
  code: "https://github.com/Nelusa",
  slug: "project-4",
  image: "project4.jpg",
  content: "# XYZ",
}; */

interface ProjectDetailProps {
  project: {
    name: string;
    description: string;
    topic: string;
    code: string;
    slug: string;
    image: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const imagePath = `/images/projects/${project.image}`;

  const customRenderers = {
    //@ts-ignore
    img(image) {
      return (
        <Image
          src={`/images/projects/${image.src}`} //image.src přímo z React markdownu
          alt={image.alt} //image.alt přímo z React markdownu
          width={600}
          height={300}
        />
      );
    },
    //@ts-ignore
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here[1];

      console.log(language);
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <>
      <div>
        <h1>{project.name}</h1>
        <Image
          src={`/${project.image}`}
          alt={project.name}
          width={100}
          height={100}
        />
      </div>
      <div>
        {/*  <ReactMarkdown components={customRenderers}>
          {project.content}
        </ReactMarkdown> */}
      </div>
    </>
  );
};

export default ProjectDetail;
