import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "@/config";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Notification_component = () => {
  const [unreadMessageCount, setUnreadMessageCount] = useState(null);
  const [notificationContent, setNotificationContent] = useState(null);
 
  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const { readyState, sendJsonMessage } = useWebSocket(
    `wss://${API_URL}/ws/chat_notifications/${user.user_id}/`,
    {
      onOpen: () => {
        console.log("Connected to Notifications Mobile View!");
      },
      onClose: () => {
        console.log("Disconnected from Notifications Mobile View!");
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
  return (
    <div className="pt-16 p-2">
      <ScrollArea className="max-h-screen w-full">
        {notificationContent && notificationContent.length > 0 ? (
          notificationContent.map((notification, index) => (
            <div className="border-b" key={index}>
              <Link href={`/virtual_tech_village/${notification.route}`}>
                <div className="flex items-center gap-2 hover:bg-gray-50 hover:text-gray-700 px-2">
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
                    <div className="flex flex-col truncate">
                      <div className="font-semibold">{notification.sender}</div>
                      <div className="truncate max-w-[170px]">
                        {notification.message}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div>No new notifications.</div>
        )}
      </ScrollArea>
    </div>
  );
};

export default Notification_component;
