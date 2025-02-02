import Image from "next/image";
import Link from "next/link";
import icon from "../../public/logo.png";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#051937");
  const [linkColor, setLinkColor] = useState("#fff");
  const [team, setTeam] = useState(false);
  const [teamMobile, setTeamMobile] = useState(false);
  const [about, setAbout] = useState(false);
  const [aboutMobile, setAboutMobile] = useState(false);
  const navRef = useRef(null);

  const [isMouseLeft, setIsMouseLeft] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleTeamEnter = () => {
    setTeam(true);
  };

  const handleTeamExit = () => {
    setTeam(false);
  };

  const handleTeamClick = () => {
    setTeamMobile(!teamMobile);
  };

  const handleAboutEnter = () => {
    setAbout(true);
  };

  const handleAboutExit = () => {
    setAbout(false);
  };

  const handleAboutClick = () => {
    setAboutMobile(!aboutMobile);
  };

  const handleClickOutsideNavbar = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNavbar);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNavbar);
    };
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-32 shadow-xl z-[100] ease-in-out duration-300 top-nav-dark"
          : "fixed w-full h-32 z-[100] "
      }
    >
      <div className="flex justify-center items-center overflow-visible w-full h-full px-2 2xl:px-16">
        <div
          className="w-24 hidden lg:flex h-24 relative"
          onMouseEnter={handleTeamExit}
        >
          <Link href="/">
            <div className="w-full h-full">
              <Image
                src={icon}
                alt="/"
                fill
                priority
                className="cursor-pointer h-24"
              />
            </div>
          </Link>

          <ul className="absolute w-max flex gap-4 text-white font-bold text-xl right-32 h-full items-center">
            <div className="relative" onMouseEnter={handleAboutEnter}>
              <li className="cursor-pointer hover:border-b-8 hover:border-yellow-500">
                About
              </li>

              {about && (
                <div
                  className="absolute end-0 z-10 mt-2 w-38 -left-20 border border-gray-100 bg-white shadow-lg"
                  role="menu"
                  onMouseLeave={handleAboutExit}
                >
                  <div className="p-2">
                    <Link
                      href="/homepage/about/who_we_are"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Who We Are
                    </Link>

                    <Link
                      href="/homepage/about/what_we_do"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      What We Do
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/homepage/team/management"
              className="cursor-pointer hover:border-b-8 hover:border-yellow-500"
            >
              Team
            </Link>

            {team && (
              <div
                className="absolute end-0 z-10 mt-2 w-56 -left-20 border border-gray-100 bg-white shadow-lg"
                role="menu"
                onMouseLeave={handleTeamExit}
              >
                <div className="p-2">
                  <Link
                    href="/homepage/team/management"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Management
                  </Link>

                  <Link
                    href="/homepage/team/technical_professionals"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Technical Professionals
                  </Link>
                </div>
              </div>
            )}

            <Link href="/homepage/partners" onMouseEnter={handleTeamExit}>
              <li className="cursor-pointer hover:border-b-8 hover:border-yellow-500">
                Partners
              </li>
            </Link>
            {/* <Link href="/homepage/news">
              <li className="cursor-pointer hover:border-b-8 hover:border-yellow-500">News</li>
            </Link> */}
          </ul>

          <ul
            className="absolute w-max truncate flex gap-4 text-white font-bold text-xl left-32 h-full items-center"
            onMouseEnter={handleTeamExit}
          >
            <Link href="/homepage/tech_village" onMouseEnter={handleTeamExit}>
              <li className="cursor-pointer hover:border-b-8 hover:border-yellow-500">
                Tech Village
              </li>
            </Link>
            <Link href="/homepage/tech_signup">
              <li className="cursor-pointer hover:border-b-8 hover:border-yellow-500">
                Sign up
              </li>
            </Link>
            {/* <Link href="/homepage/growth">
              <li className="cursor-pointer hover:border-b-8 hover:border-yellow-500">
                Growth
              </li>
            </Link>
            <Link href="/homepage/fund">
              <li className="cursor-pointer hover:border-b-8 hover:border-yellow-500">
                Baobab Fund
              </li>
            </Link> */}

            <Link href="/homepage/login">
              <li className="cursor-pointer text-blue-100 hover:text-white">
                sign in
              </li>
            </Link>
          </ul>
        </div>

        <div
          style={{ color: `${linkColor}` }}
          onClick={handleNav}
          className="lg:hidden w-full flex cursor-pointer justify-end"
        >
          <AiOutlineMenu size={45} />
        </div>
      </div>

      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div ref={navRef} className="">
            <div className="absolute top-4 right-4">
              <div className="flex w-full items-center justify-between">
                <div onClick={handleNav} className="p-3 cursor-pointer">
                  <AiOutlineClose className="text-4xl font-bold" />
                </div>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="font-poppins font-normal cursor-pointer text-[16px]">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <div className="relative">
                  <li onClick={handleAboutClick} className="py-4 text-sm">
                    About
                  </li>
                  {aboutMobile && (
                    <div
                      className="absolute end-0 z-10 mt-2 left-0 max-w-3xl border border-gray-100 bg-white shadow-lg"
                      role="menu"
                      onClick={() => setNav(false)}
                    >
                      <div className="p-2">
                        <Link
                          href="/homepage/about/who_we_are"
                          className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Who We Are
                        </Link>

                        <Link
                          href="/homepage/about/what_we_do"
                          className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          What We Do
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link href="/homepage/partners">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Partners
                  </li>
                </Link>
                {/* <Link href='/homepage/news'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  News
                </li>
              </Link> */}
                <Link href="/homepage/tech_village">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Tech Village
                  </li>
                </Link>{" "}
                <Link href="/homepage/tech_signup">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Sign up
                  </li>
                </Link>
                <Link href="/homepage/login">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Sign in
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
