import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Layout from "../layout";
import Home from "./home";
import Slide from "./components/slide_hor";
import TitleBox from "./components/title_box";
import Company from "./components/companies";

import { HiDocumentReport } from "react-icons/hi";

const Team = () => {
  return (
    <Layout
      title="Baobabpad | Partners"
      content="Bring Africa growth with Tech"
    >
      <div className="overflow-x-hidden">
        <Home
          title="Partners"
          // description="Empowering Startups with innovative technology solutions for growth"
          mediaSrc="/assets/startup.jpg"
          mediaType="image"
        >
          {/* <Company /> */}
        </Home>

        <div className="text-sm  sm:text-lg md:text-xl lg:text-2xl text-gray-700 p-4 pb-2">
          <h1>Meet our strategic partners</h1>
        </div>
        <div className="">
          <Company />
        </div>
      </div>
    </Layout>
  );
};

export default Team;
