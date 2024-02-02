import React from "react";

const Project_Roadmap = () => {
  return (
    <div className="h-full">
      <div className="p-2 shadow rounded-md h-full w-full sm:flex flex-col justify-between hidden">
        <div className="grid w-full grid-cols-3 grow">
          <div className="col-span-1 w-full  p-2 flex justify-center flex-col">
            <div className="w-fit flex gap-1 self-center">
              <CheckIcon className="w-6 h-6 text-green-500" />
              1. Requirements gathering
            </div>
            <div className="grow w-1 border bg-green-500 bg-opacity-50 self-center"></div>
            <div className="rounded-full w-2 h-2 bg-green-500 bg-opacity-50 self-center"></div>
          </div>
          <div className="col-span-1 w-full p-2 flex justify-center flex-col">
            <div className="w-fit flex gap-1 self-center">
              <CheckIcon className="w-6 h-6 text-green-500" />
              3. Building Core Features
            </div>
            <div className="grow w-1 border bg-orange-500 bg-opacity-50 self-center"></div>
            <div className="rounded-full w-2 h-2 bg-orange-500 bg-opacity-50 self-center"></div>
          </div>
          <div className="col-span-1 w-full  p-2 flex justify-center flex-col">
            <div className="w-fit flex gap-1 self-center">
              <ClockIcon className="w-6 h-6 text-gray-500" />
              5. Review for future development
            </div>
            <div className="grow w-1 border bg-blue-500 bg-opacity-50 self-center"></div>
            <div className="rounded-full w-2 h-2 bg-blue-500 bg-opacity-50 self-center"></div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center border-y-[#1d7874] border-y border-opacity-30">
          <div className="p-2">Project A Roadmap</div>
        </div>
        <div className="w-full flex grow">
          <div className="w-1/2 p-2 flex justify-center  flex-col">
            {" "}
            <div className="rounded-full w-2 h-2 bg-yellow-500 bg-opacity-50 self-center"></div>
            <div className="grow w-1 border bg-yellow-500 bg-opacity-50 self-center"></div>
            <div className="flex gap-1 w-fit self-center">
              <CheckIcon className="w-6 h-6 text-green-500" />
              2. Design system & architecture
            </div>
          </div>
          <div className="w-1/2 p-2 flex justify-center  flex-col">
            <div className="rounded-full w-2 h-2 bg-red-500 bg-opacity-50 self-center"></div>

            <div className="grow w-1 border bg-red-500 bg-opacity-50 self-center"></div>
            <div className="w-fit flex gap-1 self-center">
              <ClockIcon className="w-6 h-6 text-gray-500" />
              4. Functional MVP Development
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden mt-4 p-2 shadow rounded-md flex flex-col justify-center items-center">

        <h1 className="text-center font-semibold text-lg border-b-2 w-fit">Project Roadmap</h1>
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center space-x-4 w-full p-4">
            <CheckIcon className="w-6 h-6 text-green-500" />
            <span className="font-medium">
              Requirements gathering
            </span>
            
          </div>
          <div className="flex items-center space-x-4 w-full p-4">
            <CheckIcon className="w-6 h-6 text-green-500" />
            <span className="font-medium">
              Design system & architecture
            </span>
            
          </div>
          <div className="flex items-center space-x-4 w-full p-4">
            <CheckIcon className="w-6 h-6 text-green-500" />
            <span className="font-medium">
              Building core features
            </span>
            
          </div>
          <div className="flex items-center space-x-4 w-full p-4">
            <CheckIcon className="w-6 h-6 text-green-500" />
            <span className="font-medium">
              Functional MVP Development
            </span>
            
          </div>
          <div className="flex items-center space-x-4 w-full p-4 bg-gray-100">
            <ClockIcon className="w-6 h-6 text-gray-500" />
            <span className=" font-medium">
              Review for future development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_Roadmap;

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
