import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { FiBell } from "react-icons/fi";

const GetNotifications = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const token = typeof localStorage !== "undefined" ? localStorage.getItem("token") : null; 
  const decodedToken = token ? jwt_decode(token) : null;
  const id = decodedToken ? decodedToken.user_id : null;

  useEffect(() => {
    const notificationSocket = new WebSocket(
      `wss://baobabpad.herokuapp.com/ws/notifications/${id}/`
    );

    notificationSocket.onopen = function () {
      const message = "button clicked";
      notificationSocket.send(JSON.stringify({ message: message }));
    };

    notificationSocket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      const receivedNotifications = data.message;

      const formattedNotifications = receivedNotifications.map((notification) => {
        return {
          notification: notification.notification,
          id: notification.id,
        };
      });

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        ...formattedNotifications,
      ]);
    };

    notificationSocket.onclose = function (e) {
      console.error("Socket closed unexpectedly");
    };

    return () => {
      notificationSocket.close();
    };
  }, []);

  const handleNotificationClick = () => {
    setShowDropdown(!showDropdown);

    if (showDropdown && notifications.length > 0) {
      const notificationIds = notifications.map((notification) => notification.id);

      fetch("https://baobabpad-334a8864da0e.herokuapp.com/api/viewed_notifications/", {
        method: "POST",
        body: JSON.stringify({ notification_ids: notificationIds }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setNotifications([]); 
      });
    }
  };

  return (
    <div>
      <div className="w-max cursor-pointer flex items-center relative">
        <FiBell id="notification" className="text-xl" onClick={handleNotificationClick} />
        {notifications.length > 0 && (
          <div className="absolute top-0 right-0 -mt-1 -mr-1 h-2 w-2 rounded-full bg-orange-500"></div>
        )}
        <div className="absolute bottom-0 -right-0">
          {showDropdown && (
            <div className="relative inline-block text-left">
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="notificationDropdown"
              >
                <ul className="py-1" role="none">
                  {notifications.length > 0 ? (
                    [...notifications].map(({ notification, id }, index) => (
                      <li
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
                        role="menuitem"
                        data-id={id}
                      >
                        {notification}
                      </li>
                    ))
                  ) : (
                    <li className="block px-4 py-2 text-sm text-gray-400">
                      No new notifications
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetNotifications;
