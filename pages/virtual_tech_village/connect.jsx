import React, { useState, useEffect, useRef } from "react";
import Layout from "./components/layouts/layout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Dropdown from "./components/connect/dropdown";
import Dropdown_interns from "./components/connect/dropdown_interns";
import Dropdown_companies from "./components/connect/dropdown_companies";
import Image from "next/image";
import Channels from "./components/connect/channels";
import { motion } from "framer-motion";
import { API_URL } from "@/config";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const connect = () => {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [addChannel, setAddChannel] = useState(false);
  const [options, setOptions] = useState(null);
  const [interOptions, setInternOptions] = useState(null);
  const [companyOptions, setCompanyOptions] = useState(null);
  const [newChannel, setNewChannel] = useState({
    channel_name: "",
    image: null,
    channel_members_talents: [],
    channel_members_interns: [],
    channel_members_companies: [],
  });
  const channelRef = useRef();
  const imageRef = useRef();

  const router = useRouter();

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://${API_URL}/village/create_channel/${user.user_id}/`
        );
        setOptions(response.data[0].talents);
        setInternOptions(response.data[1].interns);
        setCompanyOptions(response.data[2].companies);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  const handleAddChannelSubmit = (e) => {
    e.preventDefault();
    toast.loading('Creating channel...', {duration: 2000});

    const formData = new FormData();

    for (const key of Object.keys(newChannel)) {
      formData.append(key, newChannel[key]);
    }

    formData.append("image", imageRef.current);
    const sendData = async () => {
      const response = await fetch(
        `https://${API_URL}/village/create_channel/${user.user_id}/`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setAddChannel(!addChannel);
        setNewChannel({
          channel_name: "",
          image: null,
          channel_members: [],
        });
        toast.success("Channel creation successful!");
      } else {
        toast.error("Channel creation unsuccessful! Please try again");
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
    console.log(formData);
  };
  const handleClickOutsideAddChannel = (event) => {
    if (channelRef.current && !channelRef.current.contains(event.target)) {
      setAddChannel(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideAddChannel);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAddChannel);
    };
  }, []);

  const handleChannelChange = (e) => {
    const { name, value } = e.target;

    setNewChannel({
      ...newChannel,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    imageRef.current = e.target.files[0];
  };

  return (
    <>
      <Layout sideHighlight="connect">
        <Toaster />
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
            <h1>
              Elevating African Technology Talent, Virtually and Globally...{" "}
            </h1>
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
                        id="channel_name"
                        name="channel_name"
                        value={newChannel.channel_name}
                        className="border rounded px-1"
                        onChange={handleChannelChange}
                      />
                    </div>

                    <Dropdown
                      options={options}
                      newChannel={newChannel}
                      setNewChannel={setNewChannel}
                      channel_members="Select Channel Members: Talents"
                    />

                    <Dropdown_interns
                      options={interOptions}
                      newChannel={newChannel}
                      setNewChannel={setNewChannel}
                      channel_members="Select Channel Members: Interns"
                    />

                    <Dropdown_companies
                      options={companyOptions}
                      newChannel={newChannel}
                      setNewChannel={setNewChannel}
                      channel_members="Select Channel Members: Companies"
                    />

                    <div className="flex flex-col gap-1">
                      <label htmlFor="image" className="text-sm font-medium">
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
