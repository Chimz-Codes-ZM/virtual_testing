import React, { useState, useEffect } from "react";
import Layout from "../layouts/layout";
import Link from "next/link";
import { useRouter } from "next/router";

import Success from "../alerts/success";

import { FcPicture } from "react-icons/fc";
import { countries, techPositions } from "../../../data";
import { useSelector } from "react-redux";
import Profile_layout from "../layouts/Profile_layout";
import { API_URL } from "@/config";

const Edit_profile_component = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState({});
  const [success, setSuccess] = useState(false);
  const [cvSubmitted, setCvSubmitted] = useState(false);

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const [completedProfile, setCompletedProfile] = useState({
    country: "",
    city: "",
    link: "",
    experience: "",
    bio: ""
  });

  const [education, setEducation] = useState([
    { degree_name: "", institution: "", year_started: "", year_finished: "" },
  ]);

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { degree_name: "", institution: "", year_started: "", year_finished: "" },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  const [workHistory, setWorkHistory] = useState([
    { position: "", company: "", from_year: "", to_year: "", summary: "" },
  ]);

  const handleWorkHistoryChange = (index, field, value) => {
    const newWorkHistory = [...workHistory];
    newWorkHistory[index][field] = value;
    setWorkHistory(newWorkHistory);
  };

  const handleWorkHistoryAdd = () => {
    setWorkHistory([
      ...workHistory,
      { position: "", company: "", from_year: "", to_year: "", summary: "" },
    ]);
  };

  const handleWorkHistoryRemove = (index) => {
    const newWorkHistory = [...workHistory];
    newWorkHistory.splice(index, 1);
    setWorkHistory(newWorkHistory);
  };

  // HANDLING LANGUAGES

  const [language, setLanguage] = useState([{ language: "" }]);

  const handleLanguageChange = (index, field, value) => {
    const newLanguage = [...language];
    newLanguage[index][field] = value;
    setLanguage(newLanguage);
  };

  const handleAddLanguage = () => {
    setLanguage([...language, { language: "" }]);
  };

  const handleRemoveLanguage = (index) => {
    const newLanguage = [...language];
    newLanguage.splice(index, 1);
    setLanguage(newLanguage);
  };

  // Handling Soft Skills

  const [softSkills, setSoftSkills] = useState([{ name: "" }]);

  const handleSoftSkillChange = (index, field, value) => {
    const newSkill = [...softSkills];
    newSkill[index][field] = value;
    setSoftSkills(newSkill);
  };

  const handleAddSoftSkill = () => {
    setSoftSkills([...softSkills, { name: "" }]);
  };

  const handleRemoveSoftSkill = (index) => {
    const newSoftSkill = [...softSkills];
    newSoftSkill.splice(index, 1);
    setSoftSkills(newSoftSkill);
  };
  //

  // Handling social media

  const [socialMedia, setSocialMedia] = useState([{ socialMedia: "" }]);

  const handleSocialMediaChange = (index, field, value) => {
    const newSocialMedia = [...socialMedia];
    newSocialMedia[index][field] = value;
    setSocialMedia(newSocialMedia);
  };

  const handleAddSocialMedia = () => {
    setSocialMedia([...socialMedia, { socialMedia: "" }]);
  };

  const handleRemoveSocialMedia = (index) => {
    const newSocialMedia = [...socialMedia];
    newSocialMedia.splice(index, 1);
    setSocialMedia(newSocialMedia);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    const imageData = new FormData();
    const file = e.target.files[0];

    if (!file) {
      alert("Please select an image before submitting.");
      return;
    }

    setSelectedFile(file);

    imageData.append("file", file);

    const response = await fetch(
      `https://${API_URL}/village/complete_profile/${user.user_id}/`,
      // `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
      {
        method: "PUT",
        body: imageData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCompletedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));

    // Now log the updated state using a callback
    setCompletedProfile((updatedProfile) => {
      console.log(updatedProfile);
      return updatedProfile;
    });
  };

  useEffect(() => {
    const profileData = fetch(
      `https://${API_URL}/village/complete_profile/${user.user_id}/`,
      // `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
        setCompletedProfile({experience: data.experience, bio: data.bio, city: data.city, country: data.country, link: data.link})
        setSoftSkills(data.soft_skills)
        setLanguage(data.languages)
        setWorkHistory(data.work_experience)
        setEducation(data.education)
        console.log("This is my profile data ===>",data)
      });
  }, []);

  const handleFormSuccess = () => {
    setSuccess(true);
  };

  const handleSuccessDismiss = () => {
    router.push("/virtual_tech_village");
    setSuccess(false);
  };
  const formInputs = {
    completedProfile: completedProfile,
    softSkills: softSkills,
    language: language,
    workHistory: workHistory,
    education: education,
  };

  const handleSubmit = async (e) => {
    console.log(formInputs);
    e.preventDefault();

    if (cvSubmitted === true) {
      const response = await fetch(
        `https://${API_URL}/village/edit_profile/${user.user_id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formInputs }),
        }
      );

      if (response.ok) {
        alert("Profile update complete!");
        router.push("/virtual_tech_village");
      } else {
        alert("Something went wrong, please try again!");
      }
    } else {
      alert("Please upload your CV before submitting your application!");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://${API_URL}/village/complete_profile/${user.user_id}/`,
      // `http://127.0.0.1:8000/village/complete_profile/${user_id}/`,
      {
        method: "POST",
        body: JSON.stringify({ completedProfile }),
      }
    );
    if (response.ok) {
      // alert("Profile Saved!");
      // router.push("/");
      handleFormSuccess();
    } else {
      alert("Something went wrong, please try again!");
    }
  };

  const handleCanel = async (e) => {
    e.preventDefault();
    router.push("/");
  };

  // <========================= PDF LOGIC ========================>

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePdfSubmit = async (e) => {
    e.preventDefault();
    setCvSubmitted(true);

    const formData = new FormData();
    formData.append("pdfFile", file);

    try {
      const response = await fetch(
        `https://${API_URL}/village/talent_resume/${user.user_id}/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert(
          "CV Uploaded successfully! Please complete the rest of your profile"
        );
        setFile(null);
      } else {
        alert("Something went wrong. Please try again");
      }
    } catch (error) {
      console.error("Error uploading PDF", error);
    }
  };
  return (
    <>
      <Layout>
        <Profile_layout title="edit profile">
          {" "}
          <div className="w-full flex justify-center flex-col pb-4 relative">
            {/* Gray background */}

            {success && (
              <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[999] bg-slate-900 bg-opacity-20 transition delay-150 backdrop-blur-lg">
                <Success
                  message="Your profile update Complete! You may now enjoy the virtual tech village"
                  alertDismiss={handleSuccessDismiss}
                />
              </div>
            )}

            <div className="w-full bg-gray-50 h-40 overflow-auto"></div>

            <div className="relative">
              {/* Profile Picture and button */}
              <div className="flex items-center justify-between absolute w-full sm:px-10 -top-5">
                <div className="rounded-full border shadow h-20 w-20 flex justify-center items-center text-6xl overflow-hidden">
                  {selectedFile ? (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Profile picture"
                      width={160}
                      height={160}
                      layout="responsive"
                    />
                  ) : (
                    <FcPicture />
                  )}
                </div>
                <div className="text-white bg-black rounded h-min">
                  <div
                    class="group relative inline-block text-sm cursor-pointer font-medium text-gray-900 focus:outline-none focus:ring active:text-gray-900"
                    href=""
                  >
                    <span class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-900 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <Link
                      href={"/virtual_tech_village/profile/"}
                      class="relative block border border-current bg-white px-2 py-1 sm:px-6 sm:py-3"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full sm:px-10  pt-24 pb-4 items-center justify-between border-b-2">
                <div className="flex flex-col gap-3 pb-4">
                  <h2 className="font-semibold text-lg sm:text-2xl">
                    Tech Village Profile
                  </h2>
                  <p>Set your details here</p>
                </div>

                <div className="flex gap-4">
                  <div
                    onClick={handleCanel}
                    className="cursor-pointer rounded p-2 py-1 hover:text-white hover:bg-black transition-colors border shadow duration-300"
                  >
                    Cancel
                  </div>
                  <div
                    onClick={handleSave}
                    className="cursor-pointer rounded p-2 py-1 text-white bg-black hover:text-black hover:bg-white hover:border hover:shadow duration-300"
                  >
                    Save Changes
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleImageSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 pt-4 pb-4 border-b-2">
                    <div className="flex flex-col gap-3 col-span-1 pb-4">
                      <h2 className="font-semibold text-xl">Profile picture</h2>
                      <p>Start by setting your profile picture here</p>
                    </div>

                    <div className="flex flex-col items-center col-span-1">
                      <label
                        htmlFor="profilePictureInput"
                        className="border-2 border-dashed px-4 border-gray-400 overflow-hidden rounded-lg cursor-pointer"
                      >
                        {/* Render the image here if available */}

                        {selectedFile ? (
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Selected"
                            className="w-30 h-40"
                            cover
                            fill
                          />
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 text-gray-400 mb-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm0-7a3 3 0 11-6 0 3 3 0 016 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="text-gray-500">Click to add image</p>
                          </>
                        )}

                        <input
                          id="profilePictureInput"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          name="file"
                          onChange={handleImageSubmit}
                        />
                      </label>
                    </div>
                  </div>
                </form>
                <form onSubmit={handlePdfSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 pt-4 pb-4 border-b-2">
                    <div className="flex flex-col gap-3 col-span-1 pb-4">
                      <h2 className="font-semibold text-xl">CV</h2>
                      <p>Continue by uploading your CV here</p>
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    <button
                      type="submit"
                      className={`rounded border-2 px-2 p-1 shadow w-fit h-fit ${
                        file ? "animate-pulse" : ""
                      }`}
                    >
                      Upload CV
                    </button>
                  </div>{" "}
                </form>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 pt-4 ">
                    <label
                      htmlFor="country"
                      className="font-semibold sm:text-xl col-span-1 pb-1"
                    >
                      Country:
                    </label>
                    <div className="flex col-span-1">
                      <select
                        name="country"
                        id="country"
                        value={completedProfile.country}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                        required
                      >
                        <option value="" disabled selected>
                          Select a country
                        </option>
                        {countries.map((country, index) => (
                          <option key={index} value={country.country}>
                            {country.country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 pt-4 ">
                    <label
                      htmlFor="address"
                      className="font-semibold sm:text-xl col-span-1"
                    >
                      City
                    </label>

                    <div className="flex col-span-2 md:col-span-1">
                      <input
                        type="text"
                        className="border rounded p-1 w-full"
                        name="city"
                        placeholder="e.g., Cairo"
                        value={completedProfile.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 pt-4 ">
                    <div className="col-span-1">
                      <label
                        htmlFor="Language"
                        className="font-semibold sm:text-xl"
                      >
                        Language{"('s)"}
                      </label>
                    </div>

                    <div className="col-span-1 flex flex-col">
                      {language.map((language, index) => (
                        <div key={index} className="flex mb-4 col-span-1">
                          <div className="pr-4">
                            <label
                              htmlFor="language"
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              Language
                            </label>
                            <input
                              type="text"
                              className="form-input border w-full rounded-md border-gray-300 px-1"
                              value={language.language}
                              onChange={(e) =>
                                handleLanguageChange(
                                  index,
                                  "language",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          {index > 0 && (
                            <button
                              type="button"
                              className="text-red-500 hover:text-red-700 underline cursor-pointer"
                              onClick={() => handleRemoveLanguage(index)}
                            >
                              Remove Language
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className=" col-span-1">
                      <button
                        type="button"
                        className="bg-gray-900 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md hover:bg-white hover:text-black hover:border transition-colors"
                        onClick={handleAddLanguage}
                      >
                        Add Language
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 border-1 border-gray-600 w-full sm:px-10 pt-4 pb-4">
                    <div className="col-span-1">
                      <label
                        htmlFor="Education"
                        className="font-semibold sm:text-xl"
                      >
                        Education
                      </label>
                    </div>
                    <div className="col-span-1 sm:col-span-5 mx-auto p-2 w-full bg-white">
                      {education.map((degree, index) => (
                        <div
                          key={index}
                          className="flex mb-4 flex-col sm:flex-row"
                        >
                          <div className="w-full sm:w-1/4 pr-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                              Degree Name:
                            </label>
                            <input
                              type="text"
                              className="form-input border w-full rounded-md border-gray-300"
                              value={degree.degree_name}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "degree_name",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="sm:w-1/4 pr-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                              Institution:
                            </label>
                            <input
                              type="text"
                              className="form-input border w-full rounded-md border-gray-300"
                              value={degree.institution}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "institution",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="sm:w-1/6 pr-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                              Year Started:
                            </label>
                            <input
                              type="text"
                              className="form-input border w-full rounded-md border-gray-300"
                              value={degree.year_started}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "year_started",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="sm:w-1/6 pr-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                              Year Finished:
                            </label>
                            <input
                              type="text"
                              className="form-input border w-full rounded-md border-gray-300"
                              value={degree.year_finished}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "year_finished",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          {index > 0 && (
                            <button
                              type="button"
                              className="text-red-500 hover:text-red-700 underline cursor-pointer"
                              onClick={() => handleRemoveEducation(index)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="bg-gray-900 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md hover:bg-white hover:text-black hover:border transition-colors"
                        onClick={handleAddEducation}
                      >
                        Add Degree
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 border-1 border-gray-600 w-full sm:px-10 pt-4">
                    <div className="col-span-1 w-full">
                      <label
                        htmlFor="Education"
                        className="font-semibold sm:text-xl"
                      >
                        Work experience
                      </label>
                    </div>
                    <div className="col-span-1 sm:col-span-5 w-full mx-auto p-6 px-2 bg-white relative">
                      {workHistory.map((work, index) => (
                        <>
                          <div
                            key={index}
                            className="flex mb-4 flex-col sm:flex-row relative"
                          >
                            <span className="absolute top-0 -left-10 border-b-2">
                              #{index + 1}
                            </span>
                            <div className="w-full sm:w-1/4 pr-4">
                              <label className="block text-sm font-medium text-gray-600 mb-1">
                                Position held:
                              </label>
                              <input
                                type="text"
                                className="form-input border w-full rounded-md border-gray-300"
                                value={work.position}
                                onChange={(e) =>
                                  handleWorkHistoryChange(
                                    index,
                                    "position",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="w-full sm:w-1/4 pr-4">
                              <label className="block text-sm font-medium text-gray-600 mb-1">
                                Company name:
                              </label>
                              <input
                                type="text"
                                className="form-input border w-full rounded-md border-gray-300"
                                value={work.company}
                                onChange={(e) =>
                                  handleWorkHistoryChange(
                                    index,
                                    "company",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="sm:w-1/6 pr-4">
                              <label className="block text-sm font-medium text-gray-600 mb-1">
                                Year Started:
                              </label>
                              <input
                                type="text"
                                className="form-input border w-full rounded-md border-gray-300"
                                value={work.from_year}
                                onChange={(e) =>
                                  handleWorkHistoryChange(
                                    index,
                                    "from_year",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="sm:w-1/6 pr-4">
                              <label className="block text-sm font-medium text-gray-600 mb-1">
                                Year Finished:
                              </label>
                              <input
                                type="text"
                                className="form-input border w-full rounded-md border-gray-300"
                                value={work.to_year}
                                onChange={(e) =>
                                  handleWorkHistoryChange(
                                    index,
                                    "to_year",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            {index > 0 && (
                              <button
                                type="button"
                                className="text-red-500 hover:text-red-700 underline cursor-pointer"
                                onClick={() => handleWorkHistoryRemove(index)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          <div className="col-span-6 pr-4">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                              Job summary
                            </label>
                            <textarea
                              name="summary"
                              id="summary"
                              rows="4"
                              className="my-2 w-full rounded-lg border p-1 max-w-3xl border-gray-200 align-top shadow-sm sm:text-sm"
                              value={work.summary}
                              onChange={(e) =>
                                handleWorkHistoryChange(
                                  index,
                                  "summary",
                                  e.target.value
                                )
                              }
                            ></textarea>
                          </div>
                        </>
                      ))}
                      <button
                        type="button"
                        className="bg-gray-900 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-md hover:bg-white hover:text-black hover:border transition-colors"
                        onClick={handleWorkHistoryAdd}
                      >
                        Add New Position
                      </button>
                    </div>
                  </div>

                  <div className="sm:grid grid-cols-1 sm:grid-cols-3 flex flex-col w-full sm:px-10 pt-4 pb-4 ">
                    <label
                      htmlFor="position"
                      className="font-semibold sm:text-xl col-span-1"
                    >
                      Position:
                    </label>
                    <div className="flex col-span-2 md:col-span-1">
                      <select
                        name="skills"
                        id="skills"
                        value={completedProfile.skill}
                        onChange={handleInputChange}
                        className="border rounded p-1 w-full"
                        required
                      >
                        {techPositions.map((role, index) => (
                          <option key={index} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 ">
                    <label
                      htmlFor="experience"
                      className="font-semibold sm:text-xl col-span-1"
                    >
                      Experience:
                    </label>
                    <div className="flex col-span-2 md:col-span-1">
                      <select
                        name="experience"
                        id="experience"
                        required
                        onChange={handleInputChange}
                        value={completedProfile.experience}
                        className="border rounded p-1 w-full"
                      >
                        <option value="Junior" selected>
                          Junior {"0 - 2 years"}
                        </option>
                        <option value="Mid level">
                          Mid level {"3 - 5 years"}
                        </option>
                        <option value="Senior">Senior {"5+ years"}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 pt-4 pb-4 ">
                    <label
                      htmlFor="bio"
                      className="font-semibold sm:text-xl col-span-1"
                    >
                      Bio:
                    </label>
                    <div className="flex col-span-2 md:col-span-1">
                      <textarea
                        id="bio"
                        type="text"
                        className="mt-2 w-full rounded-lg border p-1 border-gray-200 align-top shadow-sm sm:text-sm"
                        rows="4"
                        name="bio"
                        placeholder="Enter your bio here..."
                        onChange={handleInputChange}
                        value={completedProfile.bio}
                      ></textarea>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 pt-4 pb-4 ">
                    <div className="col-span-1">
                      <label
                        htmlFor="softSkill"
                        className="font-semibold sm:text-xl"
                      >
                        Soft Skill's
                      </label>
                    </div>

                    <div className="col-span-1 flex flex-col">
                      {softSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex mb-4 col-span-1 w-full"
                        >
                          <div className="pr-4 w-full">
                            <label
                              htmlFor="soft_skills"
                              className="block text-sm font-medium text-gray-600 mb-1"
                            >
                              Soft skill
                            </label>
                            <input
                              type="text"
                              className="form-input border w-full rounded-md border-gray-300 px-1"
                              value={skill.name}
                              placeholder="e.g., Creativity"
                              onChange={(e) =>
                                handleSoftSkillChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          {index > 0 && (
                            <button
                              type="button"
                              className="text-red-500 hover:text-red-700 underline cursor-pointer"
                              onClick={() => handleRemoveSoftSkill(index)}
                            >
                              Remove Soft Skill
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className=" col-span-1">
                      <button
                        type="button"
                        className="bg-gray-900 text-white px-2 py-1 sm:py-2 sm:px-4 rounded-md hover:bg-white hover:text-black hover:border transition-colors"
                        onClick={handleAddSoftSkill}
                      >
                        Add Soft Skill
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:px-10 pt-4 pb-4 ">
                    <div className="col-span-1">
                      <label
                        htmlFor="sociialMedia"
                        className="font-semibold sm:text-xl"
                      >
                        Link to your Linkedin profile
                      </label>
                    </div>

                    <div className="col-span-1 flex flex-col w-full">
                      <div className="flex mb-4 w-full">
                        <div className="pr-4 w-full">
                          <label
                            htmlFor="link"
                            className="block text-sm font-medium text-gray-600 mb-1"
                          >
                            Linkedin profile
                          </label>
                          <input
                            type="text"
                            name="link"
                            id="link"
                            placeholder="e.g., www.linkedin.com/in/janeDoe"
                            className="form-input border w-full rounded-md border-gray-300 px-1"
                            value={completedProfile.link}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3">
                    <div className="col-span-2"></div>
                    <div className="col-span-1 flex justify-end px-10 pt-10">
                      <div className="flex gap-4">
                        <button
                          className="cursor-pointer rounded p-2 py-1 text-white bg-black hover:text-black hover:bg-white hover:shadow-md duration-300"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Profile_layout>
      </Layout>
    </>
  );
};

export default Edit_profile_component;
