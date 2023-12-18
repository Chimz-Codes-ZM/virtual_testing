import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "@/features/user/UserSlice";
import { signOut } from "next-auth/react";

import Logo from "/public/logo.png";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaSlideshare } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { GoInbox } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineInsights } from "react-icons/md";

const Layout = ({ children, sideHighlight }) => {
  const [userData, setUserData] = useState(null);
  const [unreadMessageCount, setUnreadMessageCount] = useState(null);
  const [notificationContent, setNotificationContent] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [id, setId] = useState("");
  const router = useRouter();
  const notificationRef = useRef();

  const dispatch = useDispatch();

  const removeUser = () => {
    dispatch(resetUser());
  };

  const handleClickOutsideNotification = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotification(false);
    }
  };


  const logoutHandler = () => {
    signOut();
    
      dispatch(resetUser())
  
  };

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  useEffect(() => {
    // checkToken();

    document.addEventListener("mousedown", handleClickOutsideNotification);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);

  const { readyState, sendJsonMessage } = useWebSocket(
    `wss://baobabpad-334a8864da0e.herokuapp.com/ws/chat_notifications/${user.user_id}/`,
    {
      onOpen: () => {
        console.log("Connected to Notifications!");
      },
      onClose: () => {
        console.log("Disconnected from Notifications!");
      },
      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "unread_count":
            break;
          case "new_message_notification":
            setUnreadMessageCount((count) => (count += 1));
            setUnreadMessageCount(data.count);
            console.log(data.content);
            setNotificationContent(data.content);
            break;
          default:
            console.error("Unknown message type!");
            break;
        }
      },
      retryOnError: true,
    }
  );

  const handleSendNotification = () => {
    sendJsonMessage({
      type: "read_notifications",
    });
  };

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
    sendJsonMessage({
      type: "read_messages",
    });
  };

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  return (
    <>
      <main className="h-screen w-screen flex relative">
        <nav className="sm:w-60 w-20 transition-all z-[100] h-screen relative pt-10 group">
          <div className="w-full h-full flex flex-col">
            <div className="w-full pl-5 flex-shrink-0 h-20 gap-4 flex items-center cursor-pointer">
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
                  <Link href="/virtual_tech_village/">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Tech Village"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : "hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <SiHomeassistantcommunitystore className="text-xl" />
                      <h1 className="hidden sm:block">Tech Village</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/internship">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "virtual internship"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : "hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <IoPeopleCircleOutline className="text-xl" />
                      <h1 className="hidden sm:block">Internship</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/connect">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "connect"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <MdOutlineConnectWithoutContact className="text-xl" />
                      <h1 className="hidden sm:block">Connect</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/trends">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "sharepad"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <FaSlideshare className="text-xl" />
                      <h1 className="hidden  sm:block">SharePad</h1>
                    </div>
                  </Link>
                </div>

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/inbox">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "inbox"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <GoInbox className="text-xl" />
                      <h1 className="hidden sm:block">Inbox</h1>
                    </div>
                  </Link>
                </div>

                {user?.account_type === "village admin profile" && (
                  <div className="w-full flex flex-col">
                    <Link href="/virtual_tech_village/admin/insight">
                      <div
                        className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "Insight"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                      >
                        <MdOutlineInsights className="text-xl" />
                        <h1 className="hidden sm:block">Insights</h1>
                      </div>
                    </Link>
                  </div>
                )}

                <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/profile">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "profile"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <CgProfile className="text-xl" />
                      <h1 className="hidden sm:block">Profile</h1>
                    </div>
                  </Link>
                </div>

                {/* <div className="w-full flex flex-col">
                  <Link href="/virtual_tech_village/support/2">
                    <div
                      className={`flex transition-all duration-500 text-gray-100 gap-3 flex items-center rounded px-2 py-1
											${
                        sideHighlight === "support"
                          ? "font-bold bg-gray-100 text-gray-900"
                          : " hover:font-bold hover:bg-gray-100 hover:text-gray-800"
                      }
										`}
                    >
                      <FcSupport className="text-xl" />
                      <h1 className="hidden sm:block">Support</h1>
                    </div>
                  </Link>
                </div> */}
              </div>

              <div className="w-full h-max rounded-r-full pt-5 pr-5">
                <div className="w-full flex flex-col">
                  <div href="/" className="" onClick={logoutHandler}>
                    <div className="flex transition-all duration-500 gap-3 flex items-center rounded px-2 py-1 text-gray-100 hover:font-bold hover:bg-gray-100 hover:text-gray-800 cursor-pointer ">
                      <BiLogOut className="text-xl logout" />
                      <h1 className="hidden sm:block">Logout</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="fixed bg-slate-200 top-0 left-0 w-full h-12 px-14 gap-4 flex justify-end items-center z-[99] bg-opacity-25 backdrop-blur border-none">
          <div className="relative flex flex-col justify-center items-center">
            <AiOutlineBell
              className={`text-lg cursor-pointer ${
                unreadMessageCount > 0 ? "animate-bounce" : ""
              }`}
              onClick={handleShowNotification}
            />
            <div className="absolute -top-2 -right-4">
              {unreadMessageCount > 0 ? unreadMessageCount : ""}
            </div>
            <div ref={notificationRef}>
              <div className="relative">
                {/* <div className="inline-flex items-center overflow-hidden rounded-md border bg-white"></div> */}
                {showNotification && (
                  <div
                    className="absolute -left-8 md:-left-20 md:end-0 z-[999] w-56 rounded-md border border-gray-100 max-h-40 overflow-x-auto bg-white shadow-lg"
                    role="menu"
                  >
                    {notificationContent && notificationContent.length > 0 ? (
                      notificationContent.map((notification, index) => (
                        <div className="p-2" key={index}>
                          <Link
                            href={`/virtual_tech_village/${notification.route}`}
                          >
                            <div className="flex items-center gap-2 hover:bg-gray-50 hover:text-gray-700">
                              <div className="h-8 w-8 relative">
                                <Image
                                  src={notification.image}
                                  fill
                                  objectFit="cover"
                                  className="rounded-full"
                                />
                              </div>
                              <div
                                className="block rounded-lg px-4 py-2 text-sm text-gray-500"
                                role="menuitem"
                              >
                                <div className="flex flex-col">
                                  <div className="font-semibold">
                                    {notification.sender}
                                  </div>
                                  <div>{notification.message}</div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div className="p-2">No new notifications.</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Link href="/virtual_tech_village/profile/">
            <div className="w-max truncate px-4 py-2 transition-all duration-500 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-1 sm:gap-2">
              <div className="w-7 h-7 rounded overflow-hidden relative">
                {user ? (
                  <div>
                    <Image
                      src={user?.image}
                      objectFit="cover"
                      fill
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                      className=" transition-opacity opacity-0 duration-[1.2s]"
                      alt="user"
                    />
                  </div>
                ) : (
                  <div>
                    <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-7 w-7"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-sm truncate flex sm:max-w-[200px] font-bold">
                {user &&
                  (user?.account_type === "village talent profile" ||
                  user?.account_type === "village admin profile" ||
                  user?.account_type === "community manager" ||
                  user?.account_type === "Intern" ? (
                    <div>
                      {user?.first_name} {user?.last_name}
                    </div>
                  ) : (
                    <div>{user?.company_name}</div>
                  ))}
              </span>
            </div>
          </Link>
        </nav>
        <div className="w-full h-screen overflow-y-scroll px-4 overflow-x-hidden scrollbar">
          <div className="w-full h-full flex flex-col gap-5 scrollbar">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default function WrappedLayout(props) {
  return <Layout {...props} />;
}
