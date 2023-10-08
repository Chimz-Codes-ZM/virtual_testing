import Head from 'next/head'
import { useState } from "react";
import Image from 'next/image'
import Link from "next/link"
import { FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';
import Layout from './layout'
import Homepage from "./homepage"


const homepage = () => (

  <Layout 
    title='Welcome to Baobabpad' 
    content='Bring Africa growth with Tech'  
  >
      <Homepage />
  </Layout>

);

export default homepage