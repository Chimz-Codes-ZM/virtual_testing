import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";

import { StartUp } from '../../data';

const Company = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleBio = (company) => {
    setSelectedCompany(company);
  };

  const closeBio = () => {
    setSelectedCompany(null);
  };

  return (
    <ul className='w-full bg-white float-left'>
      {StartUp.map((company) => (
        <div key={company.id}>
          <li className="h-[204px] flex justify-center items-center float-left w-1/2 md:w-1/3 lg:w-1/4 border-[0.1px] border-gray-600 relative">
            {selectedCompany === company.id && (
              <>
                <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-[199]" onClick={closeBio}></div>
                <section className="rounded-xl shadow-2xl fixed top-40 max-w-xl p-4 w-full left-1/2 transform -translate-x-1/2 bg-white z-[200]">
                  <GrFormClose className="absolute right-10 text-lg cursor-pointer" onClick={closeBio} />
                  <div className="p-4 sm:p-6 flex flex-col items-center">
                    <h1>{company.bio}</h1><a href={company.link} target='_blank'>
                    <div className="mt-8 self-center rounded-full bg-teal-600 py-1 px-2 w-fit text-sm font-bold text-white shadow-xl cursor-pointer" >
                       Find out more
                     
                    </div></a>
                  </div>
                </section>
              </>
            )}
            <Image src={company.img} alt='img' width={180} height={180} onClick={() => handleBio(company.id)} className='cursor-pointer' />
            <div className="w-10 h-10 flex items-center justify-center absolute bottom-5 right-5 rounded-full border">
              <GoLinkExternal className="text-2xl" />
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Company;
