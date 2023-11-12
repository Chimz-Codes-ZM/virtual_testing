import React, { useEffect, useState, useContext } from "react";
import Layout from "./components/layouts/layout";
import Head from "next/head";
import Inbox from "./components/inbox/inbox";
import Link from "next/link";

const inbox = () => {
  return (
    <>
      <Inbox />
    </>
  );
};

export default inbox;
