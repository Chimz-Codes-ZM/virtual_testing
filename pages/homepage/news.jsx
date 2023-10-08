import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Layout from '../layout';
import Home from "./home";

import { HiDocumentReport } from "react-icons/hi"

const Team = () => {
    return (
        <Layout
          title='Baobabpad | News' 
          content='Bring Africa growth with Tech' 
        >

        <div className='overflow-x-hidden'>

            
            <Home title='News' 
                description='Coming Soon...' 
                mediaSrc='/assets/about.jpg'
                mediaType='image' 
            />

            
        </div>
          
        </Layout>
    )
}

export default Team;
