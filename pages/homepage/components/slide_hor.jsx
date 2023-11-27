import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import TechVillage from "../../../public/assets/tech_village_hero.jpg";
import Tech from "../../../public/assets/tech2.jpg";
import Capital from "../../../public/assets/shares.jpg";
import Girls from "../../../public/assets/black.png";

const Slide = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className="w-full h-max bg-gray-100 flex flex-col">
      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] ease-in duration-500 relative overflow-hidden"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className="text-lg lg:text-6xl text-white">
            Virtual Tech Village
          </h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[200px] h-[200px]">
          <div
            className="w-full text-sm lg:text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered1 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max text-xl ease-in-out duration-500 text-justify">
              Baobabpad is a Virtual Technology Village, that offers a dynamic
              and innovative platform dedicated to onboarding the top African
              tech talent and providing business partnership for clients to
              reach new heights in the global technology arena.{" "}
            </p>
          </div>
        </div>

        <Image
          src={TechVillage}
          alt="Tech Village"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered1 ? "brightness-30 transition-delay-500" : ""
          }`}
        />
      </div>

      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] ease-in duration-500 relative overflow-hidden"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className="text-lg lg:text-6xl text-white">Our Business Model</h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[200px] h-[200px]">
          <div
            className="w-full text-sm lg:text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered2 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max ease-in-out duration-500 text-xl text-justify">
              Baobabpad's business model offers full-time contracts and
              competitive monthly salaries to top tech talent exclusively from
              Africa. The members are incentivized with access to tokenized
              share options, which represent 25% of Baobabpad. Tokenized share
              options typically mean that ownership in the company is
              represented digitally using digitized assets technology.
            </p>
          </div>
        </div>

        <Image
          src={Tech}
          alt="Tech"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered2 ? "brightness-30 transition-delay-500" : ""
          }`}
        />
      </div>

      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] ease-in duration-500 relative overflow-hidden"
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className="text-lg lg:text-6xl text-white">Girls in Tech</h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[200px] h-[200px]">
          <div
            className="w-full text-sm lg:text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered4 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max text-xl ease-in-out duration-500 text-justify">
              As part of driving social impact in Africa, Baobabpad is launching
              a Virtual Internship Program for Girls exclusively from Africa.
              This program is tailored specifically for graduate girls and new
              women professionals in technology from Africa, emphasizing both
              skill development and empowerment in the technology where they are
              historically underrepresented.
            </p>
          </div>
        </div>

        <Image
          src={Girls}
          alt="Tech Village"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered1 ? "brightness-30 transition-delay-500" : ""
          }`}
        />
      </div>

      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] ease-in duration-500 relative overflow-hidden"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className="text-lg lg:text-6xl text-white">
            Tokenized Share Options
          </h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[200px] h-[200px]">
          <div
            className="w-full text-sm lg:text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered3 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max ease-in-out duration-500 text-xl text-justify">
              Baobabpad provides vested tokenized options to all tech talent on
              the platform. The incentive provides access to share ownership of
              Baobabpad representing 25% of the company
            </p>
          </div>
        </div>

        <Image
          src={Capital}
          alt="capital"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered3 ? "brightness-30 transition-delay-500" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Slide;
