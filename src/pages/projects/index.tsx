import Layout from "@/components/layout/Layout";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import React from "react";

const AllProjectsPage = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <FeaturedProjects />
    </Layout>
  );
};

export default AllProjectsPage;
