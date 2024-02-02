import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";
import Layout from "../../components/layouts/layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
import { Textarea } from "@/components/ui/textarea";

import { Project_teams } from "@/pages/data";
import { API_URL } from "@/config";
import Dropdown from "../components/dropdown";

const index = () => {
  const [newProject, setNewProject] = useState({
    project_name: "",
    project_owner: "",
    project_manager: "",
    project_description: "",
    start_date: "",
    team_members: [],
  });
  const [projectOwners, setProjectOwners] = useState(null);
  const [options, setOptions] = useState(null);

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://${API_URL}/village/create_project/${user.user_id}/`
        );
        setProjectOwners(response.data);
        setOptions(response.data.talents)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("These are the companies in my database: ", projectOwners);
  }, [projectOwners]);

  const handleInputChange = async (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setNewProject((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const createTeam = async () => {
    console.log(newProject);
    toast.loading('Submitting...', {duration: 2000})
    try {
      const response = await fetch(
        `https://${API_URL}/village/create_project/${user.user_id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProject),
        }
      );

      if (response.status === 200) {
        const data = await response.json();

        toast.success('Team successfully created!')
      } else {
        console.error("Something went wrong, please try again!");
        toast.error('Something went wrong, please try again!')
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Something went wrong, please try again!')

    }
  };

  return (
    <Layout sideHighlight="Insight">
      <Toaster />
      <div className="p-14 relative overflow-y-auto">
        <Table>
          <TableCaption>A list of ongoing projects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead className="">Project Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead className="w-[150px] truncate">
                Project Description
              </TableHead>
              <TableHead>Date Started</TableHead>
              <TableHead className="text-right"># of Team Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Project_teams.map((team) => (
              <TableRow key={team.projectId}>
                <TableCell>{team.number}</TableCell>
                <TableCell className="font-medium">
                  <Link href={"/virtual_tech_village/admin/teams/project"}>
                    {team.projectName}
                  </Link>
                </TableCell>
                <TableCell>{team.teamOwner}</TableCell>
                <TableCell className="w-[150px] truncate">
                  {team.projectDescription}
                </TableCell>
                <TableCell>{team.dateStarted}</TableCell>
                <TableCell className="text-right">
                  {team.numberOfTeamMembers}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="z-[999] fixed left-32 bottom-10">
          <form>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">+ New Team</Button>
              </SheetTrigger>
              <div>
                <SheetContent className="border-4">
                  <SheetHeader>
                    <SheetTitle>Create a New Project</SheetTitle>
                    <SheetDescription>
                      Fill out the form below to create a new team
                    </SheetDescription>
                  </SheetHeader>

                  <div className="flex flex-col gap-4 mb-16">
                    <div className="">
                      <Label htmlFor="project_name" className="text-right">
                        Project Name
                      </Label>
                      <Input
                        id="project_name"
                        value={newProject.project_name}
                        name="project_name"
                        className="col-span-3"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>

                    <div className="">
                      <Label htmlFor="project_owner" className="text-right">
                        Project Owner
                      </Label>

                      <div>
                        <select
                          name="project_owner"
                          id="project_owner "
                          className="border-gray-300 border rounded px-1 w-full p-2 bg-white"
                          onChange={(e) => handleInputChange(e)}
                          value={newProject.project_owner}
                        >
                          <option value="" disabled className="bg-white">
                            Select a Project Owner
                          </option>
                          {projectOwners?.companies?.map((owner) => (
                            <option
                              value={owner.id}
                              key={owner.id}
                              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white"
                            >
                              {owner.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="">
                      <Label htmlFor="team_members" className="text-right">
                        Project Members
                      </Label>

                      <select
                          name="project_manager"
                          id="project_manager"
                          className="border-gray-300 border rounded px-1 w-full p-2 bg-white"
                          onChange={(e) => handleInputChange(e)}
                          value={newProject.project_manager}
                        >
                          <option value="" disabled className="bg-white">
                            Select a Project Manager
                          </option>
                          {projectOwners?.talents?.map((manager) => (
                            <option
                              value={manager.id}
                              key={manager.id}
                              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white"
                            >
                              {manager.name}
                            </option>
                          ))}
                        </select>
                    </div>

                    <div className="w-full border">
                      <Label htmlFor="project_owner" className="text-right">
                        Team Members
                      </Label>

                      <div>
                        <Dropdown options={options} newProject={newProject} setNewProject={setNewProject}/>
                      </div>
                    </div>
                    <div className="">
                      <Label
                        htmlFor="project_description"
                        className="text-right"
                      >
                        Project Description
                      </Label>
                      <Textarea
                        name="project_description"
                        value={newProject.project_description}
                        id="project_description"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="">
                      <Label htmlFor="username" className="text-right">
                        Start Date
                      </Label>
                      <Input
                        id="start_Date"
                        value={newProject.start_date}
                        type="date"
                        name="start_date"
                        className="col-span-3"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>

                  </div>
                  <SheetFooter className="align-bottom">
                    <SheetClose asChild>
                      <Button
                        type="submit"
                        variant="outline"
                        onClick={createTeam}
                      >
                        Create Team
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </div>
            </Sheet>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default index;
