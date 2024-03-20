import React, {useState} from "react";
import Connect_toolbar from "./connect_toolbar";
import Connect_Input from "./connect_input";

const Conversations = () => {
  const [toggleUniqueMessage, setToggleUniqueMessage] = useState(false)

  const handleToggle = () => {
    setToggleUniqueMessage(!toggleUniqueMessage)
  }
  return (
    <div className="grow relative p-4 py-1 overflow-hidden pt-10 max-w-4xl">
      
      
      <Connect_toolbar />
      <div className="py-8 pb-32 w-full h-full">
        <div className=" w-full h-full px-4 p-2">
          <div className=" rounded-xl cursor-pointer p-1 px-2 border w-fit bg-gray-900 text-gray-50" onClick={handleToggle}>
            Hello
          </div>
        </div>
      </div>
      <Connect_Input />
    </div>
  );
};

export default Conversations;
