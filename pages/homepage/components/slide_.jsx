import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import TVillage from '../../../public/assets/story.jpg';
import Tech from '../../../public/assets/mission.jpg';
import Capital from '../../../public/assets/vision.jpg';
import Values from '../../../public/assets/values.jpg';


const Slide = () => {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className='w-full h-max bg-gray-100 flex flex-col md:flex-row '>

      <div
        className='w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px]  md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden group'
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        >
        <div className='flex gap-4 z-20 items-center truncate w-full'>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <h1 className='text-lg lg:text-4xl text-white'>Our Story</h1>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300'>
          <div className='w-full text-sm lg:text-base md:w-full glass p-3 h-max p-3 flex flex-col gap-3'  style={{ visibility: isHovered1 ? 'visible' : 'hidden' }}>
            <p className='w-full h-max ease-in-out duration-500 text-justify '>
              Baobabpad is Africa’s first tech village concept with aim to drive digital transformation for sustainable change across communities, societies, entrepreneurs ,private and public sector in Africa.
            </p>
          </div>
        </div>

        <Image
          src={TVillage}
          alt='Tech Village'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${isHovered1 ? 'brightness-[.3] ' : ''}`}
        />

                

      </div>

      <div
        className='w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px] group md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden'
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        >
        <div className='flex gap-4 z-20 items-center truncate w-full'>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <h1 className='text-lg lg:text-4xl text-white'>Our Mission</h1>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300'>
          <div className='w-full text-sm lg:text-base md:w-full glass p-3 h-max p-3 flex flex-col gap-3'  style={{ visibility: isHovered2 ? 'visible' : 'hidden' }}>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
                Our goal is to inspire an avalanche of digital transformative change, create opportunities and tackling the most Africa's sustainable development issues through digitization.
            </p>
          </div>
        </div>

        <Image
          src={Tech}
          alt='Tech'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${isHovered2 ? 'brightness-[.3] transition-delay-500' : ''}`}
        />

                

      </div>

      <div
        className='w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px] group md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden'
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        >
        <div className='flex gap-4 z-20 items-center truncate w-full'>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <h1 className='text-lg lg:text-4xl text-white'>Our Vision</h1>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300'>
          <div className='w-full text-sm lg:text-base md:w-full glass p-3 h-max p-3 flex flex-col gap-3'  style={{ visibility: isHovered3 ? 'visible' : 'hidden' }}>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
                We aspire to create a technology village to accurately reflect and discover the multi-diverse Africa's untapped potential— investing in talent, entrepreneurship, climate change and enhancing full-scale digital ecosystem across Africa.
            </p>
          </div>
        </div>

        <Image
          src={Capital}
          alt='capital'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${isHovered3 ? 'brightness-[.3] transition-delay-500' : ''}`}
        />

                

      </div>

      <div
        className='w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] md:h-[500px] group md:w-1/4 md:hover:w-2/5 ease-in duration-300 relative overflow-hidden'
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
        >
        <div className='flex gap-4 z-20 items-center truncate w-full'>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <h1 className='text-lg lg:text-4xl text-white'>Our Values</h1>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[130px] translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100   h-[200px] delay-300'>
          <div className='w-full text-sm lg:text-base md:w-full glass  h-max p-3 flex flex-col gap-3'  style={{ visibility: isHovered4 ? 'visible' : 'hidden' }}>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
                Baobadpad will invest in growth capital through Baobabfund to companies and entreprenuers creating digital change in Africa. Our values are anchored on ethical and climate responsibility, diversity and gender inclusion and equity, respect, sustainability, people and teams, technology and economic equity, freedom and peace.
            </p>
          </div>
        </div>

        <Image
          src={Values}
          alt='values'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${isHovered4 ? 'brightness-[.3] transition-delay-500' : ''}`}
        />

                

      </div>

    </div>
  )
}

export default Slide;