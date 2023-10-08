import React from "react";
import Image from "next/image";
import icon from "../../../public/assets/Baobab.png";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Map from '/public/assets/ludmap.png';

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full overflow-hidden pt-5 bg-black md:px-20 flex items-center"
    >
      <div className="w-full gap-8 flex flex-col items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="ml-5 h-20 relative w-20">
              <Image
                src={icon}
                alt="img"
                fill
                priority
                className="cursor-pointer"
              />
            </div>
          </Link>

          <h1 className="text-3xl font-bold text-gray-200">Baobabpad</h1>
        </div>

        <div className="flex w-full gap-4 justify-center">
          {/* <h1 className="text-xs sm:text-lg md:text-xl text-white">
            Terms of Use
          </h1> */}
          <Link href="/homepage/privacy">
            <h1 className="text-xs sm:text-lg md:text-xl text-white cursor-pointer">
              Privacy Policy
            </h1>
          </Link>

          <Link href="/homepage/cookies" className="text-xs sm:text-lg md:text-xl text-white">
            Cookie Policy
          </Link>
        </div>

        <div className="flex text-gray-300 gap-4 items-center">
          <Link
            className="cursor-pointer"
            href="https://www.instagram.com/baobabpad/"
            target="_blank"
          >
            <BsInstagram />
          </Link>

          <Link
            className="cursor-pointer"
            href="https://www.linkedin.com/company/baobabpad/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        
        
        <div className='w-80 md:w-[700px]  rounded justify-center relative flex'>
        
        	<div className='w-max text-xs md:text-sm flex flex-col h-max z-10 rounded-xl overflow-hidden bg-gray-900 p-3 rounded-xl'>
        		<span className='text-gray-100 gap-1 flex items-center'>
        			<h1 className=''>Residential :</h1>
        			<h1 className='font-bold'>No.9290 Addis</h1>
        		</span>
        		<span className='text-gray-100 gap-1 flex items-center'>
        			<h1 className=''>Ababa Street, Soweto</h1>
        		</span>
        		<span className='text-gray-100 gap-1 flex items-center'>
        			<h1 className=''>Windhoek, Namibia</h1>
        		</span>
        		<span className='text-gray-100 gap-1 flex items-center'>
        			<h1 className=''>Registration Number : </h1>
        			<h1 className=''>2023/0616</h1>
        		</span>
        		{/* <span className='text-gray-100 gap-1 flex items-center'>
        			<h1 className=''>Phone : </h1>
        			<h1 className='font-bold'>+264 81 807 6022</h1>
        		</span> */}
        	</div>
{/*         	
        	<div className='w-[500px] h-60 rounded-xl overflow-hidden relative'>
        		<Image src={Map} layout='fill' />
        	</div> */}
        
        </div>

        <h1 className="text-sm mb-1 text-gray-300">
          @copyright Baobabpad 2023
        </h1>
      </div>
    </div>
  );
};

export default Footer;
