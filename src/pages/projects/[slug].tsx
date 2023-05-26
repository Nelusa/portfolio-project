import { GetStaticPaths, GetStaticProps } from "next";
import { getProjectData, getProjectsFiles } from "../../helpers/projects-util";
import Head from "next/head";
import { Fragment } from "react";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/layout/Layout";
import ProjectDetail from "@/components/projects/ProjectDetail";

export interface Technology {
  name: string;
  icon: string;
}

export interface Stats {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  description2: string;
  topic: string;
  code: string;
  slug: string;
  image: string;
  technologies: Technology[];
  excerpt: string;
  role: string;
  plan: string;
  type: string;
  stats: Stats[];
}

interface ProjectDetailPageProps {
  project: Project;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project }) => {
  return (
    <Fragment>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content={`${project.description}`} />
      </Head>
      <Layout>
        <ProjectDetail project={project} />
      </Layout>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params as Params;

  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 3000,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const projectFilenames = getProjectsFiles();

  const slugs = projectFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

export default ProjectDetailPage;
