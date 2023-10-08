import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { productionTeam } from "../../data";

const TeamSection = () => {
  const [isHovered, setIsHovered] = useState(null);



  return (
    <div className="w-full bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {productionTeam.map((member) => (
        <div
          key={member.id}
          id="pic-h"
          className={`filter_ border-[0.1px] flex  border-gray-600 flex relative group bg-black ${
            isHovered === member.id ? "hovered" : ""
          }`}
          style={{ paddingBottom: "130%" }}
    
        >
          <Link
            href={`/homepage/teammates/technical_professionals/${member.id}`}
          >
            <Image
              src={member.img}
              alt="img"
              fill
              className=" transition-opacity group-hover:opacity-50"
            />
            

            <div className="absolute w-full bottom-7 left-0 px-2 sm:px-10">
              <Link
                href={`/homepage/teammates/technical_professionals/${member.id}`}
              >
                <span className="w-full cursor-pointer hover:bg-white hover:text-gray-800 text-white bg-black/20 flex items-center justify-between px-4 h-9 border-2 ">
                  <h1 className="text-sm sm:text-lg truncate">
                    {member.title}
                  </h1>
                  <AiOutlinePlus className="text-lg" />
                </span>
              </Link>
            </div>
            

            <div className="absolute translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 w-full h-full">
              <div class="text-lg text-white p-4 sm:py-8 flex flex-col gap-2 relative w-full h-full">
                <h3 className="text-sm font-medium uppercase tracking-widest">
                  {member.strength}
                </h3>

                <h1 className="text-base font-bold text-white sm:text-2xl">
                  Experience: {member.experience}
                </h1>

                <h1>
                  Services: {member.services}
                </h1>


                <div className="absolute bottom-20">
                Click to read more...
              </div>
              </div>

              
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
