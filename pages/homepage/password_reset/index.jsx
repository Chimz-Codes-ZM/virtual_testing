import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Baobab_logo from "../../../public/logo.png";
import Password_hero from "../../../public/assets/password_hero.jpg";

import { TbPasswordFingerprint } from "react-icons/tb";
import { MdToken } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";

const Password_reset = () => {
  const router = useRouter()
  const [values, setValues] = useState({
    new_password: "",
    confirm_password: "",
    token: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://baobabpad-334a8864da0e.herokuapp.com/api/forgot_password/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    ).then((response) => {
      if (response.ok) {
        alert("Password reset successfull");
        router.push('/homepage/login');
      } else if (response.status === 401) {
        alert("Unauthorized request!");
        // window.location.reload();
      } else if (response.status === 406) {
        alert("The two password fields must be the same!");
        // window.location.reload();
      } else {
        alert(
          "An error occurred while processing your request! Please try Again"
        );
        // window.location.reload();
      }
    });
  };


  return (
    <div className=" flex items-center justify-center p-20 border h-screen">
      <div className="w-1/3 border h-full rounded-l-xl overflow-hidden hidden relative md:flex items-center justify-center">
        <Image
          src={Password_hero}
          alt="baobab tree"
          className="h-full object-cover z-10 absolute"
        />
        <h1
          className="z-20 text-white font-bold text-2xl p-6 text-center"
          style={{ backdropFilter: "blur(5px)" }}
        >
          Shaping Africa's future, one solution at a time.
        </h1>
      </div>
      <div className="relative md:w-1/3 w-full h-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-16 top-6">
          <Link href={"/"}>
            <Image src={Baobab_logo} alt="baobab logo" />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full h-full border border-l-teal-700 md:border-l-slate-50 border-r-teal-700 border-y-teal-700 p-4 py-8 rounded-l-xl md:rounded-l-none rounded-r-xl justify-center"
        >
          <div className="pb-10 self-center">
            <p className="font-semibold text-xl mb-4">Set a new password</p>
            <p>Enter a new password below</p>
          </div>

          <div className="relative">
            <span class="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
              <MdToken />
            </span>
            <input
              type="password"
              name="token"
              id="token"
              onChange={handleChange}
              class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              value={values.token}
              required
            />
            <label
              htmlFor="token"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Token
            </label>
          </div>

          <div className="relative">
            <span class="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
              <TbPasswordFingerprint />
            </span>
            <input
              type="password"
              name="new_password"
              id="new_password"
              onChange={handleChange}
              class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              value={values.new_password}
              required
            />
            <label
              htmlFor="new_password"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              New Password
            </label>
          </div>

          <div className="relative">
            <span class="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
              <PiPasswordBold  />
            </span>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              onChange={handleChange}
              class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              value={values.confirm_password}
              required
            />
            <label
              htmlFor="new_password"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Confirm New Password
            </label>
          </div>

          <button
            type="submit"
            className="rounded py-1 bg-teal-600 hover:bg-teal-500 transition-colors text-white"
          >
            Submit
          </button>
          <div className="border-b w-full"></div>
          <p className="self-center">
            Already a member?{" "}
            <Link href="./login" className="border-b-2 border-amber-400">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Password_reset;
