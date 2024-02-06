import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Skeleton from "../../admin/components/skeleton";
import { BsPinAngle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import jwt_decode from "jwt-decode";
import StartConversation from "./StartConversation";
import axios from "axios";
import { API_URL } from "@/config";

const MessageList = ({ selectedConversation, onConversationClick }) => {
  const router = useRouter();

  const [conversations, setConversations] = useState(null);

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
          `https://${API_URL}/village/conversation_data/${user.user_id}/`
        );
        setConversations(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  const handleConversationClick = (route) => {

    router.push(`/virtual_tech_village${route}`);
  };

  return (
    <div className="h-full flex flex-col items-center pt-2 border-r w-full md:w-72 md:max-w-72">
            <div className="pb-4 font-semibold text-lg text-teal-700">Conversations</div>

      <div className="w-full">
        {conversations?.length > 0 ? (
          conversations.map((convo) => (
              <div
                key={convo.conversation_id}
                className={`flex gap-4 px-6 p-2 hover:bg-gray-100 transition-colors delay-150 ease-in cursor-pointer relative ${
                  selectedConversation === convo.id ? "bg-gray-50" : "bg-white"
                }`}
                onClick={() => handleConversationClick(convo.route)}
              >
                <div className="h-8 w-8 rounded-full relative bg-slate-600">
                  <Image
                    objectFit="cover"
                    layout="fixed"
                    fill
                    src={convo.other_user_image}
                    alt="Profile Picture"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                </div>
                <div className="flex items-center">
                  <h1 className="text-sm">{convo.other_user}</h1>
                </div>
                <div>{convo.pinned === "True" ? <div className="h-5 w-5 absolute right-2"><BsPinAngle /></div> : <div></div>}</div>
              </div>
          ))
        ) : (
          <Skeleton />
        )}
      </div>

      <StartConversation />
    </div>
  );
};

export default MessageList;
