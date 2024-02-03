import React from "react";
import Layout from "../components/layouts/layout";
import Team_Layout from "../components/layouts/team_layout";
import Members from "../components/team/members";
import Task_Allocation from "../components/team/task_allocation";
import Project_Roadmap from "../components/team/project_roadmap";

const Team = () => {
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
