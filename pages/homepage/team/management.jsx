import React from "react";
import Image from "next/image";
import Layout from "../../layout";
import Home from "../home";
// import Sal from "../../../public/assets/selma.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  management_info as Management_info,
  management_info,
} from "../../data";

function Management() {
  return (
    <Layout title="Baobabpad | Team" content="Bring Africa growth with Tech">
      <div className="overflow-x-hidden">
        <Home
          title="Team"
          description="Work with Africa's top IT and data management Talent and Teams, driving human capital Growth and Innovation"
          mediaSrc="/assets/ladies.jpg"
          mediaType="image"
        />

        {/* {Management_info.map((manager) => (
           <div className="w-full flex h-max border-b">
          <div className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[500px] flex-shrink-0 h-full relative overflow-hidden">
            <div
              className="flex w-full justify-center border-gray-600 flex relative"
              style={{ paddingBottom: "110%" }}
            >
              <Image src={manager.img} alt="img" layout="fill" />
            </div>
          </div>
          <div className="flex-grow h-full p-2 md:p-5 relative overflow-hidden justify-between xl:pt-10 flex flex-col gap-2 xl:gap-10 md:gap-4">
            <h1 className="text-md sm:text-xl md:text-5xl font-bold text-gray-800">
              {manager.name}
            </h1>
            <h1 className="text-xs sm:text-md md:text-xl lg:text-3xl font-bold text-gray-800">
              {manager.position}
            </h1>

            <div className="flex text-xs sm:text-sm md:text-md lg:text-2xl flex-col">
              <p className="">
                {manager.Quote}
              </p>
            </div>
            <span className="w-full text-2xl lg:text-5xl flex justify-center">
              <a href={manager.linkedin} target="_blank">
                <AiOutlineLinkedin />
              </a>
            </span>
          </div>
          
        </div>
        ))} */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10 group">
          {management_info.map((teammate) => (
            <div className=" flex-shrink-0 h-full relative overflow-hidden group">
              <div
                className="flex w-full justify-center border-gray-600 flex relative"
                style={{ paddingBottom: "110%" }}
              >
                <Image
                  src={teammate.img}
                  alt="img"
                  layout="fill"
                  className="grayscale"
                />
              </div>

              <h1 className="font-bold text-2xl pb-2">{teammate.name}</h1>
              <h3 className="text-xl pb-2">{teammate.position}</h3>
              <p className="border-b-4 w-fit pb-2">Show bio</p>

              <div className="absolute translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 w-full h-full">
              <div class="text-lg text-white p-4 sm:py-8 flex flex-col gap-2 relative w-full h-full">
                <h3 className="text-sm font-medium uppercase tracking-widest">
                  Strength
                </h3>

              
              </div>

              
            </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Management;
