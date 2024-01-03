import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsFillChatQuoteFill, BsInfoSquare } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";

const ExpandedProfileModal = ({
  image,
  name,
  skills,
  hideProfile,
  experience,
  certificate,
  country,
  onClick,
  handleChat,
  bio,
}) => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg relative h-screen">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 md:p-8">
          {/* Left Column */}
          <div className="md:col-span-1 flex flex-col items-center space-y-4">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-md relative">
              <Image
                src={image}
                alt={name}
                objectFit="cover"
                fill
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
                className=" transition-opacity opacity-0 duration-[1.2s]"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
             

              <div className="text-center col-span-2 self-center">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <h3 className="text-sm font-light italic text-gray-600">
                  {skills}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col space-y-8">
            {/* Details */}
            <div className="flex flex-col gap-4">
              <div className=" p-1 rounded-lg">
                <h2 className="text-lg font-semibold">Country</h2>
                <p className="text-sm font-light italic">{country}</p>
              </div>

              <div className=" p-1 rounded-lg">
                <h2 className="text-lg font-semibold">Education</h2>
                <p className="text-sm font-light italic">{certificate}</p>
              </div>

              <div className="flex w-full justify-center gap-4">
              <div className="text-gray-900 cursor-pointer flex h-fit gap-1 items-center border rounded-lg shadow p-1 transform transition hover:scale-105" onClick={onClick}>
                More Info  <BsInfoSquare className="w-4 h-4" /> 
                </div>

                <div className="text-gray-900 cursor-pointer flex h-fit gap-1 items-center border rounded-lg shadow p-1 transform transition hover:scale-105 duration-75" onClick={handleChat}>
                  Message <BsFillChatQuoteFill className="w-4 h-4"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div
          className="absolute top-4 right-4 text-gray-600 cursor-pointer"
          onClick={hideProfile}
        >
          <IoMdCloseCircle className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default ExpandedProfileModal;
