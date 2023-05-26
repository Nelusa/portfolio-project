import { BugAntIcon, ClockIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, HandRaisedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Project, Technology } from "@/pages/projects/[slug]";
import SkillLayout from "../skills/SkillLayout";
import Link from "next/link";
import ButtonGlow from "../ui/ButtonGlow";

const difficulties = [
  {
    name: "Lack of previous experience.",
    description:
      "As junior developers, we had limited experience working on real-world project. This made it challenging to understand the best practices, design patterns, and efficient coding techniques required for building a robust and scalable frontend.",
    icon: HandRaisedIcon,
  },
  {
    name: "Limited knowledge of web technologies.",
    description:
      "In the Digital Academy, we had only 'scratched the surface' of web technologies.  The vastness of some more advanced technologies and complex view of web architecture was overwhelming when we're just starting out.",
    icon: AcademicCapIcon,
  },
  {
    name: "Debugging and problem-solving.",
    description:
      "Identifying and fixing bugs in our code was an essential part of the development process. However, as a junior developers, we faced some difficulties in debugging complex issues or finding efficient solutions to problems we encountered along the way (especially really shortly before submitting the project).",
    icon: BugAntIcon,
  },
  {
    name: "Time management and prioritization.",
    description:
      "Estimating the time required for specific tasks and managing our workload was really challenging, especially when working on a project with a teammate with a limited time of the Academy. Balancing our own learning curve, deadline, and the collaborative nature of the project was such a juggling act.",
    icon: ClockIcon,
  },
];

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="relative isolate">
      <div className="px-6 pt-3 lg:px-8 flex flex-col">
        <div className="flex justify-end ">
          <Link href="/projects">
            <ButtonGlow type="button">Back to all projects</ButtonGlow>
          </Link>
        </div>
        <div className="mx-auto max-w-2xl pt-12 text-center sm:pt-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
            {project.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {project.excerpt}
          </p>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-tertiary sm:text-4xl mb-5">
          Project description
        </h2>
        <div className="mx-auto lg:mx-0">
          <div className="grid  grid-cols-1 gap-y-8 gap-x-12 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2 text-justify">
            <div>
              <p>{project.description}</p>
            </div>
            <div>
              <p>{project.description2}</p>
            </div>{" "}
          </div>
        </div>{" "}
        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-14 lg:grid-cols-4">
          {project.stats &&
            project.stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
              >
                <dt className="text-base leading-7 text-gray-300">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
        </dl>
      </div>{" "}
      <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-tertiary sm:text-4xl">
          Role in the project
        </h2>
        <p className="mt-8">{project.role}</p>
      </div>
      <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          width={2894}
          height={1300}
          src={`/images/projects/${project.image}`}
          alt=""
          className="aspect-[9/4] w-full object-cover rounded-3xl"
        />
      </div>
      {/* PROJECT PLAN AND DESIGN */}
      <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-tertiary sm:text-4xl">
            Project plan and design
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{project.plan}</p>
        </div>
      </div>
      {/* TECHNOLOGIES */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-tertiary sm:text-4xl">
            Technologies
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
            neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
          </p> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
        >
          {project.technologies.map((technology: Technology) => {
            return (
              <SkillLayout
                key={technology.name}
                headingText={technology.name}
                imageSrc={technology.icon}
                imageAlt={technology.name}
                isAnimated={false}
              />
            );
          })}
        </ul>
      </div>
      {/* DIFFICULTIES */}
      <div className="relative isolate -z-10 mt-16 sm:mt-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-16 xl:gap-x-20 xl:px-12">
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Difficulties
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                In the process of building this project, we faced some
                challenges, which we managed to overcome (successfully!) 💪🏼
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white md:grid-cols-2"
              >
                {difficulties.map((value) => (
                  <div key={value.name} className="relative pl-9 mb-5">
                    <dt className="inline font-semibold text-tertiary_orange/80 tracking-wider">
                      <value.icon
                        className="absolute left-1 top-1 h-5 w-5 text-primary_orange"
                        aria-hidden="true"
                      />
                      {value.name}
                    </dt>{" "}
                    <dd className="inline text-gray-300 mb-10 text-justify">
                      {value.description}
                    </dd>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Link href="/projects">
          <ButtonGlow type="button">Back to all projects</ButtonGlow>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
