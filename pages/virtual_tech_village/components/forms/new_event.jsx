import React from "react";

const New_Event = ({ onSubmit, onChange, value }) => {
  return (
    <div className="p-6 bg-white border z-50 rounded flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Create a New Event</h1>
        <p className="text-lg font-normal text-gray-500">
          Fill out the details below to create a new event for the community
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="event_name" className="text-sm font-medium">
            Event Name
          </label>
          <input
            type="text"
            name="event_name"
            value={value?.event_name}
            className="border rounded px-1"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="host" className="text-sm font-medium">
            Hosted By:
          </label>
          <input
            type="text"
            name="host"
            value={value?.host}
            className="border rounded px-1"
            onChange={onChange}
            placeholder="e.g., Full Time"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="date_time" className="text-sm font-medium">
            Date and time
          </label>
          <input
            type="datetime-local"
            name="date_time"
            value={value?.date_time}
            className="border rounded px-1"
            onChange={onChange}
            placeholder="e.g., On-site"
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
            value={value?.image}
            className="border rounded px-1"
            onChange={(e) => onChange("image", e.target.files[0])}
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

export default New_Event;
