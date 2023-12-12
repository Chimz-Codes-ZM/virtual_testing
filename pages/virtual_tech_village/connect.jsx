import React, { useState, useEffect, useRef } from "react";
import Layout from "./components/layouts/layout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Image from "next/image";


import Channels from "./components/connect/channels";

import { motion} from "framer-motion";

const connect = () => {
  const [userData, setUserData] = useState(null)
  const [addChannel, setAddChannel] = useState(false);
  const [newChannel, setNewChannel] = useState({
    channel_name: ""
  });
  const channelRef = useRef()

  const router = useRouter()

  const handleAddChannelSubmit = (e) => {
    e.preventDefault();
     router.push(`/virtual_tech_village/connect_channel/${newChannel.channel_name}`)
    setAddChannel(!addChannel);
  };

  const handleClickOutsideAddChannel = (event) => {
    if (
      channelRef.current &&
      !channelRef.current.contains(event.target)
    ) {
      setAddChannel(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideAddChannel);


    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAddChannel);
    };
  }, []);

  return (
    <>
      <Layout sideHighlight="connect">
        <div className="flex h-screen relative">
          <Channels addChannel={addChannel} setAddChannel={setAddChannel} />
          <div className="grow h-full text-lg font-semibold md:flex flex-col justify-center items-center text-gray-600 opacity-50 gap-4 hidden">
            <div className="relative h-40 w-40">
              <Image
                fill
                objectFit="cover"
                src="/logo.png"
                className="rounded-full opacity-20"
                alt="Baobabpad Logo"
              />
            </div>
          <h1>Elevating African Technology Talent, Virtually and Globally... </h1>
          </div>
        </div>

        {addChannel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            
            className="fixed inset-0 flex items-center justify-center z-[999] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
          >
            <div>
              {" "}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={channelRef}
              >
                <div className="p-6 bg-white border z-50 rounded flex flex-col gap-2">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">
                      Create a New Channel
                    </h1>
                    <p className="text-lg font-normal text-gray-500">
                      Fill out the details below to create a new channel for the
                      community
                    </p>
                  </div>

                  <form
                    onSubmit={handleAddChannelSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="event_name"
                        className="text-sm font-medium"
                      >
                        Channel Name
                      </label>
                      <input
                        type="text"
                        name="event_name"
                        value={newChannel.channel_name}
                        className="border rounded px-1"
                        onChange={(e) =>
                          setNewChannel({channel_name: e.target.value})
                        }
                      />
                    </div>

                    <div className="">
                      <button className="bg-gray-900 text-white w-full rounded-md p-1 shadow hover:bg-gray-800 transition delay-100">
                        Add New Channel
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </Layout>
    </>
  );
};

export default connect;
