import React from 'react'

const SidePanel = ({ event }) => {
    return (
      <div className="bg-gray-900 text-white min-w-[30rem]">
        <div
          className="shadow p-2 flex flex-col gap-3 transform transition-transform px-4"
        >
          <div>
            <img
              alt={event?.event_name}
              className="object-cover w-full h-60 rounded-md"
              height="200"
              src={event?.image}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
            />
            <h1 className="text-lg font-semibold">{event?.event_name}</h1>
            <p className="font-medium text-xs md:text-sm text-gray-500">
              Hosted by {event?.host}
            </p>
          </div>
          <div>
            <p className="text-red-700">Date & Time: {event?.data_time}</p>
            <p className="font-semibold">$75</p>
          </div>
        </div>
      </div>
    );
  };

export default SidePanel
