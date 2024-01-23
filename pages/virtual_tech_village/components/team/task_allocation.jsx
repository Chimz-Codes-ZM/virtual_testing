import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress"


const Task_Allocation = () => {
  return (
    <div className="w-full h-full shadow rounded-md flex flex-col">
      <h1 className="text-xl font-semibold p-3">Task Allocation</h1>
      <ScrollArea className="h-80 rounded-md ">
        <div className="flex flex-col gap-4 p-3"> <div className="p-2 border rounded-md">
          <h3  className="text-md font-semibold">John Doe</h3>
          <p className=" font-extralight text-sm text-gray-500">Project Manager</p>
          <div>
            <div className="w-full flex justify-between">
              <h3>Task A</h3>
              <p>Due in 4 days</p>
            </div>
            <div className="w-full flex">
              {/* <div className="h-2 rounded-l-sm w-2/5 bg-green-600"></div>
              <div className="h-2 flex-grow rounded-r-sm bg-gray-200"></div> */}
              <Progress value={40}/>
            </div>
          </div>
        </div>
        <div className="p-2 border rounded-md">
          <h3  className="text-md font-semibold">John Doe</h3>
          <p className=" font-extralight text-sm text-gray-500">Project Manager</p>
          <div>
            <div className="w-full flex justify-between">
              <h3>Task A</h3>
              <p>Due in 4 days</p>
            </div>
            <div className="w-full flex">
            <Progress value={80}/>
            </div>
          </div>
        </div>
        <div className="p-2 border rounded-md">
          <h3  className="text-md font-semibold">John Doe</h3>
          <p className=" font-extralight text-sm text-gray-500">Project Manager</p>
          <div>
            <div className="w-full flex justify-between">
              <h3>Task A</h3>
              <p>Due in 4 days</p>
            </div>
            <div className="w-full flex">
            <Progress value={20}/>
            </div>
          </div>
        </div></div>
       
      </ScrollArea>
    </div>
  );
};

export default Task_Allocation;
