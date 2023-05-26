import React from "react";

interface Experience {
  time: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const experience: Experience[] = [
  {
    time: "Now",
    title: "Junior Frontend Developer",
    company: "OKsystem, a.s.",
    location: "Prague",
    date: "10/2022 - Present",
    description: [
      "Collaborated on the development of web applications using Next.js, Tailwind CSS, and TypeScript.",
      "Implemented responsive designs and optimized performance for various screen sizes and devices.",
      "Worked with a team of developers to build a web application for a client using React, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    time: "Now",
    title: "R&D Assistant",
    company: "Czechitas",
    location: "Prague",
    date: "10/2021 - Present",
    description: [
      "Collaboration on the creation of educational online and offline content",
      "Updating of teaching and learning materials",
      "Support in the creation and revision of product materials and documentation",
      "Assist with presentations and analyses",
      "Cooperation on Czechitas strategic projects.",
    ],
  },
  {
    time: "September 2022",
    title: "IT Talent Sourcer",
    company: "GoodCall, a.s.",
    location: "Prague",
    date: "11/2021 - 09/2022",
    description: [
      "Analyzing, mapping and identifying talent",
      "Sourcing, headhunting, and creatively engaging the market",
      "Using truly innovative tools such as social, mobile, and video to capture the attention of the passive talent pool",
      "Pre-screening and matching candidates to the most suitable opportunities",
      "Conducting modern online & offline sourcing at conferences, events, meet-ups",
    ],
  },
  {
    time: "June 2022",
    title: "Web Development Student",
    company: "Czechitas",
    location: "Prague",
    date: "03/2021 - 06/2022",
    description: [
      "Able to create content and style design of a website using HTML and CSS",
      "Proficient in the basics of programming in JavaScript",
      "Able to create simple web apps in Vanilla JavaScript",
      "Able to obtain data from a server by making an API call and using this data in a final program",
      "Able to transfer a practical problem into the design of a web app on a basic level",
      "Understanding the principles of a component design of apps and is proficient in the basics of the React library",
      "Using the Git and GitHub version control systems",
      "Understanding user interface design (basics of UX/UI)",
    ],
  },
];

const Timeline: React.FC = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 2xl:mx-auto">
      {experience.map((job, index) => {
        return (
          <li className="mb-10 ml-4 2xl:max-w-7xl " key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
              {job.time}
            </time>

            <div className="bg-gray-800 rounded-lg p-6 mt-3">
              <h3 className="text-2xl font-semibold text-primary_orange mb-2 mt-0">
                {job.title}
              </h3>
              <p className="text-gray-500">
                {job.company} | {job.location} | {job.date}
              </p>
              <ul className="mt-4 text-gray-300 sm:text-base ">
                {job.description.map((point, index) => {
                  return (
                    <li className="flex items-start mt-3 " key={index}>
                      <span className="inline-block mr-3 text-primary_orange mt-1.5">
                        <div
                          className="w-4 h-4 rounded-full bg-gradient-to-r from-tertiary/70 to-secondary_orange/70 "
                          style={{
                            filter:
                              "drop-shadow(0px 0px 2px rgba(245, 158, 11, 0.8))",
                          }}
                        />
                      </span>
                      <p className="lg:text-lg ">{point}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
