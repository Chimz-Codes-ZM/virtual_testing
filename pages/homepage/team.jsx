import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TiChartBar } from "react-icons/ti";
import { AiFillDatabase, AiOutlineCheck } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import Layout from '../layout';
import Home from "./home";
import TeamSection from './components/teams';
import Slide from './components/pricing';
import TitleBox from './components/title_box';
import Sal from '/public/assets/selma.png';
import {AiOutlineLinkedin} from 'react-icons/ai';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import { HiDocumentReport } from "react-icons/hi"

const Team = () => {
    return (
        <Layout
          title='Baobabpad | Team' 
          content='Bring Africa growth with Tech' 
        >

        <div className='overflow-x-hidden'>

            
            <Home 
              title='Team' 
              description="Work with Africa's top IT and data management Talent and Teams, driving human capital Growth and Innovation"
              mediaSrc='/assets/ladies.jpg'
              mediaType='image' 
            />
            
            <div className='w-full flex h-max'>
            	<div className='w-[200px] sm:w-[250px] md:w-[350px] lg:w-[500px] flex-shrink-0 h-full relative overflow-hidden'>
            		<div className='flex w-full justify-center border-gray-600 flex relative'
			  style={{ paddingBottom: '110%' }}
			>
            			<Image src={Sal} alt='img' layout='fill' />
            		</div>
            	</div>
            	<div className='flex-grow h-full p-2 md:p-5 relative overflow-hidden justify-between xl:pt-10 flex flex-col gap-2 xl:gap-10 md:gap-4'>
            		<h1 className='text-md sm:text-xl md:text-5xl font-bold text-gray-800'>Selma Nasheya</h1>
            		<h1 className='text-xs sm:text-md md:text-xl lg:text-3xl font-bold text-gray-800'>CEO <em>&</em> Co-founder</h1>
            		
            		<div className='flex text-xs sm:text-sm md:text-md lg:text-2xl flex-col'>
				
				
				
				<p className=''>
					Pioneering Sustainability in Africa for Global Transformation: Driving Just Transitions through Strategic Collaboration and Information Technology. At BAOBABPAD, we are committed to driving extraordinary innovative solutions.
				</p>
					
					
				
			</div>
			<span className='w-full text-2xl lg:text-5xl flex justify-center'>
				<a href='https://www.linkedin.com/in/selma-nasheya/'>
					<AiOutlineLinkedin />
				</a>
			
			</span>
            	</div>
            </div>


            <TeamSection />

            
        </div>
          
        </Layout>
    )
}

export default Team;
