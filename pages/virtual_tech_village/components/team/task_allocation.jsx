import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

const Task_Allocation = ({ tasks }) => {

  return (
    <div className="w-full h-full shadow rounded-md flex flex-col">
      <h1 className="text-xl font-semibold p-3">Task Allocation</h1>
      <ScrollArea className="h-80 rounded-md ">
        {tasks?.task_data?.map((task) => (
          <div className="flex flex-col gap-4 p-3" key={task.task_id}>
            <div className="p-2 border rounded-md">
              <h3 className="text-md font-semibold">{task.assigned_to[0].name}</h3>
              <p className=" font-extralight text-sm text-gray-500">
                {task.assigned_to[0].role}
              </p>
              <div>
                <div className="w-full flex justify-between">
                  <h3>{task.name}</h3>
                  <p>Due in {task.days_remaining} days</p>
                </div>
                <div className="w-full flex">
                  <Progress value={task.completion} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Task_Allocation;
