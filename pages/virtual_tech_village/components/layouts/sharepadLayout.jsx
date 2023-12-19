import React from "react";
import Link from "next/link";

const SharepadLayout = ({ children, title }) => {
  return (
    <div className="w-full lg:h-screen overflow-y-hidden flex flex-col xl:flex-row gap-5 pt-12">
      <div className="w-30 gap-3 flex flex-col flex-shrink-0">
        <div className="w-full flex flex-col gap-2">
          {/* <h1 className="text-green-600">Virtual Tech Village</h1> */}
          <div className="w-full flex flex-col gap-2 pl-2">
            <Link href="/virtual_tech_village/trends">
              <h1
                className={
                  title === "trends"
                    ? "border-l-4 pl-2 border-green-600"
                    : "hover:border-l-4 pl-2 border-l-4 border-white hover:border-gray-200"
                }
              >
                Trends
              </h1>
            </Link>

            <Link href="/virtual_tech_village/events">
              <h1
                className={
                  title === "events"
                    ? "border-l-4 pl-2 border-green-600"
                    : "hover:border-l-4 pl-2 border-l-4 border-white hover:border-gray-200"
                }
              >
                Events
              </h1>
            </Link>

            {/* <Link href="/virtual_tech_village/resources">
              <h1
                className={
                  title === "resources"
                    ? "border-l-4 pl-2 border-green-600"
                    : "hover:border-l-4 pl-2 border-l-4 border-white hover:border-gray-200"
                }
              >
                Resources
              </h1>
            </Link> */}

            <Link href="/virtual_tech_village/careers">
              <h1
                className={
                  title === "careers"
                    ? "border-l-4 pl-2 border-green-600"
                    : "hover:border-l-4 pl-2 border-l-4 border-white hover:border-gray-200"
                }
              >
                Careers
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex py-3 px-1 md:px-5 overflow-x-hidden overflow-y-auto shadow rounded flex-col grow ">
        {children}
      </div>
    </div>
  );
};

export default SharepadLayout;
