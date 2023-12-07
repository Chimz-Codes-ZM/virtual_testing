import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Layout from "../layout";
import Home from "./home";
import HubSection from "./components/split_cards";
import Village_old from "./components/village_old";

import { HiDocumentReport } from "react-icons/hi";

const Team = () => {
  return (
    <Layout
      title="Baobabpad | Tech Village"
      content="where your Bring Africa growth with Tech"
    >
      <div className="overflow-x-hidden">
        <Home
          title="Tech Village"
          description="Community of innovators, entrepreneurs, and experts working together to create the pathway of Africa's digital transformation"
          mediaSrc="/assets/tech_village_hero.jpg"
          mediaType="image"
        />

        <div>
          <div className="lg:hidden">
            <Village_old />
          </div>
          <div className="hidden lg:block">
            {" "}
            <HubSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
