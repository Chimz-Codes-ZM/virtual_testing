import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/layouts/layout";
import Link from "next/link";
import { useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { API_URL } from "@/config";

const index = () => {
  const [projects, setProjects] = useState(null);

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
          `https://${API_URL}/village/manager_projects/${user.user_id}/`
        );
        setProjects(response.data)
        // console.log("Projects managed by me:", response.data)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
console.log("Projects state update:",projects)
  }, [projects])
  return (
    <Layout sideHighlight="project_manager">
      <div className="p-8 pt-16 relative">
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
            {projects?.map((team, index) => (
              <TableRow key={team.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  <Link
                    href={`/virtual_tech_village/project_manager/task_allocation/${team.id}`}
                  >
                    {team.title}
                  </Link>
                </TableCell>
                <TableCell>{team.owner}</TableCell>
                <TableCell className="w-[150px] truncate">
                  {team.description}
                </TableCell>
                <TableCell>{team.start_date}</TableCell>
                <TableCell className="text-right">
                  {team.team.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </Layout>
  );
};

export default index;
