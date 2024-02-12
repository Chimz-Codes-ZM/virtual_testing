import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector } from "react-redux";

import { IoIosChatbubbles } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ScrollArea } from "@/components/ui/scroll-area";
import { API_URL } from "@/config";

const StartConversation = () => {
  const [userData, setUserData] = useState([]);
  const [loggedInId, setLoggedInId] = useState("");
  const router = useRouter();

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  useEffect(() => {
    setLoggedInId(user.user_id);

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://${API_URL}/village/chat_list/${user.user_id}/`
        );
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  const handleInputChange = (route) => {
    if (!userData) {
      return;
    }
    router.push(`/virtual_tech_village/inbox/${loggedInId}/${route}`);
  };

  return (
    <div className="fixed bottom-4 bg-white z-50">
      <div className="border-2 p-1 bg-white rounded-md ">
    

        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center p-1 gap-2"><IoIosChatbubbles /> Message</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Members</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="max-h-[200px] w-[250px] rounded-md overflow-y-auto">
              {userData?.individuals?.map((individual) => (
                <DropdownMenuItem
                  key={individual.user_id}
                  onClick={() => handleInputChange(individual.user_id)}
                >{`${individual.first_name} ${individual.last_name}`}</DropdownMenuItem>
              ))}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default StartConversation;
