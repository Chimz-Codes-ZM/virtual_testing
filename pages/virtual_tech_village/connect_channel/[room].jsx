import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layouts/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Channels from "../components/connect/channels";

import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSelector } from "react-redux";
import Toolbar from "../components/inbox/Toolbar";
import MessageInput from "../components/inbox/MessageInput";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { motion, AnimatePresence } from "framer-motion";

const connect = () => {
  const [userData, setUserData] = useState(null);

  const [addChannel, setAddChannel] = useState(false);
  const [newChannel, setNewChannel] = useState("");
  const router = useRouter();
  const { room } = router.query;
  const messagesEndRef = useRef(null);


  const id = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0].user_id;
    } else {
      return null;
    }
  });

  const { readyState, sendJsonMessage } = useWebSocket(
    `wss://baobabpad-334a8864da0e.herokuapp.com/ws/channels/${id}/${room}/`,
    {
      onOpen: () => {
        console.log("Connected to Channels!");
      },
      onClose: () => {
        console.log("Disconnected from Channels!");
      },
      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "unread_count":
            break;
          case "new_message_notification":
            setUnreadMessageCount((count) => (count += 1));
            setUnreadMessageCount(data.count);
            console.log(data.content);
            setNotificationContent(data.content);
            break;
          default:
            console.error("Unknown message type!");
            break;
        }
      },
      retryOnError: true,
    }
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Layout sideHighlight="connect">
        <div className="flex custom-height relative">
          <div className="hidden lg:block py-14">
            <Channels addChannel={addChannel} setAddChannel={setAddChannel} />
          </div>
          
          <div className="relative grow shadow overflow-hidden h-full flex justify-center">
            <div className="grow relative sm:p-4 py-1 overflow-hidden max-h-[500px] mt-14 pt-10 max-w-3xl">
              <Toolbar
                // names={usersName}
                // avatar={userPicture}
                // roomName={roomName}
                // userId={id}
                // pinned={pinned}
                // unread={unread}
                // archived={archived}
              />
              <div className="scrollbar h-full">
                <div className="mx-auto max-w-6xl sm:px-14 px-4 py-4 pt-10 pb-4 max-h-full overflow-y-auto">
                  <div className="">
                    {/* {messageHistory.length > 0 && (
                      <div className="message-list flex flex-col gap-1 pt-2">
                        {messageHistory.map((message, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 w-full"
                          >
                            {message.from_user?.email === userData[0].email && (
                              <div className="self-end  p-1 px-3 rounded-lg bg-slate-800 text-white">
                                {message.content}
                              </div>
                            )}
                            {message.from_user?.email !== userData[0].email && (
                              <div className="p-1 px-3 rounded-lg bg-white text-gray-800 shadow justify-start self-start">
                                {message.content}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )} */}
                  </div>
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
            </div>
            <MessageInput/>
          </div>
        </div>
        
      </Layout>
    </>
  );
};

export default connect;
