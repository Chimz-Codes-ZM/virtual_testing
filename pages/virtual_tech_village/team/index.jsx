import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/layout";
import Team_Layout from "../components/layouts/team_layout";
import axios from "axios";
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


const Team = () => {

  const [projects, setProjects] = useState([])

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
      setProjects(response.data.projects)
      console.log(response.data.projects)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  fetchData();
}, []);


  return (
    <Layout sideHighlight="Team">
      <Team_Layout title="team overview" >
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
            {projects?.map((team, index) => (
              <TableRow key={team.project_id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  <Link href={`/virtual_tech_village/admin/teams/${team.project_id}`}>
                    {team.title}
                  </Link>
                </TableCell>
                <TableCell>{team.owner}</TableCell>
                <TableCell className="w-[150px] truncate">
                  {team.description}
                </TableCell>
                <TableCell>{team.start_date}</TableCell>
                <TableCell className="text-right">
                  {team.team_members.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Team_Layout>
    </Layout>
  );
};

export default Team;
