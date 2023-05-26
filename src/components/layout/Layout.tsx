import React, { ReactNode } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        className="flex flex-col flex-grow justify-center items-center px-8"
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
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
