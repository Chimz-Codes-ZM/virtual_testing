import React from "react";
import Layout from "../../layout";
import Subscription_form from "../components/subscription_form";

const Subscription = () => {
  return (
    <Layout>
    <div 
      className="  flex items-center justify-center py-32"
      style={{
        backgroundImage: "url('/assets/handshake.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[550px] box-border overflow-hidden border backdrop-blur-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-xl bg-slate-900 bg-opacity-50">
        <Subscription_form />
      </div>
    </div>
    </Layout>
  );
};

export default Subscription;
