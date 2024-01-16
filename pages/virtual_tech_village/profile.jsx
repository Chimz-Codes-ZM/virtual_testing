import React, { useState, useEffect } from "react";
import Layout from "./components/layouts/layout";
import Profile_layout from "./components/layouts/Profile_layout";
import Resume_component from "./components/cv/Resume_component";
import Company_profile from "./components/view_profiles/company_profile";

import { useSelector } from "react-redux";

import { JellyTriangle } from "@uiball/loaders";

const profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [info, setInfo] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImage(imageURL);
    }
  };

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }

  if (user?.account_type === "village company profile") {
    return (
      <div>
        
          <Company_profile />
        
      </div>
    );
  }
  return (
    <>
      <Layout sideHighlight="profile">
        <Profile_layout title="view profile">
          <Resume_component
            name={`${user?.first_name} ${user?.last_name}`}
            bio={user?.bio}
            country={user?.country}
            city={user?.city}
            title={user?.skills}
            job1={user?.work_experience[0]?.company}
            position1={user?.work_experience[0]?.position}
            work_experience={user?.work_experience}
            education={user?.education}
            languages={user?.languages}
            linkedin={user?.link}
            soft_skills={user?.soft_skills}
          />
        </Profile_layout>
      </Layout>
    </>
  );
};

export default profile;
