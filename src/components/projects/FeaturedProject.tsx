"use client";

import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/pages/projects/[slug]";
import Link from "next/link";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  const imagePath = `/images/projects/${project.image}`;
  const linkPath = `/projects/${project.slug}`;

  return (
    <motion.li
      key={project.code}
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
      <Link href={linkPath}>
        <div className="flex flex-1 flex-col p-8">
          <Image
            width={320}
            height={320}
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            src={imagePath}
            alt=""
          />
          <h3 className="mt-6 text-base font-bold text-gray-300 tracking-wider	uppercase">
            {project.name}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{project.description}</dd>
            <dt className="sr-only">Topic</dt>
            <dd className="mt-3">
              <span className="inline-flex items-center rounded-md bg-tertiary px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-800/20">
                {project.topic}
              </span>
            </dd>
          </dl>
        </div>
        {/*    <div>
          <div className="-mt-px flex divide-x divide-gray-600">
            <div className="flex w-0 flex-1">
              <a
                href={`${project.code}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm text-tertiary tracking-wider font-light"
              >
                <EnvelopeIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
                GitHub
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`${project.slug}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-2 text-sm text-tertiary tracking-wider font-light"
              >
                <LinkIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
                Page
              </a>
            </div>
          </div>
        </div>{" "} */}
      </Link>
    </motion.li>
  );
};

export default FeaturedProject;
