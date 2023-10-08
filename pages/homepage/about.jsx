import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Layout from '../layout';
import Home from "./home";
import Slide from './components/slide_';
import TitleBox from './components/title_box';

import { HiDocumentReport } from "react-icons/hi"

const Team = () => {
    return (
        <Layout
          title='Baobabpad | About' 
          content='Bring Africa growth with Tech' 
        >

        <div className='overflow-x-hidden'>

            
            <Home 
                title='What we do' 
                mediaSrc='/assets/aboutB.jpg'
                mediaType='image' 
            />

            <TitleBox />

            <Slide />

            
        </div>
          
        </Layout>
    )
}

export default Team;
