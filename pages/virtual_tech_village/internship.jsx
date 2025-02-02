import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useSession, getSession } from "next-auth/react";
import { useSelector, dispatch, useDispatch } from "react-redux";
import Layout from "./components/layouts/layout"
import {
  fetchUserData,
  setUserData,
  setUserId,
} from "@/features/user/UserSlice";

import Complete_Profile from "../virtual_tech_village/components/alerts/completeProfile";
import Unapproved from "./components/alerts/unapproved";
import MemberProfile from "./components/profiles/MemberProfile";
import ExpandedProfileModal from "./components/profiles/ExpandedProfileModal";
import JobAdded from "./components/alerts/jobAdded";
import CompanyProfile from "./components/profiles/companyProfile";
import ExpandedCompanyModal from "./components/profiles/expandedCompanyModal";

import { motion, AnimatePresence } from "framer-motion";
import { JellyTriangle } from "@uiball/loaders";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FcAddDatabase } from "react-icons/fc";
import Resume_component from "./components/cv/Resume_component";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/config";

const Virtual_internship = () => {
  const router = useRouter();

  const [memberShow, setMemberShow] = useState(true);
  const [companyShow, setCompanyShow] = useState(false);
  const [addNewJobShow, setAddNewJobShow] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate();
  const [profile, setProfile] = useState(false);
  const [company, setCompany] = useState(false);
  const [incompleteProfile, setIncompleteProfile] = useState(false);
  const [incompleteCompanyProfile, setIncompleteCompanyProfile] =
    useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const expandedProfileRef = useRef(null);
  const expandedCompanyRef = useRef(null);
  const memberStartRef = useRef(null);
  const newJobRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const [talentPages, setTalentPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [memberList, setMemberList] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [selectedCompanyAttributes, setSelectedCompanyAttributes] = useState(
    {}
  );
  const [filters, setFilters] = useState({
    page: "1",
    country: "",
    name: "",
    skill: "",
    experience: "",
    company_country: "",
    company_name: "",
    company_industry: "",
    category: "",
  });
  const [currentSessionId, setCurrentSessionId] = useState(null);

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const dispatch = useDispatch();

  const login = (id) => {
    console.log("Login function called");
    const fetchData = async () => {
      const response = await fetch(
        `https://${API_URL}/village/village_profiles/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters: { ...filters } }),
        }
      );

      const data = await response.json();
      console.log("MEMBERLIST DATA:", data);
      const pages = Array.from(
        { length: data.intern_total_pages },
        (_, index) => index + 1
      );

      setTalentPages(pages);
      setMemberList(data);
    };

    fetchData();

    setIsLoading(false);
  };

  const country_skills = (id) => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://${API_URL}/village/intern_country_skills/${id}/`
        );
        setSelectedAttributes(response.data);
        console.log("This is the filtering information:",response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  };

  const country_industries = (id) => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://${API_URL}/village/country_industries/${id}/`
        );
        setSelectedCompanyAttributes(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  };

  const { data: session } = useSession();

  const authenticatedUser = () => {
    try {
      // console.log("Session:", session);

      if (session && session.access) {
        const decodedToken = jwt_decode(session.access);
        const id = decodedToken.user_id;
        login(id);
        country_skills(id);
        country_industries(id);
        // dispatch(setUserId(id));
        dispatch(fetchUserData(id));

        setCurrentSessionId(id);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const scrollToTop = () => {
    memberStartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    checkProfileComplete();
    scrollToTop();
  }, [selectedCompanyAttributes]);

  useEffect(() => {
    authenticatedUser();
  }, []);

  const { companies, interns } = memberList || {
    companies: [],
    interns: [],
  };

  const handleClickOutsideProfile = (event) => {
    if (
      expandedProfileRef.current &&
      !expandedProfileRef.current.contains(event.target)
    ) {
      setProfile(false);
    }
  };

  const handleClickOutsideCompany = (event) => {
    if (
      expandedCompanyRef.current &&
      !expandedCompanyRef.current.contains(event.target)
    ) {
      setCompany(false);
    }
  };

  const handleClickOutsideNewJob = (event) => {
    if (newJobRef.current && !newJobRef.current.contains(event.target)) {
      setAddNewJobShow(false);
    }
  };

  const handleMoreInfoClick = (modalId) => {
    router.push(`/virtual_tech_village/member_info/${modalId}`);
  };

  const handleChatClick = (modalId) => {
    router.push(
      `/virtual_tech_village/inbox/${memberList.user[0].user_id}/${modalId}`
    );
  };

  const checkProfileComplete = () => {
    if (
      memberList &&
      memberList.user[0]?.is_profile_complete === "False" &&
      memberList.user[0]?.account_type === "village talent profile"
    ) {
      setIncompleteProfile(true);
    }

    if (memberList) {
      if (
        memberList.user[0]?.is_profile_complete === "False" &&
        memberList.user[0]?.account_type === "village company profile"
      ) {
        setIncompleteCompanyProfile(true);
      }
    }
  };

  const profileReroute = () => {
    router.push("/virtual_tech_village/complete_profile");
  };

  const internReroute = () => {
    router.push("/virtual_tech_village/complete_intern_profile");
  };

  const companyProfileReroute = () => {
    router.push("/virtual_tech_village/complete_company_profile");
  };

  const unapprovedProfile = () => {
    router.push("/");
  };

  const handlePageFetch = (number) => {
    setMemberList(null);

    const fetchData = async () => {
      const response = await fetch(
        `https://${API_URL}/village/village_profiles/${currentSessionId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters: { ...filters, page: number } }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const pages = Array.from(
          { length: data.intern_total_pages },
          (_, index) => index + 1
        );

        setTalentPages(pages);
        setMemberList(data);
        const accountType = data.user[0]?.account_type || "";

        setCompanyShow(accountType === "village company profile");
        setMemberShow(accountType !== "village company profile");
        setActivePage(number);
      }
    };
    fetchData();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideProfile);
    document.addEventListener("mousedown", handleClickOutsideCompany);
    document.addEventListener("mousedown", handleClickOutsideNewJob);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfile);
      document.removeEventListener("mousedown", handleClickOutsideCompany);
      document.removeEventListener("mousedown", handleClickOutsideNewJob);
    };
  }, []);

  const handleMemberShow = () => {
    if (!memberShow) {
      enableAnimations(true);
      setCompanyShow(false);
      setMemberShow(true);
    }
  };

  const handleCompanyShow = () => {
    if (!companyShow) {
      enableAnimations(true);
      setMemberShow(false);
      setCompanyShow(true);
    }
  };

  const handleNewJobShow = () => {
    setAddNewJobShow(true);
  };

  const imageRef = useRef();

  const [jobImage, setJobImage] = useState(null);

  const [newJob, setNewJob] = useState({
    position: "",
    job_type: "",
    location: "",
    link: "",
  });

  const handleNewJobChange = (e) => {
    const { name, value } = e.target;

    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const handleNewJobImage = (e) => {
    imageRef.current = e.target.files[0];
  };

  const handleJobAlert = () => {
    setSuccess(true);
  };

  const handleJobDismiss = () => {
    setSuccess(false);
  };

  const handleNewJobSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key of Object.keys(newJob)) {
      formData.append(key, newJob[key]);
    }

    formData.append("image", imageRef.current);

    const sendData = async () => {
      const response = await fetch(
        `https://${API_URL}/village/job_listings/${currentSessionId}/`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        handleJobAlert();
        setAddNewJobShow(false);
        setNewJob({
          position: "",
          job_type: "",
          location: "",
          link: "",
        });
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
    // console.log(formData);
  };

  const handleInputChange = async (value, name) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [name]: value === "All" ? "" : value,
      };

      // console.log(updatedFilters);

      makeAPICall(updatedFilters);

      return updatedFilters;
    });
  };

  const makeAPICall = async (updatedFilters) => {
    try {
      const response = await fetch(
        `https://${API_URL}/village/village_profiles/${currentSessionId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters: updatedFilters }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        const pages = Array.from(
          { length: data.intern_total_pages },
          (_, index) => index + 1
        );

        // console.log("========> Total number of pages: ", pages);

        setMemberList(data);
        setTalentPages(pages);
        // console.log();
      } else {
        // console.error("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputNameChange = async (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

    try {
      const response = await fetch(
        `https://${API_URL}/village/village_profiles/${currentSessionId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters: { ...filters, [name]: value } }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        // console.log("====> This is my filtered data: ", data);
        const pages = Array.from(
          { length: data.intern_total_pages },
          (_, index) => index + 1
        );

        // console.log("========> Total number of pages: ", pages);

        setMemberList(data);
        setTalentPages(pages);
        // console.log();
      } else {
        console.error("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const clearFilter = async (e) => {
    e.preventDefault();
    setFilters({
      page: "1",
      country: "",
      name: "",
      skill: "",
      experience: "",
      company_country: "",
      company_name: "",
      company_industry: "",
      category: "",
    });

    try {
      const response = await fetch(
        `https://${API_URL}/village/village_profiles/${currentSessionId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        // console.log("====> This is my filtered data: ", data);
        const pages = Array.from(
          { length: data.intern_total_pages },
          (_, index) => index + 1
        );

        // console.log("========> Total number of pages: ", pages);

        setMemberList(data);
        setTalentPages(pages);
        // console.log();
      } else {
        // console.error("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!memberList) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }

  if (
    memberList?.user[0].is_profile_complete === "False" &&
    memberList?.user[0].account_type === "village talent profile"
  ) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-lg">
        <Complete_Profile
          message="Your profile is incomplete! Please complete setting up your profile."
          alertDismiss={profileReroute}
        />
      </div>
    );
  }

  if (
    memberList?.user[0].is_profile_complete === "False" &&
    memberList?.user[0].account_type === "village company profile"
  ) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-lg">
        <Complete_Profile
          message="Your profile is incomplete! Please complete setting up your profile."
          alertDismiss={companyProfileReroute}
        />
      </div>
    );
  }

  if (
    memberList?.user[0].is_profile_complete === "False" &&
    memberList?.user[0].account_type === "Intern"
  ) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-lg">
        <Complete_Profile
          message="Your profile is incomplete! Please complete setting up your profile."
          alertDismiss={internReroute}
        />
      </div>
    );
  }

  if (
    memberList?.user[0].is_approved === "False" &&
    memberList?.user[0].is_profile_complete === "True" &&
    memberList?.user[0].account_type === "Intern"
  ) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-lg">
        <Unapproved
          message="Please note that your access to the platform is pending approval. Our team is working diligently to process your profile. You'll receive an email once it's approved."
          alertDismiss={unapprovedProfile}
        />
      </div>
    );
  }

  if (
    memberList?.user[0].is_approved === "False" &&
    memberList?.user[0].is_profile_complete === "True" &&
    memberList?.user[0].account_type === "village talent profile"
  ) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-lg">
        <Unapproved
          message="Please note that your access to the platform is pending approval. Our team is working diligently to process your profile. You'll receive an email once it's approved."
          alertDismiss={unapprovedProfile}
        />
      </div>
    );
  }

  if (
    memberList?.user[0].is_approved === "False" &&
    memberList?.user[0].is_profile_complete === "True" &&
    memberList?.user[0].account_type === "village company profile"
  ) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-lg">
        <Unapproved
          message="Please note that your access to the platform is pending approval. Our team is working diligently to process your profile. You'll receive an email once it's approved."
          alertDismiss={unapprovedProfile}
        />
      </div>
    );
  }

  const filteredData = interns?.filter((profile) => {
    const countryFilter = filters.country
      ? profile.country === filters.country
      : true;
    const searchFilter = filters.name
      ? profile?.first_name
          ?.toLowerCase()
          .includes(filters.name.toLocaleLowerCase()) ||
        profile.last_name
          ?.toLocaleLowerCase()
          .includes(filters.name.toLocaleLowerCase())
      : true;
    const skillFilter = filters.skill
      ? profile.skills.toLowerCase() === filters.skill.toLowerCase()
      : true;

    return countryFilter && searchFilter && skillFilter;
  });

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = filteredData?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  const filteredCompanyData = companies?.filter((profile) => {
    const countryFilter = filters.country
      ? profile.country === filters.country
      : true;
    const searchFilter = filters.company_name
      ? profile.company_name
          .toLowerCase()
          .includes(filters.company_name.toLocaleLowerCase())
      : true;
    const industryFilter = filters.company_industry
      ? profile.industry.toLowerCase() ===
        filters.company_industry.toLowerCase()
      : true;

    return countryFilter && searchFilter && industryFilter;
  });

  const itemsPerCompanyPage = 12;
  const startCompanyIndex = (currentPage - 1) * itemsPerCompanyPage;
  const endCompanyIndex = startCompanyIndex + itemsPerCompanyPage;

  const visibleCompanyData = filteredCompanyData?.slice(
    startCompanyIndex,
    endCompanyIndex
  );

  // const totalCompanyPages = Math.ceil(filteredData.length / itemsPerPage);

  const showProfile = (memberInfo) => {
    enableAnimations(true);
    setProfile(memberInfo);
  };

  const hideProfile = () => {
    enableAnimations(true);
    setProfile(false);
  };

  const showCompany = (companyInfo) => {
    enableAnimations(true);
    setCompany(companyInfo);
  };

  const cvDismiss = () => {
    setProfile(false);
  };

  return (
    <Layout sideHighlight="virtual internship">
      <div
        className="flex flex-col gap-5 relative pb-8 overflow-x-hidden overflow-y-auto"
        ref={parent}
      >
        {success && (
          <div className="rounded fixed bottom-10 sm:right-10 z-[999] max-w-[450px]">
            <JobAdded
              message="New job added successfully"
              alertDismiss={handleJobDismiss}
            />
          </div>
        )}
        <div className="relative" ref={memberStartRef}></div>
        <div>
          {addNewJobShow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-[999] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
            >
              <div ref={newJobRef}>
                {" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="p-6 bg-white border z-50 rounded flex flex-col gap-2">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl font-semibold">
                        Enter New Job Listing
                      </h1>
                      <p className="text-lg font-normal text-gray-500">
                        Fill out the details below to post a new job opportunity
                      </p>
                    </div>

                    <form
                      onSubmit={handleNewJobSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="position"
                          className="text-sm font-medium"
                        >
                          Position
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={newJob.position}
                          className="border rounded px-1"
                          onChange={handleNewJobChange}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="job_type"
                          className="text-sm font-medium"
                        >
                          Job Type
                        </label>
                        <input
                          type="text"
                          name="job_type"
                          value={newJob.job_type}
                          className="border rounded px-1"
                          onChange={handleNewJobChange}
                          placeholder="e.g., Full Time"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="location"
                          className="text-sm font-medium"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={newJob.location}
                          className="border rounded px-1"
                          onChange={handleNewJobChange}
                          placeholder="e.g., On-site"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="link" className="text-sm font-medium">
                          Link
                        </label>
                        <input
                          type="text"
                          name="link"
                          value={newJob.link}
                          className="border rounded px-1"
                          onChange={handleNewJobChange}
                          placeholder="e.g., www.glassdoor.com/job-123"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="image" className="text-sm font-medium">
                          Cover Image
                        </label>
                        <input
                          accept="image/*"
                          id="image"
                          type="file"
                          name="image"
                          value={jobImage}
                          className="border rounded px-1"
                          onChange={handleNewJobImage}
                          placeholder="e.g., www.glassdoor.com/job-123"
                        />
                      </div>

                      <div className="">
                        <button className="bg-gray-900 text-white w-full rounded-md p-1 shadow hover:bg-gray-800 transition delay-100">
                          Add New Job
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-2 relative w-full p-4 bg-white">
          <div className="flex flex-wrap gap-4">
            {((memberList &&
              memberList?.user[0]?.account_type === "village talent profile") ||
              (memberList &&
                memberList?.user[0]?.account_type ===
                  "village admin profile") ||
              (memberList &&
                memberList?.user[0]?.account_type === "community manager") ||
              (memberList &&
                memberList?.user[0]?.account_type ===
                  "village company profile") ||
              (memberList &&
                memberList?.user[0]?.account_type === "Intern")) && (
              <div
                className={` pb-1 w-max cursor-pointer  ${
                  memberShow
                    ? "border-b-2 border-black"
                    : "border-b-2 hover:border-gray-300 border-white ease-in-out transition-colors"
                }`}
                onClick={handleMemberShow}
              >
                Members{" "}
                <span className="bg-black text-white rounded p-1">
                  {memberList?.total_intern_profiles}
                </span>
              </div>
            )}

            {(memberList?.user[0]?.account_type === "village admin profile" ||
              memberList?.user[0]?.account_type === "community manager") && (
              <div
                className={`"pb-1 w-max cursor-pointer ${
                  companyShow
                    ? "border-b-2 border-black"
                    : "hover:border-b-2 hover:border-gray-300 delay-200 ease-in-out transition-colors"
                }`}
                onClick={handleCompanyShow}
              >
                Companies{" "}
                <span className="bg-black text-white rounded p-1">
                  {memberList?.total_company_profiles}
                </span>
              </div>
            )}
          </div>
          {/* <div className="hidden lg:block mr-8 text-xl font-semibold border-b-2">
          <h1>Search Profiles</h1>
        </div> */}
        </div>

        <div className="flex relative">
          <div className="w-full lg:w-4/5">
            {(memberList.user[0]?.account_type === "village talent profile" ||
              memberList.user[0].account_type === "village admin profile" ||
              memberList.user[0].account_type === "community manager" ||
              memberList.user[0].account_type === "village company profile" ||
              memberList.user[0].account_type === "Intern") && (
              <AnimatePresence>
                {memberShow && (
                  <div
                    className="grid grid-cols-1 xl:min-h-[500px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {filteredData.length === 0 ? (
                      <div className="flex min-h-[10rem] h-full w-screen items-center justify-center ">
                        <JellyTriangle size={40} color="#231F20" />
                      </div>
                    ) : (
                      visibleData.map((profile) => (
                        <MemberProfile
                          key={profile.user_id}
                          image={profile.image}
                          name={`${profile.first_name} ${profile.last_name}`}
                          skills={profile.skills}
                          showProfile={showProfile}
                          country={profile.country}
                          experience={profile.experience}
                          certificate={profile.education[0]?.degree_name}
                          user_id={profile.user_id}
                          bio={profile.bio}
                          city={profile.city}
                          title={profile.skills}
                          job1={profile.work_experience[0]?.company}
                          position1={profile.work_experience[0]?.position}
                          work_experience={profile.work_experience}
                          education={profile.education}
                          languages={profile.languages}
                          linkedin={profile.link}
                          soft_skills={profile.soft_skills}
                        />
                      ))
                    )}
                    {/* <AnimatePresence> */}
                    {profile && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={
                          "fixed inset-0 flex overflow-y-auto justify-end z-[600] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
                        }
                      >
                        <div ref={expandedProfileRef}>
                          <Resume_component
                            name={profile.name}
                            skills={profile.skills}
                            bio={profile.bio}
                            country={profile.country}
                            city={profile.city}
                            title={profile.title}
                            job1={profile.job1}
                            position1={profile.position1}
                            work_experience={profile.work_experience}
                            education={profile.education}
                            languages={profile.languages}
                            linkedin={profile.link}
                            soft_skills={profile.soft_skills}
                            onClick={cvDismiss}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
                {memberShow && (
                  <div className="flex w-full justify-center items-center gap-2">
                    {talentPages.map((pageNumber, index) => (
                      <div className="flex gap-2" key={index}>
                        <button
                          onClick={() => handlePageFetch(pageNumber)}
                          className={`inline-block rounded-full border border-black p-3 transition-colors delay-75 ${
                            pageNumber === activePage
                              ? "bg-transparent text-black cursor-not-allowed"
                              : "text-white bg-black"
                          }  hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500`}
                          disabled={activePage === pageNumber}
                        >
                          {pageNumber}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            )}

            <AnimatePresence>
              {companyShow && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative"
                >
                  {filteredCompanyData.length === 0 ? (
                    <p className="font-bold text-slate-600 text-lg col-span-3 text-center">
                      No company profiles match your filter criteria.
                    </p>
                  ) : (
                    visibleCompanyData.map((company) => (
                      <CompanyProfile
                        key={company.user_id}
                        company_name={company.company_name}
                        image={company.image}
                        industry={company.industry}
                        showCompany={showCompany}
                        company_description={company.company_description}
                        website={company.company_website}
                        user_id={company.user_id}
                      />
                    ))
                  )}

                  <AnimatePresence>
                    {company && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center z-[99] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
                      >
                        <div ref={expandedCompanyRef}>
                          <ExpandedCompanyModal
                            company_name={company.company_name}
                            image={company.image}
                            company_description={company.company_description}
                            industry={company.industry}
                            website={company.website}
                            user_id={company.user_id}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:w-1/5 px-4 hidden sm:block">
            <div className="h-full rounded-md">
              <div className="border-b px-1 p-2">
                <h2 className="font-semibold">Search Filters</h2>
              </div>

              <form className="py-2 flex flex-col gap-3">
                <div>
                  <h1>Name</h1>

                  <Input
                    placeholder="Search by Name"
                    name="name"
                    id="name"
                    value={filters.name}
                    onChange={(e) => handleInputNameChange(e)}
                  />
                </div>
                <div>
                  <h1>Country</h1>
                  <Select
                    name="country"
                    id="country"
                    onValueChange={(value) =>
                      handleInputChange(value, "country")
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Countries</SelectLabel>
                        {selectedAttributes?.countries?.map((country) => (
                          <SelectItem
                            key={country.country}
                            value={country.country}
                          >
                            {country.country}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h1>Category</h1>
                  <Select
                    name="category"
                    id="category"
                    onValueChange={(value) =>
                      handleInputChange(value, "category")
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>

                        {selectedAttributes?.categories?.map((category) => (
                          <SelectItem
                            key={category.category}
                            value={category.category}
                          >
                            {category.category}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h1>Experience</h1>
                  <Select
                    name="experience"
                    id="experience"
                    onValueChange={(value) =>
                      handleInputChange(value, "experience")
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Experience Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Junior">
                          Junior: {"0 - 2 years"}
                        </SelectItem>
                        <SelectItem value="Mid level">
                          Mid Level: {"3 - 5 years"}
                        </SelectItem>
                        <SelectItem value="Senior">
                          Senior: {"5+ years"}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {/* <div>
                  <h1>Role</h1>
                  <Select
                    name="skill"
                    id="skills"
                    onValueChange={(value) => handleInputChange(value, "skill")}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Role</SelectLabel>
                        {selectedAttributes?.skills?.map((skill) => (
                          <SelectItem value={skill.skill} key={skill.skill}>
                            {skill.skill}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div> */}

                <div className="pt-10">
                  <Button
                    variant="outline"
                    className="float-left"
                    onClick={(e) => clearFilter(e)}
                  >
                    Clear
                  </Button>
                  {/* <div className="p-1 px-2 rounded-sm border bg-white hover:bg-gray-100 w-fit float-right cursor-pointer" onClick={(e) => clearFilter(e)}>Clear</div> */}
                </div>
              </form>
            </div>
          </div>
        </div>

        {(memberList.user[0].account_type === "community manager" ||
          memberList.user[0].account_type === "village admin profile") && (
          <div
            className="fixed bottom-5 right-10 rounded p-2 bg-white text-2xl border cursor-pointer transition transform hover:scale-105"
            onClick={handleNewJobShow}
          >
            <FcAddDatabase />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Virtual_internship;
