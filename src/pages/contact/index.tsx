import ContactFormOwnHook from "@/components/contact/ContactFormOwnHook";
import Layout from "@/components/layout/Layout";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <ContactFormOwnHook />
    </Layout>
  );
};

export default ContactPage;
