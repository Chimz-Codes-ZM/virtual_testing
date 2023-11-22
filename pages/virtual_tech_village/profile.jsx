import React, { useState, useEffect } from "react";
import Layout from "./components/layouts/layout";
import Profile_layout from "./components/Profile_layout";
import Resume_component from "./components/cv/Resume_component";
import Company_profile from "./components/view_profiles/company_profile";
import axios from "axios";
import jwt_decode from "jwt-decode"; 

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

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}/`
        );
        setInfo(response.data);
        console.log(response.data)
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  if (!info) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }

  if(info[0]?.account_type === "village company profile") {
    return (
      <div>
        <Company_profile />
      </div>
    )
  }
  return (
    <>
      <Layout sideHighlight="profile">
        <Profile_layout title="view profile">
          <Resume_component
           name={`${info[0]?.first_name} ${info[0]?.last_name}`}
           bio={info[0]?.bio}
           country={info[0]?.country}
           city={info[0]?.city}
           title={info[0]?.skills}
           job1={info[0]?.work_experience[0]?.company}
           position1={info[0]?.work_experience[0]?.position}
           work_experience={info[0]?.work_experience}
           education={info[0]?.education}
           languages={info[0]?.languages}
           linkedin={info[0]?.link}
           soft_skills={info[0]?.soft_skills}
          />
        </Profile_layout>
      </Layout>
    </>
  );
};

export default profile;
