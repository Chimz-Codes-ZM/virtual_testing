import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

import Tech1 from "/public/assets/talent_acquire.jpg";
import Tech2 from "/public/assets/support.jpg";
import Tech3 from "/public/assets/remote_teams.jpg";
import Tech4 from "/public/assets/tech_stack.jpg";
import Tech5 from "/public/assets/training.jpg";
import Tech6 from "/public/tech-village/tech6.jpg";
import Girls from "/public/assets/Girls_in_tech.jpg";



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
    Tech4, Tech5, Girls
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
                'Talent Acquisition',
                'Software Development Support',
                'DevOps Remote Teams',
                'Techstack Collab',
                'Training & Development',
                'Virtual Internship Program',
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
                    "The Baobabpad Virtual Village is a dedicated platform to finding and recruiting top talent in the technology sector, exclusively from Africa. Baobabpad understands the painstaking process of  attracting skilled technology professionals with diverse techstack skills, our tech village creates a space to match the specific customer talent acquisition needs with a top talent from Africa.",
                    "A subscription membership provides 24/7 access for support for software development projects. This includes offering expertise in various stages of software development, from initial concept and design to development, testing, and deployment. The support extends to different software development methodologies and technologies, tailored to the needs of our clients.",
                    "Baobabpad offers specialized remote teams proficient in DevOps practices exclusively from Africa. These teams assist in automating and integrating the processes between software development and IT teams, enhancing the speed, efficiency, and quality of software development and deployment. All Baobabpad’s Software Development Engineers are GDPR trained and certified.",
                    "Baobabpad provides a Virtual Techstack Collab with clients to maximize business growth for clients. This service focuses on collaboration in technology stacks. We provide guidance and support in choosing and integrating the right set of technologies and tools that are best suited for specific project requirements. This could involve selecting programming languages, frameworks, databases, and other tools that form the infrastructure of a software development project.",
                    "Baobabpad places a strong emphasis on continuous learning and skill enhancement with the members in the virtual tech village. The training and development services are geared towards keeping the workforce updated with the latest technology trends and practices. This is delivered through the Baobab Sharepad in workshops, seminars, mentorship, and training sessions on various emerging technologies and methodologies.",
                    "As part of driving social impact in Africa, Baobabpad is launching a Virtual Internship Program for Girls exclusively from Africa. This program is tailored specifically for graduate girls and new women professionals in technology from Africa, emphasizing both skill development and empowerment in the technology where they are historically underrepresented. The impact goal is to allow graduate girls and new women professionals to gain practical experience in software development and other tech-related fields, working remotely on projects under the guidance of experienced mentors.",              ][index]}
                </span>
              </div>
        </Transition>

        
      ))}  

   
        </div>
     


    </div>
  );
};

export default Village_carousel;
