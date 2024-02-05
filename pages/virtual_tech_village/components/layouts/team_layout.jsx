import React from 'react'
import Link from 'next/link'


const Team_Layout = ({children, title}) => {
  return (
    <div className="w-full lg:h-screen overflow-hidden overflow-y-auto flex flex-col lg:flex-row gap-5 pt-12">
    <div className="w-48 gap-3 flex flex-col flex-shrink-0">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-[#004643]">Virtual Tech Village</h1>
        <div className="w-full flex flex-col gap-2 pl-2">
          <Link href="/virtual_tech_village/profile">
            <h1
              className={
                title === "team overview"
                  ? "border-l-4 pl-2 border-[#004643]"
                  : "hover:border-l-4 pl-2"
              }
            >
              Team Overview
            </h1>
          </Link>
          {/* <Link href="/virtual_tech_village/edit_profile">
            <h1
              className={
                title === "edit profile"
                  ? "border-l-4 pl-2 border-[#004643]"
                  : "hover:border-l-4 pl-2"
              }
            >
              Edit Profile
            </h1>
          </Link> */}
        </div>
      </div>
    </div>
    <div className="flex overflow-x-hidden overflow-y-auto flex-grow shadow rounded flex-col flex-shrink-0">
      {children}
    </div>
  </div>
  )
}

export default Team_Layout
