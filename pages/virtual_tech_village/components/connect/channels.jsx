import React, { useState, useEffect } from "react";
import Image from "next/image";
import Christina_2 from "/public/placeholders/Christina_2.webp";
import axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";
import Skeleton from "../../admin/components/skeleton";

import { MdGroupRemove } from "react-icons/md";
import { API_URL } from "@/config";

const Channels = ({ addChannel, setAddChannel }) => {
  const [conversations, setConversations] = useState([]);

  const handleAddChannel = () => {
    setAddChannel(!addChannel);
  };

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
          `https://${API_URL}/village/channel_list/${user.user_id}/`
        );
        setConversations(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="h-full flex flex-col items-center pt-12 border-r w-full md:w-72 md:max-w-72">
      <div className="pb-4 font-semibold text-lg text-teal-700">Channels</div>

      <div className="flex flex-col w-full h-full justify-between">
        <div>
          {conversations.length > 0 ? (
            conversations.map((channel, index) => (
              <Link
                href={`/virtual_tech_village/connect_channel/${channel.channel_name}`}
                key={index}
                className="w-full h-14 flex justify-between items-center px-1 border-y cursor-pointer hover:bg-gray-100 transition-colors delay-75 ease-in-out"
              >
                <div className="font-semibold text-sm">
                  #{channel.channel_name}
                </div>
                <div className="flex gap-1">
                  <div className="relative h-8 w-8 rounded-full">
                    <Image
                      fill
                      objectFit="cover"
                      src={channel.image}
                      className="rounded-full"
                      alt="Profile image"
                    />
                  </div>

                  <div className=" text-gray-500 font-light text-sm">+23</div>
                </div>
              </Link>
            ))
          ) : (
            <Skeleton />
          )}
        </div>

        {user && user.account_type === "village admin profile" ? (
          <div
            onClick={() => handleAddChannel()}
            className="cursor-pointer text-2xl p-2 shadow-md mb-2 self-end mr-4 rounded w-fit"
          >
            <MdGroupRemove />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Channels;
