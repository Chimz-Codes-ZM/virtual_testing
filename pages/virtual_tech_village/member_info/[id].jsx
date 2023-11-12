import React, { useEffect, useState, useLayoutEffect } from "react";
import Layout from "../components/layouts/layout";

import { useRouter } from "next/router";

import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

import Resume_component from "../components/cv/Resume_component";


import { JellyTriangle } from "@uiball/loaders";

const MemberInfo = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState([]);
  const router = useRouter();
// const csrfToken = Cookies.get('next-auth.csrf-token')

  const { id } = router.query;
  const [error, setError] = useState(null);

  // function getCsrfToken() {
  //   const cookies = document.cookie.split("; ");
  //   const csrfCookie = cookies.find(cookie => cookie.startsWith("next-auth-csrf-token="));
  
  //   if (csrfCookie) {
  //     return csrfCookie.split("=")[1];
  //   }
  
  //   return null;
  // }
  
  
  // const csrfToken = getCsrfToken();

  const fetchInfo = async (e) => {
    const userInfoUrl = `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}`;

    fetch(userInfoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((responseData) => {
        setInfo(responseData);
        console.log(responseData);

        setTimeout(function () {
          setLoading(false);
        }, 2000);
      })

      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useLayoutEffect(() => {
    fetchInfo();
  }, []);

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${id}/`
        );
        setLoggedIn(response.data[0].user_id);
        console.log(response.data[0].user_id);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);
 

  const handleCVDownload = (e) => {
    // console.log(csrfToken)
    e.preventDefault();
    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/download_cv/${loggedIn}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },  
          credentials: 'include',
          body: JSON.stringify({ profile_id: id }),
        }
      );
      if (response.ok) {
        const blob = await response.blob();

        
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'zamanis.pdf';
        link.click();
      }

      if (response.status === 400) {
        console.log("Error:", response.status);
      }
    };

    sendData();
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }
  return (
    <>
      <Layout sideHighlight="Tech Village">
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
        <div
          className="p-1 px-2 rounded-lg border shadow-md w-fit cursor-pointer bg-black text-white fixed bottom-10 right-10"
          onClick={handleCVDownload}
        >
          Download CV
        </div>
      </Layout>
    </>
  );
};

export default MemberInfo;
