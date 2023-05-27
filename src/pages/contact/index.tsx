import ContactForm from "@/components/contact/ContactForm";
import Layout from "@/components/layout/Layout";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
