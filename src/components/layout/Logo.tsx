import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <motion.div
        whileHover={{
          x: 15,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <Image
          src="/logo2.svg"
          width={0}
          height={0}
          alt="Logo"
          className="w-32 aspect-auto"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
