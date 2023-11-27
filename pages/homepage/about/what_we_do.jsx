import React from "react";
import Layout from "../../layout";
import Home from "../home";
import Slide from "../components/slide_";
import TitleBox from "../components/title_box";
import Check from "/public/assets/check.jpg";
import Girl from "/public/assets/girl_tech.jpg";
import Business from "/public/assets/business_model.jpg";
import Training from "/public/assets/training_tech.jpg";

const What_we_do = () => {
  const content1 =
    "Baobabpad's business model offers full-time contracts and competitive monthly salaries to top software developers exclusively from Africa. The members are incentivized with access to tokenized share options, which represent 25% of Baobabpad. Tokenized share options typically mean that ownership in the company is represented digitally using digitized assets technology.";
  const content2 =
    "Baobabpad ensures that all software developers who join undergo workplace training modules. This training is aimed at enhancing their skills and preparing them to meet the expectations of clients effectively. Training    can also contribute to maintaining high-quality standards in the projects delivered.";
  const content3 =
    "Baobabpad conducts proven background checks on the software developers it onboards. This step is essential to establish trust and ensure asset security for clients. Background checks can include verifying developer's professional qualifications and work history.";
  const content4 =
    "As part of driving social impact in Africa, Baobabpad is launching a Virtual Internship Program for Girls exclusively from Africa. This program is tailored specifically for graduate girls and new women professionals in technology from Africa, emphasizing both skill development and empowerment in the technology where they are historically underrepresented. The impact goal is to allow graduate girls and new women professionals to gain practical experience in software development and other tech-related fields, working remotely on projects under the guidance of experienced mentors.";

  const title1 = "Business Model";
  const title2 = "Training";
  const title3 = "Background Checks";
  const title4 = "Girls in Tech";

  return (
    <Layout title="Baobabpad | About" content="Bring Africa growth with Tech">
      <div className="overflow-x-hidden">
        <Home
          title="What We Do"
          mediaSrc="/assets/aboutB.jpg"
          mediaType="image"
        />

        <TitleBox />

        <Slide
          title1={title1}
          title2={title2}
          title3={title3}
          title4={title4}
          content1={content1}
          content2={content2}
          content3={content3}
          content4={content4}
          img1={Business}
          img2={Training}
          img3={Check}
          img4={Girl}
          page="who"
        />
      </div>
    </Layout>
  );
};

export default What_we_do;
