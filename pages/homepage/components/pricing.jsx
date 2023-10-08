import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Asante from '../../../public/assets/pricing.jpg';


const Slide = () => {
  const [progress, setProgress] = useState(0);
  const [indaba, setindaba] = useState(0);
  const [ubuntu, setUbuntu] = useState(0);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1);
    }, 70);
    if (progress >= 70) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [progress]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setindaba(prevProgress => prevProgress + 1);
    }, 30);
    if (indaba >= 30) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [indaba]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUbuntu(prevProgress => prevProgress + 1);
    }, 27);
    if (ubuntu >= 27) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [ubuntu]);

  useEffect(() => {
    const resetId = setInterval(() => {
      setProgress(0);
    }, 14000);
    return () => clearInterval(resetId);
  }, []);

  useEffect(() => {
    const resetId = setInterval(() => {
      setindaba(0);
    }, 14000);
    return () => clearInterval(resetId);
  }, []);

  useEffect(() => {
    const resetId = setInterval(() => {
      setUbuntu(0);
    }, 14000);
    return () => clearInterval(resetId);
  }, []);

  return (
    <div className='w-full h-max flex'>

      <div className={`flex ease-in duration-500 flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[400px] relative overflow-hidden ${ isHovered3 || isHovered2 ? 'w-[10%] bg-black/30' : 'w-1/3 hover:w-[90%]'}`}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div className={`w-full h-full absolute left-0 top-0 z-20 ease-in duration-500 ${isHovered3 || isHovered2 ? 'bg-black/40' : ' bg-black/20' }`}></div>
        <div className='flex gap-4 h-32 z-20 relative truncate w-full ease-in-out duration-500' style={{ visibility: isHovered3 || isHovered2 ? 'hidden' : 'visible' }}>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <span className='text-lg flex items-center h-10 lg:h-20 lg:text-6xl text-white relative'>
            Asante
            <h1 className='text-gray-100 text-[10px] lg:text-[17px] absolute -bottom-3 z-30 left-4 lg:left-24'>Perfect for Startups</h1>
            <div className='text-gray-100 text-[13px] absolute -bottom-7 lg:-bottom-12 z-30 left-0 flex'>$ <span className='flex items-baseline'> <h1 className='text-white text-xl lg:text-4xl font-bold'>2000</h1> <p className='text-lg font-bold'>/month</p> </span> </div>
          </span>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-52 lg:top-[200px] h-[200px] ease-in-out duration-500' style={{ visibility: isHovered1 ? 'visible' : 'hidden' }}>
          
          <div className='w-full text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3'>
            <div className='absolute glass py-[1.7px] flex flex-col -top-[75px] lg:-top-[76px] left-0 px-4'>
              <span className='flex text-5xl font-bold text-gray-200'>
                <h1>{progress}</h1>
                %
              </span>
              <h1 className='text-md font-bold'>Cost reduction</h1>
            </div>
            <ul>
              <li className=''>10 days free trial</li>
              <li className=''>Get access to customized dev teams</li>
              <li className=''>24/7 customer support</li>
              <li className=''>Free UI/UX product designs</li>
            </ul>
          </div>
        </div>


        <Image
          src={Asante}
          alt='Asante'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 brightness-30 transition-delay-500 ${isHovered1 ? 'brightness-30 transition-delay-500' : ''}`}
        />
              
      </div>

      <div className={`flex ease-in duration-500 flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[400px] relative overflow-hidden ${ isHovered1 || isHovered3 ? 'w-[10%] bg-black/30' : 'w-1/3 hover:w-[90%]'}`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <div className={`w-full h-full absolute left-0 top-0 z-20 ease-in duration-500 ${isHovered3 || isHovered1 ? 'bg-black/40' : ' bg-black/20' }`}></div>
        <div className='flex gap-4 h-32 z-20 relative truncate w-full ease-in-out duration-500' style={{ visibility: isHovered1 || isHovered3 ? 'hidden' : 'visible' }}>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <span className='text-lg flex items-center h-10 lg:h-20 lg:text-6xl text-white relative'>
            Indaba
            <h1 className='text-gray-100 text-[10px] lg:text-[17px] absolute -bottom-3 z-30 left-4 lg:left-24'>Perfect for Business Enterprise</h1>
            <div className='text-gray-100 text-[13px] absolute -bottom-7 lg:-bottom-12 z-30 left-0 flex'>$ <span className='flex items-baseline'> <h1 className='text-white text-xl lg:text-4xl font-bold'>3500</h1> <p className='text-lg font-bold'>/month</p> </span> </div>
          </span>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-52 lg:top-[200px] h-[200px] ease-in-out duration-500' style={{ visibility: isHovered2 ? 'visible' : 'hidden' }}>
          
          <div className='w-full text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3'>
            <div className='absolute glass py-[1.7px] flex flex-col -top-[100px] left-0 px-4'>
              <span className='flex text-5xl font-bold text-gray-200'>
                <h1>{indaba}</h1>
                %
              </span>
              <h1 className='text-md font-bold'>Increase in</h1>
              <h1 className='text-md font-bold'>agile productivity</h1>
            </div>
            <ul>
              <li className=''>10 days free trial</li>
              <li className=''>Get access to unlimited dev teams</li>
              <li className=''>24/7 customer support services</li>
              <li className=''>Get real-time product dev insights</li>
            </ul>
          </div>
        </div>


        <Image
          src={Asante}
          alt='Asante'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 brightness-30 transition-delay-500 ${isHovered2 ? 'brightness-30 transition-delay-500' : ''}`}
        />
              
      </div>

      <div className={`flex ease-in duration-500 flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[400px] relative overflow-hidden ${ isHovered1 || isHovered2 ? 'w-[10%] bg-black/30' : 'w-1/3 hover:w-[90%]'}`} 
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <div className={`w-full h-full absolute left-0 top-0 z-20 ease-in duration-500 ${isHovered3 || isHovered1 ? 'bg-black/40' : ' bg-black/20' }`}></div>
        <div className='flex gap-4 h-32 z-20 relative truncate w-full ease-in-out duration-500' style={{ visibility: isHovered1 || isHovered2 ? 'hidden' : 'visible' }}>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <span className='text-lg flex items-center h-10 lg:h-20 lg:text-6xl text-white relative'>
            Ubuntu
            <h1 className='text-gray-100 text-[10px] lg:text-[17px] absolute -bottom-3 z-30 left-4 lg:left-24'>Perfect for Business Enterprise</h1>
            <div className='text-gray-100 text-[13px] absolute -bottom-7 lg:-bottom-12 z-30 left-0 flex'>$ <span className='flex items-baseline'> <h1 className='text-white text-xl lg:text-4xl font-bold'>5000</h1> <p className='text-lg font-bold'>/month</p> </span> </div>
          </span>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-52 lg:top-[200px] h-[200px] ease-in-out duration-500' style={{ visibility: isHovered3 ? 'visible' : 'hidden' }}>
          
          <div className='w-full text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3'>
            <div className='absolute glass py-[1.7px] flex flex-col -top-[100px] left-0 px-4'>
              <span className='flex text-5xl font-bold text-gray-200'>
                <h1>{ubuntu}</h1>
                %
              </span>
              <h1 className='text-md font-bold'>Decrease in</h1>
              <h1 className='text-md font-bold'>service/support costs</h1>
            </div>
            <ul>
              <li className=''>All access to Asante and Indaba</li>
              <li className=''>Get sustainability reporting tools</li>
              <li className=''>Access to cyber security tools</li>
              <li className=''>Product warrenty for 1 year</li>
            </ul>
          </div>
        </div>


        <Image
          src={Asante}
          alt='Asante'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 brightness-30 transition-delay-500 ${isHovered3 ? 'brightness-30 transition-delay-500' : ''}`}
        />
              
      </div>
    </div>
  )
}

export default Slide
