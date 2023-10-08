import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SettingsLayout from "./layout";
import { BsFillCaretDownFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Deca from "public/assets/deca-logo.png";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const ProjectDiv = ({
  project,
  description,
  project_id,
  isOpen,
  toggleContent,
  project_manager,
}) => {
  const [renameValue, setRenameValue] = useState(project);
  const [renameDescription, setRenameDescription] = useState(description);
  const [projectId, setProjectId] = useState(project_id);

  const [values, setValues] = useState({
    project_name: "",
    description: "",
    id: "",
    project_manager: "",
  });

  const router = useRouter();

  const [projectInfor, setprojectInfor] = useState([]);

  function checkToken() {
    if (!localStorage.getItem("token")) {
      router.push("../homepage/login");
      return;
    }
  }

  useEffect(() => {
    checkToken();

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const fetchData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/create_project/${id}/`
      );
      const data = await response.json();
      setprojectInfor(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProjectId(project_id);

    setValues({
      project_name: renameValue,
      description: renameDescription,
      project_manager: project_manager,
      id: projectId,
    });
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    try {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/create_project/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ values }),
        }
      );
      if (response.ok) {
        alert("Project updated successfully!");
      }
    } catch (error) {
      alert("Project update was not successful!");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    try {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/create_project/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectId }),
        }
      );
      if (response.ok) {
        alert("Project deleted successfully!");
        window.location.reload();
      }
    } catch (error) {
      alert("Project delete was not successful!");
    }
  };

  const handleRenameChange = async (event) => {
    setRenameValue(event.target.value);
  };
  const handleDescriptionChange = async (event) => {
    setRenameDescription(event.target.value);
  };

  const manager = "John Doe";

  return (
    <div className="w-full flex flex-col mb-5 gap-5 overflow-x-hidden">
      <div className="w-full flex h-max gap-2 flex-col relative overflow-hidden rounded">
        <div
          onClick={toggleContent}
          className="w-full cursor-pointer rounded flex justify-between h-10 bg-gray-900 items-center px-4"
        >
          <h1 className="text-2xl font-bold text-white">{renameValue}</h1>
          <span className="text-xl text-white">
            <BsFillCaretDownFill />
          </span>
        </div>
        <div
          className={`w-full bg-gray-100 z-50 flex py-5 rounded gap-6 px-2 flex-col transform origin-top transition-all duration-300 ease-in-out ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="w-full flex items-center gap-2">
            <h3 className="text-sm font-bold text-gray-800">Rename</h3>
            <input
              value={renameValue}
              onChange={handleRenameChange}
              className="w-72 px-2 border outline-none rounded h-8 text-sm text-gray-800"
            />
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-20 h-20 rounded relative">
              <Image src={Deca} fill />
            </div>
            <label className="px-5 cursor-pointer py-1 rounded text-white bg-blue-600">
              Change
            </label>
          </div>

          <div className="w-full flex flex-col gap-2">
            <h3 className="text-sm font-bold text-gray-800">Description</h3>
            <textarea
              className="h-20 outline-none border rounded"
              value={renameDescription}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <input
            name="project_id"
            placeholder="project_id"
            value={projectId}
            hidden
            className="p-2 w-full md:w-1/2 border rounded"
          ></input>

          <div className="w-full flex flex-col gap-2 max-w-lg">
            <h3 className="text-sm font-bold text-gray-800">Managers</h3>
            <select name="manager" id="manager">
              <option value="Select a manager" disabled selected>Select a manager</option>
              <option value={project_manager}>{project_manager}</option>
            </select>
          </div>

          <div className="w-full flex justify-end">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 text-white font-bold bg-blue-600 rounded"
            >
              Save
            </button>
          </div>

          <div className="w-full flex flex-col border-t border-gray-300 gap-5 py-5 overflow-hidden">
            <h1 className="text-red-600 font-bold">Danger</h1>
            <p className="text-sm text-justify truncate text-gray-600 w-full break-words">
              Deleting a project is a permanent action and cannot be undone.
            </p>

            <div className="w-full flex justify-end">
              <span
                onClick={handleDelete}
                className="px-5 py-1 border cursor-pointer border-red-600 text-red-600 rounded"
              >
                Delete this project
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [projectData, setProjectData] = useState([]);

  function checkToken() {
    if (!localStorage.getItem("token")) {
      router.push("../homepage/login");
      return;
    }
  }

  useEffect(() => {
    checkToken();

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const fetchData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/create_project/${id}/`
      );
      const data = await response.json();
      setProjectData(data);
    };

    fetchData();
  }, []);

  const toggleContent = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  // Mock data from the database
  const projects = [
    { id: "1", name: "SAVN" },
    { id: "2", name: "300 projects" },
    // Add more project objects as needed
  ];

  return (
    <>
      <SettingsLayout title="Projects" description="Manage your Products">
        <div className="w-full flex py-5 justify-end"></div>

        {projectData.map(({ project, description, id }, index) => (
          <ProjectDiv
            project={project}
            description={description}
            project_id={id}
            // project_manager={project_manager}
            isOpen={index === openIndex}
            toggleContent={() => toggleContent(index)}
            key={index}
          />
        ))}
      </SettingsLayout>
    </>
  );
};

export default Settings;
