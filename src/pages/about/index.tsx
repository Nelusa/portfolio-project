import AboutInfo from "@/components/about/AboutInfo";
import Arrow from "@/components/about/Arrow";
import Layout from "@/components/layout/Layout";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <h1>About</h1>
      <div className="flex gap-10 mx-auto">
        <Arrow />
        <AboutInfo />
      </div>
    </Layout>
  );
};

export default AboutPage;
