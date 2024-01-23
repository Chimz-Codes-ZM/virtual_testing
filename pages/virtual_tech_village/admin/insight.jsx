import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layouts/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "@/features/applications/TalentSlice";
import jwt_decode from "jwt-decode";
import axios from "axios";

import { TbFileStack } from "react-icons/tb";
import Poly from "../../../public/assets/polygon.png";
import { JellyTriangle } from "@uiball/loaders";


const Teams = () => {
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch()

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/total_applications/${user.user_id}/`
        );
        setInfo(response.data);
          console.log("Total applications: ", response.data)
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 relative">

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
                <span className="text-lg font-bold text-gray-600">{info[0]?.total_companies}</span>
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
                <span className="text-lg font-bold text-gray-600">{info[0]?.total_interns}</span>
              </div>
            </div>
          </Link>

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
                <span className="text-lg font-bold text-gray-600">{info[0]?.total_talents}</span>
              </div>
            </div>
          </Link>

          <Link href="/virtual_tech_village/admin/teams">
            <div className="h-40 shadow-lg hover:bottom-1 cursor-pointer transition-all duration-300 relative rounded-xl flex flex-col justify-between p-4">
              <div className="w-full h-full absolute top-0 left-0">
                <Image src={Poly} fill alt="polygon pattern" />
              </div>

              <h1 className="text-xl z-10 font-bold text-yellow-600">
                Teams
              </h1>
              <div className="w-full z-10 flex justify-end items-center">
                <span className="text-xl text-gray-600">
                  <TbFileStack />
                </span>
                <span className="text-lg font-bold text-gray-600">{info[0]?.total_talents}</span>
              </div>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Teams;
