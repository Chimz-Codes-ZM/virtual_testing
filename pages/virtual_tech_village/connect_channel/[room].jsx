import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layouts/layout";
import { useRouter } from "next/router";
import Channels from "../components/connect/channels";
import Image from "next/image";

import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSelector } from "react-redux";
import Toolbar from "../components/connect/Toolbar";
import MessageInput from "../components/connect/MessageInput";

const connect = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [chatName, setChatName] = useState(null);
  const [message, setMessage] = useState([]);
  const [messageHistory, setMessageHistory] = useState([]);
  const [hasMoreMessages, setHasMoreMessages] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [conversation, setConversation] = useState(null);
  const [page, setPage] = useState(2);
  const [meTyping, setMeTyping] = useState(false);
  const [typing, setTyping] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [pinned, setPinned] = useState("");
  const [archived, setArchived] = useState("");
  const [unread, setUnread] = useState("");

  // MESSAGE INPUT STATE
  const [messageText, setMessageText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const { room } = router.query;

  const usersName = chatName ? chatName : "";
  const userPicture = avatarUrl ? avatarUrl : "";

  const id = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0].user_id;
    } else {
      return null;
    }
  });

  const email = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0].email;
    } else {
      return null;
    }
  });

  const { readyState, sendMessage, sendJsonMessage } = useWebSocket(
    `wss://baobabpad-334a8864da0e.herokuapp.com/ws/channels/${id}/${room}/`,
    {
      onOpen: () => {
        // console.log("Connected");
        sendJsonMessage({
          type: "read_messages",
        });
      },
      onClose: () => {
        // console.log("Disconnected!");
      },

      retryOnError: true,

      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "chat_message_echo":
            setMessageHistory((prev) => [...prev, data.message[0]]);
            break;

          case "last_50_messages":
            console.log("Updated messageHistory:", data.messages);
            setMessageHistory((prev) => [...data.messages, ...prev]);

            setHasMoreMessages(data.has_more);
            break;
          case "user_join":
            console.log("User joined the conversation:", data.user);
            setParticipants((pcpts) => {
              if (!pcpts.includes(data.user)) {
                return [...pcpts, data.user];
              }
              return pcpts;
            });

            break;
          case "user_leave":
            setParticipants((pcpts) => {
              const newPcpts = pcpts.filter((x) => x !== data.user);
              return newPcpts;
            });
            break;
          case "online_user_list":
            setParticipants(data.users);
            break;
          case "typing":
            updateTyping(data);
            break;
          case "conversation_id":
            setRoomName(data.id);
            setPinned(data.pin);
            setArchived(data.archive);
            setUnread(data.unread);
            console.log("This is the conversation data: ", data);
          default:
            console.error("Unknown message type!");
            break;
        }
        // console.log(data);
      },
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

  useEffect(() => {
    scrollToBottom();
  }, [messageHistory]);

  useEffect(() => {
    setMessageHistory([]);
    
  }, [room]);

  const containerStyles = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  return (
    <>
      <Layout sideHighlight="connect">
        <div className="flex h-full relative scrollbar" style={containerStyles}>
          <div className="hidden lg:block py-14">
            <Channels />
          </div>

          <div className="relative grow shadow overflow-hidden h-full flex justify-center ">
            <div className="grow relative sm:p-4 py-1 overflow-hidden max-h-[600px] mt-14 pt-10 max-w-3xl">
              <Toolbar
                names={room}
                // avatar={userPicture}
                // roomName={roomName}
                // userId={id}
                // pinned={pinned}
                // unread={unread}
                // archived={archived}
              />
              <div className="h-full">
                <div className="mx-auto max-w-6xl sm:px-14 px-4 py-4 pt-10 pb-4 max-h-full overflow-y-auto">
                  <div className="">
                    {messageHistory.length > 0 ? (
                      <div className="message-list flex flex-col gap-1 pt-2">
                        {messageHistory.map((message, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 w-full"
                          >
                            {message.from_user?.email === email && (
                              <div className="self-end  p-1 px-3 rounded-lg bg-slate-800 text-white max-w-[83%]">
                                {message.content}
                              </div>
                            )}
                            {message.from_user?.email !== email && (
                              <div className=" max-w-[83%]">
                                <div className="flex items-start gap-2.5">
                                  <div className="w-8 h-8 relative rounded-full">
                                    <Image
                                      className="w-8 h-8 rounded-full"
                                      src={message?.from_user?.image}
                                      alt="Jese image"
                                      fill
                                      objectFit="cover"
                                    />
                                  </div>

                                  <div className="flex flex-col w-full max-w-[320px] leading-1.5">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {message?.from_user?.name}
                                      </span>
                                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        {message.time}
                                      </span>
                                    </div>
                                    <p className="text-sm font-normal py-2 text-gray-900 dark:text-white">
                                      {message.content}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div role="status" class="max-w-sm animate-pulse pt-4">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
            </div>
            <MessageInput room={room} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default connect;
