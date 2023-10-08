import React, {useState} from "react";
import Layout from "./components/layouts/layout";
import Profile_layout from "./components/Profile_layout";
import { FcPicture } from "react-icons/fc";
import Link from "next/link";
import Head from "next/head";

const profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImage(imageURL);
    }
  };
  return (
    <>

      <Layout sideHighlight="profile">
        <Profile_layout title="view profile">
          <div className="w-full flex justify-center flex-col">
        {/* Gray background */}

        <div className="w-full bg-gray-50 h-40 overflow-auto"></div>

        <div className="relative">
          {/* Profile Picture and button */}
          <div className="flex items-center justify-between absolute w-full px-10 -top-5">
            <div className="rounded-full border shadow h-20 w-20 flex justify-center items-center text-6xl">
              <FcPicture />
            </div>
            <div className="text-white bg-black rounded h-min">
              <div
                className="group relative inline-block text-sm cursor-pointer font-medium text-gray-900 focus:outline-none focus:ring active:text-gray-900"
                href=""
              >
                <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-gray-900 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <Link href="/virtual_tech_village/edit_profile"><span className="relative block border border-current bg-white px-6 py-3">
                    
                    Edit Profile
                    
                    
                  </span></Link>
              </div>
            </div>
          </div>

          <div className="flex w-full px-10 pt-24 pb-4 items-center justify-between border-b-2">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-2xl">Tech Village Profile</h2>
              <p>Set your details here</p>
            </div>

            
          </div>

          <div>
            <form>
              <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 border-b-2">
                <div className="flex flex-col gap-3 col-span-1">
                  <h2 className="font-semibold text-xl">Profile picture</h2>
                  {/* <p>Start by setting your profile picture here</p> */}
                </div>

                <div className="flex flex-col items-center col-span-1">
                  <label
                    htmlFor="profilePictureInput"
                    className="border-2 border-dashed border-gray-400 p-4  cursor-pointer"
                  >
                    {/* Render the image here if available */}

                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="h-20 w-40 mb-2"
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
                        <p className="text-gray-500">
                          Drag and drop or click to add image
                        </p>
                      </>
                    )}

                    <input
                      id="profilePictureInput"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 border-b-2">
                <h2 className="font-semibold text-xl col-span-1">
                  Professional profile:
                </h2>
                <div className="flex col-span-1">
                  <span className="border rounded-l p-1 text-gray-400">
                    <h1>www.linkedin.com/in/</h1>
                  </span>
                  <h2  className="border rounded-r p-1">baobabpad</h2>
                </div>
              </div>

              <div className="grid grid-cols-3 w-full px-10 pt-4 pb-4 border-b-2 gap-5">
                  <h2 className="font-semibold text-xl col-span-1">
                    Country:
                  </h2>
                  <div className="flex col-span-2">
                    <span className="border rounded-l p-1 px-6 text-gray-400">
                      <h1>South Africa</h1>
                    </span>
                  </div>
                  <h2 className="font-semibold text-xl col-span-1">
                    City/town:
                  </h2>

                  <div className="flex col-span-2">
                    <span className="border rounded-l p-1 px-6 text-gray-400">
                      <h1>Cape Town</h1>
                    </span>
                  </div>

                  <h2 className="font-semibold text-xl col-span-1">
                    Phone number:
                  </h2>

                  <div className="flex col-span-2">
                    <span className="border rounded-l p-1 px-6 text-gray-400">
                      <h1>+012-345-6789</h1>
                    </span>
                  </div>
                </div>

              <div className="grid grid-cols-3">
                <div className="col-span-2"></div>
                <div className="col-span-1 flex justify-end px-10 pt-10">
                  <div className="flex gap-4">
                    
                    <div className="cursor-pointer rounded p-2 py-1 text-white bg-black hover:text-black hover:bg-white hover:border hover:shadow duration-300">
                      Submit
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

export default profile;
