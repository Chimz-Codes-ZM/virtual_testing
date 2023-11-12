import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";



const Home = ({ title, mediaSrc, mediaType, description, buttons }) => {
  const handleSignOut = () => {

  }
  return (
    <div className="w-screen h-screen relative overflow-hidden text-center">
      <div className="w-full h-full">
        {mediaType === "video" ? (
          // video
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            className="absolute object-cover w-full h-full"
          />
        ) : (
          // image
          <Image src={mediaSrc} alt="cover" layout="fill" objectFit="cover" />
        )}

        <div className="w-full bg-black/30 gap-5 h-full flex flex-col absolute left-0 top-0 z-20 pt-80 justify-center items-center">
          <span className="text-3xl md:text-6xl px-2 md:px-40 flex text-center text-white font-bold">
            {title}
          </span>
          {description && (
            <p className="text-sm lg:text-2xl px-3 md:px-10 lg:px-52 flex text-center text-white mt-5">
              {description}
            </p>
          )}

          <div
            className={`gap-6 sm:gap-10 flex flex-col justify-center items-center mt-10 h-10 ${
              buttons === "yes" ? "visible" : "hidden"
            }`}
          >
            <div className="flex  flex-col">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white text-center">
                Work with Africa's top IT and Data Management Talent and Teams.
              </h1>
            </div>

            <div className="gap-6 sm:gap-10 flex flex-col sm:flex-row h-10 rounded">
            <div className="flex text-white text-xl sm:text-2xl font-bold hover:text-gray-100 items-center justify-center px-5 h-10 rounded background-green">
                <Link href="/virtual_tech_village" className="self-center">
                  Virtual Tech Village
                </Link>
              </div>
              <div className="flex text-white text-xl sm:text-2xl font-bold hover:text-gray-100 items-center justify-center px-5 h-10 rounded background-green">
                <Link href="/homepage/careers" className="self-center">
                  Join Baobabpad
                </Link>
              </div>
              <div className="flex text-white text-xl sm:text-2xl font-bold hover:text-gray-100 items-center justify-center px-5 h-10 rounded background-green">
                <Link href="/homepage/signup/subscription">
                  Company Subscription
                </Link>
              </div>

              {/* <div className="flex text-white text-xl sm:text-2xl font-bold hover:text-gray-100 items-center justify-center px-5 h-10 rounded background-green" onClick={handleSignOut}>
                Sign out
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
