import React from "react";

import Image from "next/image";

import Tech1 from "/public/assets/talent_acquire.jpg";
import Tech2 from "/public/assets/support.jpg";
import Tech3 from "/public/assets/remote_teams.jpg";
import Tech4 from "/public/assets/tech_stack.jpg";
import Tech5 from "/public/assets/training.jpg";
import Tech6 from "/public/assets/Girls_in_tech.jpg";
const Village_old = () => {
  return (
    <ul className="flex flex-wrap px-8">
      <li className="w-full order-1 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-96 gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-4xl text-gray-900 truncate">
            Talent Acquisition
          </h1>
          <p className="text-sm sm:text-md text-gray-700">
            The Baobabpad Virtual Village is a dedicated platform to finding and
            recruiting top talent in the technology sector, exclusively from
            Africa. Baobabpad understands the painstaking process of attracting
            skilled technology professionals with diverse techstack skills, our
            tech village creates a space to match the specific customer talent
            acquisition needs with a top talent from Africa.
          </p>
        </div>
      </li>

      <li className="w-full order-2 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white">
          <Image src={Tech1} alt="talent" fill objectFit="cover" />
        </div>
      </li>

      <li className="w-full order-4 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white">
          <Image src={Tech5} alt="talent" fill objectFit="cover" />
        </div>
      </li>

      <li className="w-full order-3 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-96 gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-4xl text-gray-900 truncate">
            Software Development Support
          </h1>
          <p className="text-sm sm:text-md text-gray-700">
            A subscription membership provides 24/7 access for support for
            software development projects. This includes offering expertise in
            various stages of software development, from initial concept and
            design to development, testing, and deployment. The support extends
            to different software development methodologies and technologies,
            tailored to the needs of our clients.
          </p>
        </div>
      </li>

      <li className="w-full order-5 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-96 gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-4xl text-gray-900 truncate">
            DevOps Remote Teams
          </h1>
          <p className="text-sm sm:text-md text-gray-700">
            Baobabpad offers specialized remote teams proficient in DevOps
            practices exclusively from Africa. These teams assist in automating
            and integrating the processes between software development and IT
            teams, enhancing the speed, efficiency, and quality of software
            development and deployment. All Baobabpad’s Software Development
            Engineers are GDPR trained and certified.  
          </p>
        </div>
      </li>

      <li className="w-full order-6 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white">
          <Image src={Tech3} alt="talent" fill objectFit="cover" />
        </div>
      </li>

      <li className="w-full order-8 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white">
          <Image src={Tech4} alt="talent" fill objectFit="cover" />
        </div>
      </li>

      <li className="w-full order-7 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-96 gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-4xl text-gray-900 truncate">
            Techstack Collab
          </h1>
          <p className="text-sm sm:text-md text-gray-700">
            Baobabpad provides a Virtual Techstack Collab with clients to
            maximize business growth for clients. This service focuses on
            collaboration in technology stacks. We provide guidance and support
            in choosing and integrating the right set of technologies and tools
            that are best suited for specific project requirements. This could
            involve selecting programming languages, frameworks, databases, and
            other tools that form the infrastructure of a software development
            project.
          </p>
        </div>
      </li>

      <li className="w-full order-9 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-96 gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-4xl text-gray-900 truncate">
            Training & Development
          </h1>
          <p className="text-sm sm:text-md text-gray-700">
            Baobabpad places a strong emphasis on continuous learning and skill
            enhancement with the members in the virtual tech village. The
            training and development services are geared towards keeping the
            workforce updated with the latest technology trends and practices.
            This is delivered through the Baobab Sharepad in workshops,
            seminars, mentorship, and training sessions on various emerging
            technologies and methodologies.
          </p>
        </div>
      </li>

      <li className="w-full order-10 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white">
          <Image src={Tech2} alt="talent" fill objectFit="cover" />
        </div>
      </li>

      <li className="w-full order-12 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white">
          <Image src={Tech6} alt="talent" fill objectFit="cover" />
        </div>
      </li>

      <li className="w-full order-11 md:order-none md:w-1/2 my-10 flex justify-center items-center">
        <div className="w-96 gap-5 flex flex-col">
          <h1 className="text-2xl sm:text-4xl text-gray-900 truncate">
            Virtual Internship Program
          </h1>
          <p className="text-sm sm:text-md text-gray-700">
            As part of driving social impact in Africa, Baobabpad is launching a
            Virtual Internship Program for Girls exclusively from Africa. This
            program is tailored specifically for graduate girls and new women
            professionals in technology from Africa, emphasizing both skill
            development and empowerment in the technology where they are
            historically underrepresented. The impact goal is to allow graduate
            girls and new women professionals to gain practical experience in
            software development and other tech-related fields, working remotely
            on projects under the guidance of experienced mentors.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Village_old;
