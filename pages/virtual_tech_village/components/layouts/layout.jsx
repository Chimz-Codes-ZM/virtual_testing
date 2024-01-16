import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "next-auth/react";

import Logo from "/public/logo.png";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineInsights } from "react-icons/md";

import { navbar } from "@/pages/data";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Layout = ({ children, sideHighlight }) => {
  const [unreadMessageCount, setUnreadMessageCount] = useState(null);
  const [notificationContent, setNotificationContent] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [id, setId] = useState("");
  const notificationRef = useRef();

  const dispatch = useDispatch();

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const user_id = () => {
    if (user) {
      setId(user.user_id);
    }
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
    signOut({ callbackUrl: "/homepage/login" });
  };

  useEffect(() => {
    user_id();
  }, [user]);

  useEffect(() => {
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
        <nav className="w-20 transition-all z-[100] h-screen relative pt-10 group">
          <div className="w-full h-full flex flex-col">
            <div className="w-full pl-5 flex-shrink-0 h-20 gap-4 flex items-center cursor-pointer">
              <div className="relative w-10 h-10 rounded">
                <Image src={Logo} priority alt="logo" fill />
              </div>
            </div>

            <div className="h-full pl-2 pb-10 rounded-tr-2xl flex flex-col bg-[#004643] w-full justify-between">
              <div className="w-full h-max flex flex-col gap-2 pr-5 pt-10">
                {navbar.map((page, index) => (
                  <div className="w-full flex flex-col">
                    <Link href={page.href}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {sideHighlight === page.sideHighlight ? (
                              <Button variant="outline">
                                {React.createElement(page.icon, {
                                  className: "text-xl",
                                })}
                              </Button>
                            ) : (
                              <Button>
                                {React.createElement(page.icon, {
                                  className: "text-xl",
                                })}
                              </Button>
                            )}
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>{page.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                ))}

                {user?.account_type === "village admin profile" && (

                  <div className="w-full flex flex-col">
                    <Link href="/virtual_tech_village/admin/insight">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {sideHighlight === "Insight" ? (
                              <Button variant="outline">
                                <MdOutlineInsights className="text-xl" />
                              </Button>
                            ) : (
                              <Button>
                                <MdOutlineInsights className="text-xl" />
                              </Button>
                            )}
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>Insights</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                )}
              </div>

              <div className="w-full h-max rounded-r-full">
                <div className="justify-center flex flex-col" onClick={logoutHandler}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className={``}>
                          <BiLogOut className="text-xl logout" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Logout</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="fixed bg-slate-200 top-0 left-0 w-full h-12 px-14 gap-4 flex justify-end items-center z-[99] bg-opacity-25 backdrop-blur border-none">
          <div className="relative flex flex-col justify-center items-center">
            {/* {connectionStatus} */}
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