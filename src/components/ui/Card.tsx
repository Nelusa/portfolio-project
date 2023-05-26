import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface CardProps {
  children: React.ReactNode;
  linkPath?: string;
  disabled?: boolean;
  tooltipText?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  linkPath,
  disabled,
  tooltipText,
}) => {
  const cardContent = (
    <div className="flex flex-1 flex-col p-8">{children}</div>
  );

  if (disabled) {
    return (
      <>
        <div className="relative opacity-100">
          <div className="absolute -top-2 -left-2 w-7 text-red-500 z-20">
            <ExclamationCircleIcon />
          </div>
          <motion.li
            className="col-span-1 flex flex-col divide-y divide-gray-600 rounded-lg bg-gray-800 text-center shadow-md opacity-50 cursor-not-allowed"
            initial={{
              opacity: 0.4,
            }}
            whileHover={{
              opacity: 0.4,
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <Tooltip
              text={
                tooltipText ||
                "Not yet finished - but you have something to look forward to!"
              }
            >
              {cardContent}
            </Tooltip>
          </motion.li>
        </div>
      </>
    );
  }

  if (linkPath) {
    return (
      <motion.li
        className="col-span-1 flex flex-col divide-y divide-gray-600 rounded-lg bg-gray-800 text-center shadow-md"
        initial={{
          opacity: 0.6,
        }}
        whileHover={{
          opacity: 1,
          scale: 1.05,
          transition: {
            duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <Link href={linkPath}>{cardContent}</Link>
      </motion.li>
    );
  }

  return (
    <>
      <motion.li
        className="col-span-1 flex flex-col divide-y divide-gray-600 rounded-lg bg-gray-800 text-center shadow-md"
        initial={{
          opacity: 0.4,
        }}
        whileHover={{
          opacity: 1,
          scale: 1.05,
          transition: {
            duration: 0.3,
          },
        }}
      >
        {cardContent}
      </motion.li>
    </>
  );
};

export default Card;
