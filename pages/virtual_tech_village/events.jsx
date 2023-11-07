import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Layout from "./components/layouts/layout";
import SharepadLayout from "./components/layouts/sharepadLayout";
import { motion, AnimatePresence } from "framer-motion";
import New_Event from "./components/forms/new_event";
import { BsFillCalendar2EventFill } from "react-icons/bs";

const Events = () => {
  const newEventRef = useRef();
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    date_time: "",
    host: "",
    image: null,
  });
  const [addEvent, setAddEvent] = useState(false);

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

  const handleEventSubmit = () => {};

  const handleClickOutsideNewEvent = (event) => {
    if (newEventRef.current && !newEventRef.current.contains(event.target)) {
      setAddEvent(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNewEvent);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNewEvent);
    };
  }, []);

  return (
    <>
      <Layout sideHighlight="sharepad">
        <SharepadLayout title="events">
          <section className="w-full relative">
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
              <div className="border shadow p-2 flex flex-col gap-3">
                <div>
                  <img
                    alt="Event 1"
                    className="object-cover w-full h-60 rounded-md"
                    height="200"
                    src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                  />
                  <h1 className="text-lg font-semibold">Virtual Hackathon</h1>
                  <p className="font-medium text-xs md:text-sm text-gray-700">
                    Hosted by CodeCraftersHub
                  </p>
                </div>
                <div>
                  <p className="text-red-700">
                    Date & Time: November 25, 2023, 8:00 PM
                  </p>
                  <p className="font-semibold">Price: $75</p>
                </div>
              </div>
              <div className="border shadow p-2 flex flex-col gap-3">
                <div>
                  <img
                    alt="Event 2"
                    className="object-cover w-full h-60 rounded-md"
                    height="200"
                    src="https://plus.unsplash.com/premium_photo-1661290247940-5450aa0babaf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                  />
                  <h1 className="text-lg font-semibold">
                    Webinar Series on Emerging Technologies
                  </h1>
                  <p className="font-medium text-xs md:text-sm text-gray-700">
                    Hosted by TechInsightsConnect
                  </p>
                </div>
                <div>
                  <p className="text-red-700">
                    Date & Time: November 25, 2023, 8:00 PM
                  </p>
                  <p className="font-semibold">Price: $75</p>
                </div>
              </div>
              <div className="border shadow p-2 flex flex-col gap-3">
                <div>
                  <img
                    alt="Event 3"
                    className="object-cover w-full h-60 rounded-md"
                    height="200"
                    src="https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                  />
                  <h1 className="text-lg font-semibold">
                    Tech Talk Panel Discussion
                  </h1>
                  <p className="font-medium text-xs md:text-sm text-gray-700">
                    Hosted by ByteMindsForum
                  </p>
                </div>
                <div>
                  <p className="text-red-700">
                    Date & Time: November 25, 2023, 8:00 PM
                  </p>
                  <p className="font-semibold">Price: $75</p>
                </div>
              </div>
              <div className="border shadow p-2 flex flex-col gap-3">
                <div>
                  <img
                    alt="Event 4"
                    className="object-cover w-full h-60 rounded-md"
                    height="200"
                    src="https://plus.unsplash.com/premium_photo-1680859126164-ac4fd8f56625?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                  />
                  <h1 className="text-lg font-semibold">
                    Code Review Sessions
                  </h1>
                  <p className="font-medium text-xs md:text-sm text-gray-700">
                    Hosted by DevCritiqueHub
                  </p>
                </div>
                <div>
                  <p className="text-red-700">
                    Date & Time: November 25, 2023, 8:00 PM
                  </p>
                  <p className="font-semibold">Price: $75</p>
                </div>
              </div>
              <div className="border shadow p-2 flex flex-col gap-3">
                <div>
                  <img
                    alt="Event 5"
                    className="object-cover w-full h-60 rounded-md"
                    height="200"
                    src="https://images.unsplash.com/photo-1598908314766-3e3ce9bd2f48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                  />
                  <h1 className="text-lg font-semibold">
                    Virtual Tech Networking Event
                  </h1>
                  <p className="font-medium text-xs md:text-sm text-gray-700">
                    Hosted by ConnectTechPros
                  </p>
                </div>
                <div>
                  <p className="text-red-700">
                    Date & Time: November 25, 2023, 8:00 PM
                  </p>
                  <p className="font-semibold">Price: $75</p>
                </div>
              </div>
              <div className="border shadow p-2 flex flex-col gap-3">
                <div>
                  <img
                    alt="Event 6"
                    className="object-cover w-full h-60 rounded-md"
                    height="200"
                    src="https://plus.unsplash.com/premium_photo-1681122423210-f7639c75f338?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                  />
                  <h1 className="text-lg font-semibold">
                    Tech Demos and Showcases
                  </h1>
                  <p className="font-medium text-xs md:text-sm text-gray-700">
                    Hosted by InnovateTechExpo
                  </p>
                </div>
                <div>
                  <p className="text-red-700">
                    Date & Time: November 25, 2023, 8:00 PM
                  </p>
                  <p className="font-semibold">Price: $75</p>
                </div>
              </div>
            </section>

            <div className="fixed bottom-5 right-10 rounded p-2 bg-white text-2xl border cursor-pointer transition transform hover:scale-105"
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
