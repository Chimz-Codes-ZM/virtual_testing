import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Layout from '../layout';
import Home from "./home";
import Company from './components/growth';

import { HiDocumentReport } from "react-icons/hi"

const Team = () => {
    return (
        <Layout
          title='Baobabpad | Growth' 
          content='Bring Africa growth with Tech' 
        >

        <div className='overflow-x-hidden'>

            
            <Home 
                title='Growth' 
                mediaSrc='/assets/growth-pic.jpg'
                description="Driving Africa's Human Capital Growth through Innovation"
                mediaType='image' 
            />

		<div className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 p-4 pb-2"><h1>Meet our current growth partners</h1></div>

            <Company />
            
        </div>
          
        </Layout>
    )
}

export default Team;
