import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layouts/layout";
import Link from "next/link";
import { useRouter } from "next/router";

import jwt_decode from "jwt-decode";
import axios from "axios";

import { TbFileStack } from "react-icons/tb";
import Poly from "../../../public/assets/polygon.png";
import { JellyTriangle } from "@uiball/loaders";

const Teams = () => {
  const [info, setInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}/`
        );
        setInfo(response.data);

        if (response.data[0].account_type !== "village admin profile") {
          router.push("/virtual_tech_village");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  if (!info) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }

  return (
    <>
      <Layout sideHighlight="Insight">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          <Link href="/virtual_tech_village/admin/applications">
            <div className="h-40 shadow-lg hover:bottom-1 cursor-pointer transition-all duration-300 relative rounded-xl flex flex-col justify-between p-4">
              <div className="w-full h-full absolute top-0 left-0">
                <Image src={Poly} fill alt="polygon pattern" />
              </div>

              <h1 className="text-xl z-10 font-bold text-yellow-600">
                Talent Applications
              </h1>
              <div className="w-full z-10 flex justify-end items-center">
                <span className="text-xl text-gray-600">
                  <TbFileStack />
                </span>
                <span className="text-lg font-bold text-gray-600">120</span>
              </div>
            </div>
          </Link>

		  <Link href="/virtual_tech_village/admin/applications/companies">
            <div className="h-40 shadow-lg hover:bottom-1 cursor-pointer transition-all duration-300 relative rounded-xl flex flex-col justify-between p-4">
              <div className="w-full h-full absolute top-0 left-0">
                <Image src={Poly} fill alt="polygon pattern" />
              </div>

              <h1 className="text-xl z-10 font-bold text-yellow-600">
                Company Applications
              </h1>
              <div className="w-full z-10 flex justify-end items-center">
                <span className="text-xl text-gray-600">
                  <TbFileStack />
                </span>
                <span className="text-lg font-bold text-gray-600">120</span>
              </div>
            </div>
          </Link>

		  <Link href="/virtual_tech_village/admin/applications/interns">
            <div className="h-40 shadow-lg hover:bottom-1 cursor-pointer transition-all duration-300 relative rounded-xl flex flex-col justify-between p-4">
              <div className="w-full h-full absolute top-0 left-0">
                <Image src={Poly} fill alt="polygon pattern" />
              </div>

              <h1 className="text-xl z-10 font-bold text-yellow-600">
                Intern Applications
              </h1>
              <div className="w-full z-10 flex justify-end items-center">
                <span className="text-xl text-gray-600">
                  <TbFileStack />
                </span>
                <span className="text-lg font-bold text-gray-600">120</span>
              </div>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Teams;
