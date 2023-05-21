import Link from "next/link";
import React, { useState } from "react";
import HamburgerMenu from "../ui/HamburgerMenu";
import { useRouter } from "next/router";

export const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav>
      <div className="md:hidden">
        <HamburgerMenu currentPath={currentPath} />
      </div>
      <ul className="hidden md:flex md:justify-between text-xl gap-2">
        {links.map(({ href, label }) => {
          return (
            <li key={`${href}${label}`}>
              {/* <span
                className={`${
                  currentPath === href
                    ? "before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block text-black"
                    : ""
                }`}
              > */}

              <Link
                href={href}
                className={`rounded-md p-3 ${
                  currentPath === href
                    ? "bg-black relative font-bold cursor-auto"
                    : "hover:bg-gray-800"
                }`}
              >
                {label}
              </Link>
              {/* </span> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
