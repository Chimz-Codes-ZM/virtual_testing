import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const Members = ({ team }) => {
  return (
    <div className="shadow rounded-md flex flex-col gap-4 col-span-1 p-3">
      <h1 className=" text-xl font-semibold">Team Overview</h1>
      <ScrollArea className=" h-80 rounded-md">
        <h2 className="text-md font-semibold">{team[0]?.title}</h2>
        <p>{team[0]?.description}</p>

        <h2 className="text-md font-semibold mt-3">Team Members:</h2>

        <div className="flex gap-5 mb-3">
              <div className="h-10 w-10 rounded-full relative overflow-hidden">
                <Image src={team[0]?.manager.image} priority alt="profile picture" fill objectFit="cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">{team[0]?.manager.name}</h4>
                <p className=" font-extralight text-sm text-gray-500">
                  {team[0]?.manager.role}
                </p>
              </div>
            </div>
        <div className="mt-1">
          {team[0]?.team_members.map((member) => (
            <div className="flex gap-5 mb-3" key={member.id}>
              <div className="h-10 w-10 rounded-full relative overflow-hidden">
                <Image src={member.image} priority alt="profile picture" fill objectFit="cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">{member.name}</h4>
                <p className=" font-extralight text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Members;
