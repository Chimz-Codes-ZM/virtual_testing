import React, { useState } from "react";
import { useRouter } from "next/router";

const New_job = ({ onSubmit, onChange, value }) => {
  return (
    <div className="p-6 bg-white border z-50 rounded flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Enter New Job Listing</h1>
        <p className="text-lg font-normal text-gray-500">
          Fill out the details below to post a new job opportunity
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="position" className="text-sm font-medium">
            Position
          </label>
          <input
            type="text"
            name="position"
            value={value?.position}
            className="border rounded px-1"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="job_type" className="text-sm font-medium">
            Job Type
          </label>
          <input
            type="text"
            name="job_type"
            value={value?.job_type}
            className="border rounded px-1"
            onChange={onChange}
            placeholder="e.g., Full Time"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={value?.location}
            className="border rounded px-1"
            onChange={onChange}
            placeholder="e.g., On-site"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="link" className="text-sm font-medium">
            Link
          </label>
          <input
            type="text"
            name="link"
            value={value?.link}
            className="border rounded px-1"
            onChange={onChange}
            placeholder="e.g., www.glassdoor.com/job-123"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-sm font-medium">
            Cover Image
          </label>
          <input
            accept="image/*"
            id="image"
            type="file"
            name="image"
            value=""
            className="border rounded px-1"
            onChange=""
            placeholder="e.g., www.glassdoor.com/job-123"
          />
        </div>

        <div className="">
          <button className="bg-gray-900 text-white w-full rounded-md p-1 shadow hover:bg-gray-800 transition delay-100">
            Add New Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default New_job;
