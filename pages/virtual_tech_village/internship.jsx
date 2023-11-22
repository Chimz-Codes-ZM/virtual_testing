import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";

import Layout from "./components/layouts/layout";
import Complete_Profile from "./components/alerts/completeProfile";
import MemberProfile from "./components/profiles/MemberProfile";
import ExpandedProfileModal from "./components/profiles/ExpandedProfileModal";
import New_job from "./components/forms/new_job";

import { motion, AnimatePresence } from "framer-motion";
import { JellyTriangle } from "@uiball/loaders";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FcAddDatabase } from "react-icons/fc";

const CompanyProfile = ({
  company_name,
  image,
  industry,
  company_description,
  website,
  showCompany,
  user_id,
}) => {
  const showCompanyProfile = () => {
    showCompany({
      image,
      industry,
      company_name,
      company_description,
      website,
      user_id,
    });
  };

  return (
    <div className="block" onClick={showCompanyProfile}>
      <img
        alt={company_name}
        src={image}
        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72  transition-opacity opacity-0 duration-[1.2s]"
        onLoad={(event) => event.target.classList.remove("opacity-0")}
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="font-medium">{company_name}</strong>

        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

        <p className="mt-0.5 opacity-50 sm:mt-0">{industry}</p>
      </div>
    </div>
  );
};

