import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import Tech1 from "/public/tech-village/tech1.jpg";
import Tech2 from "/public/tech-village/tech2.jpg";
import Tech3 from "/public/tech-village/tech3.jpg";
import Tech4 from "/public/tech-village/tech4.jpg";
import Tech5 from "/public/tech-village/tech5.jpg";
import Tech6 from "/public/tech-village/tech6.jpg";
import Tech7 from "/public/tech-village/tech7.jpg";



const Village_carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0)
  const imagesRef = useRef([]);


  const handleHover = (index) => {
    setCurrentIndex(index);
    setActiveIndex(index);

  };

  const images = [
    Tech1,
    Tech2, Tech3,
    Tech4, Tech5, Tech6
    ];



  return (
    <div className="relative flex overflow-hidden md:h-[600px] bg-gray-900">
        <div className="flex flex-col justify-around w-1/2 h-full gap-12 md:gap-0 ">
        {images.map((_, index) => (
          <div
            key={index}
            className={` rounded-lg text-white flex flex-col items-center justify-center   group cursor-pointer `}
            onMouseEnter={() => handleHover(index)}
          >
<span className={`text-3xl font-semibold transition-transform transform ${activeIndex === index ? 'border-b-4 border-amber-400' : ''}`}>
              {[
                'BAOBAB COLLAB',
                'ECO-LIVING',
                'COMMUNITY CAFÉ',
                'CONFERENCE',
                'BAOBAB DESIGN LAB',
                'BAOBAB LIBRARY',
              ][index]}
            </span>          </div>
        ))}
      </div>
        <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden ">
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

          <div className="absolute inset-0 flex pt-10 items-start justify-center ">
                <span className="text-white text-base p-2 bg-gray-900 bg-opacity-50 backdrop-blur-lg">
                  {[
                    "Welcome to Baobabpad Co-working Lab, the beating heart of innovation at our tech village. Here, ideas transform into realities. We provide a dynamic environment where technology enthusiasts, emerging entrepreneurs, and digital pioneers co-create. With access to cutting-edge resources, Baobabpad offers a nurturing space for ideas to bloom. Dive into the pulsating rhythm of creativity and collaboration at Baobabpad - where Africa's digital future is being shaped, one idea at a time. Join us and be part of the revolution!",
                    "Embrace the ECO-LIVING lifestyle at our tech village. Our commitment to sustainability resonates in every corner, inspiring us to craft solutions that not only propel us into the digital future, but also protect our planet. We champion sustainable practices, from energy-efficient buildings and waste reduction strategies to promoting clean tech innovations. ECO-LIVING is more than a concept here; it's our way of life, seamlessly blending technology and environmental stewardship. Discover how we harmonize digital advancement and ecological responsibility at ECO-LIVING.",
                    "Step into the Community Cafe, the heart of our tech village. This isn't just a place to grab a coffee - it's a space where ideas are exchanged, connections are forged, and community spirit thrives. With the aroma of freshly brewed coffee filling the air, the Community Cafe nurtures both your intellect and your senses. Whether you're brainstorming your next big idea, collaborating with fellow innovators, or just soaking in the vibrant atmosphere, the Community Cafe is your haven of creativity, and connection.",
                    "Welcome to the Baobab Conference, the epicenter of dialogue and discovery at our tech village. This venue hosts a plethora of events, from illuminating tech talks to transformative workshops, bringing together thought-leaders, innovators, and changemakers from across the continent and beyond. The Baobab Conference is more than a meeting place; it's a dynamic space where African tech finds its voice, diverse ideas merge, and solutions for a digital future are co-created. Engage, learn, inspire - this is the Baobab Conference.",
                    "The Baobab Design Lab is the creative core of our tech village. Here, designers, developers, and artists intersect to bring digital solutions to life. Armed with advanced tools and technology, the Baobab Design Lab is an incubator of ideas and a testament to the transformative power of design. From prototyping revolutionary products to crafting visually stunning interfaces, our Design Lab is where aesthetics meet functionality, and where digital dreams materialize. Dive into the fusion of technology and artistry at the Baobab Design Lab.",
                    "At the Baobab Library, knowledge is at your fingertips. This isn't just a repository of books - it's a gateway to a world of insights, fueling our tech village's thirst for knowledge. Packed with an extensive range of resources from tech manuals to digital journals, the Baobab Library is the ultimate stop for learning and discovery. Amidst the quiet hush, you'll find innovators deep in research, pioneers charting new courses, and explorers seeking inspiration. The Baobab Library - where the journey to innovation begins with a page turn.",
                  ][index]}
                </span>
              </div>
        </Transition>

        
      ))}  

   
        </div>
     


    </div>
  );
};

export default Village_carousel;
