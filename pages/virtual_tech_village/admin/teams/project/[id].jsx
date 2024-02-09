import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../components/layouts/layout";
import Members from "../../../components/team/members";
import Task_Allocation from "../../../components/team/task_allocation";
import Project_Roadmap from "../../../components/team/project_roadmap";
import { API_URL } from "@/config";

const Project = () => {
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
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    fetchProject();
  }, []);

  useEffect(() => {
    console.log("This is my fetched project data:",projectInfo);
  }, [projectInfo]);
  return (
    <Layout sideHighlight="Insight">
      <div className="flex flex-col h-screen p-4 pt-16 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Members team={projectInfo} />
          <div className="col-span-2">
            <Task_Allocation tasks={projectInfo}/>
          </div>
        </div>
        <div className="flex-1 grow">
          <Project_Roadmap />
        </div>
      </div>
    </Layout>
  );
};

export default Project;
