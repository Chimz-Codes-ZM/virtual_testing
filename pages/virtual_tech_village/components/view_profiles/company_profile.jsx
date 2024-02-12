import React, { useState, useEffect } from "react";
import Layout from "../layouts/layout";
import { useSelector } from "react-redux";
import Profile_layout from "../layouts/Profile_layout";
import { API_URL } from "@/config";
import Component from "./profile_component";

const Company_profile = () => {
  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const [profileData, setProfileData] = useState([]);
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

        console.log("This is my profile data ===>", data);
      });
  }, []);

  return (
    <>
      <Layout sideHighlight="profile">
        <Profile_layout title="view profile">
          <Component
            name={profileData.company_name}
            country={profileData.company_country}
            industry={profileData.industry}
            logo={profileData.image}
            website={profileData.company_website}
            socials={profileData.social_link}
            description={profileData.company_description}
            address={profileData.office_address}
            registration={profileData.registration_number}
          />
        </Profile_layout>
      </Layout>
    </>
  );
};

export default Company_profile;
