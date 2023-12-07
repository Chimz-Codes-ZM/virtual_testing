import React, { useState } from "react";
import Image from "next/image";
import Christina_2 from "/public/placeholders/Christina_2.webp";
import { useSelector } from "react-redux";

import { MdGroupRemove } from "react-icons/md";

const Channels = ({ addChannel, setAddChannel }) => {
  const handleAddChannel = () => {
    setAddChannel(!addChannel);
  };

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  return (
    <div className="h-full flex flex-col items-center border-r w-full md:w-72 md:max-w-72">
      <div className="pb-4 font-semibold text-lg text-teal-700">Channels</div>

      <div className="flex flex-col w-full h-full justify-between">
        <div className="w-full h-14 flex justify-between items-center px-1 border-y cursor-pointer hover:bg-gray-100 transition-colors delay-75 ease-in-out">
          <div className="font-semibold text-sm">#Announcements</div>
          <div className="flex gap-1">
            <div className="relative h-8 w-8 rounded-full">
              <Image
                fill
                objectFit="cover"
                src={Christina_2}
                className="rounded-full"
                alt="Profile image"
              />
            </div>

            <div className=" text-gray-500 font-light text-sm">+23</div>
          </div>
        </div>
        {user && user.account_type === "village admin profile" ? (
          <div
            onClick={() => handleAddChannel()}
            className="cursor-pointer text-2xl p-2 shadow-md mb-2 self-end mr-4 rounded w-fit"
          >
            <MdGroupRemove />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Channels;
