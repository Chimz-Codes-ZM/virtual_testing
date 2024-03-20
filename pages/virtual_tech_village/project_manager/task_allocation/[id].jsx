import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import Layout from "../../components/layouts/layout";
import Dropdown from "../components/dropdown";
import { stages } from "@/pages/data";
import toast, { Toaster } from "react-hot-toast";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { API_URL } from "@/config";

const Task_allocation = () => {
  const router = useRouter();
  const { id } = router.query;

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const [newTask, setNewTask] = useState({
    project_id: id,
    stage: "",
    task_name: "",
    assigned_to: [],
    due_date: "",
  });

  const [options, setOptions] = useState([]);

  const handleInputChange = async (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setNewTask((prevTasks) => ({
      ...prevTasks,
      [name]: value,
    }));

    console.log(newTask);
  };

  const fetchProject = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://${API_URL}/village/single_project/${user.user_id}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          }
        );

        const data = await response.json();
        setOptions(data.team_members);
        console.log("This is my project date:", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const createTask = async () => {
    setNewTask({
      project_id: id,
      stage: "",
      task_name: "",
      assigned_to: [],
      due_date: "",
    })
    toast.loading("Submitting...", { duration: 2000 });
    try {
      const response = await fetch(
        `https://${API_URL}/village/create_project_task/${user.user_id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );

      if (response.status === 200) {
        const data = await response.json();

        toast.success("Task successfully created!");
      } else {
        console.error("Something went wrong, please try again!");
        toast.error("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong, please try again!");
    }
  };
  return (
    <Layout sideHighlight="project_manager">
      <Toaster />
      <div className="p-8 pt-16 relative min-h-screen min-w-screen overflow-y-scroll">
        <div className="fixed bottom-10 left-32">
          <form action="">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Assign tasks</Button>
              </SheetTrigger>

              <SheetContent className="z-[200]">
                <SheetHeader>
                  <SheetTitle>Task Allocation</SheetTitle>
                  <SheetDescription>
                    Assign tasks to members of the current project.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-2 mb-16">
                  <div className="py-3">
                    <label htmlFor="stage">Stage</label>
                    <select
                      name="stage"
                      id="stage"
                      value={newTask.stage}
                      onChange={handleInputChange}
                      className="border rounded p-1 w-full bg-white"
                      required
                    >
                      <option value="" disabled selected>
                        Select a stage
                      </option>
                      {stages.map((stage) => (
                        <option key={stage.id} value={stage.stage}>
                          {stage.stage}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="">
                    <Label htmlFor="task_name" className="text-right">
                      Task Name
                    </Label>
                    <Input
                      id="task_name"
                      value={newTask.task_name}
                      name="task_name"
                      className="col-span-3"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div>
                    <Dropdown
                      options={options}
                      newTask={newTask}
                      setNewTask={setNewTask}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_time" className="text-sm font-medium">
                      Date and time
                    </label>
                    <input
                      type="date"
                      name="due_date"
                      value={newTask.due_date}
                      className="border rounded px-1"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <SheetFooter className="align-bottom">
                  <SheetClose asChild>
                    <Button
                      type="submit"
                      variant="outline"
                      onClick={createTask}
                    >
                      Assign Task
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Task_allocation;
