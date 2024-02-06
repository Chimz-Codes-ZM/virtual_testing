import React, { useState, useEffect } from "react";
import Component from "@/pages/virtual_tech_village/components/view_profiles/profile_component";
import { API_URL } from "@/config";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const CV = () => {
  const router = useRouter();

  const { id } = router.query();
  return (
    <div>
      <Component />
    </div>
  );
};

export default CV;

// getServerSideProps route: https://baobabpad-334a8864da0e.herokuapp.com/village/company_ids/
