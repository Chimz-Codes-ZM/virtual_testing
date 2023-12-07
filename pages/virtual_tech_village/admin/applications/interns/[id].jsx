import React, { useEffect, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import jwt_decode from "jwt-decode";

import Layout from "../../../components/layouts/layout"
import Resume_component from '@/pages/virtual_tech_village/components/cv/Resume_component'

import { JellyTriangle } from "@uiball/loaders";

const CV = ({member}) => {

  return (
    <>
    <Layout sideHighlight="Tech Village">
      <Resume_component
    />
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

  
