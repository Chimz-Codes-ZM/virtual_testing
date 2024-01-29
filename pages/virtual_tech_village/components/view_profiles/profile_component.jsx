import Link from "next/link";
import Image from "next/image";
import { FaLink, FaBriefcase } from "react-icons/fa6";

export default function Component({ name, country, industry, logo, website, description, socials}) {
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
      <div className="flex items-center gap-2">
        <TwitterIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
        <Link className="underline text-blue-500 dark:text-blue-400" href="#">
          {socials}
        </Link>
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
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

function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
