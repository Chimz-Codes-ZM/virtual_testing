import React, { useEffect, useState, useLayoutEffect } from "react";
import Layout from "../components/layouts/layout";
import { saveAs } from 'file-saver';
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux";

import Resume_component from "../components/cv/Resume_component";

import { JellyTriangle } from "@uiball/loaders";
import { API_URL } from "@/config";



const MemberInfo = ({member}) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState([]);
  const router = useRouter();

const { id } = router.query;
  const [error, setError] = useState(null);

  const user = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0];
    } else {
      return null;
    }
  });

  const fetchInfo = async (e) => {
    const userInfoUrl = `https://${API_URL}/village/profile_data/${user.user_id}`;

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

      
          setLoading(false);
       
      })

      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  
  useEffect(() => {


    async function fetchData() {
      try {
        const response = await axios.get(
          `https://${API_URL}/village/profile_data/${user.user_id}/`
        );
        setLoggedIn(response.data[0].user_id);
        console.log(response.data[0].user_id);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);
 

  const handleCVDownload = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(
        `https://${API_URL}/village/talent_resume/${user.user_id}/`,
        { responseType: 'arraybuffer' }
      );
  
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        saveAs(blob, 'downloaded-file.txt');
        console.log('CV Downloaded successfully');
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
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
          name={`${member[0]?.first_name} ${member[0].last_name}`}
          bio={member[0]?.bio}
          country={member[0]?.country}
          city={member[0]?.city}
          title={member[0]?.skills}
          job1={member[0]?.work_experience[0]?.company}
          position1={member[0]?.work_experience[0]?.position}
          work_experience={member[0]?.work_experience}
          education={member[0]?.education}
          languages={member[0]?.languages}
          linkedin={member[0]?.link}
          soft_skills={member[0]?.soft_skills}
        />
        <a href={`https://${API_URL}/village/talent_resume/${user.user_id}/`}
          className="p-1 px-1 rounded-lg border shadow-md w-fit cursor-pointer bg-black text-white fixed bottom-10 right-10"
          target="_blank"
        >
          Download CV
        </a>
      </Layout>
    </>
  );
};

export default MemberInfo;

export async function getStaticPaths() {
  const response = await fetch(`https://${API_URL}/village/talent_ids/`);
  
  if (!response.ok) {
    console.error('Failed to fetch data');
    return { paths: [], fallback: true };
  }

  const data = await response.json();

  console.log(data);

  const paths = data.map((person) => {
    return {
      params: {
        id: `${person.id}`,
      }
    };
  });

  return {
    paths: paths,
    fallback: true
  };
}
 
export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(`https://${API_URL}/village/profile_data/${params.id}`)
  const data = await response.json()

  return {
    props: {
      member: data
    }
  }
}
