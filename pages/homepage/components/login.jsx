import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { signIn, getSession, getProviders, useSession } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Baobab_logo from "../../../public/logo.png";
import Tech2 from "../../../public/assets/login_hero.webp";

import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const router = useRouter()
  const [isRattling, setIsRattling] = useState(false);

  const [loginError, setLoginError] = useState(false);


  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const notify = () => toast('Here is your toast.');

  const formik = useFormik({
    initialValues: {
      email: formData.username,
      password: formData.password,
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Please add a valid Email"),
      password: Yup.string().required("Please add a password"),
    }),


    onSubmit: async (data) => {
      toast.loading('Logging in...', {duration: 2000});

      const loginData = {
        callbackUrl: "/virtual_tech_village",
        email: data.username,
        password: data.password,
        redirect: false,
      }
     
     const login = await signIn("credentials", loginData)
     console.log(login)
     if(login.ok) {
      toast.success('Login successful! Redirecting...')
      router.push(login.url)
     } else {
      toast.error('Login failed. Please try again!')
     }
    },

    
  });


  return (
    <div className="flex items-center justify-center h-screen relative">
      {loginError && (
        <div
          role="alert"
          className={`rounded border-s-4 border-red-500 bg-red-50 p-4 fixed bottom-10 sm:left-10 z-50 max-w-[450px] transform transition-transform duration-300 delay-150 ${
            isRattling ? "animate-rattle" : ""
          } ${loginError ? "translate-x-0" : "-translate-x-full"}`}
        >
          <strong className="block font-medium text-red-800">
            Something went wrong
          </strong>

          <p className="mt-2 text-sm text-red-700">
            Email or password incorrect
          </p>
        </div>
      )}

      <div className="w-1/2 h-full rounded-l-xl overflow-hidden hidden relative md:flex items-center justify-center">
        <Image
          src={Tech2}
          alt="Woman smiling"
          className="h-full object-cover z-10 absolute"
        />
      </div>

      <div className="w-full sm:w-1/2 h-full relative md:px-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-16 top-6 z-50">
          <Link href={"/"}>
            <Image src={Baobab_logo} alt="Baobabpad logo" />
          </Link>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 w-full h-full  p-4 py-8 rounded-l-xl md:rounded-l-none rounded-r-xl justify-center relative"
        >
          <h1 className="text-center text-2xl pb-4">Login</h1>

          <div className="relative">
            <span className={`absolute start-0 ${formik.errors.username && formik.touched.username ? "bottom-8" : "bottom-3"} text-gray-500 dark:text-gray-400`}>
              <MdEmail />
            </span>
            <input
              type="text"
              id="username"
              className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              // onChange={onChange}
              onChange={formik.handleChange}
              // value={username}
              value={formik.values.username}
              
              name="username"
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
            {formik.errors.username && formik.touched.username ? (
              <div className=" text-sm text-red-400">{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="relative">
          <span className={`absolute start-0 ${formik.errors.password && formik.touched.password ? "bottom-8" : "bottom-3"} text-gray-500 dark:text-gray-400`}>
              <TbPasswordFingerprint />
            </span>
            <input
              type="password"
              id="password"
              className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="password"
              // onChange={onChange}
              onChange={formik.handleChange}
              // value={password}
              value={formik.values.password}
              
            />
            <label
              htmlFor="floating-phone-number"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
            {formik.errors.password && formik.touched.password ? (
              <div className=" text-sm text-red-400">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit" className="rounded py-1 bg-teal-600 hover:bg-teal-500 transition-colors text-white">
            Login
          </button>
          <div className="border-b w-full"></div>
          <p className="self-center">
            <Link
              href="./forgot_password"
              className="border-b-2 border-amber-400"
            >
              Forgot your password?
            </Link>
          </p>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default Login;