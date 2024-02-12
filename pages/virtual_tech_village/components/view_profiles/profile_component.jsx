import Link from "next/link";
import Image from "next/image";
import { FaLink, FaBriefcase, FaLinkedin } from "react-icons/fa6";


export default function Component({ name, country, industry, logo, website, description, socials, address, registration}) {
  return (

    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8 border-b">
      <div className="flex items-center gap-4">
        <div className="h-[100px] w-[100px] relative">
          <Image
            alt="Company Logo"
            className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
            fill
            src={logo}            
          />
        </div>

        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <GlobeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">Country: {country}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaLink className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <Link className="underline text-blue-500 dark:text-blue-400" href="#">
            {website}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaBriefcase className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">
            Industry: {industry}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">About Us</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Company Address</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {address}
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Registration Number</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {registration}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FaLinkedin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
        <Link className="underline text-blue-500 dark:text-blue-400" href="#">
          {socials}
        </Link>
      </div>
    </div>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}


