import Layout from "@/components/layout/Layout";
import React from "react";
import Timeline from "@/components/experience/Timeline";

const ExperiencePage: React.FC = () => {
  return (
    <Layout>
      <h1>Experience</h1>
      <Timeline />
    </Layout>
  );
};

export default ExperiencePage;
