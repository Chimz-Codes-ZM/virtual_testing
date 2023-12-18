import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

import Layout from "./components/layouts/layout";
import SharepadLayout from "./components/layouts/sharepadLayout";
import SidePanel from "./components/events/SidePanel";
import { trends } from "../data";
import JobAdded from "./components/alerts/jobAdded";

import axios from "axios";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

import { motion, AnimatePresence } from "framer-motion";
import { BsFillCalendar2EventFill } from "react-icons/bs";

const sharepad = () => {
  const newEventRef = useRef();
  const selectedEventRef = useRef();
  const [newPost, setNewPost] = useState({
    title: "",
    source: "",
    date: "",
    link: "",
    image: "",
  });

  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [addEvent, setAddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [success, setSuccess] = useState(false);

  const [posts, setPosts] = useState([]);

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

    setNewPost({
      ...newPost,
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

  const handleEventSubmit = (e) => {
    e.preventDefault();



    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/trends/${user.user_id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (response.ok) {
        handleEventAlert();
        setAddEvent(false);
        setNewPost({
          title: "",
          source: "",
          date: "",
          link: "",
          image: ""
        });
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

  // AXIOS REQUEST

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   const decodedToken = jwt_decode(token);
  //   const id = decodedToken.user_id;

  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         `https://baobabpad-334a8864da0e.herokuapp.com/village/events/${id}/`
  //       );
  //       console.log("This is the events ===>", response.data);
  //       setEvents(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <>
      <Layout sideHighlight="sharepad">
        <SharepadLayout title="trends">
          <section className="w-full relative">
            {success && (
              <div className="rounded fixed bottom-10 sm:right-10 z-[999] max-w-[450px]">
                <JobAdded
                  message="New post added successfully"
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
                            Create a New Community Post
                          </h1>
                          <p className="text-lg font-normal text-gray-500">
                            Fill out the details below to create a new post for
                            the community to read about
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
                              Post Title
                            </label>
                            <input
                              type="text"
                              name="title"
                              value={newPost.title}
                              className="border rounded px-1"
                              onChange={handleEventChange}
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="host"
                              className="text-sm font-medium"
                            >
                              Source:
                            </label>
                            <input
                              type="text"
                              name="source"
                              value={newPost.source}
                              className="border rounded px-1"
                              onChange={handleEventChange}
                              placeholder="e.g., TechCrunch"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="date_time"
                              className="text-sm font-medium"
                            >
                              Date posted
                            </label>
                            <input
                              type="date"
                              name="date"
                              value={newPost.date}
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
                                Link to post
                              </label>

                              <input
                                type="text"
                                className="mt-2 w-full px-2 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                placeholder="Enter the link to the post..."
                                name="link"
                                value={newPost.link}
                                onChange={handleEventChange}
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="image"
                              className="text-sm font-medium"
                            >
                              Link to cover image
                            </label>
                            <input
                              
                              id="image"
                              type="text"
                              name="image"
                              value={newPost.image}
                              className="border rounded px-1"
                              onChange={handleEventChange}
                              placeholder="link to the cover image"
                            />
                          </div>

                          <div className="">
                            <button className="bg-gray-900 text-white w-full rounded-md p-1 shadow hover:bg-gray-800 transition delay-100">
                              Add New Post
                            </button>
                          </div>
                        </form>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="relative h-[250px] lg:h-[500px] overflow-hidden rounded-lg">
              <img
                alt="Header Image"
                className="object-cover w-full h-full"
                height="500"
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "1200/500",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="text-white font-bold text-6xl absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1>Trends</h1>
              </div>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1 py-2 md:p-6 ">
              {trends.map((article) => (
                <a
                  target="_blank"
                  href={article.link}
                  className="p-2 flex flex-col gap-3 transform hover:scale-105 transition-transform cursor-pointer"
                  key={article.id}
                >
                  <div>
                    <img
                      alt={article.title}
                      className="object-cover w-full h-60"
                      height="200"
                      src={article.img}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                    />
                    <h1 className="text-lg font-semibold">{article.title}</h1>
                  </div>
                  <div className="flex justify-between text-gray-700 text-xs">
                    <p>{article.source}</p>{" "}
                    <p className="">Date: {article.date}</p>
                  </div>
                </a>
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
              ""
            )}
          </section>
        </SharepadLayout>
      </Layout>
    </>
  );
};

export default sharepad;
