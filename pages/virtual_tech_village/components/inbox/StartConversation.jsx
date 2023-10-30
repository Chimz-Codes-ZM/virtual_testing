import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";

const StartConversation = () => {
  const [userData, setUserData] = useState([]);
  const [loggedInId, setLoggedInId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;
    setLoggedInId(id);

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/chat_list/${id}/`
        );
        setUserData(response.data);
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
      router.push(
        `/virtual_tech_village/inbox/${loggedInId}/${route}`
      );



  };

  return (
    <div className="fixed bottom-4 z-50">
      <div>
        <label
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
        </select>
      </div>
    </div>
  );
};

export default StartConversation;
