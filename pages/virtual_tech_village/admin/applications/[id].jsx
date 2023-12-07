import React, { useEffect, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/layouts/layout"
import Resume_component from "../../components/cv/Resume_component";

import { JellyTriangle } from "@uiball/loaders";


import axios from "axios";
import jwt_decode from "jwt-decode";

const CV = ({member}) => {



  return (
    <>
    <Layout sideHighlight="Tech Village">
      
      <div
        className="p-1 px-2 rounded-lg border shadow-md w-fit cursor-pointer bg-black text-white fixed bottom-10 right-10"
      >
        Download CV
      </div>
    </Layout>
  </>
  )
}

export default CV

