import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  check_auth_status,
  request_refresh,
  logout,
} from "../../../actions/auth";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import { FiBarChart2 } from "react-icons/fi";
import { HiCubeTransparent, HiOutlineCog } from "react-icons/hi";
import { VscProject } from "react-icons/vsc";
import { BiCart, BiLogOut, BiHelpCircle } from "react-icons/bi";
import { BsPerson, BsShieldCheck } from "react-icons/bs";
import { GoIssueOpened } from "react-icons/go";
import { MdOutlineShowChart } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";

import jwt_decode from "jwt-decode";
import  GetNotifications  from "./notifications";
// import { BounceLoader } from 'react-spinners';


const Layout = ({ children, sideHighlight }) => {
  const router = useRouter();
  const [companyData, setCompanyData] = useState([]);



  const logoutHandler = () => {
    localStorage.removeItem("token");
    router.push("/");

  };

  const [ringLoader, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    //
    const fetchData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/company_data/${id}/`
      );
      const data = await response.json();
      setCompanyData(data);
    };
    fetchData();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <>
      <main className="h-screen w-screen flex relative">
        <nav className="sm:w-60 w-20 transition-all z-50 h-screen relative pt-10 group">
          <div className="w-full h-full flex flex-col">
            <div className="w-full pl-5 flex-shrink-0 h-20 gap-4 flex items-center">
              <div className="relative w-10 h-10 rounded">
                <Image src={Logo} priority alt="logo" fill />
              </div>
              <h1 className="font-bold text-gray-800 hidden sm:block">
                Baobabpad
              </h1>
            </div>

            <div className="h-full pl-5 pb-10 rounded-tr-2xl flex flex-col bg-gray-900 w-full justify-between">
              <div className="w-full h-max flex flex-col gap-2 pr-5 pt-10">
                <div className="w-full flex flex-col">
                  <Link href="/dashboard">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Overview"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : "hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <FiBarChart2 className="text-xl" />
                      <h1 className="hidden sm:block">Overview</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/dashboard/issues">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Issues"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <GoIssueOpened className="text-xl" />
                      <h1 className="hidden sm:block">Issues</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/dashboard/teams">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Teams"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <AiOutlineTeam className="text-xl" />
                      <h1 className="hidden  sm:block">Teams</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/dashboard/settings">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Settings"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <HiOutlineCog className="text-xl" />
                      <h1 className="hidden sm:block">Settings</h1>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="w-full h-max rounded-r-full pt-5 pr-5">
                {/* <div className="w-full flex flex-col">
                  <Link href="/dashboard/help">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Help"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <BiHelpCircle className="text-xl" />
                      <h1 className="hidden sm:block">Help</h1>
                    </div>
                  </Link>
                </div> */}
                <div className="w-full flex flex-col">
                  <div
                    className="flex transition-all duration-500 gap-3 items-center rounded px-2 py-1 text-gray-100 hover:font-bold hover:bg-gray-100 hover:text-gray-800 cursor-pointer "
                    onClick={logoutHandler}
                  >
                    <BiLogOut className="text-xl logout" />
                    <h1 className="hidden sm:block">Logout</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {companyData.map(({ full_name, profile_image }) => (
          <nav className="fixed bg-white top-0 left-0 w-full h-20 px-14 gap-4 flex justify-end items-center z-40">
            
            <GetNotifications />
            
            <Link href="/dashboard/settings">
              <div className="w-max truncate px-4 py-2 transition-all duration-500 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-1 sm:gap-2 rounded">
                <div className="w-7 h-7 rounded overflow-hidden relative">
                  <Image src={`${profile_image}`} fill priority alt="user" />
                </div>

                <span className="text-sm truncate flex sm:max-w-[200px] font-bold">
                  {full_name}
                </span>
              </div>
            </Link>
          </nav>
        ))}

        <div className="w-full h-screen overflow-y-scroll px-4 py-24">
          <div className="w-full h-max flex flex-col gap-5">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
