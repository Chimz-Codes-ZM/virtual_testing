import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layouts/layout";
import { useRouter } from "next/router";
import Channels from "../components/connect/channels";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSelector } from "react-redux";
import Toolbar from "../components/connect/Toolbar";
import MessageInput from "../components/connect/MessageInput";
import { API_URL } from "@/config";

const connect = () => {
  const router = useRouter();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [chatName, setChatName] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [newMessages, setNewMessages] = useState([]);

  const [hasMoreMessages, setHasMoreMessages] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [page, setPage] = useState(2);
  const [roomName, setRoomName] = useState("");
  const [pinned, setPinned] = useState("");
  const [archived, setArchived] = useState("");
  const [unread, setUnread] = useState("");

  // MESSAGE INPUT STATE
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
    `wss://${API_URL}/ws/channels/${id}/${room}/`,
    {
      onOpen: () => {
        console.log("Connected to channels");
        sendJsonMessage({
          type: "read_messages",
        });
      },
      onClose: () => {
        console.log("Disconnected from channels!");
      },

      retryOnError: true,

      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "chat_message_echo":
            setNewMessages((prev) => [...prev, data.message]);
            console.log("This is the recently sent message: ", data.message);
            break;

          case "last_50_messages":
            console.log("Updated messageHistory:", messageHistory);
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
  }, [messageHistory, newMessages]);

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
        <div className="flex h-full w-full">
          <div className="hidden lg:block py-14">
            <Channels />
          </div>

          {/* CONVERSATION LIST */}

          <div className="relative flex-col grow shadow overflow-hidden h-full flex justify-center w-full p-2">
            <div className="grow relative sm:p-4 py-1 overflow-hidden max-h-full mt-14 pt-10 self-center w-full max-w-4xl shadow">
              <Toolbar names={room} />
              <div className="scrollbar h-full ">
                <div className="mx-auto max-w-6xl sm:px-14 px-4 py-4 pt-10 pb-4 max-h-full overflow-y-auto">
                  <div className="">
                    {messageHistory.length > 0 && (
                      <div className="message-list flex flex-col gap-1 pt-2">
                        {messageHistory.map((day, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 w-full"
                          >
                            <div className="w-fit self-center">
                              <Badge variant="outline">{day?.date}</Badge>
                            </div>

                            {day?.messages?.map((message, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-2 w-full"
                              >
                                {message.from_user?.email === email && (
                                  <div className="self-end w-fit p-1 px-3 max-w-[66%] rounded-lg bg-[#001e1d] text-white">
                                    {message.content}
                                  </div>
                                )}
                                {message.from_user?.email !== email && (
                                  <div>
                                    <div className="flex items-start gap-2.5">
                                      <div className="relative w-8 h-8">
                                        <Image
                                          className="w-8 h-8 rounded-full"
                                          src={message.from_user?.image}
                                          alt="Jese image"
                                          objectFit="cover"
                                          fill
                                        />
                                      </div>

                                      <div className="flex flex-col w-full max-w-[320px] leading-1.5">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                          <span className="text-sm font-semibold text-gray-900">
                                            {message.from_user?.name}
                                          </span>
                                          <span className="text-sm font-normal text-gray-500">
                                            {message?.time}
                                          </span>
                                        </div>
                                        <p className="text-sm font-normal py-2 text-gray-900">
                                          {message?.content}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {newMessages.length > 0 && (
                      <div className="message-list flex flex-col gap-1 pt-2">
                        {newMessages.map((message) => (
                          <div
                            className="flex flex-col gap-2 w-full "
                            key={message.message_id}
                          >
                            {message.from_user?.email === email && (
                              <div className="self-end w-fit p-1 px-3 max-w-[66%] rounded-lg bg-[#001e1d] text-white">
                                {message.content}
                              </div>
                            )}
                            {message.from_user?.email !== email && (
                              <div>
                                <div className="flex items-start gap-2.5">
                                  <div className="relative w-8 h-8">
                                    <Image
                                      className="w-8 h-8 rounded-full"
                                      src={message.from_user?.image}
                                      alt="Jese image"
                                      objectFit="cover"
                                      fill
                                    />
                                  </div>

                                  <div className="flex flex-col w-full max-w-[66%] leading-1.5">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                      <span className="text-sm font-semibold text-gray-900">
                                        {message?.from_user?.name}
                                      </span>
                                      <span className="text-sm font-normal text-gray-500">
                                        {message?.time}
                                      </span>
                                    </div>
                                    <p className="text-sm font-normal py-2 text-gray-900">
                                      {message?.content}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
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
