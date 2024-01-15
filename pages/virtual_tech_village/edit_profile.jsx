import React from "react";
import Edit_profile_component from "./components/edit_profiles/edit_profile";
import EditCompanyProfile from "./components/edit_profiles/edit_company_profile";

import { useSelector } from "react-redux";
import Profile_layout from "./components/layouts/Profile_layout";

const Edit_profile = () => {

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  if(user.account_type === "village talent profile") {
    return (
        <Edit_profile_component />
    )
  }
  return (
    <>

  <EditCompanyProfile />

      
    </>
  );
};

export default Edit_profile;