import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const MemberProfile = ({
  image,
  name,
  skills,
  showProfile,
  country,
  experience,
  certificate,
  user_id,
  bio,
  linkedin,
  soft_skills,
  languages,
  education,
  work_experience,
  position1,
  job1,
  title,
  city,
}) => {
  const router = useRouter();

  const handleShowProfile = () => {
    showProfile({
      image,
      name,
      skills,
      country,
      experience,
      certificate,
      user_id,
      bio,
      linkedin,
      soft_skills,
      languages,
      education,
      work_experience,
      position1,
      job1,
      title,
      city,
    });
  };

  return (
    <div className="text-center cursor-pointer " onClick={handleShowProfile}>
      <div className="rounded border relative w-full md:max-w-[19.8rem] max-h-80 h-80 overflow-hidden">
        <Image
          src={image}
          alt="profile image"
          layout="fill"
          objectFit="cover"
          className=" transition-opacity opacity-0 duration-[1.2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
         
        />
      </div>
      <h1 className="font-semibold">{name}</h1>
      <h3 className="font-light italic">{skills}</h3>
    </div>
  );
};

export default MemberProfile;
