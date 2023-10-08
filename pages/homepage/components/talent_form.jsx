import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { countries } from "../../data/index";

import Form_success from "./alerts/form_success";
import User_exists from "./alerts/user_exists";
import Missing_fields from "./alerts/missing_fields"; 

const Talent_form = () => {
  const [experience, setExperience] = useState(false);
  const [skills, setSkills] = useState(false);
  const [edu, setEdu] = useState(false);
  const [hons, setHons] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);

  let index = 0;

  const handleExperience = () => {
    setExperience(!experience);
    console.log(experience);
  };

  const handleSkills = () => {
    setSkills(!skills);
    console.log(skills);
  };

  const handleEdu = () => {
    setEdu(!edu);
    console.log(edu);
  };

  const handleHons = () => {
    setHons(!hons);
    console.log(hons);
  };

  //checkbox

  const [checkedIndices, setCheckedIndices] = useState({});

  const handleCheckboxChange = (element, index) => {
    setCheckedIndices((prevCheckedIndices) => ({
      ...prevCheckedIndices,
      [element]: index,
    }));

    setValues((previousValues) => ({
      ...previousValues,
      skills: {
        ...previousValues.skills,
        [element]: index,
      },
    }));
  };

  //=========

  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    specialization: "",
    years_specialization: "",
    about: "",
    experience: [],
    skills: {},
    education: [],
    hobbies: [],
  });

  // Email Validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const nextStep = () => {
    if (!isValidEmail(values.email)) {
      setError("Invalid email address");
      return;
    } else if (
      values.first_name.trim() === "" ||
      values.last_name.trim() === "" ||
      values.country.trim() === ""
    ) {
      setError("Please fill in all the fields");
      return;
    } else {
      setStep((previousStep) => previousStep + 1);
    }
  };

  // Success Alert
  const [alert, setAlert] = useState(false);
  const handleAlert = () => {
    setAlert(true);
  };
  const alertDismiss = () => {
    setAlert(false);
    router.push("/homepage/confirmation",);
  };

  // User already exists
  const [userExists, setUserexists] = useState(false);
  const handleExists = () => {
    setUserexists(true);

    setTimeout(() => {
      setUserexists(false);
    }, 10000);
  };

  //  alert animation
  const [isRattling, setIsRattling] = useState(false);
  const handleRattle = () => {
    setIsRattling(true);

    setTimeout(() => {
      setIsRattling(false);
    }, 1000);
  };

  // Missing Fields
  const [missingFields, setMissingFields] = useState(false);
  const handleMissingFields = () => {
    setMissingFields(true)

    setTimeout(() => {
      setMissingFields(false)
    }, 10000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch("http://127.0.0.1:8000/api/talent_signup/", {
    const response = await fetch(
      "https://baobabpad-334a8864da0e.herokuapp.com/api/talent_signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    ).then((response) => {
      if (response.ok) {
        setValues({
          first_name: "",
          last_name: "",
          email: "",
          country: "",
          specialization: "",
          years_specialization: "",
          about: "",
          experience: [],
          skills: {},
          education: [],
          hobbies: [],
        });
        handleAlert();
      } else if (response.status === 409) {
        // alert('User with the email you provided already exists!');
        handleExists();
        handleRattle();
      } else {
        // alert('Please ensure that no field is empty and ensure that all fields contain valid data');
        handleMissingFields()
      }
    });
  };
  const handleChange = (event, category, swiperIndex, index) => {
    const { name, value } = event.target;

    if (category === "skills") {
      setCheckedIndices((prevCheckedIndices) => ({
        ...prevCheckedIndices,
        [name]: parseInt(value),
      }));
    }

    setValues((previousValues) => {
      let updatedCategory;
      switch (category) {
        case "first_name":
        case "last_name":
        case "email":
        case "country":
        case "specialization":
        case "years_specialization":
        case "about":
          updatedCategory = value;
          break;
        case "experience":
          let updatedExperience = [...previousValues.experience];
          if (!updatedExperience[swiperIndex]) {
            updatedExperience[swiperIndex] = {};
          }
          updatedExperience[swiperIndex][index] = {
            ...updatedExperience[swiperIndex][index],
            [name]: value,
          };
          updatedCategory = updatedExperience;
          break;
        case "skills":
          let updatedSkills = {
            ...previousValues.skills,
            [name]: value,
          };
          updatedCategory = updatedSkills;
          break;
        case "education":
          let updatedEducation = [...previousValues.education];
          if (!updatedEducation[swiperIndex]) {
            updatedEducation[swiperIndex] = {};
          }
          updatedEducation[swiperIndex][index] = {
            ...updatedEducation[swiperIndex][index],
            [name]: value,
          };
          updatedCategory = updatedEducation;
          break;
        case "hobbies":
          let updatedHobbies = [...previousValues.hobbies];
          if (!updatedHobbies[swiperIndex]) {
            updatedHobbies[swiperIndex] = {};
          }
          updatedHobbies[swiperIndex][index] = {
            ...updatedHobbies[swiperIndex][index],
            [name]: value,
          };
          updatedCategory = updatedHobbies;
          break;
        default:
          updatedCategory = previousValues[category];
      }
      return {
        ...previousValues,
        [category]: updatedCategory,
      };
    });

    setError("");
  };

  return (
    <div className="flex flex-col p-4 sm:p-10 gap-2 relative overflow-auto">
      {alert && <Form_success alertDismiss={alertDismiss} message="Thank you for signing up with Baobabpad Talent! We are
                  delighted to have you join our platform and showcase your
                  unique talents to a wide audience. To complete your registration, please enter the One-Time Password (OTP) you received in your email on the following page." />}

      {userExists && <User_exists user="User" isRattling={isRattling} />}

      {missingFields && <Missing_fields  isRattling={isRattling}/>}
      <form
        action=""
        className="text-white w-full sm:w-[450px]"
        onSubmit={handleSubmit}
      >
        <div className=" w-full gap-2 flex flex-col">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl pb-1 border-b border-amber-400 text-center">
              Join Baobabpad
            </h1>
            <p className="text-lg text-center">
              Excellence Beyond Imagination.
            </p>
          </div>
          {step === 1 && (
            <div className="flex flex-col gap-1">
              {" "}
              <div className="w-full flex flex-col">
                <label htmlFor="first_name_join" className="font-light">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name_join"
                  value={values.first_name}
                  onChange={(event) => handleChange(event, "first_name")}
                  className="border p-1 px-2 rounded-lg focus:outline-none text-black focus:border-teal-600 transition-colors"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="last_name_join" className="font-light">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name_join"
                  value={values.last_name}
                  onChange={(event) => handleChange(event, "last_name")}
                  className="border p-1 rounded-lg focus:outline-none text-black focus:border-teal-600 transition-colors"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label htmlFor="email_join" className="font-light">
                  Email
                </label>

                {error && (
                  <div className="text-red-500 absolute right-0 flex gap-1 bg-red-50 rounded p-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {error}
                  </div>
                )}
                <input
                  type="text"
                  name="email"
                  id="email_join"
                  value={values.email}
                  onChange={(event) => handleChange(event, "email")}
                  className="border p-1 rounded-lg focus:outline-none text-black focus:border-teal-600 transition-colors"
                  placeholder="Example: janedoe@email.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="font-light">
                  What is your country of origin?
                </label>
                <select
                  name="country"
                  id="country"
                  value={values.country}
                  onChange={(event) => handleChange(event, "country")}
                  className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors text-black w-full"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.country}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors text-white"
                type="button"
                onClick={nextStep}
              >
                Let's Go
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="w-full">
              {" "}
              <div className="w-full flex flex-col">
                <label htmlFor="specialization" className="font-light">
                  What role are you specialized in?
                </label>
                <select
                  name="specialization"
                  id="specialization"
                  value={values.specialization}
                  onChange={(event) => handleChange(event, "specialization")}
                  className="border p-2 rounded-lg text-black"
                  required
                >
                  <option value="" disabled selected>
                    Select a specialization
                  </option>
                  <option value="software-developer">Software Developer</option>
                  <option value="web-developer">Web Developer</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="product-manager">Product Manager</option>
                  <option value="project-manager">Project Manager</option>
                  <option value="ux-designer">UX Designer</option>
                  <option value="ui-designer">UI Designer</option>
                  <option value="network-engineer">Network Engineer</option>
                  <option value="cybersecurity-specialist">
                    Cybersecurity Specialist
                  </option>
                  <option value="devops-engineer">DevOps Engineer</option>
                  <option value="full-stack-developer">
                    Full Stack Developer
                  </option>
                  <option value="mobile-developer">Mobile Developer</option>
                  <option value="cloud-engineer">Cloud Engineer</option>
                  <option value="machine-learning-engineer">
                    Machine Learning Engineer
                  </option>
                  <option value="artificial-intelligence-engineer">
                    Artificial Intelligence Engineer
                  </option>
                  <option value="business-intelligence-analyst">
                    Business Intelligence Analyst
                  </option>
                  <option value="seo-specialist">SEO Specialist</option>
                  <option value="technical-writer">Technical Writer</option>
                  <option value="graphic-designer">Graphic Designer</option>
                </select>
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="years_specialization" className="font-light">
                  Years in specialization
                </label>
                <select
                  name="years_specialization"
                  id="years_specialization"
                  value={values.years_specialization}
                  onChange={(event) =>
                    handleChange(event, "years_specialization")
                  }
                  className="border p-2 rounded-lg text-black"
                  required
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="about" className="font-light">
                  Tell us a little about yourself
                </label>
                <input
                  type="text"
                  name="about"
                  id="about"
                  value={values.about}
                  onChange={(event) => handleChange(event, "about")}
                  className="border p-1 mb-2 rounded-lg focus:outline-none text-black focus:border-teal-600 transition-colors"
                  placeholder="Describe yourself..."
                />
              </div>
              <div className="p-2 flex justify-between w-full">
                <button
                  className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors text-white"
                  onClick={() => setStep(step - 1)}
                >
                  back
                </button>
                <button
                  className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors text-white"
                  type="button"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              {" "}
              <div className="flex flex-col">
                <span className="font-light relative my-1 w-full h-8 items-center flex justify-between text-gray-900 px-1 bg-gray-100 rounded">
                  <div
                    onClick={handleExperience}
                    className="w-full h-full flex items-center justify-between"
                  >
                    Work Experience
                    <AiOutlineDown />
                  </div>

                  <div
                    className={`w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black/20 z-20 ${
                      experience ? "" : "hidden"
                    } `}
                  >
                    <div className="flex relative flex-col  w-72 sm:w-96 p-4 gap-3 bg-gray-900 border border-gray-600 rounded shadow-2xl">
                      <h1 className="text-white font-bold text-sm">
                        Work Experience
                      </h1>

                      <span
                        onClick={handleExperience}
                        className="cursor-pointer text-red-500 absolute top-4 right-4"
                      >
                        <AiOutlineClose />
                      </span>

                      <Swiper
                        className="w-full"
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                          let activeIndex = swiper.activeIndex;
                          console.log("slide change", activeIndex);
                          setSwiperIndex(activeIndex);
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Company Name
                            </label>
                            <input
                              name="company_name"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.company_name || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Position
                            </label>
                            <input
                              name="position"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.position || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Company Contact Email
                            </label>
                            <input
                              name="company_email"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.company_email || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Company Name
                            </label>
                            <input
                              name="company_name"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.company_name || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Position
                            </label>
                            <input
                              name="position"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.position || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Company Contact Email
                            </label>
                            <input
                              name="company_email"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.company_email || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Company Name
                            </label>
                            <input
                              name="company_name"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.company_name || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Position
                            </label>
                            <input
                              name="position"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.position || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Company Contact Email
                            </label>
                            <input
                              name="company_email"
                              value={
                                values.experience[swiperIndex]?.[index]
                                  ?.company_email || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "experience",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      <span className="text-sm w-max cursor-pointer text-gray-200 border-b border-yellow-600">
                        Swipe right to add more
                      </span>

                      <span
                        className="w-full bg-teal-600 cursor-pointer flex justify-center py-1 rounded text-white"
                        onClick={handleExperience}
                      >
                        Save
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-light relative my-1 w-full h-8 items-center flex justify-between text-gray-900 px-1 bg-gray-100 rounded">
                  <div
                    onClick={handleSkills}
                    className="w-full h-full flex items-center justify-between"
                  >
                    Skills
                    <AiOutlineDown />
                  </div>

                  <div
                    className={`w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black/20 z-20 ${
                      skills ? "" : "hidden"
                    } `}
                  >
                    <div className="flex relative flex-col text-white w-72 sm:w-96 p-4 gap-3 bg-gray-900 border border-gray-600 rounded shadow-2xl">
                      <h1 className="text-white font-bold text-sm">Skills</h1>

                      <span
                        onClick={handleSkills}
                        className="cursor-pointer text-red-500 absolute top-4 right-4"
                      >
                        <AiOutlineClose />
                      </span>

                      <p className="text-sm">How do you rate yourself?</p>

                      <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Teamwork</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`teamwork-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["teamwork"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("teamwork", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`teamwork-${index}`}
                                  type="checkbox"
                                  checked={checkedIndices["teamwork"] === index}
                                  onChange={() =>
                                    handleCheckboxChange("teamwork", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Communication</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`communication-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["communication"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("communication", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`communication-${index}`}
                                  type="checkbox"
                                  checked={
                                    checkedIndices["communication"] === index
                                  }
                                  onChange={() =>
                                    handleCheckboxChange("communication", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Decision Making</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`decision-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["decision"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("decision", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`decision-${index}`}
                                  type="checkbox"
                                  checked={checkedIndices["decision"] === index}
                                  onChange={() =>
                                    handleCheckboxChange("decision", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">
                            Emotional Intelligence
                          </h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`emotional-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["emotional"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("emotional", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`emotional-${index}`}
                                  type="checkbox"
                                  checked={
                                    checkedIndices["emotional"] === index
                                  }
                                  onChange={() =>
                                    handleCheckboxChange("emotional", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Project Management</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`management-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["management"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("management", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`management-${index}`}
                                  type="checkbox"
                                  checked={
                                    checkedIndices["management"] === index
                                  }
                                  onChange={() =>
                                    handleCheckboxChange("management", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Agile</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`agile-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["agile"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("agile", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`agile-${index}`}
                                  type="checkbox"
                                  checked={checkedIndices["agile"] === index}
                                  onChange={() =>
                                    handleCheckboxChange("agile", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Time Management</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`time-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["time"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("time", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`time-${index}`}
                                  type="checkbox"
                                  checked={checkedIndices["time"] === index}
                                  onChange={() =>
                                    handleCheckboxChange("time", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Problem Solving</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`solving-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["solving"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("solving", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`solving-${index}`}
                                  type="checkbox"
                                  checked={checkedIndices["solving"] === index}
                                  onChange={() =>
                                    handleCheckboxChange("solving", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex">
                          <h3 className="w-1/2 truncate">Leadership</h3>
                          <div className="w-1/2 flex justify-between">
                            {[1, 2, 3, 4, 5].map((index) => (
                              <React.Fragment key={index}>
                                <label
                                  htmlFor={`leadership-${index}`}
                                  className={`px-2 cursor-pointer rounded-full ${
                                    checkedIndices["leadership"] === index
                                      ? "bg-teal-400 text-white"
                                      : "bg-gray-800 text-gray-400"
                                  }`}
                                  onClick={() =>
                                    handleCheckboxChange("leadership", index)
                                  }
                                >
                                  {index}
                                </label>
                                <input
                                  className="hidden"
                                  id={`leadership-${index}`}
                                  type="checkbox"
                                  checked={
                                    checkedIndices["leadership"] === index
                                  }
                                  onChange={() =>
                                    handleCheckboxChange("leadership", index)
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>

                      <span
                        className="w-full bg-teal-600 cursor-pointer flex justify-center py-1 rounded text-white"
                        onClick={handleSkills}
                      >
                        Save
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-light relative my-1 w-full h-8 items-center flex justify-between text-gray-900 px-1 bg-gray-100 rounded">
                  <div
                    onClick={handleEdu}
                    className="w-full h-full flex items-center justify-between"
                  >
                    Education
                    <AiOutlineDown />
                  </div>

                  <div
                    className={`w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black/20 z-20 ${
                      edu ? "" : "hidden"
                    } `}
                  >
                    <div className="flex relative flex-col  w-72 sm:w-96 p-4 gap-3 bg-gray-900 border border-gray-600 rounded shadow-2xl">
                      <h1 className="text-white font-bold text-sm">
                        Education
                      </h1>

                      <span
                        onClick={handleEdu}
                        className="cursor-pointer text-red-500 absolute top-4 right-4"
                      >
                        <AiOutlineClose />
                      </span>

                      <Swiper
                        className="w-full"
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                          let activeIndex = swiper.activeIndex;
                          console.log("slide change", activeIndex);
                          setSwiperIndex(activeIndex);
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Institution
                            </label>
                            <input
                              name="institution"
                              value={
                                values.education[swiperIndex]?.[index]
                                  ?.institution || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "education",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Course
                            </label>
                            <input
                              name="course"
                              value={
                                values.education[swiperIndex]?.[index]
                                  ?.course || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "education",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Institution
                            </label>
                            <input
                              name="institution"
                              value={
                                values.education[swiperIndex]?.[index]
                                  ?.institution || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "education",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Course
                            </label>
                            <input
                              name="course"
                              value={
                                values.education[swiperIndex]?.[index]
                                  ?.course || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "education",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Institution
                            </label>
                            <input
                              name="institution"
                              value={
                                values.education[swiperIndex]?.[index]
                                  ?.institution || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "education",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />

                            <label className="font-light text-white">
                              Course
                            </label>
                            <input
                              name="course"
                              value={
                                values.education[swiperIndex]?.[index]
                                  ?.course || ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "education",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      <span className="text-sm w-max cursor-pointer text-gray-200 border-b border-yellow-600">
                        Swipe right to add more
                      </span>

                      <span
                        className="w-full bg-teal-600 cursor-pointer flex justify-center py-1 rounded text-white"
                        onClick={handleEdu}
                      >
                        Save
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-light relative my-1 w-full h-8 items-center flex justify-between text-gray-900 px-1 bg-gray-100 rounded">
                  <div
                    onClick={handleHons}
                    className="w-full h-full flex items-center justify-between"
                  >
                    Hobbies
                    <AiOutlineDown />
                  </div>

                  <div
                    className={`w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black/20 z-20 ${
                      hons ? "" : "hidden"
                    } `}
                  >
                    <div className="flex relative flex-col w-72 sm:w-96 p-4 gap-3 bg-gray-900 border border-gray-600 rounded shadow-2xl">
                      <h1 className="text-white font-bold text-sm">Hobbies</h1>

                      <span
                        onClick={handleHons}
                        className="cursor-pointer text-red-500 absolute top-4 right-4"
                      >
                        <AiOutlineClose />
                      </span>
                      <p className="text-sm">Share what you like doing</p>

                      <Swiper
                        className="w-full"
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {
                          let activeIndex = swiper.activeIndex;
                          console.log("slide change", activeIndex);
                          setSwiperIndex(activeIndex);
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Hobby
                            </label>
                            <input
                              name="hobby"
                              value={
                                values.hobbies[swiperIndex]?.[index]?.hobby ||
                                ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "hobbies",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Hobby
                            </label>
                            <input
                              name="hobby"
                              value={
                                values.hobbies[swiperIndex]?.[index]?.hobby ||
                                ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "hobbies",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="">
                            <label className="font-light text-white">
                              Hobby
                            </label>
                            <input
                              name="hobby"
                              value={
                                values.hobbies[swiperIndex]?.[index]?.hobby ||
                                ""
                              }
                              onChange={(event) =>
                                handleChange(
                                  event,
                                  "hobbies",
                                  swiperIndex,
                                  index
                                )
                              }
                              className="w-full h-7 border border-gray-500 rounded"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      <span className="text-sm w-max cursor-pointer text-gray-200 border-b border-yellow-600">
                        Swipe right to add more
                      </span>

                      <span
                        className="w-full bg-teal-600 cursor-pointer flex justify-center py-1 rounded text-white"
                        onClick={handleHons}
                      >
                        Save
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkbox1"
                  id="checkbox1"
                  className="mr-1"
                  required
                />
                <label htmlFor="checkbox1" className="font-light">
                  I agree to Baobabpad's
                  <Link
                    href="/homepage/talent_terms"
                    target="_blank"
                    className="pb-1 border-b border-amber-400"
                  >
                    Terms & Conditions
                  </Link>
                  .
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkbox2"
                  id="checkbox2"
                  className="mr-1"
                  required
                />
                <label htmlFor="checkbox2" className="font-light">
                  I have read and understood Baobabpad's{" "}
                  <Link
                    href="/homepage/privacy"
                    target="_blank"
                    className="pb-1 border-b border-amber-400"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              <div className="p-2 flex justify-between w-full">
                <button
                  className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors text-white"
                  onClick={() => setStep(step - 1)}
                >
                  back
                </button>
                <button
                  className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          <div className="w-full border border-teal-700"></div>

          <div className="self-center">
            <p>
              Already have an account?
              <Link
                href="/homepage/login"
                className="border-b-2 border-b-amber-400"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Talent_form;
