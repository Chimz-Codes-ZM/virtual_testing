import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import User_exists from "./alerts/user_exists";
import Form_success from "./alerts/form_success";

import { countries } from "../../data/index";



const Subscription = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    full_name: "",
    company_name: "",
    company_email: "",
    company_country: "",
    password: "",
    confirm_password: "",
  });

  // Password check

  const [error, setError] = useState('');

  // Success Alert
  const [alert, setAlert] = useState(false);
  const handleAlert = () => {
    setAlert(true);
  };

  const alertDismiss = () => {
    setAlert(false);
    router.push("/homepage/confirm_registration");
  };

  // User already exists
  const [userExists, setUserexists] = useState(false);
  const handleExists = () => {
    setUserexists(true);

    setTimeout(() => {
      setUserexists(false);
    }, 10000);
  };

  //  alert animation
  const [isRattling, setIsRattling] = useState(false);
  const handleRattle = () => {
    setIsRattling(true);

    setTimeout(() => {
      setIsRattling(false);
    }, 1000);
  };

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const [formValues, setFormValues] = useState(false);

  const handleCheckbox1Change = () => {
    setCheckbox1(!checkbox1);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2(!checkbox2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {password, confirm_password} = values;

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirm_password) {
      setError('Passwords do not match');
      return
    }

    const response = await fetch(
      "https://baobabpad-334a8864da0e.herokuapp.com/api/company_signup/",
      // "http://127.0.0.1:8000/api/company_signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    ).then((response) => {
      
      
      if (response.ok){
        setValues({
          full_name: "",
          company_name: "",
          company_email: "",
          company_country: "",
          password: "",
          confirm_password: "",
        });
        setCheckbox1(false);
        setCheckbox2(false);
        handleAlert();
      } else if (response.status === 409) {
        handleExists()
        handleRattle()
      } 
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    setError('');
  };

  useEffect(() => {
    if (
      values.full_name &&
      values.company_name &&
      values.company_country &&
      values.company_email &&
      values.password.length &&
      values.confirm_password &&
      checkbox1 &&
      checkbox2
    ) {
      setFormValues(true);
    } else {
      setFormValues(false);
    }
  }, [checkbox1, checkbox2, values]);

  return (
    <div className="flex flex-col p-10 gap-4 relative">
      {alert && (
        <Form_success alertDismiss={alertDismiss} message="Thank you for signing up for a paid company subscription with
        Baobabpad! We are thrilled to have your company on board and
        provide you with valuable tools and resources to enhance your
        talent acquisition and management processes. To complete your registration, please enter the One-Time Password (OTP) you received in your email on the following page."/>
      )}

{userExists && <User_exists user="Company" isRattling={isRattling} />}


      <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 text-white">
          <h1 className="font-bold text-xl pb-1 border-b border-amber-400 text-center">
            Subscribe to Baobabpad
          </h1>
          <p className="text-lg text-center">Excellence Beyond Imagination.</p>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="full_name_join" className="font-light text-white">
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            id="full_name_join"
            value={values.full_name}
            onChange={handleChange}
            className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
            required
            placeholder="Write your full name"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="company_name" className="font-light text-white">
            Company Name
          </label>
          <input
            type="text"
            name="company_name"
            id="company_name"
            value={values.company_name}
            onChange={handleChange}
            className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
            placeholder="Write your company name"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="company_email" className="font-light text-white">
            Company Email
          </label>
          <input
            type="email"
            name="company_email"
            id="company_email"
            value={values.company_email}
            onChange={handleChange}
            className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
            required
            placeholder="Write your email"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="company_country" className="font-light text-white">
            Company Country
          </label>
          <select
            name="company_country"
            id="company_country"
            value={values.company_country}
            onChange={handleChange}
            className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
          >
            {countries.map((country, index) => (
              <option key={index} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-col relative">
          <label htmlFor="password" className="font-light text-white">
            Set password
          </label>

          {error && (
                  <div className="text-red-500 absolute right-0 flex gap-1 bg-red-50 rounded p-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {error}
                  </div>
                )}
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Minimum 8 characters"
            className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
            required
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="confirm_password" className="font-light text-white">
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            onChange={handleChange}
            placeholder="Minimum 8 characters"
            className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
            required
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="checkbox1"
            id="checkbox1"
            checked={checkbox1}
            onChange={handleCheckbox1Change}
            className="mr-1"
            required
          />
          <label htmlFor="checkbox1" className="font-light text-white">
            I agree to Baobabpad's
            <Link href="/homepage/subscription_terms" target="_blank" className="pb-1 border-b border-amber-400">
              Terms & Conditions
            </Link>
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox2"
            id="checkbox2"
            checked={checkbox2}
            onChange={handleCheckbox2Change}
            className="mr-1"
            required
          />
          <label htmlFor="checkbox2" className="font-light text-white">
            I have read and understood Baobabpad's{" "}
            <Link
              href="/homepage/privacy" 
              target="_blank"
              className="pb-1 border-b border-amber-400"
            >
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors text-white"
          disabled={!formValues}
        >
          Submit
        </button>
      </form>

      <div className="w-full border border-teal-700"></div>

      <div className="self-center text-white">
        <p>
          Already have an account?{" "}
          <Link href="./login" className="border-b-2 border-b-amber-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Subscription;
