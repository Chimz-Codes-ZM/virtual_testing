import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Resume_component = ({
  bio,
  city,
  country,
  name,
  title,
  languages,
  work_experience,
  education,
  linkedin,
  soft_skills,
  onClick,
}) => {

  const renderDescription = (description) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return description.replace(
      urlRegex,
      (url) =>
        `<a href="${url}" target="_blank" style="text-decoration: underline;">${url}</a>`
    );
  };
  return (
    <main className="bg-white text-gray-800 min-h-screen relative">
      <div
        className="fixed right-10 top-10 cursor-pointer p-1 border-2 rounded-md"
        onClick={onClick}
      >
        <FaX />
      </div>
      <div className="py-20 lg:py-24 px-6 mx-auto max-w-7xl">
        <div className="relative">
          <div></div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 xl:gap-24 z-10">
            <div className="col-span-1">
              <h1 className="font-bold text-4xl z-[999]">{name}</h1>
              <h2 className="text-lg">{title}</h2>
            </div>

            <div class="lg:flex sm:justify-between grid grid-cols-1 sm:grid-cols-3 col-span-3 gap-4 mt-5 pt-4 border-t-2 border-gray-300">
              <div className="flex items-center">
                {/* <!-- Contact 1 Icon --> */}
                <div className="text-2xl">
                  <FaMapMarkedAlt />
                </div>

                {/* <!-- Contact 1 --> */}
                <div className="ml-3">
                  <p className="mb-0 font-semibold text-sm">Country</p>
                  <p className="mb-0">{country} </p>
                </div>
              </div>

              <div className="flex items-center">
                {/* <!-- Contact 2 Icon --> */}

                <div className="text-2xl">
                  <FaCity />
                </div>

                {/* <!-- Contact 2 --> */}
                <div className="ml-3">
                  <p className="mb-0 font-semibold text-sm">City</p>
                  <p className="mb-0">{city}</p>
                </div>
              </div>

              <div className="flex items-center">
                {/* <!-- Contact 3 Icon --> */}
                <div className="text-2xl">
                  <BsLinkedin />
                </div>

                {/* <!-- Contact 3 --> */}
                <div className="ml-3">
                  <p className="mb-0 font-semibold text-sm">Linkedin</p>

                  <a href={linkedin} target="_blank" rel="noreferrer">
                    {linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[-3rem] lg:top-[-3.5rem] -left-12 w-40 lg:w-[13rem] h-40 lg:h-[13rem] bg-teal-200 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-24 items-start mt-12 lg:mt-24">
          {/* <!-- Work Experience --> */}
          <div class="lg:col-span-2">
            <h3 className="border-b-2 border-gray-300 font-bold text-3xl pb-2">
              Work Experience
            </h3>

            {/* <!-- Work Experience 1 --> */}
            <div class="">
              {work_experience?.map((job, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-x-6"
                >
                  <div className="pt-2">
                    {/* <!-- Company 1 --> */}
                    <h4 class="mb-1 lg:mb-4 font-semibold">{job.company}</h4>
                    <p class="text-sm">
                      {job.from_year} - {job.to_year}
                    </p>
                  </div>{" "}
                  <div class="lg:col-span-2">
                    {/* <!-- Job Title 1 --> */}
                    <h4 class="mb-4 pt-2 font-semibold">{job.position}</h4>
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: renderDescription(
                            job.summary.replace(/\r\n|\r|\n/g, "<br>")
                          ),
                        }}
                      />
                      {job.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* <!-- Work Experience 2 --> */}
          </div>

          <div>
            {/* <!-- Profile --> */}
            <h3 className="border-b-2 border-gray-300 pb-2 text-2xl font-semibold">
              Bio
            </h3>
            <p className="p-2">{bio}</p>

            {/* <!-- Skills --> */}

            {/* <!-- Education --> */}
            <h3 class="mt-12 lg:mt-16 font-semibold text-2xl pb-2 border-b-2 border-gray-300">
              Education
            </h3>

            {education?.map((education, index) => (
              <div key={index}>
                <h4 class="mb-1 text-base font-semibold">
                  {education.institution}
                </h4>
                <p class="mb-1">{education.degree_name}</p>
              </div>
            ))}

            <h3 class="mt-12 lg:mt-16 text-2xl font-semibold pb-2 border-b-2 border-gray-300">
              Soft Skills
            </h3>

            {/* <!-- Skills 1 --> */}
            {soft_skills?.map((skill, index) => (
              <ul key={index}>
                <li className="list-disc">{skill.name}</li>
              </ul>
            ))}

            {/* <!-- References --> */}
            <div className="flex flex-col">
              <h3 class="mt-6 lg:mt-12 font-semibold">Languages</h3>

              {/* <!--Languages --> */}
              {languages?.map((language, index) => (
                <ul key={index} className=" list-disc">
                  <li class="mb-1">{language.language}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume_component;
