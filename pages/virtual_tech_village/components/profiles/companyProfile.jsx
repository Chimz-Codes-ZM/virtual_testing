import React from 'react'

const CompanyProfile = ({
    company_name,
    image,
    industry,
    company_description,
    website,
    showCompany,
    user_id,
}) => {

    const showCompanyProfile = () => {
        showCompany({
          image,
          industry,
          company_name,
          company_description,
          website,
          user_id,
        });
      };
  return (
    <div className="block" onClick={showCompanyProfile}>
      <img
        alt={company_name}
        src={image}
        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72  transition-opacity opacity-0 duration-[1.2s]"
        onLoad={(event) => event.target.classList.remove("opacity-0")}
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="font-medium">{company_name}</strong>

        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

        <p className="mt-0.5 opacity-50 sm:mt-0">{industry}</p>
      </div>
    </div>
  )
}

export default CompanyProfile
