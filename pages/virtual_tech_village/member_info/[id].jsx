import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layouts/layout";
import { BsLinkedin, BsFillChatQuoteFill } from "react-icons/bs";
import { JellyTriangle } from "@uiball/loaders";
import { useRouter } from "next/router";

const MemberInfo = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { id } = router.query;
  const [error, setError] = useState(null);

  const fetchInfo = async (e) => {
    const userInfoUrl = `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/`;

    fetch(userInfoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((responseData) => {
        setInfo(responseData);

        setTimeout(function () {
          setLoading(false);
        }, 2000);
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
    console.log(info);
  }, [info]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }
  return (
    <>
      <Layout>
        <body className="w-full bg-gray-100">
          {info.map((person) => (
            <div key={person.user_id} className="mb-8">
              {/* Profile Card */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                {/* Image Section */}
                <div className="rounded-lg w-full relative flex flex-col gap-4 bg-white shadow justify-center items-center">
                  <div className="relative w-full h-96 rounded-lg overflow-hidden">
                    <Image
                      src={person.image}
                      alt="profile image"
                      fill
                      objectFit="cover"
                      className="transition-opacity opacity-0 duration-[1.2s] rounded-lg"
                      onLoadingComplete={(image) =>
                        image.classList.remove("opacity-0")
                      }
                    />
                  </div>

                  {/* Basic Information */}
                  <div className="w-full px-8 gap-2 flex flex-col indent-2 rounded-lg shadow-sm">
                    <div>
                      <h1 className="font-semibold text-lg underline underline-offset-2">
                        {person.first_name} {person.last_name}
                      </h1>
                    </div>

                    <div className="flex justify-between">
                      <p className="font-light text-gray-600">Role</p>
                      <h3 className="text-base font-medium italic">
                        {person.skills}
                      </h3>
                    </div>

                    <div className="flex justify-between">
                      <p className="font-light text-gray-600">Country</p>
                      <h3 className="text-base font-medium italic">
                        {person.country}
                      </h3>
                    </div>

                    <div className="flex justify-between">
                      <p className="font-light text-gray-600">Education</p>
                      <h3 className="text-base font-medium italic">
                        {person.certificate}
                      </h3>
                    </div>

                    <div className="flex justify-between">
                      <p className="font-light text-gray-600">Experience</p>
                      <h3 className="text-base font-medium italic">
                        {person.experience}
                      </h3>
                    </div>

                    <div className="flex justify-between">
                      <p className="font-light text-gray-600">Linkedin</p>
                      <a
                        href={`https://www.linkedin.com/in/${person.professional_profile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium italic"
                      >
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio and Quote Section */}
                <div className="rounded-lg bg-white p-4 flex flex-col justify-between">
                  <div className="flex flex-col mb-4">
                    <p>
                      <span className="font-semibold">Bio:</span> {person.bio}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <p>
                      <span className="font-semibold">Quote:</span>{" "}
                      {person.quote}
                    </p>
                  </div>
                </div>

                {/* Skills, Goals, Education Section */}
                <div className="rounded-lg bg-white p-4">
                  <div className="flex flex-col shadow rounded border p-2 mb-4">
                    <span className="font-semibold">Skills:</span>
                    <ul className="list-disc list-inside">
                      <li>{person.skills}</li>
                    </ul>
                  </div>

                  <div className="flex flex-col shadow rounded border p-2 mb-4">
                    <span className="font-semibold">Goals:</span>
                    <ul className="list-disc list-inside">
                      <li>{person.goals}</li>
                    </ul>
                  </div>

                  <div className="flex flex-col shadow rounded border p-2">
                    <span className="font-semibold">Education:</span>
                    <ul className="list-disc list-inside">
                      <li>{person.education}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </body>
      </Layout>
    </>
  );
};

export default MemberInfo;
