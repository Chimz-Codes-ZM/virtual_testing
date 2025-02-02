import React, { useState, useEffect, useRef } from "react";
import Profile_layout from "../layouts/Profile_layout";
import Layout from "../layouts/layout";
import { FcPicture } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Success from "../alerts/success";

import { countries } from "../../../data";
import { API_URL } from "@/config";

const EditCompanyProfile = () => {
  const [completedProfile, setCompletedProfile] = useState({
    country: "",
    company_website: "",
    industry: "",
    company_description: "",
    social_media_profiles: "",
    registration_number: "",
    office_address: "",
    image: null,
  });
  const [success, setSuccess] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const imageRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const handleChange = (e) => {
    imageRef.current = e.target.files[0];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCompletedProfile({
      ...completedProfile,
      [name]: value,
    });
  };

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

  const handleFormSuccess = () => {
    setSuccess(true);
  };

  const handleSuccessDismiss = () => {
    router.push("/virtual_tech_village");
    setSuccess(false);
  };

  useEffect(() => {
    const profileData = fetch(
      `https://${API_URL}/village/complete_profile/${user.user_id}/`,
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
        setCompletedProfile({
          country: data.company_country,
          company_website: data.company_website,
          industry: data.industry,
          company_description: data.company_description,
          social_media_profiles: data.social_link,
          registration_number: data.registration_number,
          office_address: data.office_address,
        });
        console.log("This is my profile data ===>", data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key of Object.keys(completedProfile)) {
      formData.append(key, completedProfile[key]);
    }

    formData.append("image", imageRef.current);
    const sendData = async () => {
      const response = await fetch(
        `https://${API_URL}/village/complete_profile/${user.user_id}/`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        handleFormSuccess();
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
    console.log(formData);
  };
  return (
    <>
      <Layout>
        <Profile_layout title="edit profile">
          <div className="w-full flex justify-center flex-col relative">
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
              <div className="flex items-center justify-between absolute w-full px-10 -top-5">
                <div className="rounded-full border shadow h-20 w-20 flex justify-center items-center text-4xl sm:text-6xl overflow-hidden">
                  {completedProfile.selectedImage ? (
                    <img
                      src={completedProfile.selectedImage}
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
                  <div class="group relative inline-block text-sm cursor-pointer font-medium text-gray-900 focus:outline-none focus:ring active:text-gray-900">
                    <span class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-900 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <Link
                      href={"/virtual_tech_village/profile/"}
                      class="relative block border border-current bg-white sm:px-6 py-1 px-2 sm:py-3"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:px-10 pt-24 pb-4 items-center justify-between border-b-2">
                <div className="flex flex-col gap-3 ">
                  <h2 className="font-semibold sm:text-2xl">
                    Tech Village Company Profile
                  </h2>
                  <p>Set company details here</p>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:px-10 pt-4 pb-4 border-b-2">
                    <div className="flex flex-col gap-3 col-span-1">
                      <h2 className="font-semibold sm:text-xl">Company logo</h2>
                      <p>Start by setting your company logo here</p>
                    </div>

                    <div className="flex flex-col items-center col-span-2 md:col-span-1">
                      <label
                        htmlFor="profilePictureInput"
                        className="border-2 border-dashed px-4 border-gray-400 overflow-hidden rounded-lg cursor-pointer"
                      >
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
                          onChange={handleChange}
                          value={completedProfile.image}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-1 gap-2 w-full sm:px-10">
                      <label
                        htmlFor="experience"
                        className="font-semibold sm:text-xl col-span-1"
                      >
                        Country:
                      </label>
                      <div className="flex col-span-2 md:col-span-1">
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-2 sm:px-10  ">
                      <label
                        htmlFor="professional_profile"
                        className="font-semibold sm:text-xl col-span-1"
                      >
                        Company website:
                      </label>
                      <div className="flex col-span-2 md:col-span-1">
                        <input
                          type="text"
                          className="border rounded-r p-1 w-full"
                          name="company_website"
                          onChange={handleInputChange}
                          placeholder="e.g., wwww.example.com"
                          value={completedProfile.company_website}
                        ></input>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-2 sm:px-10  ">
                      <label
                        htmlFor="registration_number"
                        className="font-semibold sm:text-xl col-span-1"
                      >
                        Registration number:
                      </label>
                      <div className="flex col-span-2 md:col-span-1">
                        <input
                          type="text"
                          className="border rounded-r p-1 w-full"
                          id="registration_number"
                          name="registration_number"
                          onChange={handleInputChange}
                          placeholder="e.g., 123 456 789"
                          value={completedProfile.registration_number}
                        ></input>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-2 sm:px-10  ">
                      <label
                        htmlFor="office_address"
                        className="font-semibold sm:text-xl col-span-1"
                      >
                        Office Address:
                      </label>
                      <div className="flex col-span-2 md:col-span-1">
                        <input
                          type="text"
                          className="border rounded-r p-1 w-full"
                          id="office_address"
                          name="office_address"
                          onChange={handleInputChange}
                          placeholder="e.g., 123 Main Street, Suite 100, Anytown, Norway 12345"
                          value={completedProfile.office_address}
                        ></input>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 gap-2 ">
                      <label
                        htmlFor="experience"
                        className="font-semibold sm:text-xl col-span-1"
                      >
                        Industry:
                      </label>
                      <div className="flex col-span-2 md:col-span-1">
                        <input
                          type="text"
                          placeholder="e.g., Tech"
                          className="border rounded p-1 w-full"
                          name="industry"
                          onChange={handleInputChange}
                          value={completedProfile.industry}
                        ></input>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 gap-2">
                      <label
                        htmlFor="certs_courses"
                        className="font-semibold sm:text-xl col-span-1"
                      >
                        Company description:
                      </label>
                      <div className="flex col-span-2 md:col-span-1">
                        <textarea
                          type="text"
                          placeholder="Write a brief 1-2 sentence description of your company"
                          className="border rounded p-1 w-full"
                          name="company_description"
                          onChange={handleInputChange}
                          value={completedProfile.company_description}
                        ></textarea>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:px-10 gap-2">
                      <label
                        htmlFor="social_media_profiles"
                        className="font-semibold sm:text-xl col-span-1"
                      >
                        Social Media profile
                      </label>
                      <div className="flex col-span-2 md:col-span-1">
                        <input
                          type="text"
                          placeholder="e.g., www.instagram.com"
                          className="border rounded p-1 w-full"
                          name="social_media_profiles"
                          onChange={handleInputChange}
                          value={completedProfile.social_media_profiles}
                        ></input>
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

export default EditCompanyProfile;
