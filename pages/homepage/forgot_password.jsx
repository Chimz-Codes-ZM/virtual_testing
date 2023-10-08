import React, { useState } from "react";
import Image from "next/image";
import Baobab_logo from "../../public/logo.png";
import Password_hero from "../../public/assets/password_hero.jpg";
import Link from "next/link";

function index() {
  const [values, setValues] = useState({
    email: "",
  });

  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocusedInput("");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch("http://127.0.0.1:8000/api/forgot_password/", {
      const response = await fetch("https://baobabpad-334a8864da0e.herokuapp.com/api/forgot_password/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(() => {
        alert('Check your email for Password reset instructions!')
        window.location.reload();
      });
  };

  const [focusedInput, setFocusedInput] = useState("");

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
          <div className="pb-10">
            <p className="font-semibold text-xl mb-4">Forgot your password?</p>
            <p>
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </p>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full border-b py-1 transition-colors focus:border-b-2 focus:border-teal-700 focus:outline-none peer"
            />
            <label
              htmlFor="email"
              className={`absolute left-0 cursor-text ${
                values.email || focusedInput === "email"
                  ? "text-teal-700 text-xs -top-3"
                  : "-top-0 text-sm"
              } transition-all duration-300`}
            >
              Email
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
}

export default index;
