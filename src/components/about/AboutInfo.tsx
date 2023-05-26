import Image from "next/image";

const AboutInfo: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden py-6 sm:py-8">
      <div className="mx-auto px-2 text-justify">
        <div className="mx-auto lg:mx-0 max-w-5xl xl:max-w-6xl xl:mx-auto">
          <p className="text-lg font-semibold leading-8 tracking-tight text-tertiary">
            My name is Neluša and I am a sloth lover...
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            But what about my journey?
          </h2>
          <p className="mt-6 text-xl leading-8 ">
            💥 IT field is a huge passion for me, especially the areas of web
            development and UX/UI design, which I have been involved in for some
            time in the form of self-education… and where I have finally managed
            to get through on a work level, specifically as a Junior Frontend
            Developer at OKsystem, which supplies software to private companies
            and public administrations.
          </p>
          <div className="mt-8 lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-[60%] xl:w-2/3">
              <p>
                💥 In the spring of 2022, I graduated from the Digital Academy:
                Web, i.e. an almost 4-month intensive frontend web development
                course via Czechitas. According to Academy, I have learned not
                only to work with various technologies (HTML, CSS, JavaScript,
                React, Git, Webpack, etc.), but also to work in a team and under
                the guidance of a mentor. This collaboration resulted in a
                project called Peak to Geek 🦥
              </p>
              <p className="mt-8">
                💥 I have also completed an Introduction to UX course and
                subsequently a long-term UX course, also via Czechitas, and a
                part of the UX course via Google on the Coursera platform.
              </p>
            </div>
            <div className="lg:w-1/3 xl:pl-8 xl:ml-5 2xl:ml-10">
              <figure className="border-l border-primary pl-6 border-dotted">
                <div className="mt-8 flex gap-x-4 h-72 2xl:h-[22rem] aspect-[1/1]">
                  <Image
                    width={600}
                    height={600}
                    src="/images/nelusa.jpg"
                    alt=""
                    className="mt-1 w-auto h-auto flex-none rounded-md bg-gray-50"
                  />
                </div>
              </figure>
            </div>
          </div>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-primary_orange">
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
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
