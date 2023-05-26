import Link from "next/link";
import React from "react";
import HamburgerMenu from "../ui/HamburgerMenu";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  // { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav>
      <div className="lg:hidden">
        <HamburgerMenu currentPath={currentPath} />
      </div>
      <ul className="hidden lg:flex md:justify-between md:items-center text-xl gap-2">
        {links.map(({ href, label }) => {
          return (
            <motion.li
              key={`${href}${label}`}
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className={`rounded-lg flex items-center p-[2px] ${
                  currentPath === href || currentPath === `${href}/[slug]`
                    ? "bg-gradient-to-r from-primary/70 to-primary_orange/70"
                    : "hover:bg-gray-800"
                }`}
              >
                <Link
                  href={href}
                  className={`rounded-md px-3 py-1 ${
                    currentPath === href || currentPath === `${href}/[slug]`
                      ? "bg-gray-900 relative font-bold cursor-auto "
                      : "hover:bg-gray-800"
                  }`}
                >
                  {label}
                </Link>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </nav>
    /*  <nav>
      <div className="md:hidden">
        <HamburgerMenu currentPath={currentPath} />
      </div>
      <ul className="hidden md:flex md:justify-between text-xl gap-2">
        {links.map(({ href, label }) => {
          return (
            <li key={`${href}${label}`}>
              
              <Link
                href={href}
                className={`rounded-md p-3 ${
                  currentPath === href || currentPath === `${href}/[slug]`
                    ? "bg-black relative font-bold cursor-auto "
                    : "hover:bg-gray-800"
                }`}
              >
                {label}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </nav> */
  );
};

export default Navigation;
