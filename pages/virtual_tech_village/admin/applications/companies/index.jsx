import React, { useState, useReducer, useEffect } from "react";
import Layout from "../../../components/layouts/layout";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setOverview,
  setApproved,
  setDenied,
  toggleApproved,
  toggleDenied,
  resetState,
} from "../../../../../features/applications/CompanySlice";
import Skeleton from "../../components/skeleton";

const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.companyApplications);
  const [loading, setLoading] = useState(false);

  const [info, setInfo] = useState(null);

  const sentData = [
    { approved: state.approvedApplicants },
    { denied: state.deniedApplicants },
  ];

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const handleApplicationView = () => {
    dispatch(setOverview());
  };

  const handleApprovedView = () => {
    dispatch(setApproved());
  };

  const handleDeniedView = () => {
    dispatch(setDenied());
  };

  const handleApprovedChange = (applicantId) => {
    dispatch(toggleApproved({ applicantId }));
  };

  const handleDeniedChange = (applicantId) => {
    dispatch(toggleDenied({ applicantId }));
  };

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/company_approval/${user.user_id}/`
      );
      setInfo(response.data);
      console.log("Intern data: ", response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendData = async () => {
      setLoading(true);

      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/company_approval/${user.user_id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sentData),
        }
      );
      if (response.ok) {
        setLoading(false);
        fetchData();
        console.log("Successful submission");
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
        setLoading(false);
      }
    };

    sendData();

    console.log(sentData);
  };

  if (!info) {
    return (
      <Layout>
        <div className="w-full h-full relative flex flex-col gap-5 mt-16 overflow-x-hidden">
          <p className="text-gray-800">Talent applications to join Baobabpad</p>

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
                state.approvedView === true
                  ? "border-gray-700"
                  : "border-gray-100"
              } cursor-pointer`}
              onClick={handleApprovedView}
            >
              Approved
            </span>
            <span
              className={`text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 ${
                state.deniedView === true
                  ? "border-gray-700"
                  : "border-gray-100"
              } cursor-pointer`}
              onClick={handleDeniedView}
            >
              Denied
            </span>
          </div>
          <Skeleton />
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout sideHighlight="Insight">
        <div className="w-full custom-height flex flex-col gap-5 mt-16 overflow-x-hidden">
          <div
            className="fixed bottom-16 right-16 bg-black text-white rounded-sm text-xl px-2 p-1 cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </div>
          <p className="text-gray-800">Company applications to join Baobabpad</p>

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
                state.approvedView === true
                  ? "border-gray-700"
                  : "border-gray-100"
              } cursor-pointer`}
              onClick={handleApprovedView}
            >
              Approved
            </span>
            <span
              className={`text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 ${
                state.deniedView === true
                  ? "border-gray-700"
                  : "border-gray-100"
              } cursor-pointer`}
              onClick={handleDeniedView}
            >
              Denied
            </span>
          </div>

          <div className="w-full flex flex-col relative">
            <div
              className={`absolute w-full transition-transform duration-300 ease-in-out transform ${
                state.overview ? "translate-x-0" : "translate-x-[200%]"
              }`}
            >
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

              {info?.companies?.map((applicant) => (
                <div
                  key={applicant.user_id}
                  className="w-full flex border-b py-2 border-gray-600 transition hover:bg-slate-50"
                >
                  <Link
                    className="text-md text-gray-800 flex flex-grow gap-2"
                    href={`/virtual_tech_village//admin/applications/${applicant.user_id}`}
                  >
                    <div className="relative w-6 h-6 rounded">
                      <Image
                        src={applicant.image}
                        priority
                        alt="applicant image"
                        fill
                        className="w-6 h-6"
                      />
                    </div>
                    {applicant.company_name}
                  </Link>
                  <span className="text-md text-gray-800 w-20 flex justify-center items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-2 border-green-600 rounded"
                      checked={
                        state.approvedApplicants[applicant.user_id] || false
                      }
                      onChange={() => handleApprovedChange(applicant.user_id)}
                    />
                  </span>
                  <span className="text-md text-red-600 w-20 flex justify-center items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-2 border-green-600 rounded"
                      checked={
                        state.deniedApplicants[applicant.user_id] || false
                      }
                      onChange={() => handleDeniedChange(applicant.user_id)}
                    />
                  </span>
                </div>
              ))}
            </div>

            <div
              className={`absolute w-full transition-transform duration-300 ease-in-out transform ${
                state.approvedView ? "translate-x-0" : "translate-x-[200%]"
              }`}
            >
              {info?.approved_companies?.map((applicant) => (
                <div
                  key={applicant.id}
                  className="w-full flex border-b py-2 border-gray-600"
                >
                  <span className="text-md text-gray-800 flex flex-grow">
                    {applicant.company_name}
                  </span>
                </div>
              ))}
            </div>

            <div
              className={`absolute w-full transition-transform duration-300 ease-in-out transform ${
                state.deniedView ? "translate-x-0" : "translate-x-[200%]"
              }`}
            >
              {info?.denied_companies?.map((applicant) => (
                <div
                  key={applicant.id}
                  className="w-full flex border-b py-2 border-gray-600"
                >
                  <span className="text-md text-gray-800 flex flex-grow">
                    {applicant.company_name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {loading && (
            <div className="h-full w-full flex justify-center items-center bg-opacity-25 bg-slate-700 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Index;
