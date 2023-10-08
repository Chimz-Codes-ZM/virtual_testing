import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Layout from "../layout";
import Home from "./home";
import Fund_carousel from "./components/fund_carousel";
import Fund_areas from "./components/fund_areas";
import Fund_contact from "./components/fund_contact";

import { HiDocumentReport } from "react-icons/hi";

const Team = () => {
  return (
    <Layout title="Baobabpad Fund" content="Bring Africa growth with Tech">
      <div className="overflow-x-hidden">
        <Home
          title="Climate Fund"
          description="Investing in climate mitigation and adaptation technology companies in Africa"
          mediaSrc="/fund/Rectangle 1.webp"
          mediaType="image"
        />
      </div>

      <Fund_carousel />

      <div className="w-full sm:h-20  p-4 sm:px-16 bg-gray-100 flex justify-center">
        <h1 className="text-xl sm:text-2xl text-gray-700 ">
          Baobab Climate Investment Fund Areas
        </h1>
      </div>
      <Fund_areas/>

<Fund_contact />
    </Layout>
  );
};

export default Team;
