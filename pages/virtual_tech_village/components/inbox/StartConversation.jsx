import React from "react";

const StartConversation = () => {
  return (
    <div className="fixed bottom-4 z-50">
      <div>
        <label
          htmlFor="HeadlineAct"
          className="block text-sm font-medium text-gray-900"
        >
          Start a New Conversation
        </label>

        <div className="relative mt-1.5">
          <input
            type="text"
            list="HeadlineActArtist"
            id="HeadlineAct"
            className="w-full rounded-lg border-gray-300 border px-1 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
            placeholder="Please select"
          />

          <span className="absolute inset-y-0 end-0 flex w-8 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </span>
        </div>

        <datalist name="HeadlineAct" id="HeadlineActArtist">
          <option value="JM">John Mayer</option>
          <option value="SRV">Stevie Ray Vaughn</option>
          <option value="JH">Jimi Hendrix</option>
          <option value="BBK">B.B King</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
        </datalist>
      </div>
    </div>
  );
};

export default StartConversation;
