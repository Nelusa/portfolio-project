import Layout from "@/components/layout/Layout";
import AllProjects from "@/components/projects/AllProjects";
import { getAllProjects, getProjectData } from "@/helpers/projects-util";
import { GetStaticProps } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import { Project } from "./[slug]";

interface AllProjectsPageProps {
  projects: Project[];
}

const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ projects }) => {
  return (
    <Layout>
      <h1>Projects</h1>
      <AllProjects projects={projects} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = getAllProjects();

  return {
    props: {
      projects: projects,
    },
    revalidate: 600,
  };
};

export default AllProjectsPage;
