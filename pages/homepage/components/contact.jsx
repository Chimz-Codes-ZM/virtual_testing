import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [email, setEmail] = useState();
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();

  // Success Alert
  const [alert, setAlert] = useState(false);
  const handleAlert = () => {
    setAlert(true);
  };

  const alertDismiss = () => {
    setAlert(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://baobabpad-334a8864da0e.herokuapp.com/api/contact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, date }),
      }
    );

    if (response.ok) {
      handleAlert();
      setEmail("");
    } else {
      setEmail("");
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-gray-100 justify-between items-center py-4 px-4 gap-4 sm:px-10 md:px-24  flex flex-col lg:flex-row"
    >
      {alert && (
        <div className="fixed top-32  lg:right-1/2 lg:top-60 max-w-[450px] z-[60]">
          <div
            role="alert"
            class="rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
          >
            <div class="flex items-start gap-4">
              <span class="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <div class="flex-1">
                <strong class="block font-medium text-gray-900">
                  {" "}
                  Email submitted{" "}
                </strong>

                <p class="mt-1 text-sm text-gray-700">
                  Thank you for contacting us! We appreciate you taking the time
                  to reach out. Your message has been received, and our team
                  will be in touch soon.
                </p>
              </div>

              <button
                class="text-gray-500 transition hover:text-gray-600"
                type="button"
                onClick={alertDismiss}
              >
                <span class="sr-only">Dismiss popup</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex  flex-col">
        <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center">
          Get in touch with us.
        </h1>
      </div>

      <form
        className=" flex relative bg-white overflow-hidden justify-between h-14 rounded-full background-green-border"
        onSubmit={handleSubmit}
      >
        <input
          className="w-22 lg:w-60 h-full text-sm sm:text-xl md:text-2xl outline-none border-none text-gray-700 ml-2"
          placeholder="name@email.com"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button
          type="submit"
          className="w-16 h-full rounded-l-full flex justify-center items-center border-none outline-none background-green"
        >
          <HiOutlineMail className="w-10 h-10 text-white" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
