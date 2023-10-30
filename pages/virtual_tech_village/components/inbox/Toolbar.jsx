import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { RiMenuAddFill } from "react-icons/ri";
import Image from "next/image";

const Toolbar = ({
  names,
  avatar,
  roomName,
  userId,
  pinned,
  archived,
  unread,
}) => {
  const [toolbarToggle, setToolbarToggle] = useState(false);
  const [requestBody, setRequestBody] = useState({
    pin: pinned,
    unread: archived,
    archive: unread,
    delete: false,
    conversation_id: roomName,
    users_id: userId,
  });
  const [deleteChange, setDeleteChange] = useState(false);
  const [pinChange, setPinChange] = useState(false);
  const [pinUnchange, setPinUnchange] = useState(false);
  const [archiveChange, setArchiveChange] = useState(false);
  const [archiveUnChange, setArchiveUnChange] = useState(false);
  const [unreadChange, setUnreadChange] = useState(false);
  const [unreadUnChange, setUnreadUnChange] = useState(false);
  const divRef = useRef(null);
  const router = useRouter();

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setToolbarToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   console.log(requestBody)
  // }, [requestBody])

  const toggleToolbar = () => {
    setToolbarToggle((prevToggle) => !prevToggle);
  };

  const sendPinData = () => {
    const sendData = async () => {
      try {
        console.log(requestBody);

        const response = await fetch(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/conversation_data/${userId}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          alert("Pinned successfully");
        }

        if (response.status === 400) {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };

  
      sendData();

  };

  const handlePin = () => {
    setRequestBody((prevBody) => ({
      ...prevBody,
      pin: true,
      unread: requestBody.unread,
      archive: requestBody.archive,
    }));
  
    setPinChange(!pinChange);
    setToolbarToggle(false);
    setTimeout(() => {
      sendPinData();
    }, 1000);
  };
  

  const sendUnPinData = () => {
    const sendData = async () => {
      try {
        console.log(requestBody);

        const response = await fetch(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/conversation_data/${userId}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          alert("Unpinned successfully");
        }

        if (response.status === 400) {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };


      sendData();
  
  };

  const handleUnpin = () => {
    setRequestBody((prevBody) => ({
      ...prevBody,
      pin: "False",
    }));

    setPinUnchange(!pinUnchange);
    setToolbarToggle(false);
        setTimeout(() => {
      sendUnPinData();
    }, 100);
  };

  const sendDeleteData = () => {
    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/conversation_data/${userId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        alert("Conversation deleted");
        router.push("/virtual_tech_village/inbox");
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };
    setTimeout(() => {
      sendData();
    }, 1000);
  };

  const handleDelete = () => {
    setRequestBody((prevBody) => ({
      ...prevBody,
      delete: "True",
    }));
    setDeleteChange(!deleteChange);
    setToolbarToggle(false);
    sendDeleteData();
  };

  const sendArchivedData = () => {
    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/conversation_data/${userId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (response.ok) {
        alert("Archived successfully");
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
  };

  const handleArchive = () => {
      setRequestBody((prevBody) => ({
        ...prevBody,
        archive: "True",
      }));
  

    setArchiveChange(!archiveChange);
    setToolbarToggle(false);
    sendArchivedData();
  };

  const handleSendUnread = () => {
    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/conversation_data/${userId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (response.ok) {
        alert("Marked unread successfully");
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
  };

  const handleMarkUnread = () => {
 
      setRequestBody((prevBody) => ({
        ...prevBody,
        unread: "True",
      }));

    setUnreadChange(!unreadChange);
    setToolbarToggle(false);
    handleSendUnread();
  };

  const handleSendRead = () => {
    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/conversation_data/${userId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (response.ok) {
        alert("Marked unread successfully");
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    setTimeout(() => {
      sendData();
    }, 100);
  };

  const handleMarkRead = () => {

      setRequestBody((prevBody) => ({
        ...prevBody,
        unread: "False",
      }));


    setUnreadChange(!unreadChange);
    setToolbarToggle(false);
    handleSendRead();
  };

  return (
    <div className="absolute  z-[2] px-10 p-1 left-10 right-10 top-3 shadow border rounded bg-white">
      <div className="relative w-full">
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full relative overflow-hidden">
            <Image
              src={avatar}
              objectFit="cover"
              fill
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
              className=" transition-opacity opacity-0 duration-[1.2s]"
              alt="user"
            />
          </div>
          <div className="flex items-center">
            <h1 className=" text-sm ">{names}</h1>
          </div>
        </div>
        <div className=" absolute right-3 inset-y-0  rounded cursor-pointer">
          <div
            className="p-2  bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring"
            onClick={toggleToolbar}
          >
            <span className="sr-only">Open Toolbar</span>
            <RiMenuAddFill />
          </div>
        </div>
        {toolbarToggle && (
          <div className="relative" ref={divRef}>
            <div
              className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div className="p-2">
                {requestBody.unread === "False" && (
                  <div
                    className="block rounded-lg px-4 py-2 text-sm cursor-pointer text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleMarkUnread}
                  >
                    Mark Unread
                  </div>
                )}

                {requestBody.unread === "True" && (
                  <div
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleMarkRead}
                  >
                    Mark Read
                  </div>
                )}

                {requestBody.pin === "False" && (
                  <div
                    onClick={handlePin}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                    role="menuitem"
                  >
                    Pin Conversation
                  </div>
                )}

                {requestBody.pin === "True" && (
                  <div
                    onClick={handleUnpin}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                    role="menuitem"
                  >
                    Unpin Conversation
                  </div>
                )}

                <div
                  onClick={handleArchive}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Archive Conversation
                </div>

                <div>
                  <button
                    type="button"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                    onClick={handleDelete}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete Conversation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
