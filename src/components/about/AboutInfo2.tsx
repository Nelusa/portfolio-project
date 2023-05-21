import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const AboutInfo2 = () => {
  return (
    <div className="relative isolate overflow-hidden py-6 sm:py-8">
      {/* <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      > */}
      {/* <div
        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style={{
          clipPath:
            "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
        }}
      /> */}
      {/* </div> */}
      <div className="mx-auto px-2 text-justify">
        <div className="mx-auto lg:mx-0 max-w-4xl">
          <p className="text-lg font-semibold leading-8 tracking-tight text-tertiary">
            My name is Neluša and I am a sloth lover...
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            But what about my journey?
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            💥 IT field is a huge passion for me, especially the areas of web
            development and UX/UI design, which I have been involved in for some
            time in the form of self-education… and where I have finally managed
            to get through on a work level, specifically as a Junior Frontend
            Developer at OKsystem, which supplies software to private companies
            and public administrations.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            {/* <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg> */}
            <figure className="border-l border-primary pl-6 border-dotted">
              {/* <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-500">
                <p>
                  “Vel ultricies morbi odio facilisi ultrices accumsan donec
                  lacus purus. Lectus nibh ullamcorper ac dictum justo in
                  euismod. Risus aenean ut elit massa. In amet aliquet eget
                  cras. Sem volutpat enim tristique.”
                </p>
              </blockquote> */}
              <div className="mt-8 flex gap-x-4 h-72">
                <Image
                  width={500}
                  height={500}
                  src="/images/nelusa.jpg"
                  alt=""
                  className="mt-1 w-auto h-auto flex-none rounded-md bg-gray-50"
                />
                {/* <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-200">
                    Brenna Goyette
                  </div>
                  <div className="text-gray-400">@brenna</div>
                </div> */}
              </div>
            </figure>
          </div>
          <div className=" text-base leading-7 text-gray-300 lg:col-span-7">
            <p>
              💥 In the spring of 2022, I graduated from the Digital Academy:
              Web, i.e. an almost 4-month intensive frontend web development
              course via Czechitas. According to Academy, I have learned not
              only to work with various technologies (HTML, CSS, JavaScript,
              React, Git, Webpack, etc.), but also to work in a team and under
              the guidance of a mentor. This collaboration resulted in a project
              called Peak to Geek 🦥
            </p>
            <p className="mt-8">
              💥 I have also completed an Introduction to UX course and
              subsequently a long-term UX course, also via Czechitas, and a part
              of the UX course via Google on the Coursera platform.
            </p>
            {/*  <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-200">
                    Push to deploy.
                  </strong>{" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-200">
                    SSL certificates.
                  </strong>{" "}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-200">
                    Database backups.
                  </strong>{" "}
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </span>
              </li>
            </ul> */}
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-200">
              Not only pure IT
            </h2>
            <p className="mt-8">
              💥 In addition to FE development, I work in the Czechitas R&D team
              with a focus on IT education, where I help with market analysis,
              preparation and output quality of teaching and organizational
              materials. During this, I am constantly learning how the technical
              background of educational events works, I meet a lot of inspiring
              and interesting people from the IT world, from whom I can learn a
              lot of things and then apply them in practice - both in education
              itself and in IT and their combination. #czechitas #chciseucIT
              #goforIT Website ➡️ http://www.czechitas.cz/
            </p>
            {/*  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-200">
              No server? No problem.
            </h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo2;
