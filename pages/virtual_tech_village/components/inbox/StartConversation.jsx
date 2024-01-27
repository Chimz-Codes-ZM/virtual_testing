import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector } from "react-redux";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
    <div className="fixed bottom-4 z-50">
      <div className="border-2 p-1 rounded-md ">
        {/* <label
          htmlFor="HeadlineAct"
          className="block text-sm font-medium text-gray-900"
        >
          Start a New Conversation
        </label>

        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-1.5 w-full rounded-lg px-1 max-h-[50px] overflow-y-auto border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="">Please select</option>
          {userData?.individuals?.map((individual) => (
            <option
              key={individual.user_id}
              value={`${individual.first_name} ${individual.last_name}`}
              onClick={()=> handleInputChange(individual.user_id)}
            >
              {`${individual.first_name} ${individual.last_name}`}
            </option>
          ))}
        </select> */}

        <Popover>
          <PopoverTrigger>Start a Conversation</PopoverTrigger>
          <PopoverContent>
            <ScrollArea className="h-[200px] rounded-md flex flex-col gap-2">
              {userData?.individuals?.map((individual) => (
                <div
                  key={individual.user_id}
                  className="w-full hover:bg-gray-100 transition border-y delay-100 cursor-pointer h-6"
                  onClick={() => handleInputChange(individual.user_id)}
                >{`${individual.first_name} ${individual.last_name}`}</div>
              ))}
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default StartConversation;
