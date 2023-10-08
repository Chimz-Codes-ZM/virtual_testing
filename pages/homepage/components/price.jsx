import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineMail } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import Circles from "../../circles";

const Price = () => {
  const [contact, setContact] = useState(false);

  const handleContact = () => {
    setContact(true);
  };

  const closeContact = () => {
    setContact(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { name, subject, email, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/contact_us/", {
    // const response = await fetch("https://baobabpad-334a8864da0e.herokuapp.com/api/contact_us/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        subject: subject,
        email: email,
        message: message,
      }),
    });

    if (response.ok) {
      alert('Email sent successfully!')
      window.location.reload();
    } else {
      alert('An error occurred while sending you email. Please try again!')
      window.location.reload();
    }

  };
  return (
    <div className="w-full relative items-center px-4 md:px-5 h-max py-20 flex">
      {contact && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-[199]"></div>
          <section className="rounded-3xl shadow-2xl fixed top-40 max-w-xl p-4 w-full left-1/2 transform -translate-x-1/2 bg-white z-[200]">
            <GrFormClose
              className="absolute right-10 text-lg cursor-pointer"
              onClick={closeContact}
            />
            <div className="p-8 text-center sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
                Fill out the form below to get in touch with us
              </p>

              {/* <h2 class="mt-6 text-3xl font-bold">
              Thanks for your purchase, we're getting it ready!
            </h2> */}

              <form onSubmit={onSubmit}>
              <div className="grid grid-cols-6 gap-2 mt-6 w-full">
                  <label htmlFor="email" className="col-span-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={onChange}
                    value={name}
                    placeholder="eg. John Doe"
                    className=" px-2 p-1 border col-span-5"
                  />
                </div>
              <div className="grid grid-cols-6 gap-2 mt-6 w-full">
                  <label htmlFor="email" className="col-span-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    onChange={onChange}
                    value={subject}
                    placeholder="Enter email subject"
                    className=" px-2 p-1 border col-span-5"
                  />
                </div>
                <div className="grid grid-cols-6 gap-2 mt-6 w-full">
                  <label htmlFor="email" className="col-span-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChange}
                    value={email}
                    placeholder="name@example.com"
                    className=" px-2 p-1 border col-span-5"
                  />
                </div>

                <div className="grid grid-cols-6 gap-2 mt-6 w-full">
                  <label htmlFor="message" className="col-span-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols=""
                    rows="2"
                    onChange={onChange}
                    value={message}
                    className="col-span-5 border"
                  ></textarea>
                </div>
                <button
                  className="mt-8 inline-block w-full rounded-full bg-teal-600 py-4 text-sm font-bold text-white shadow-xl"
                  href=""
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </>
      )}

      <div className="w-full grid sm:grid-cols-3 gap-10 sm:gap-2 md:gap-3 lg:gap-10 md:px-3 lg:px-10 xl:px-32 xl:gap-20 z-10">
        <div className="md:h-[360px] lg:h-84 rounded bg-white gap-4 shadow flex p-5 flex-col justify-between">
          <span className="w-full flex flex-col items-center">
            <h1 className="text-3xl text-gray-800 font-bold">Asante</h1>
            <h2 className="text-md text-gray-700">Perfect for Startups</h2>

            <div className="w-full mt-4 flex flex-col gap-2 items-center">
              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="">
                  <AiFillCheckCircle />
                </div>
                <h1>10 days free trial</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="">
                  <AiFillCheckCircle />
                </div>
                <h1>Access to customized dev teams</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="">
                  <AiFillCheckCircle />
                </div>
                <h1>24/7 customer support</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="">
                  <AiFillCheckCircle />
                </div>
                <h1>Free UI/UX product designs</h1>
              </span>
            </div>
          </span>

          <div className="w-full flex flex-col items-center">
            <span className="text-gray-800 flex w-full items-center gap-3">
              <h1 className="text-xl font-bold">70%</h1>
              <h1 className="text-sm">cost reduction</h1>
            </span>

      
            <span className="text-white rounded bg-gray-900 w-40 mt-4 py-2 cursor-pointer justify-center flex items-center gap-3">
              <div onClick={handleContact}>
                <h1 className="text-md">Contact us</h1>
              </div>
            </span>
          </div>
        </div>

        <div className="md:h-[360px] lg:h-84 rounded bg-white gap-4 shadow flex p-5 flex-col justify-between">
          <span className="w-full flex flex-col items-center">
            <h1 className="text-3xl text-gray-800 font-bold">Indaba</h1>
            <h2 className="text-md text-gray-700">
              Perfect for Medium Enterprise
            </h2>

            <div className="w-full mt-4 flex flex-col gap-2 items-center">
              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-yellow-600">
                  <AiFillCheckCircle />
                </div>
                <h1>10 days free trial</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-yellow-600">
                  <AiFillCheckCircle />
                </div>
                <h1>Access to unlimited dev teams</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-yellow-600">
                  <AiFillCheckCircle />
                </div>
                <h1>24/7 customer support services</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-yellow-600">
                  <AiFillCheckCircle />
                </div>
                <h1>Get real-time product dev insights</h1>
              </span>
            </div>
          </span>

          <div className="w-full flex flex-col items-center">
            <span className="text-gray-800 flex w-full items-center gap-3">
              <h1 className="text-xl font-bold">30%</h1>
              <h1 className="text-sm">Increase in agile productivity</h1>
            </span>

          

            <span className="text-white rounded bg-gray-900 w-40 mt-4 py-2 cursor-pointer justify-center flex items-center gap-3">
              <div onClick={handleContact}>
                <h1 className="text-md">Contact us</h1>
              </div>
            </span>
          </div>
        </div>

        <div className="md:h-[360px] lg:h-84 rounded bg-white gap-4 shadow flex p-5 flex-col justify-between">
          <span className="w-full flex flex-col items-center">
            <h1 className="text-3xl text-gray-800 font-bold">Ubuntu</h1>
            <h2 className="text-md text-gray-700">
              Perfect for Corporate Enterprise
            </h2>

            <div className="w-full mt-4 flex flex-col gap-2 items-center">
              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-green-600">
                  <AiFillCheckCircle />
                </div>
                <h1>All access to Asante and Indaba</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-green-600">
                  <AiFillCheckCircle />
                </div>
                <h1>Get sustainability reporting tools</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-green-600">
                  <AiFillCheckCircle />
                </div>
                <h1>Access to cyber security tools</h1>
              </span>

              <span className="text-gray-800 w-full text-sm flex items-center gap-3 font-bold">
                <div className="text-green-600">
                  <AiFillCheckCircle />
                </div>
                <h1>Product warrenty for 1 year</h1>
              </span>
            </div>
          </span>

          <div className="w-full flex flex-col items-center">
            <span className="text-gray-800 flex w-full items-center gap-3">
              <h1 className="text-xl font-bold">27%</h1>
              <h1 className="text-sm">Decrease in service/support costs</h1>
            </span>

       
            <span className="text-white rounded bg-gray-900 w-40 mt-4 py-2 cursor-pointer justify-center flex items-center gap-3">
              <div onClick={handleContact}>
                <h1 className="text-md">Contact us</h1>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-44 absolute bottom-0 left-0">
        <div className="relative w-full h-full bg-gray-900">
          <Circles />
        </div>
      </div>
    </div>
  );
};

export default Price;
