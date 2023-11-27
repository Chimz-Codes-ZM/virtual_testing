import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";


const Slide = ({
  title1,
  title2,
  title3,
  title4,
  content1,
  content2,
  content3,
  content4,
  img1,
  img2,
  img3,
  img4,
  page
}) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className="w-full h-max bg-gray-100 flex flex-col md:flex-row ">
      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px]  md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden group"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className={`text-lg ${page === "who" ? "lg:text-3xl" : "lg:text-4xl"} text-white`}>{title1}</h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300">
          <div
            className="w-full text-sm lg:text-base md:w-full glass p-3 h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered1 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max ease-in-out duration-500 text-justify ">
              {content1}{" "}
            </p>{" "}
          </div>
        </div>

        <Image
          src={img1}
          alt="Tech Village"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered1 ? "brightness-[.3] " : ""
          }`}
        />
      </div>

      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px] group md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className={`text-lg ${page === "who" ? "lg:text-3xl" : "lg:text-4xl"} text-white`}>{title2}</h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300">
          <div
            className="w-full text-sm lg:text-base md:w-full glass h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered2 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max ease-in-out duration-500 text-justify">
             {content2}
            </p>
          </div>
        </div>

        <Image
          src={img2}
          alt="Tech"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered2 ? "brightness-[.3] transition-delay-500" : ""
          }`}
        />
      </div>

      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px] group md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className={`text-lg ${page === "who" ? "lg:text-3xl" : "lg:text-4xl"} text-white`}>{title3}</h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300">
          <div
            className="w-full text-sm lg:text-base md:w-full glass p-3 h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered3 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max ease-in-out duration-500 text-justify">
              {content3}
            </p>
          </div>
        </div>

        <Image
          src={img3}
          alt="capital"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered3 ? "brightness-[.3] transition-delay-500" : ""
          }`}
        />
      </div>

      <div
        className="w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px] group md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden"
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <div className="flex gap-4 z-20 items-center truncate w-full">
          <div className="h-10 w-1 lg:h-20 lg:w-3 background"></div>
          <h1 className={`text-lg ${page === "who" ? "lg:text-3xl" : "lg:text-4xl"} text-white`}>{title4}</h1>
        </div>

        <div className="w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300">
          <div
            className="w-full text-sm lg:text-base md:w-full glass  h-max p-3 flex flex-col gap-3"
            style={{ visibility: isHovered4 ? "visible" : "hidden" }}
          >
            <p className="w-full h-max ease-in-out duration-500 text-justify">
              {content4}
            </p>
          </div>
        </div>

        <Image
          src={img4}
          alt="values"
          layout="fill"
          objectFit="cover"
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${
            isHovered4 ? "brightness-[.3] transition-delay-500" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Slide;
