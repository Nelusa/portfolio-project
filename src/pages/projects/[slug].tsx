import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllProjects,
  getProjectData,
  getProjectsFiles,
} from "../../helpers/projects-util";
import Head from "next/head";
import { Fragment } from "react";
import { ParsedUrlQuery } from "querystring";

export interface Project {
  name: string;
  description: string;
  topic: string;
  code: string;
  slug: string;
  image: string;
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
      {/* <PostContent post={project} /> */}
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params as Params;

  const postData = getProjectData(slug); //to nám poskytne data pro požadovaný soubor

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //tady to dává smysl
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const postFilenames = getProjectsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false, // definování všech cest předem
    //fallback: true, //data budou načtena na požádání při každém navštívení stránky --> toto by fungovalo v případě, kdybychom měli tisíce příspěvků a nějaká část z nich by byla málo navštěvovaná
  };
};

export default ProjectDetailPage;
