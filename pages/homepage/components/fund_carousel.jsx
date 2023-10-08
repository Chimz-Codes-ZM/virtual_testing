import React, { useState, useEffect, useRef } from "react";
import About from "../../../public/fund/Rectangle 3.webp";
import Mission from "../../../public/fund/Rectangle-2.webp";
import Vision from "../../../public/fund/Rectangle-5.webp";
import { Transition } from "@headlessui/react";
import Image from "next/image";

const Fund_carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const imagesRef = useRef([]);

  const handleHover = (index) => {
    setCurrentIndex(index);
    setActiveIndex(index);
  };

  const images = [About, Mission, Vision];

  return (
    <div className="relative flex flex-col md:flex-row overflow-hidden h-[500px] md:h-[600px] bg-gray-900">
      <div className="flex flex-row md:flex-col justify-around w-full md:w-1/4 h-[80px] md:h-full gap-4 md:gap-0  p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={` rounded-lg text-white flex flex-col items-center justify-center   group cursor-pointer `}
            onMouseEnter={() => handleHover(index)}
          >
            <span
              className={`text-base md:text-3xl font-semibold transition-transform transform ${
                activeIndex === index ? "border-b-4 border-amber-400" : ""
              }`}
            >
              {["ABOUT", "MISSION", "VISION"][index]}
            </span>{" "}
          </div>
        ))}
      </div>
      <div className="w-full md:w-3/4 h-full relative md:absolute md:right-0 md:top-0 overflow-hidden ">
        {images.map((imageUrl, index) => (
          <Transition
            key={index}
            show={index === currentIndex}
            enter="transition-opacity duration-500"
            enterFrom="opacity-10"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-10"
          >
            <div className=" w-full md:h-[600px] ">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                fill
                objectFit="cover"
                className=""
              />
            </div>

            <div className="absolute left-10 top-10 max-w-[450px] flex pt-10 items-start justify-center ">
              <span className="text-white text-xl p-2 bg-gray-900 bg-opacity-50 backdrop-blur-lg">
                {
                  [
                    "Baobab Climate Fund is an impact investment  fund that focuses on  harnessing climate change opportunities in Africa through investments in climate mitigation, climate adaptation, and carbon markets. Baobab Climate Fund goal is to generate both financial returns and measurable positive social and environmental impacts in Africa.",
                    "Baobab Climate Fund mission  is to accelerate sustainable and climate-resilience in Africa by investing in climate mitigation, adaptation, and carbon markets.",
                    "Our vision is to create a climate-resilient and gender inclusive Africa , which empowers women  in technology development and climate leadership.",
                  ][index]
                }
              </span>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Fund_carousel;
