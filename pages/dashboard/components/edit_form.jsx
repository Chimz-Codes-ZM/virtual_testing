import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import jwt_decode from "jwt-decode";

function EditForm(props) {
  const [editIssueData, setEditIssueData] = useState({
    issue_id: props.issue_id,
    project: props.project,
    issue: props.issue,
    description: props.description,
  });
  const [editingIssueId, setEditingIssueId] = useState(props.editingIssueId);
  const [showForm, setShowForm] = useState(true);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (!showForm) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;
   
      const response = await fetch (
        `https://baobabpad-334a8864da0e.herokuapp.com/api/edit_issue/${id}/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'issue_id': props.issue_id,
            'project': editIssueData.project,
            'issue': editIssueData.issue,
            'description': editIssueData.description
          })
        }
      );
      if (response.ok) {
        alert('Issue edit successful!');
        window.location.reload();
      } else {
        alert("Issue edit not successful!");
        window.location.reload();
      }

    handleCloseForm()
  };

  return (
    <div className="relative  border-gray-950 border-6 ">
      <div className="absolute inset-0 bg-slate-900 opacity-[0.4]"></div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 w-2/3 sm:w-1/2 md:p-8 gap-4 issue-form fixed top-20 right-8 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-40 bg-gray-900 rounded-lg"
      >
        <button
          className="fixed top-22 sm:top-2 right-10 sm:right-10 text-4xl text-white"
          type="button"
          onClick={handleCloseForm}
        >
          <AiFillCloseCircle />
        </button>
        <label htmlFor="project" className="font-semibold text-xl text-white">
          Project
        </label>
        <select
          name="project"
          className="p-2 rounded-md"
          value={editIssueData.project}
          onChange={(event) =>
            setEditIssueData({ ...editIssueData, project: event.target.value })
          }
        >
          <option value={props.project} selected>
            {props.project}
          </option>
        </select>

        <label htmlFor="name" className="font-semibold text-xl text-white">
          Issue Name
        </label>
        <input
          type="text"
          name="name"
          className="p-2 border rounded-md"
          value={editIssueData.issue}
          onChange={(event) =>
            setEditIssueData({ ...editIssueData, issue: event.target.value })
          }
        />

        <label
          htmlFor="description"
          className="font-semibold text-xl text-white"
        >
          Issue Description
        </label>
        <input
          type="text"
          name="description"
          className="p-2 rounded-md"
          value={editIssueData.description}
          onChange={(event) =>
            setEditIssueData({
              ...editIssueData,
              description: event.target.value,
            })
          }
        />

        <button className="issueBtn border-2 rounded-md border-white p-2 px-6 text-white">
          Edit issue (+)
        </button>
      </form>
    </div>
  );
}

export default EditForm;
