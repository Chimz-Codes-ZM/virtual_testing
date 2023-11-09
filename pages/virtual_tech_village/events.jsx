import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

import Layout from "./components/layouts/layout";
import SharepadLayout from "./components/layouts/sharepadLayout";
import SidePanel from "./components/events/SidePanel";

import New_Event from "./components/forms/new_event";

import { motion, AnimatePresence } from "framer-motion";
import { BsFillCalendar2EventFill } from "react-icons/bs";

import { event_grid } from "../data";

const Events = () => {
  const newEventRef = useRef();
  const selectedEventRef = useRef();
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    date_time: "",
    host: "",
    description: "",
    image: null
  });
  const [addEvent, setAddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = () => {
    setAddEvent(true);
  };

  const handleEventChange = (e) => {
    if (e.target) {
      const { name, value, files } = e.target;
  
      setNewEvent((prevEvent) => ({
        ...prevEvent,
        [name]: name === 'image' ? files[0] : value,
      }));
    }
  };
  

  const handleSelectEvent = (item) => {
    setSelectedEvent(item);
  };

  const handleEventSubmit = (formData) => {
    console.log(formData)
    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/events/109/`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        alert("New event added successfully");
        setAddEvent(false)
        setNewEvent({
          event_name: "",
          date_time: "",
          host: "",
          description: "",
          image: "",
        })
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
  };

  const handleClickOutsideNewEvent = (event) => {
    if (newEventRef.current && !newEventRef.current.contains(event.target)) {
      setAddEvent(false);
    }
  };

  const handleClickOutsideSelectedEvent = (event) => {
    if (
      selectedEventRef.current &&
      !selectedEventRef.current.contains(event.target)
    ) {
      setSelectedEvent(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNewEvent);
    document.addEventListener("mousedown", handleClickOutsideSelectedEvent);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNewEvent);
      document.removeEventListener(
        "mousedown",
        handleClickOutsideSelectedEvent
      );
    };
  }, []);

  return (
    <>
      <Layout sideHighlight="sharepad">
        <SharepadLayout title="events">
          <section className="w-full relative">
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                className="fixed inset-0 z-[99] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-sm"
              >
                <div
                  className="fixed top-0 right-0 h-full bg-white overflow-y-auto p-4"
                  ref={selectedEventRef}
                >
                  <SidePanel
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                  />
                </div>
              </motion.div>
            )}
            <div>
              {addEvent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 flex items-center justify-center z-[99] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
                >
                  <div ref={newEventRef}>
                    {" "}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <New_Event
                        onSubmit={handleEventSubmit}
                        onChange={handleEventChange}
                        value={newEvent}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <img
                alt="Header Image"
                className="object-cover w-full h-full"
                height="500"
                src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "1200/500",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="text-white font-bold text-6xl absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1>Events</h1>
              </div>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 ">
              {event_grid.map((item) => (
                <div
                  className="border shadow p-2 flex flex-col gap-3 transform hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleSelectEvent(item)}
                  key={item.id}
                >
                  <div>
                    <img
                      alt="Event 1"
                      className="object-cover w-full h-60 rounded-md"
                      height="200"
                      src={item.img_src}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                    />
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <p className="font-medium text-xs md:text-sm text-gray-700">
                      Hosted by {item.host}
                    </p>
                  </div>
                  <div>
                    <p className="text-red-700">
                      Date & Time: {item.date_time}
                    </p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </div>
              ))}
            </section>

            <div
              className="fixed bottom-5 right-10 rounded p-2 bg-white text-2xl border cursor-pointer transition transform hover:scale-105"
              onClick={handleAddEvent}
            >
              <BsFillCalendar2EventFill />
            </div>
          </section>
        </SharepadLayout>
      </Layout>
    </>
  );
};

export default Events;
