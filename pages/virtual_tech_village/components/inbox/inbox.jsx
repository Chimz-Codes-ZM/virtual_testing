import React, { useEffect, useState, useContext } from "react";
import Layout from "../layouts/layout";
import Head from "next/head";
import Image from "next/image";
import MessageInput from "./MessageInput";
import ConversationList from "./conversationList";
import MessageList from "./MessageList";

import { JellyTriangle } from "@uiball/loaders";


const Inbox = () => {
  const [showChat, setShowChat] = useState(false);



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowChat(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <title>Inbox</title>
      </Head>
      <Layout sideHighlight="inbox">
        {showChat === false ? (
          <div className="flex h-screen items-center justify-center ">
            <JellyTriangle size={40} color="#231F20" />
          </div>
        ) : (
          <div className="flex min-h-screen pt-12">
            <MessageList />
            <div className="grow h-full text-lg font-semibold md:flex flex-col justify-center self-center items-center text-gray-600 opacity-50 gap-4 hidden">
            <div className="relative h-40 w-40">
              <Image
                fill
                objectFit="cover"
                src="/logo.png"
                className="rounded-full opacity-20"
                alt="Baobabpad Logo"
              />
            </div>
          <h1>Elevating African Technology Talent, Virtually and Globally... </h1>
          </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Inbox;
