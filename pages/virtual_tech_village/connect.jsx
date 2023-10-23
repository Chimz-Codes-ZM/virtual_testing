import React, {useState} from "react";
import Layout from "./components/layouts/layout";
import Link from "next/link";
import Channels from "./components/connect/channels";
import Conversations from "./components/connect/conversations";


const connect = () => {
  const [toggleUniqueMessage, setToggleUniqueMessage] = useState(false)

  const handleToggle = () => {
    setToggleUniqueMessage(!toggleUniqueMessage)
  }
  return (
    <>
      <Layout sideHighlight="connect">
        <div className="flex custom-height relative">
          <Channels />
          <Conversations />
        </div>
      </Layout>
    </>
  );
};

export default connect;
