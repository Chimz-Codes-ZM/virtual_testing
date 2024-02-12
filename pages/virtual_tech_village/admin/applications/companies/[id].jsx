import React, { useState, useEffect } from "react";
import Component from "@/pages/virtual_tech_village/components/view_profiles/profile_component";
import Layout from "../../../components/layouts/layout";

import { API_URL } from "@/config";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const CV = () => {
  const router = useRouter();

  const { id } = router.query;

  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    const profileData = fetch(
      `https://${API_URL}/village/complete_profile/${id}/`,
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
    <Layout sideHighlight="profile">
      <div className="p-4 pt-12">
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
      </div>
    </Layout>
  );
};

export default CV;

// getServerSideProps route: https://baobabpad-334a8864da0e.herokuapp.com/village/company_ids/
