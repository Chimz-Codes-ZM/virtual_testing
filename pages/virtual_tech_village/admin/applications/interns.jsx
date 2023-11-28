import React, { useState, useReducer } from "react";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import Link from "next/link";


import { applications, approved, denied } from "@/pages/data";

const initialState = {
    overview: true,
    approved: false,
    denied: false,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_OVERVIEW":
        return { ...state, overview: true, approved: false, denied: false };
      case "SET_APPROVED":
        return { ...state, overview: false, approved: true, denied: false };
      case "SET_DENIED":
        return { ...state, overview: false, approved: false, denied: true };
    }
  };

const Intern = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [checked, setChecked] = useState({})
    const [deniedApplicants, setDeniedApplicants] = useState({})
  
    const handleApplicationView = () => {
      dispatch({ type: "SET_OVERVIEW" });
    };
  
    const handleApprovedView = () => {
      dispatch({ type: "SET_APPROVED" });
    };
  
    const handleDeniedView = () => {
      dispatch({ type: "SET_DENIED" });
    };
  
    const handleApprovedChange = (applicantId) => {
      setChecked((prevChecked) => ({
        ...prevChecked,
        [applicantId]: !prevChecked[applicantId],
      }));
    };
  
    const handleDeniedChange = (applicantId) => {
      setDeniedApplicants((prev) => ({
          ...prev,
          [applicantId]: !prev[applicantId]
      }))
    }
  
    const handleSubmit = () => {
      console.log("Approved applicants: ", checked);
      console.log("Denied applicants: ", deniedApplicants)
    }
  
    return (
      <>
        <Layout sideHighlight="Insight">
          <div className="w-full custom-height flex flex-col gap-5 mt-16 overflow-x-hidden">
              <div className="fixed bottom-16 right-16 bg-black text-white rounded-sm text-xl px-2 p-1 cursor-pointer" onClick={handleSubmit}>Submit</div>
            <p className="text-gray-800">Intern applications to join Baobabpad</p>
  
            <div className="flex items-center">
              <span
                className={`text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 ${
                  state.overview === true ? "border-gray-700" : "border-gray-100"
                } cursor-pointer`}
                onClick={handleApplicationView}
              >
                Applications
              </span>
              <span
                className={`text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 ${
                  state.approved === true ? "border-gray-700" : "border-gray-100"
                } cursor-pointer`}
                onClick={handleApprovedView}
              >
                Approved
              </span>
              <span
                className={`text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 ${
                  state.denied === true ? "border-gray-700" : "border-gray-100"
                } cursor-pointer`}
                onClick={handleDeniedView}
              >
                Denied
              </span>
            </div>
  
            <div className="w-full flex flex-col relative">
             
                <div className={`absolute w-full transition-transform duration-300 ease-in-out transform ${state.overview ? 'translate-x-0' : 'translate-x-[200%]'}`}>
                  <div className="w-full flex border-b border-gray-600">
                    <span className="text-sm font-bold text-gray-800 flex flex-grow">
                      Names
                    </span>
                    <span className="text-sm font-bold text-gray-800 w-20">
                      Approve
                    </span>
                    <span className="text-sm font-bold text-gray-800 w-20">
                      Deny
                    </span>
                  </div>
  
                  {applications.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="w-full flex border-b py-2 border-gray-600"
                    >
                      <span className="text-md text-gray-800 flex flex-grow">
                        {applicant.name}
                      </span>
                      <span className="text-md text-gray-800 w-20 flex justify-center items-center">
                        
                      <input
                          type="checkbox"
                          className="w-4 h-4 border-2 border-green-600 rounded"
                          checked={checked[applicant.id] || false}
                          onChange={() => handleApprovedChange(applicant.id)}
                        />                      
                      </span>
                      <span className="text-md text-red-600 w-20 flex justify-center items-center">
                      <input
                          type="checkbox"
                          className="w-4 h-4 border-2 border-green-600 rounded"
                          checked={deniedApplicants[applicant.id] || false}
                          onChange={() => handleDeniedChange(applicant.id)}
                        />   
                      </span>
                    </div>
                  ))}
                </div>
  
                <div className={`absolute w-full transition-transform duration-300 ease-in-out transform ${state.approved ? 'translate-x-0' : 'translate-x-[200%]'}`}>
                {approved.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="w-full flex border-b py-2 border-gray-600"
                    >
                      <span className="text-md text-gray-800 flex flex-grow">
                        {applicant.name}
                      </span>
                      <span className="text-md text-gray-800 w-20 flex justify-center items-center">
                        <a href="#">
                          <div className="w-4 h-4 border-2 border-green-600 rounded"></div>
                        </a>
                      </span>
                      <span className="text-md text-red-600 w-20 flex justify-center items-center">
                        <a href="#">
                          <div className="w-4 h-4 border-2 border-red-600 rounded"></div>
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
  
                <div className={`absolute w-full transition-transform duration-300 ease-in-out transform ${state.denied ? 'translate-x-0' : 'translate-x-[200%]'}`}>
                {denied.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="w-full flex border-b py-2 border-gray-600"
                    >
                      <span className="text-md text-gray-800 flex flex-grow">
                        {applicant.name}
                      </span>
                      <span className="text-md text-gray-800 w-20 flex justify-center items-center">
                        <a href="#">
                          <div className="w-4 h-4 border-2 border-green-600 rounded"></div>
                        </a>
                      </span>
                      <span className="text-md text-red-600 w-20 flex justify-center items-center">
                        <a href="#">
                          <div className="w-4 h-4 border-2 border-red-600 rounded"></div>
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              
            </div>
          </div>
        </Layout>
      </>
    );
  };
  

export default Intern
