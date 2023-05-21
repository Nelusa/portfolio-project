import AboutInfo from "@/components/about/AboutInfo";
import AboutInfo2 from "@/components/about/AboutInfo2";
import Arrow from "@/components/about/Arrow";
import Layout from "@/components/layout/Layout";
import React from "react";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      {/* <AboutInfo /> */}
      <div className="flex gap-10">
        <Arrow />
        <AboutInfo2 />
      </div>
    </Layout>
  );
};

export default AboutPage;
