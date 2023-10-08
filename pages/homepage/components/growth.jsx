import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { Growth } from '../../data';

const Company = () => {
  return (
    <ul className='w-full bg-white float-left'>

        { Growth.map((company) => (

          <li className="h-[204px] flex justify-center items-center float-left w-1/2 md:w-1/3 lg:w-1/4 border-[0.1px] border-gray-600 flex relative">
            <Image src={company.img} alt='img' width={140} height={140} />
            <div className="w-10 h-10 flex items-center justify-center absolute bottom-5 right-5 rounded-full border">
              <Link href={company.link}>
               <GoLinkExternal className="text-2xl" />
              </Link>
            </div>
          </li>

        ))}

        

    </ul>
  );
};

export default Company;