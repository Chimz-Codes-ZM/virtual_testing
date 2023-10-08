import React from "react";
import Layout from "./components/layouts/layout";
import Virtual_Tech_Village from "./virtual_tech_village";
import Head from "next/document";
import Link from "next/link";


const index = () => {
  return (
    <>

      <Layout sideHighlight="Tech Village">

        <Virtual_Tech_Village />
      </Layout>
    </>
  );
};

export default index;
