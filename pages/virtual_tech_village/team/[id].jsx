import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/layout";
import Team_Layout from "../components/layouts/team_layout";
import Members from "../components/team/members";
import Task_Allocation from "../components/team/task_allocation";
import Project_Roadmap from "../components/team/project_roadmap";
import { API_URL } from "@/config";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Team = () => {
  const router = useRouter();
  const { id } = router.query;

  const [projectInfo, setProjectInfo] = useState([]);

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

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
        setProjectInfo(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <Layout sideHighlight="Team">
      <Team_Layout title="team overview" className="py-5">
        <div className="flex flex-col h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Members team={projectInfo} />
            <div className="col-span-2">
              <Task_Allocation />
            </div>
          </div>
          <div className="flex-1 grow">
            <Project_Roadmap />
          </div>
        </div>
      </Team_Layout>
    </Layout>
  );
};

export default Team;
