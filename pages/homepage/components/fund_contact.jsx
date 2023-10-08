import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";


const Fund_contact = () => {
  return (
    <div className="w-full flex h-max  my-6 justify-center items-center  sm:justify-start flex-col sm:flex-row  pl-4 md:pl-40 gap-4">
          <div className="max-w-[200px]  w-full h-full relative  justify-center items-center ">
            <div
              className="flex justify-center   relative rounded-full overflow-hidden "
              style={{ paddingBottom: "110%" }}
            >
              <Image src="/assets/karen.jpg" alt="contact img" fill />
            </div>
          </div>
          <div className=" flex-1 h-full p-2 md:p-5 relative overflow-hidden xl:pt-10 flex gap-2 md:gap-2 justify-center items-center">
            <div>
               <h1 className="text-md sm:text-xl md:text-4xl font-bold text-gray-800">
              Contact Person
            </h1>
            <h1 className="text-xs sm:text-md md:text-xl lg:text-3xl font-bold text-gray-800">
              Karen Kana
            </h1>

            <div className="flex text-xs sm:text-sm md:text-md lg:text-2xl flex-col">
              <p className="">
                karen@baobabpad.com
              </p>
            </div> 
            </div>
            
            <span className="w-full text-2xl lg:text-5xl ">
              <a href="https://www.linkedin.com/in/kana-karen/" target="_blank">
                <AiOutlineLinkedin />
              </a>
            </span>
          </div>
          
        </div>
  )
}

export default Fund_contact