import React from 'react'

const SidePanel = ({ event }) => {
    return (
      <div className="bg-black text-white min-w-[30rem]">
        <div
          className="border shadow p-2 flex flex-col gap-3 transform hover:scale-105 transition-transform cursor-pointer"
        >
          <div>
            <img
              alt="Event 1"
              className="object-cover w-full h-60 rounded-md"
              height="200"
              src={event?.img_src}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
            />
            <h1 className="text-lg font-semibold">{event?.title}</h1>
            <p className="font-medium text-xs md:text-sm text-gray-700">
              Hosted by {event?.host}
            </p>
          </div>
          <div>
            <p className="text-red-700">Date & Time: {event?.date_time}</p>
            <p className="font-semibold">{event?.price}</p>
          </div>
        </div>
      </div>
    );
  };

export default SidePanel
