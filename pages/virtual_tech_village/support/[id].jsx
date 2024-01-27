import React, { useState, useEffect, useRef } from 'react'
import Layout from "../components/layouts/layout";
import useWebSocket, { ReadyState } from "react-use-websocket";
import axios from "axios";
import jwt_decode from "jwt-decode";
import MessageInput from '../components/support/supportInput';
import Support_toolbar from '../components/support/support_Toolbar';
import { API_URL } from '@/config';

const support = () => {
    const [userData, setUserData] = useState([])
    const [userId, setUserId] = useState("")
    const [messageHistory, setMessageHistory] = useState([]);

    const messagesEndRef = useRef(null);


    const uniqueRoom = "_2"

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        const decodedToken = jwt_decode(token);
        const id = decodedToken.user_id;
    
        async function fetchData() {
          try {
            const response = await axios.get(
              `https://${API_URL}/village/profile_data/${id}/`
            );
            setUserData(response.data);
            setUserId(response.data[0].user_id);
            
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        }
    
        fetchData();
      }, []);

      useEffect(() => {
console.log("SUPPORT USER DATA: ", userData)
      }, [userId])


      const { readyState, sendMessage, sendJsonMessage } = useWebSocket(
        `wss://${API_URL}/ws/chat/${userId}/${userId}${uniqueRoom}/`,
        {
          onOpen: () => {
            sendJsonMessage({
              type: "read_messages",
            });
          },
          onClose: () => {
          },
    
          retryOnError: true,
    
          onMessage: (e) => {
            const data = JSON.parse(e.data);
            switch (data.type) {
              case "last_50_messages":
                console.log("Updated messageHistory:", messageHistory);
                break;
              default:
                console.error("Unknown message type!");
                break;
            }
            // console.log(data);
          },
        }
      );
  return (
    <>

    <Layout sideHighlight="support">
    <div className="flex custom-height">
          {/* <div className="hidden lg:block">
            <MessageList />
          </div> */}

          {/* CONVERSATION LIST */}

          <div className="relative grow shadow overflow-hidden h-full flex justify-center">
            <div className="grow relative p-4 py-1 overflow-hidden max-h-[500px] pt-10 max-w-3xl">
              <Support_toolbar
                // names={usersName}
                // avatar={userPicture}
                // roomName={roomName}
                // userId={id}
                // pinned={pinned}
                // unread={unread}
                // archived={archived}
              />
              <div className="scrollbar h-full">
                <div className="mx-auto max-w-6xl px-14 py-4 pb-4 max-h-full overflow-y-auto">
                  <div className="">
                    {messageHistory.length > 0 && (
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
  )
}

export default support
