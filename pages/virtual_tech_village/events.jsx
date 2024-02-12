import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

import Layout from "./components/layouts/layout";
import SharepadLayout from "./components/layouts/sharepadLayout";
import SidePanel from "./components/events/SidePanel";

import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import { motion, AnimatePresence } from "framer-motion";
import { BsFillCalendar2EventFill } from "react-icons/bs";

import { event_grid } from "../data";
import { API_URL } from "@/config";

const Events = () => {
  const newEventRef = useRef();
  const selectedEventRef = useRef();
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    date_time: "",
    host: "",
    description: "",
    image: null,
  });

  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [addEvent, setAddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [success, setSuccess] = useState(false);

  const [events, setEvents] = useState([]);

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const handleAddEvent = () => {
    setAddEvent(true);
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;

    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    imageRef.current = e.target.files[0];
  };

  const handleSelectEvent = (item) => {
    setSelectedEvent(item);
  };

  const handleEventAlert = () => {
    setSuccess(true);
  };

  const handleEventDismiss = () => {
    setSuccess(false);
  };

  const formatDateTime = (dateTime) => {
    const [date, time] = dateTime.split("T");
    return `${date} ${time}`;
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key of Object.keys(newEvent)) {
      formData.append(key, newEvent[key]);
    }

    formData.append("image", imageRef.current);
    const sendData = async () => {
      const response = await fetch(
        `https://${API_URL}/village/events/${user.user_id}/`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        handleEventAlert();
        setAddEvent(false);
        setNewEvent({
          event_name: "",
          date_time: "",
          host: "",
          description: "",
        });
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
    console.log(formData);
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

  // AXIOS REQUEST

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://${API_URL}/village/events/${user.user_id}/`
        );
        console.log("This is the events ===>", response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Layout sideHighlight="sharepad">
        <SharepadLayout title="events">
          <section className="w-full relative">
            {success && (
              <div className="rounded fixed bottom-10 sm:right-10 z-[999] max-w-[450px]">
                <JobAdded
                  message="New event added successfully"
                  alertDismiss={handleEventDismiss}
                />
              </div>
            )}
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                className="fixed inset-0 z-[99] bg-gray-900 bg-opacity-20 transition backdrop-blur-sm"
              >
                <div
                  className="fixed top-0 right-0 h-full bg-gray-900 overflow-y-auto overflow-x-hidden"
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
                  className="fixed inset-0 flex items-center justify-center z-[999] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
                >
                  <div ref={newEventRef}>
                    {" "}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="p-6 bg-white border z-[50] rounded flex flex-col gap-2">
                        <div className="flex flex-col gap-4">
                          <h1 className="text-2xl font-semibold">
                            Create a New Community Event
                          </h1>
                          <p className="text-lg font-normal text-gray-500">
                            Fill out the details below to create a new event for
                            the community
                          </p>
                        </div>

                        <form
                          onSubmit={handleEventSubmit}
                          className="flex flex-col gap-4"
                        >
                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="event_name"
                              className="text-sm font-medium"
                            >
                              Event Name
                            </label>
                            <input
                              type="text"
                              name="event_name"
                              value={newEvent.event_name}
                              className="border rounded px-1"
                              onChange={handleEventChange}
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="host"
                              className="text-sm font-medium"
                            >
                              Hosted By:
                            </label>
                            <input
                              type="text"
                              name="host"
                              value={newEvent.host}
                              className="border rounded px-1"
                              onChange={handleEventChange}
                              placeholder="e.g., Baobabpad"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="date_time"
                              className="text-sm font-medium"
                            >
                              Date and time
                            </label>
                            <input
                              type="datetime-local"
                              name="date_time"
                              value={newEvent.date_time}
                              className="border rounded px-1"
                              onChange={handleEventChange}
                              placeholder="e.g., On-site"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Description
                              </label>

                              <textarea
                                id="OrderNotes"
                                className="mt-2 w-full px-2 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="4"
                                placeholder="Enter the event description..."
                                name="description"
                                value={newEvent.description}
                                onChange={handleEventChange}
                              ></textarea>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="image"
                              className="text-sm font-medium"
                            >
                              Cover Image
                            </label>
                            <input
                              accept="image/*"
                              id="image"
                              type="file"
                              name="image"
                              value={image}
                              className="border rounded px-1"
                              onChange={handleChange}
                              placeholder="e.g., www.glassdoor.com/job-123"
                            />
                          </div>

                          <button className="bg-gray-900 text-white w-full rounded-md p-1 shadow hover:bg-gray-800 transition delay-100">
                            Add New Event
                          </button>
                        </form>
                      </div>
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
              {events.map((item, index) => (
                <div
                  className="border shadow p-2 flex flex-col gap-3 transform hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleSelectEvent(item)}
                  key={index}
                >
                  <div>
                    <img
                      alt={item.event_name}
                      className="object-cover w-full h-60 rounded-md"
                      height="200"
                      src={item.image}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                    />
                    <h1 className="text-lg font-semibold">{item.event_name}</h1>
                    <p className="font-medium text-xs md:text-sm text-gray-700">
                      Hosted by {item.host}
                    </p>
                  </div>
                  <div>
                    <p className="text-red-700">
                      Date & Time: {formatDateTime(item.data_time)}
                    </p>
                    <p className="w-full truncate">{item.description}</p>
                  </div>
                </div>
              ))}
            </section>
            {user && user.account_type === "village admin profile" ? (
              <div
                className="fixed bottom-5 right-10 rounded p-2 bg-white text-2xl border cursor-pointer transition transform hover:scale-105"
                onClick={handleAddEvent}
              >
                <BsFillCalendar2EventFill />
              </div>
            ) : (
              <div></div>
            )}
          </section>
        </SharepadLayout>
      </Layout>
    </>
  );
};

export default Events;
