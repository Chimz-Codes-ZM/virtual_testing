import React from "react";
import Layout from "../../layout";
import Home from "../home";
import Slide from "../components/slide_";
import TitleBox from "../components/title_box";

const Who_we_are = () => {
  const content1 =
    "Baobabpad is Africa’s first tech village concept with aim to drive digital transformation for sustainable change across communities, societies, entrepreneurs ,private and public sector in Africa.";
  const content2 =
    " Our mission is anchored on Elevating African Talent, Virtually and Globally. Empowering Af rican Talents through a bustling ecosystem that harnesses the immense potential of Af rica's tech-experts to the world.";
  const content3 =
    "We aspire to create a technology village to accurately reflect and discover the multi-diverse Africa's untapped potential— investing in talent, entrepreneurship, climate change and enhancing full-scale digital ecosystem across Africa.";
  const content4 =
    "Our core values for social and economic inclusion, along with technologies, drive trust, transparency, and stable generational wealth for African-based talents.";

  return (
    <Layout title="Baobabpad | About" content="Bring Africa growth with Tech">
      <div className="overflow-x-hidden">
        <Home
          title="Who We Are"
          mediaSrc="/assets/aboutB.jpg"
          mediaType="image"
        />

        <TitleBox />

        <Slide
          title1={"Our Story"}
          content1={content1}
          title2={"Our Mission"}
          content2={content2}
          title3={"Our Vision"}
          content3={content3}
          title4={"Our Values"}
          content4={content4}
        />
      </div>
    </Layout>
  );
};

export default Who_we_are;
