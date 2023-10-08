import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Talent_form from "../../pages/homepage/components/talent_form";

import Layout from "../layout";
import Home from "./home";

import { HiDocumentReport } from "react-icons/hi";

const Team = () => {
  return (
    <Layout title="Baobabpad | Careers" content="Bring Africa growth with Tech">
  <div className="overflow-x-hidden">
    <div
      className="relative flex items-center justify-center py-32"
      style={{
        backgroundImage: "url('/assets/woman_tab.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-[550px] box-border overflow-hidden border rounded-tl-[5rem] rounded-br-[5rem] rounded-xl bg-slate-900">
        <div className="absolute inset-0 bg-slate-900 opacity-[0.4]"></div>
        <Talent_form />
      </div>
    </div>
  </div>
</Layout>

  );
};

export default Team;