const ExpandedCompanyModal = ({
  industry,
  image,
  company_name,
  company_description,
  website,
  user_id,
}) => {
  return (
    <>
      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {company_name}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">{industry}</p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt={company_name}
              src={image}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {company_description}
          </p>
        </div>

        <div className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex gap-4 font-medium text-gray-900">
            <a href={`${website}`} target="_blank" className="">
              <FaExternalLinkSquareAlt />
              {/* THIS NEEDS TO BE FIXED ASAP */}
            </a>

            <Link href={`/virtual_tech_village/company_info/${user_id}`}>
              <BsFillInfoCircleFill />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Virtual_internship = () => {
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

  const [talentPages, setTalentPages] = useState([]);
  const [user, setUser] = useState(null);
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
    company_country: "",
    company_name: "",
    company_industry: "",
  });
  const [id, setId] = useState("");

  const router = useRouter();

  const login = () => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    setUser(decodedToken);
    setId(id);
    // console.log(decodedToken);

    const fetchData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/village_profiles/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters: { ...filters } }),
        }
      );

      const data = await response.json();

      const pages = Array.from(
        { length: data.intern_total_pages },
        (_, index) => index + 1
      );

      setTalentPages(pages);
      setMemberList(data);
      const accountType = data.user[0]?.account_type || "";

      // setCompanyShow(accountType === "village company profile");
      // setMemberShow(accountType !== "village company profile");
    };

    fetchData();

    setIsLoading(false);
  };
  const scrollToTop = () => {
    memberStartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    checkProfileComplete();
    scrollToTop();
    console.log(selectedAttributes);
    console.log(selectedCompanyAttributes);
  }, [selectedCompanyAttributes]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/country_skills/${id}/`
        );
        setSelectedAttributes(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;
    // setLoggedInId(id);

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/country_industries/${id}/`
        );
        setSelectedCompanyAttributes(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(memberList);
  }, [memberList]);

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

  const companyProfileReroute = () => {
    router.push("/virtual_tech_village/complete_company_profile");
  };

  const handlePageFetch = (number) => {
    setMemberList(null);

    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;
    const fetchData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/village_profiles/${id}/`,
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

    login();

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

  const handleNewJobSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key of Object.keys(newJob)) {
      formData.append(key, newJob[key]);
    }

    formData.append("image", imageRef.current);

    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/job_listings/${id}/`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        alert("New job added successfully");
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
    console.log(formData);
  };

  const handleInputChange = async (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    try {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/village_profiles/${id}/`,
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
          { length: data.talent_total_pages },
          (_, index) => index + 1
        );

        console.log("========> Total number of pages: ", pages);

        setMemberList(data);
        setTalentPages(pages);
        console.log();
      } else {
        console.error("Something went wrong, please try again!");
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
    const searchFilter = filters.name
      ? profile.first_name
          .toLowerCase()
          .includes(filters.name.toLocaleLowerCase()) ||
        profile.last_name
          .toLocaleLowerCase()
          .includes(filters.name.toLocaleLowerCase())
      : true;
    const skillFilter = filters.skill
      ? profile.skills.toLowerCase() === filters.skill.toLowerCase()
      : true;

    return countryFilter && searchFilter && skillFilter;
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

  return (
    <Layout sideHighlight="virtual internship">
    <div className="flex flex-col gap-5 relative py-8" ref={parent}>
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
                {/* <New_job
                  userId={id}
                  onSubmit={handleNewJobSubmit}
                  onChange={handleNewJobChange}
                  value={newJob}
                /> */}

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
                      <label htmlFor="position" className="text-sm font-medium">
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
                      <label htmlFor="job_type" className="text-sm font-medium">
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
                      <label htmlFor="location" className="text-sm font-medium">
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
              memberList?.user[0]?.account_type === "village admin profile") ||
            (memberList &&
              memberList?.user[0]?.account_type === "community manager") ||
            (memberList &&
              memberList?.user[0]?.account_type ===
                "village company profile") ||
            (memberList && memberList?.user[0]?.account_type === "Intern")) && (
            <div
              className={` pb-1 w-max cursor-pointer  ${
                memberShow
                  ? "border-b-2 border-black"
                  : "border-b-2 hover:border-gray-300 border-white ease-in-out transition-colors"
              }`}
              onClick={handleMemberShow}
            >
              Interns{" "}
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

        <div className="flex-grow flex-wrap">
          {((memberList?.user[0]?.account_type === "village talent profile" &&
            memberShow) ||
            (memberList?.user[0]?.account_type === "village admin profile" &&
              memberShow) ||
            (memberList?.user[0]?.account_type === "community manager" &&
              memberShow) ||
            memberList?.user[0]?.account_type === "village company profile" ||
            memberList?.user[0]?.account_type === "Intern") && (
            <form className="flex flex-col md:flex-row md:justify-around">
              <div className="mb-4 md:mb-0">
                <select
                  name="country"
                  id="country"
                  className="border-gray-900 bg-white border-2 h-7 rounded px-1 w-full"
                  onChange={(e) => handleInputChange(e)}
                  value={filters.country}
                >
                  <option value="" disabled>
                    Country
                  </option>
                  <option value="">All</option>

                  {selectedAttributes?.countries?.map((country, index) => (
                    <option value={country.country} key={index}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="border-gray-900 border-2 h-7 rounded px-1 w-full focus:outline-none"
                  onChange={(e) => handleInputChange(e)}
                  name="name"
                  id="name"
                  value={filters.name}
                />
              </div>

              <div>
                <select
                  name="skill"
                  id="skills"
                  className="border-gray-900 border-2 h-7 bg-white rounded px-1 w-full"
                  onChange={(e) => handleInputChange(e)}
                  value={filters.skill}
                >
                  <option value="" disabled>
                    Skills
                  </option>
                  <option value="">All</option>
                  {selectedAttributes?.skills?.map((skill, index) => (
                    <option value={skill.skill} key={index}>
                      {skill.skill}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          )}

          {((memberList?.user[0]?.account_type === "community manager" &&
            companyShow) ||
            (memberList?.user[0]?.account_type === "village admin profile" &&
              companyShow)) && (
            <form className="flex flex-col md:flex-row md:justify-around">
              <div className="mb-4 md:mb-0">
                <select
                  name="company_country"
                  id="company_country"
                  className="border-gray-300 border-2 rounded px-1 w-full"
                  onChange={(e) => handleInputChange(e)}
                  value={filters.company_country}
                >
                  <option value="" disabled>
                    Country
                  </option>
                  <option value="">All</option>

                  {selectedCompanyAttributes?.countries?.map(
                    (country, index) => (
                      <option value={country.country} key={index}>
                        {country.country}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Search by company name"
                  className="border-gray-300 border-2 rounded px-1 w-full"
                  onChange={(e) => handleInputChange(e)}
                  name="company_name"
                  id="company_name"
                  value={filters.company_name}
                />
              </div>

              <div>
                <select
                  name="company_industry"
                  id="company_industry "
                  className="border-gray-300 border-2 rounded px-1 w-full"
                  onChange={(e) => handleInputChange(e)}
                  value={filters.company_industry}
                >
                  <option value="" disabled>
                    Industry
                  </option>
                  <option value="">All industries</option>
                  {selectedCompanyAttributes?.industries?.map(
                    (industry, index) => (
                      <option value={industry.industry} key={index}>
                        {industry.industry}
                      </option>
                    )
                  )}
                </select>
              </div>
            </form>
          )}
        </div>

        {incompleteProfile && (
          <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-sm">
            <Complete_Profile
              message="Your profile is incomplete! Please complete setting up your profile."
              alertDismiss={profileReroute}
            />
          </div>
        )}

        {incompleteCompanyProfile && (
          <div className="fixed inset-0 flex items-center justify-center z-[99] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm">
            <Complete_Profile
              message="Your profile is incomplete! Please complete setting up your profile."
              alertDismiss={companyProfileReroute}
            />
          </div>
        )}
      </div>

      {(memberList.user[0]?.account_type === "village talent profile" ||
        memberList.user[0].account_type === "village admin profile" ||
        memberList.user[0].account_type === "community manager" ||
        memberList.user[0].account_type === "village company profile" ||
        memberList.user[0].account_type === "Intern") && (
        <AnimatePresence>
          {memberShow && (
            <motion.div
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
                visibleData.map((profile, index) => (
                  <MemberProfile
                    key={index}
                    image={profile.image}
                    name={`${profile.first_name} ${profile.last_name}`}
                    skills={profile.skills}
                    showProfile={showProfile}
                    country={profile.country}
                    experience={profile.experience}
                    certificate={profile.education[0]?.degree_name}
                    user_id={profile.user_id}
                    bio={profile.bio}
                  />
                ))
              )}
              <AnimatePresence>
                {profile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center z-[999] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
                  >
                    <div ref={expandedProfileRef}>
                      <ExpandedProfileModal
                        image={profile.image}
                        name={profile.name}
                        skills={profile.skills}
                        hideProfile={hideProfile}
                        country={profile.country}
                        certificate={profile.certificate}
                        experience={profile.experience}
                        bio={profile.bio}
                        onClick={() => {
                          handleMoreInfoClick(profile.user_id);
                        }}
                        handleChat={() => {
                          handleChatClick(profile.user_id);
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
          {memberShow && (
            <div className="flex w-full justify-center items-center gap-2">
              {talentPages.map((pageNumber) => (
                <div className="flex gap-2" key={pageNumber}>
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
              visibleCompanyData.map((company, index) => (
                <CompanyProfile
                  key={index}
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
