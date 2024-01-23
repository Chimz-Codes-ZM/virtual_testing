import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Members = () => {
  return (
    <div className="shadow rounded-md flex flex-col gap-4 col-span-1 p-3">
      <h1 className=" text-xl font-semibold">Team Overview</h1>
      <ScrollArea className=" h-80 rounded-md">
        <h2 className="text-md font-semibold">The A-Team</h2>
        <p>
          A team of highly skilled professionals dedicated to delivering
          high-quality software solutions.
        </p>

        <h2 className="text-md font-semibold mt-3">Team Members:</h2>

        <div className="mt-1">
          <div className="flex gap-5 mb-3">
            <div className="h-10 w-10 rounded-full bg-gray-500"></div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">John Doe</h4>
              <p className=" font-extralight text-sm text-gray-500">
                Project Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-3">
            <div className="h-10 w-10 rounded-full bg-gray-500"></div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Jane Smith</h4>
              <p className=" font-extralight text-sm text-gray-500">
                Lead Developer
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-3">
            <div className="h-10 w-10 rounded-full bg-gray-500"></div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Emma Johnson</h4>
              <p className=" font-extralight text-sm text-gray-500">
                UI/UX Designer
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-3">
            <div className="h-10 w-10 rounded-full bg-gray-500"></div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Emma Johnson</h4>
              <p className=" font-extralight text-sm text-gray-500">
                Project Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="h-10 w-10 rounded-full bg-gray-500"></div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Emma Johnson</h4>
              <p className=" font-extralight text-sm text-gray-500">
                Project Manager
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Members;
