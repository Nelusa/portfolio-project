import Link from "next/link";
import React from "react";
import Hero from "./Hero";
import ButtonGlow from "../ui/ButtonGlow";
import { navigation } from "../layout/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <div id="home" className="w-full text-center mt-20">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-400">
              Frontend Web Developer
            </p>
            <Hero />
            <p className="py-8 text-gray-300 sm:max-w-[70%] mx-auto mt-10">
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
            <div className="mt-10">
              <ButtonGlow type="button">
                <Link href="/contact">
                  Let&#39;s do something cool together!
                </Link>
              </ButtonGlow>
              <div className="flex items-center justify-center max-w-[330px] m-auto py-4 mt-7 gap-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-200 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <div className="bg-gray-700 rounded-full shadow-md shadow-black/80 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <item.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
