import React, { useState } from "react";
import Link from "next/link";
import Layout from "../../layout";

import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [errorSignup, setErrorSignup] = useState(false);
  
  const handleVerified = () => {
    setVerified(true);
  };

  const handleError = () => {
    setErrorSignup(true);

    setTimeout(() => {
      setErrorSignup(false);
    }, 4000);
  };

  const handleReroute = () => {
    router.push("/homepage/login");
  };

  const rerouteTimer = () => {
    setTimeout(() => {
      handleReroute();
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://baobabpad-334a8864da0e.herokuapp.com/village/village_signup/",
      // "http://127.0.0.1:8000/village/village_signup/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      }
    );

    if (response.ok) {
      handleVerified();
      rerouteTimer();
    } else if (response.status === 403) {
      handleError();
    } else {
      alert("Unauthorized Request!");
    }
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-10 gap-4 relative bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white">
        <div
          role="alert"
          className={`rounded-xl border border-gray-100 z-50 bg-white p-4 fixed bottom-10 sm:left-10 transform transition-transform ${
            verified ? " translate-x-0" : "-translate-x-[500px]"
          }`}
        >
          <div className="flex items-start gap-4">
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-gray-900">
                {" "}
                Verification Successful{" "}
              </strong>

              <p className="mt-1 text-sm text-gray-700">
                Your account has been verified.
              </p>
            </div>

            <button
              className="text-gray-500 transition hover:text-gray-600"
              onClick={handleReroute}
            >
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          role="alert"
          className={`rounded border-s-4 border-red-500 bg-red-50 p-4 z-50 fixed bottom-20 sm:left-10 transform transition-transform ease-in-out duration-300  ${
            errorSignup ? "translate-x-0" : "-translate-x-[500px]"
          }`}
        >
          <strong className="block font-medium text-red-800">
            Something went wrong
          </strong>
          <p className="mt-2 text-sm text-red-700">
            Please make sure you have typed the correct OTP
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center text-lg">
          <div className="max-w-[650px] lg:pt-40">
            <p>
              To complete your registration, please enter the One-Time Password
              (OTP) you received in your email. This OTP ensures the security of
              your account and helps us verify your identity. Once you've
              entered the correct OTP, you'll gain access to your account and
              all its features. Please enter the OTP in the field below:
            </p>
          </div>

          <form
            action=""
            className="flex flex-col gap-2 w-full max-w-[650px]"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col text-black">
              <input
                type="text"
                id="OTP"
                name="OTP"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors"
              // disabled={!formValues}
            >
              Verify
            </button>
          </form>

          <div className="w-full border border-teal-700 max-w-[650px]"></div>

          <div className="self-center text-white">
            <p>
              Already have an account?{" "}
              <Link href="./login" className="border-b-2 border-b-amber-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
