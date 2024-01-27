import { API_URL } from "@/config";
import React, { useState, useEffect, useRef } from "react";
import useWebSocket, { ReadyState, SendMessage } from "react-use-websocket";

const ConversationList = ({
  roomName,
  loggedInID,
}) => {
  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState([]);
  const [messageHistory, setMessageHistory] = useState([]);
  const [hasMoreMessages, setHasMoreMessages] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [conversation, setConversation] = useState(null);
  const [page, setPage] = useState(2);
  const [meTyping, setMeTyping] = useState(false);
  const [typing, setTyping] = useState(false);

  const { readyState } = useWebSocket(
    `wss://${API_URL}/ws/chat/${loggedInID}/${loggedInID}${roomName}/`,
    {
      onOpen: () => {
        console.log("Connected!");
      },
      onClose: () => {
        console.log("Disconnected!");
      },

      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "chat_message_echo":
            setMessageHistory((prev) => [...prev, data.message]);
            sendMessage(
              JSON.stringify({
                type: "read_messages",
              })
            );
            break;

          case "last_50_messages":
            setMessageHistory((prev) => [...data.messages, ...prev]);
            console.log("Updated messageHistory:", messageHistory);
            setHasMoreMessages(data.has_more);
            break;
          case "user_join":
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
          default:
            console.error("Unknown message type!");
            break;
        }
      },
    }
  );

  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef?.current?.scrollIntoView({behavior: 'smooth'})
    }, [messageHistory, bottomRef])


  return (
    <div className="grow shadow relative p-4 py-1 overflow-hidden h-[calc(100vh - 50px)]">
      {/* <Toolbar convoLabel={convoLabel} names={names} avatar={avatar} /> */}
      <div className="scrollbar">
        <div
          className="mx-auto max-w-6xl p-4 pb-32"
          style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}
        >
          <div className="">
            {messageHistory.length > 0 && (
              <div className="message-list flex flex-col gap-1 ">
                {messageHistory.map((message) => (
                  <div key={message.id} className="flex gap-2 ">
                    {message.from_user?.email === "Amani@email.com" && (
                      <div className="float-right p-1 px-3 rounded-lg bg-slate-800 text-white">
                        {message.content}
                      </div>
                    )}
                    {message.from_user?.email !== "Amani@email.com" && (
                      <div className="p-1 px-3 rounded-lg float-left bg-white text-gray-800 shadow">
                        {message.content}
                      </div>
                    )}
                   
                  </div>
                  
                ))}
              </div>
            )}
             <div ref={bottomRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationList;
