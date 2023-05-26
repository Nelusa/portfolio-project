import React from "react";
import { AnimatePresence, Cycle, motion, useCycle } from "framer-motion";
import { links } from "../layout/Navigation";
import Link from "next/link";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1,
    },
  },
};

interface HamburgerMenuProps {
  currentPath: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ currentPath }) => {
  const [open, cycleOpen] = useCycle(false, true);

  const handleIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
    cycleOpen();
  };

  return (
    <>
      <div className="cursor-pointer">
        <Bars3Icon width={36} onClick={handleIconClick} />
      </div>
      <AnimatePresence>
        {open && (
          <div className="fixed left-0 top-0 w-full h-screen bg-black/50 z-10">
            <motion.aside
              className="fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-zinc-300 p-3 justify-center flex flex-col list-none"
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.2 },
              }}
            >
              <div className="absolute right-3 top-3 text-gray-800 cursor-pointer">
                <XCircleIcon
                  width={54}
                  onClick={handleIconClick}
                  fill="currentColor"
                />
              </div>
              <motion.div
                className="flex flex-col mx-10 gap-10"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ href, label }) => {
                  return (
                    <motion.li
                      key={`${href}${label}`}
                      className="ml-2 text-gray-900 font-extralight uppercase text-3xl"
                      whileHover={{
                        scale: 1.2,
                        fontWeight: "normal",
                        transition: { duration: 0.2 },
                        originX: 0,
                      }}
                      variants={itemVariants}
                    >
                      <span
                        className={`${
                          currentPath === href ||
                          currentPath === `${href}/[slug]`
                            ? "before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-primary/60 to-primary_orange/70 relative inline-block"
                            : ""
                        }`}
                      >
                        <Link
                          href={href}
                          className={`${
                            currentPath === href ||
                            currentPath === `${href}/[slug]`
                              ? "relative font-bold cursor-auto"
                              : ""
                          }`}
                        >
                          {label}
                        </Link>
                      </span>
                    </motion.li>
                  );
                })}
              </motion.div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
