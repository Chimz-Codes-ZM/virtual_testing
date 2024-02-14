import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';

const ExpandedCompanyModal = ({
    industry,
    image,
    company_name,
    company_description,
    website,
    user_id,
  }) => {
    return (
        <>
          <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
    
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {company_name}
                </h3>
    
                <p className="mt-1 text-xs font-medium text-gray-600">{industry}</p>
              </div>
    
              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt={company_name}
                  src={image}
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
    
            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                {company_description}
              </p>
            </div>
    
            <div className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex gap-4 font-medium text-gray-900">
                <a href={`${website}`} target="_blank" className="">
                  <FaExternalLinkSquareAlt />
                  {/* THIS NEEDS TO BE FIXED ASAP */}
                </a>
    
                <Link href={``}>
                  <BsFillInfoCircleFill />
                </Link>
              </div>
            </div>
          </div>
        </>
      );
}

export default ExpandedCompanyModal
