import React, { useEffect, useState, useContext, useRef } from "react";
import Layout from "../../components/layouts/layout";
import Inbox from "../../components/inbox/inbox";
import Image from "next/image";
import MessageInput from "../../components/inbox/MessageInput";
import { useRouter } from "next/router";
import { JellyTriangle } from "@uiball/loaders";
import jwt_decode from "jwt-decode";
import MessageList from "../../components/inbox/MessageList";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Toolbar from "../../components/inbox/Toolbar";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

import { useSelector } from "react-redux";

const Index = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
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

  const usersName = chatName ? chatName : "";
  const userPicture = avatarUrl ? avatarUrl : "";

  // WEBSOCKET CONNECTION

  const email = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0].email;
    } else {
      return null;
    }
  });

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const uniqueRoom = `_${id}`;
  const userId =
    userData && userData.length > 0 ? `${userData[0].user_id}` : "";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${user.user_id}/`
        );
        setUserData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, [id]);

  const currentSignedInName = `${userData[0]?.first_name} ${userData[0]?.last_name}`;

  const { readyState, sendMessage, sendJsonMessage } = useWebSocket(
    `wss://baobabpad-334a8864da0e.herokuapp.com/ws/chat/${userId}/${userId}${uniqueRoom}/`,
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
            setMessageHistory((prev) => [...prev, data.message]);
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

  const fetchInfo = async (e) => {
    const userInfoUrl = `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}/`;

    try {
      const response = await fetch(userInfoUrl);
      const responseData = await response.json();

      setInfo(responseData);
      setChatName(`${responseData[0].first_name} ${responseData[0].last_name}`);
      setAvatarUrl(responseData[0].image);

      setTimeout(function () {
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMessageHistory([]);
    fetchInfo();
  }, [id]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {});
  }, [router]);

  useEffect(() => {
    scrollToBottom();
    console.log(messageHistory);
  }, [messageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }

  return (
    <>
      <Layout sideHighlight="inbox">
        <div className="flex custom-height">
          <div className="hidden lg:block py-14">
            <MessageList />
          </div>

          {/* CONVERSATION LIST */}

          <div className="relative grow shadow overflow-hidden h-full flex justify-center">
            <div className="grow relative sm:p-4 py-1 overflow-hidden max-h-[500px] mt-14 pt-10 max-w-3xl">
              <Toolbar
                names={usersName}
                avatar={userPicture}
                roomName={roomName}
                userId={id}
                pinned={pinned}
                unread={unread}
                archived={archived}
              />
              <div className="scrollbar h-full">
                <div className="mx-auto max-w-6xl sm:px-14 px-4 py-4 pt-10 pb-4 max-h-full overflow-y-auto">
                  <div className="">
                    {messageHistory.length > 0 && (
                      <div className="message-list flex flex-col gap-1 pt-2">
                        {messageHistory.map((message, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 w-full"
                          >
                            {message.from_user?.email === email && (
                              <div className="self-end  p-1 px-3 rounded-lg bg-slate-800 text-white">
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
                                      alt="profile picture"
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
                    )}
                  </div>
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
            </div>
            <MessageInput roomName={uniqueRoom} userId={userId} />
          </div>

          {/* {connectionStatus} */}
          {/* END OF CONVERSATION LIST */}
        </div>
      </Layout>
    </>
  );
};

export default Index;
