import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Channels from "../components/connect/channels";

import useWebSocket, { ReadyState } from "react-use-websocket";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { motion, AnimatePresence } from "framer-motion";

const connect = () => {
  const [userData, setUserData] = useState(null)
  const [id, setId] = useState(null)
  const [addChannel, setAddChannel] = useState(false);
  const [newChannel, setNewChannel] = useState("");
  const router = useRouter()
  const { room } = router.query;
  useEffect(() => {

    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    setId(decodedToken.user_id);
    const user_id = decodedToken.user_id;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${user_id}/`
        );
        setUserData(response.data);
        console.log("This is my signed in user data: ", response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

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

  return (
    <>
      <Layout sideHighlight="connect">
        <div className="flex custom-height relative">
          <Channels addChannel={addChannel} setAddChannel={setAddChannel} />
          
        </div>
<div>
  {readyState}
</div>
      </Layout>
    </>
  );
};

export default connect;
