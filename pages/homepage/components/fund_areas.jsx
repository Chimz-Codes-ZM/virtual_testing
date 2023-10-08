import React from "react";
import Image from "next/image";

const Fund_areas = () => {
 
  return (
    <div className="w-full bg-white grid grid-cols-1  sm:grid-cols-3  overflow-hidden">
      <div
        key=""
        id="pic-h"
        className={` border-[0.1px] flex  border-gray-600 relative group transition-all max-h-[500px] hover:grayscale bg-black group`}
        style={{ paddingBottom: "130%" }}
      >
        
          <Image
            src="/fund/Rectangle 4.png"
            alt="img"
            fill
            className=" transition-opacity group-hover:opacity-50 group-hover:scale-105 transform ease-in-out duration-200"
          />

          <div className="absolute translate-y-8 transform opacity-100 transition-all group-hover:translate-y-0 group-hover:opacity-0 w-full h-full flex justify-center">
            <h1 className="text-2xl font-bold text-white sm:py-8 md:text-4xl  ">
              <span className="border-l-4 border-amber-400 pl-2">
                Climate Mitigation
              </span>
            </h1>
          </div>

          <div className="absolute translate-y-2 md:translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 w-full h-full delay-150">
            <div class="sm:text-base md:text-lg text-white p-4 sm:py-8 flex flex-col gap-2 relative w-full h-full">
              <div className="absolute bottom-4 md:bottom-20">
                Baobab climate mitigation focused on investments in grassroot
                projects and technologies that mitigates the impacts of climate
                change in Africa.
              </div>
            </div>
          </div>
        
      </div>

      <div
        key=""
        id="pic-h"
        className={` border-[0.1px] flex  border-gray-600 relative group transition-all max-h-[500px]  bg-black hover:grayscale group overflow-hidden`}
        style={{ paddingBottom: "130%" }}
      >
        
          <Image
            src="/fund/Rectangle 6.png"
            alt="img"
            fill
            className=" transition-opacity group-hover:opacity-50 group-hover:scale-105 transform ease-in-out duration-200"
          />

          <div className="absolute translate-y-8 transform opacity-100 transition-all group-hover:translate-y-0 group-hover:opacity-0 w-full h-full flex justify-center">
            <h1 className="text-2xl font-bold text-white sm:py-8 md:text-4xl  ">
              <span className="border-l-4 border-amber-400 pl-2">
                Climate Adaptation
              </span>
            </h1>
          </div>

          <div className="absolute translate-y-2 md:translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 w-full h-full delay-150">
            <div class="sm:text-base md:text-lg text-white p-4 sm:py-8 flex flex-col gap-2 relative w-full h-full">
              <div className="absolute bottom-4 md:bottom-20">
                Baobab Climate Fund is aimed at investment opportunities in
                projects and initiatives in water resource management and
                climate-resilient infrastructure development, adapting to the
                impacts of climate change in Africa
              </div>
            </div>
          </div>
        
      </div>

      <div
        key=""
        id="pic-h"
        className={` border-[0.1px] flex border-gray-600 relative group transition-all max-h-[500px] bg-black hover:grayscale group overflow-hidden`}
        style={{ paddingBottom: "130%" }}
      >
        
          <Image
            src="/fund/Rectangle 7.jpg"
            alt="img"
            fill
            className=" transition-opacity group-hover:opacity-50 group-hover:scale-105 transform ease-in-out duration-200"
          />

          <div className="absolute translate-y-8 transform opacity-100 transition-all group-hover:translate-y-0 group-hover:opacity-0 w-full h-full flex justify-center">
            <h1 className="text-2xl font-bold text-white sm:py-8 md:text-4xl  ">
              <span className="border-l-4 border-amber-400 pl-2">
                Carbon Market
              </span>
            </h1>
          </div>

          <div className="absolute translate-y-2 md:translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 w-full h-full delay-150">
            <div class="text-base sm:text-sm md:text-lg text-white p-4 sm:py-8 flex flex-col gap-2 relative w-full h-full">
              <div className="absolute bottom-4 lg:bottom-20">
                Investing in carbon market inclusion and access for small-scale
                projects, particularly those developed by local communities and
                small enterprises. Invest in mechanisms that enable these
                projects to participate in carbon markets, such as aggregated
                project portfolios, programmatic approaches, or partnerships
                with larger entities.
              </div>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Fund_areas;
