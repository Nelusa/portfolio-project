import React from "react";

const Work: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Junior Frontend Developer
            </h3>
            <p className="text-gray-500">
              OKsystem, a.s. | Prague | 10/2022 - Present
            </p>
            <ul className="mt-4 text-gray-300">
              <li className="flex items-start ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v5a1 1 0 102 0V7zM9 14a1 1 0 012 0v1a1 1 0 11-2 0v-1zm1-9a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Collaborated on the development of web applications using
                Next.js, Tailwind CSS, and TypeScript.
              </li>
              <li className="flex items-start mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-2V3a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-.293-.707l-5-5A1 1 0 009 3H4a1 1 0 00-1 1z"
                    clipRule="evenodd"
                  />
                </svg>
                Implemented responsive designs and optimized performance for
                various screen sizes and devices.
              </li>
              <li className="flex items-start mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v5a1 1 0 102 0V7zM9 14a1 1 0 012 0v1a1 1 0 11-2 0v-1zm1-9a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Collaborated with cross-functional teams to deliver high-quality
                software solutions.
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Web Development Intern
            </h3>
            <p className="text-gray-600">
              Company Name | City, Country | Month Year - Month Year
            </p>
            <ul className="mt-4 ">
              <li className="flex items-start text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v5a1 1 0 102 0V7zM9 14a1 1 0 012 0v1a1 1 0 11-2 0v-1zm1-9a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Assisted in the development of front-end components using HTML,
                CSS, and JavaScript.
              </li>
              <li className="flex items-start text-gray-700 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-2V3a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-.293-.707l-5-5A1 1 0 009 3H4a1 1 0 00-1 1z"
                    clipRule="evenodd"
                  />
                </svg>
                Assisted in testing and debugging web applications to ensure
                functionality and performance.
              </li>
              <li className="flex items-start text-gray-700 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v5a1 1 0 102 0V7zM9 14a1 1 0 012 0v1a1 1 0 11-2 0v-1zm1-9a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Assisted in the implementation of responsive designs and user
                interface enhancements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
