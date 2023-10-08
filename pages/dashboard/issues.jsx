import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "./components/layout";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoIssueOpened } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import jwt_decode from "jwt-decode";
import Edit_form from "./components/edit_form";

const Issues = () => {
  const router = useRouter();

  function checkToken() {
    if (!localStorage.getItem("token")) {
      router.push("../homepage/login");
      return;
    }
  }

  const [nav, setNav] = useState(false);

  const [ProjectList, setProjectList] = useState([]);
  const [issueList, setIssueList] = useState([]);

  const [name, setName] = useState();
  const [project, setProject] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();

  // Edit/delete toggle

  // const [editToggle, setEditToggle] = useState(false);
  // const handleEditToggle = (e, index) => {
  //   setEditToggle(!editToggle);
  //   e.stopPropagation();
  // };

  const [editToggle, setEditToggle] = useState([]);

  // const toggleDivVisibility = (e, issue_id) => {
  //   setEditToggle((prevVisibility) => {
  //     if (prevVisibility.includes(issue_id)) {
  //       return prevVisibility.filter((id) => id !== issue_id);
  //     } else {
  //       return [...prevVisibility, issue_id];
  //     }
  //   });
  //   e.stopPropagation();
  // };

  const toggleDivVisibility = (e, issue_id) => {
    setEditToggle((prevVisibility) => {
      if (prevVisibility === issue_id) {
        return null;
      } else {
        return issue_id;
      }
    });
    e.stopPropagation();
  };

  // for comment
  const [comment, setComment] = useState();
  const [Issue, setIssue] = useState();
  const [commenter, setCommenter] = useState();

  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    const divElement = document.getElementById(id);
    if (!divElement) {
      return;
    }

    if (expanded == id) {
      setExpanded(null);
      divElement.style.transition = "height 500ms";
      divElement.style.height = "0px";
    } else {
      if (expanded !== null) {
        const currentExpandedDiv = document.getElementById(expanded);
        currentExpandedDiv.style.transition = "height 500ms";
        currentExpandedDiv.style.height = "0px";
      }

      setExpanded(id);
      divElement.style.transition = "height 500ms";
      divElement.style.height = divElement.scrollHeight + "px";
    }
  };

  const handleNav = (event) => {
    setNav(true);
  };

  useEffect(() => {
    checkToken();

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const fetchData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/create_project/${id}/`
        // `http://127.0.0.1:8000/api/create_project/${id}/`
      );
      const data = await response.json();
      setProjectList(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      checkToken();

      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const id = decodedToken.user_id;

      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/create_issue/${id}/`
        // `http://127.0.0.1:8000/api/create_issue/${id}/`
      );
      const data = await response.json();
      setIssueList(data);
      // console.log(data)
    };

    fetchData();
  }, []);

  const inputRefissue = useRef(null);
  const inputRefcommenter = useRef(null);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const response = await fetch(
      `https://baobabpad-334a8864da0e.herokuapp.com/api/create_issue/${id}/`
    );
    const data = await response.json();
    setIssueList(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const response = await fetch(
      `https://baobabpad-334a8864da0e.herokuapp.com/api/create_issue/${id}/`,
      // `http://127.0.0.1:8000/api/create_issue/${id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, project, date }),
      }
    );

    if (response.ok) {
      alert("issue created");
      setNav(false);
      setName("");
      setDescription("");
      setProject("");

      setStatus();
      fetchData();
    } else {
      setStatus("Data not saved");
    }
  };

  const handleDelete = async (e, issueId) => {
    e.preventDefault();
    e.stopPropagation();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;
    const issue = issueId;

    try {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/create_issue/${id}/`,
        // `http://127.0.0.1:8000/api/create_issue/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ issue }),
        }
      );
      if (response.ok) {
        alert("Issue deleted successfully!");
        fetchData();
      }
    } catch (error) {
      alert("Issue was not deleted");
    }
  };

  // Edit issue
  const [editIssueData, setEditIssueData] = useState({
    issue_id: "",
    project: "",
    issue: "",
    description: "",
  });

  const [editingIssueId, setEditingIssueId] = useState(null);

  const handleEdit = (event, issue_id) => {
    event.stopPropagation();
    setEditingIssueId(issue_id);
    setEditToggle([]);
    const issueToEdit = issueList.find((issue) => issue.issue_id === issue_id);
    if (issueToEdit) {
      setEditIssueData({
        issue_id: issueToEdit.issue_id,
        project: issueToEdit.project,
        issue: issueToEdit.issue,
        description: issueToEdit.description,
      });
    }

    console.log("handleEdit executed with issue_id:", issue_id);

    
    // event.stopPropagation()
  };

  const createComment = async (event, issueId) => {
    event.preventDefault();

    const data = {
      issue: issueId,
      commenter: inputRefcommenter.current.value,
      comment,
      date,
    };
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const response = await fetch(
      `https://baobabpad-334a8864da0e.herokuapp.com/api/create_comment/${id}/`,
      // `http://127.0.0.1:8000/api/create_comment/${id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      alert("comment created");

      setComment("");
      fetchData();
      // router.reload();
      // useEffect(());
      console.log(response.statusText);
    } else {
      setStatus("Data not saved");
    }
  };

  return (
    <>
      <Layout sideHighlight="Issues">
        <main className="relative h-full">
          <button
            className="issueBtn border-2 rounded text-slate-50 bg-gray-800 border-black p-2 px-6 fixed right-12 bottom-12 z-50"
            onClick={handleNav}
          >
            Add an issue (+)
          </button>
          <div className="w-full border-b-2 px-16 flex justify-between mb-6 text-gray-700">
            <div className="flex gap-2 flex-row items-center text-lg font-semibold">
              <GoIssueOpened />
              <h1>Issues</h1>
            </div>
          </div>

          {issueList.map(
            (
              {
                issue,
                issue_id,
                description,
                owner,
                owner_id,
                project,
                project_id,
                created,
                comments,
              },
              index
            ) => (
              <div
                className={`shadow border hover:bg-slate-50 flex flex-col mb-4 cursor-pointer transition-colors rounded overflow-hidden`}
                key={issue_id}
              >
                <div
                  className="w-full rounded flex flex-col md:flex-row px-4 py-2 md:px-16 md:py-4 relative transition-colors"
                  onClick={() => toggleExpanded(`${index}`)}
                >
                  <div className="absolute flex right-2 top-2 flex-row gap-2 sm:gap-4">
                    <div class="relative">
                      <div class="inline-flex items-center overflow-hidden rounded-md border bg-white">
                        <button
                          class="h-full p-1 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                          onClick={(e) => toggleDivVisibility(e, issue_id)}
                        >
                          <span class="sr-only">Menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 hidden md:block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <CiMenuKebab className="block md:hidden" />
                        </button>
                      </div>

                      {editToggle === issue_id && (
                        <div
                          class="absolute end-0 w-40 rounded-md border border-gray-100 bg-white shadow-lg"
                          role="menu"
                        >
                          <div class="p-2">
                            <button
                              class="block rounded-lg px-4 pb-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 flex items-center gap-2"
                              role="menuitem"
                              onClick={(e) => handleEdit(e, issue_id)}
                            >
                              <BiEditAlt /> Edit issue
                            </button>

                            <button
                              type="button"
                              onClick={(event) =>
                                handleDelete(event, `${issue_id}`)
                              }
                              class="flex w-full items-center gap-2 rounded-lg px-4 py-1 text-sm text-red-700 hover:bg-red-50"
                              role="menuitem"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              Delete issue
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-4  md:gap-32 lg:gap-64  ">
                    <div className="flex flex-col md:gap-4">
                      <div className="flex md:gap-2 md:max-w-[200px]">
                        <div className="rounded-full h-12 w-12 text-2xl md:text-4xl">
                          <CgProfile />
                        </div>
                        <h1>
                          {owner} created a{" "}
                          <span className="text-red-600">new issue</span>
                        </h1>
                      </div>

                      <div>
                        <h1 className="font-medium text-gray-600">
                          <span className="border-b">Project Name</span> :{" "}
                          {project}
                        </h1>
                      </div>
                    </div>
                    <div className="flex h-full flex-col-reverse md:flex-col justify-between">
                      <div className="hidden md:block">
                        <h1 className="">{created}</h1>
                      </div>

                      <div className="">
                        <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                          <span className="border-b font-medium text-gray-600">
                            Issue name:
                          </span>{" "}
                          {issue}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className=" px-4 md:px-16 flex flex-col gap-6"
                  id={`${index}`}
                  style={{ height: 0, transition: "height 500ms" }}
                >
                  <h1>Description: {description}</h1>
                  <h1 className="font-semibold text-xl">
                    <span className="border-b-4">Comments</span>
                  </h1>

                  <div className="flex flex-col justify-between pb-4 gap-4">
                    <div className="flex flex-col gap-2">
                      {comments.map(
                        ({ description, created, owner }, index) => (
                          <div className="flex flex-col gap-2" key={index}>
                            <div className="flex items-center gap-2">
                              <CgProfile />{" "}
                              <span className="text-amber-400 border-b">
                                {owner}
                              </span>
                            </div>
                            <p>{description}</p>
                          </div>
                        )
                      )}
                    </div>

                    <form
                      className="w-full flex flex-col gap-2"
                      onSubmit={(event) => createComment(event, `${issue_id}`)}
                    >
                      <input
                        name="commenter"
                        id="commenter"
                        placeholder="Commenter"
                        value={owner_id}
                        ref={inputRefcommenter}
                        hidden
                        className="p-2 w-full md:w-1/2 border rounded"
                      ></input>
                      <input
                        placeholder="issue"
                        value={issue_id}
                        ref={inputRefissue}
                        hidden
                        className="p-2 w-full md:w-1/2 border rounded"
                      />
                      <input
                        placeholder="Add a comment"
                        className="p-2 w-full md:w-1/2 border rounded"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                      />
                      <button className="p-2 px-6 bg-slate-800 text-white rounded ml-4 w-44">
                        Add Comment
                      </button>
                    </form>
                  </div>

                  {editingIssueId === issue_id && (
                    <Edit_form
                      issue_id={editIssueData.issue_id}
                      project={editIssueData.project}
                      issue={editIssueData.issue}
                      description={editIssueData.description}
                      editingIssueId={null}
                    />
                  )}
                </div>
              </div>
            )
          )}

          <div
            className={
              nav
                ? "issueCard form border-black fixed right-0 top-20 w-[75%]  lg:w-[80%] h-[75%] rounded-l-xl rounded-t-2xl transform transition-all translate-x bg-[#ecf0f3] p-6  ease-in duration-300 items-center"
                : "border-2 fixed right-[-100%] top-0 p-6 pb-20 ease-in duration-300 transform transition-all"
            }
          >
            <h1 className="text-center font-semibold text-lg md:text-2xl">
              Add an Issue
            </h1>
            <div>
              <button className="issueBtn fixed bottom-5 right-10 border-2 rounded border-black p-2 px-6">
                Add issue (+)
              </button>
            </div>

            <div>
              <button
                className="fixed top-5 right-5 md:right-10 text-4xl"
                type="button"
                onClick={() => {
                  setNav(false);
                }}
              >
                <AiFillCloseCircle />
              </button>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col p-8 px-4 md:px-16 gap-4 issue-form"
              >
                <label htmlFor="project" className="font-semibold text-lg">
                  Project
                </label>
                <select
                  name="project"
                  id="project"
                  className="p-2"
                  value={project}
                  onChange={(event) => setProject(event.target.value)}
                  // defaultValue="Select a project"
                >
                  <option value="Select a project" disabled selected>
                    Select a project
                  </option>
                  {ProjectList.map(({ project, id }) => (
                    <option value={id} key={id}>
                      {" "}
                      {project}{" "}
                    </option>
                  ))}
                </select>
                <label htmlFor="name" className="font-semibold text-lg">
                  Issue Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="p-2"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="description" className="font-semibold text-lg">
                  Issue Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="p-2"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <button className="issueBtn fixed bottom-5 right-10 border-2 rounded border-black p-2 px-6">
                  Add issue (+)
                </button>
              </form>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Issues;
