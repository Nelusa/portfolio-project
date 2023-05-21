import React, { ReactNode } from "react";
import Header from "./Header";
import HamburgerMenu from "../ui/HamburgerMenu";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <motion.main
        className={`flex min-h-screen flex-col px-8 mt-8`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
