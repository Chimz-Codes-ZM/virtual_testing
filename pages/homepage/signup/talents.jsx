import React from "react";
import Image from "next/image";
import Talent_form from "../components/talent_form";
import Layout from "../../layout";

const Talents = () => {
  return (
    <Layout>
    <div 
      className="  flex items-center justify-center py-32"
      style={{
        backgroundImage: "url('/assets/woman_tab.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "2000px",
        minHeight: "100vh"
      }}
    >
      <div className="max-w-[550px] box-border overflow-hidden border backdrop-blur-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-xl bg-slate-900 bg-opacity-50">
        <Talent_form />
      </div>
    </div>
    </Layout>
  );
};

export default Talents;
