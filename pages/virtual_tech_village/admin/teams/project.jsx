import React from "react";
import Layout from "../../components/layouts/layout";
import Members from "../../components/team/members";
import Task_Allocation from "../../components/team/task_allocation";
import Project_Roadmap from "../../components/team/project_roadmap";

const Project = () => {
  return (
    <Layout sideHighlight="Insight">
      <div className="flex flex-col h-screen p-4 pt-16 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Members />
          <div className="col-span-2">
            <Task_Allocation />
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
