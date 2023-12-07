import React, { useState, useEffect } from "react";
import Layout from "../layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { initialValidationErrors } from "../data";
import logo from "../../public/logo.png";

const tech_signup = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    marketing_opt_in: "false",
    accountType: "Company",
  });

  const [companyValues, setCompanyValues] = useState({
    company_name: "",
    email: "",
    password: "",
    confirm_password: "",
    marketing_opt_in: "false",
    accountType: "Company",
  });

  const [internValues, setInternValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    marketing_opt_in: "false",
    accountType: "Talent",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? "true" : "false") : value;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: newValue,
    }));

    console.log(values);
  };

  const handleCompanyChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? (checked ? "true" : "false") : value;

    setCompanyValues((previousValues) => ({
      ...previousValues,
      [name]: newValue,
    }));
    console.log(companyValues);
  };

  const handleInternChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? (checked ? "true" : "false") : value;

    setInternValues((previousValues) => ({
      ...previousValues,
      [name]: newValue,
    }));
    console.log(internValues);
  };

  // Form Validatiion section

  const [validationErrors, setValidationErrors] = useState(
    initialValidationErrors
  );

  const initialFormState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    marketing_opt_in: false,
    accountType: "",
  };

  const validateForm = () => {
    const errors = { ...initialValidationErrors };

    if (!values.first_name) {
      errors.first_name = "First name is required";
    } else if (!values.last_name) {
      errors.last_name = "Last name is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    } else if (!values.password) {
      errors.password = "Password is required";
    } else if (!values.confirm_password) {
      errors.confirm_password = "Confirm Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "Confirm passowrd must match password";
    }

    return Object.values(errors).every((error) => error === "");
  };

  useEffect(() => {
    const errors = validateForm();
    setValidationErrors(errors);
  }, [values]);

  const [buttonClicked, setButtonClicked] = useState(false);

  // END of VALIDATION ERROR CHECKS

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
    if (!isFormValid) {
      setButtonClicked(true);
      return;
    }

    const { password, confirm_password } = values;

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    }

    const response = await fetch(
      // "http://127.0.0.1:8000/village/village_signup/",
      "https://baobabpad-334a8864da0e.herokuapp.com/village/village_signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    ).then((response) => {
      if (response.ok) {
        setValues({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
          marketing_opt_in: "false",
        });
        alert("sign up successful!");
        router.push("/homepage/tech_village_confirmation");
      } else if (response.status === 403) {
        alert("please make sure that the two passwords match!");
      } else if (response.status === 409) {
        alert("A user with that email already exists!");
      }
    });
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      // "http://127.0.0.1:8000/village/village_signup/",
      "https://baobabpad-334a8864da0e.herokuapp.com/village/village_signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyValues),
      }
    ).then((response) => {
      if (response.ok) {
        setCompanyValues({
          company_name: "",
          email: "",
          password: "",
          confirm_password: "",
          marketing_opt_in: "false",
          accountType: "Company",
        });
        alert("sign up successful!");
        router.push("/homepage/tech_village_confirmation");
      } else if (response.status === 403) {
        alert("please make sure that the two passwords match!");
      } else if (response.status === 409) {
        alert("A user with that email already exists!");
      }
    });
    console.log(companyValues);
  };

  return (
    <div className="bg-gray-900">
      <Layout>
        <div className="lg:pt-32">
          <section className="bg-white">
            <div className="lg:grid lg:grid-cols-8  ">
              <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-8 lg:px-16 lg:py-12 xl:col-span-8 ">
                <div className="max-w-2xl lg:max-w-3xl">
                  <div className="relative -mt-16 block lg:hidden">
                    <a
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                      href="/"
                    >
                      <span className="sr-only">Home</span>
                      <Image
                        src={logo}
                        alt="Baobabpad logo"
                        width={60}
                        height={60}
                      />
                    </a>

                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                      Welcome to Baobabpad
                    </h1>

                    <p className="mt-4 leading-relaxed text-gray-500">
                      Elevating African Technology Talent, Virtually and
                      Globally...
                    </p>
                  </div>

                  <div className="col-span-4 lg:col-span-2 text-gray-700">
                    <label
                      for="accountType"
                      name="radioGroup"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Account type
                    </label>
                    <label className="inline-flex mr-4 items-center">
                      <input
                        type="radio"
                        className="form-radio text-green-500 h-4 w-4"
                        name="accountType"
                        value="Company"
                        checked={values.accountType === "Company"}
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm">Company</span>
                    </label>

                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        className="form-radio text-green-500 h-4 w-4"
                        name="accountType"
                        value="Talent"
                        checked={values.accountType === "Talent"}
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm">Talent</span>
                    </label>

                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-green-500 h-4 w-4"
                        name="accountType"
                        value="Intern"
                        checked={values.accountType === "Intern"}
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm">Intern</span>
                    </label>
                  </div>

                  {values.accountType === "Company" && (
                    <form
                      onSubmit={handleCompanySubmit}
                      className="mt-8 grid grid-cols-6 gap-6"
                    >
                      <div className="col-span-6 ">
                        <label
                          htmlFor="FirstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company Name
                        </label>

                        <input
                          type="text"
                          id="CompanyName"
                          name="company_name"
                          onChange={handleCompanyChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="Email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="Company_Email"
                          name="email"
                          onChange={handleCompanyChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                        />
                      </div>

                      <div className="col-span-6">
                        <div>
                          <label
                            htmlFor="Password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>

                          <input
                            type="password"
                            id="Company_Password"
                            name="password"
                            onChange={handleCompanyChange}
                            className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                          />
                        </div>

                        <div className="mt-4">
                        <label
                          htmlFor="PasswordConfirmation"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password Confirmation
                        </label>

                        <input
                          type="password"
                          id="CompanyPasswordConfirmation"
                          name="confirm_password"
                          onChange={handleCompanyChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                        />
                      </div>
                      </div>

                      

                      <div className="col-span-6">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                          <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_opt_in"
                            checked={companyValues.marketing_opt_in === "true"}
                            onChange={handleCompanyChange}
                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                          />

                          <span className="text-sm text-gray-700">
                            I want to receive emails about events, product
                            updates and company announcements.
                          </span>
                        </label>
                      </div>

                      <div className="col-span-6">
                        <p className="text-sm text-gray-500">
                          By creating an account, you agree to our
                          <a href="/homepage/subscription_terms" target="_blank" className="text-gray-700 underline mx-1">
                            terms and conditions
                          </a>
                          and
                          <a href="/homepage/privacy" target="_blank" className="text-gray-700 underline mx-1">
                            privacy policy
                          </a>
                          .
                        </p>
                      </div>

                      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                          Create an account
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          Already have an account?
                          <Link href="/homepage/login" className="text-gray-700 underline mx-1">
                            Log in
                          </Link>
                          .
                        </p>
                      </div>
                    </form>
                  )}

                  {values.accountType === "Talent" && (
                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 grid grid-cols-4 gap-5"
                    >
                      <div className="col-span-4">
                        <label
                          for="FirstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>

                        <input
                          type="text"
                          id="FirstName"
                          name="first_name"
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                          // required={}
                        />

                        {validationErrors?.first_name && (
                          <p className="text-red-500 text-sm">
                            {validationErrors.first_name}
                          </p>
                        )}
                      </div>

                      <div className="col-span-4 ">
                        <label
                          for="LastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>

                        <input
                          type="text"
                          id="LastName"
                          name="last_name"
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                        />

                        {validationErrors?.last_name && (
                          <p className="text-red-500 text-sm">
                            {validationErrors.last_name}
                          </p>
                        )}
                      </div>

                      <div className="col-span-4">
                        <label
                          for="Email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="Email"
                          name="email"
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                        />

                        {validationErrors?.email && (
                          <p className="text-red-500 text-sm">
                            {validationErrors.email}
                          </p>
                        )}
                      </div>

                      <div className="col-span-4">
                        <div className="flex flex-col">
                          <label
                            for="Password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="Password"
                            name="password"
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="PasswordConfirmation"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password Confirmation
                          </label>

                          <input
                            type="password"
                            id="PasswordConfirmation"
                            name="confirm_password"
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="col-span-4">
                        <label for="MarketingAccept" className="flex gap-4">
                          <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_opt_in"
                            checked={values.marketing_opt_in === "true"}
                            onChange={handleChange}
                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                          />

                          <span className="text-sm text-gray-700">
                            I want to receive emails about events, product
                            updates and company announcements.
                          </span>
                        </label>
                      </div>

                      <div className="col-span-4">
                        <p className="text-sm text-gray-500">
                          By creating an account, you agree to our{" "}
                          <span className="mx-2">
                            <a href="/homepage/talent_terms" target="_blank" className="text-gray-700 underline">
                              terms and conditions
                            </a>{" "}
                          </span>
                          and{" "}
                          <span className="mx-2">
                            {" "}
                            <a href="/homepage/privacy" target="_blank" className="text-gray-700 underline">
                              privacy policy
                            </a>
                          </span>
                          .
                        </p>
                      </div>

                      <div className="col-span-4 sm:flex sm:items-center sm:gap-4">
                        <button
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                          disabled={!validateForm() || buttonClicked}
                        >
                          Create an account
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          Already have an account?
                          <Link
                            href="/homepage/login"
                            className="text-gray-700 underline mx-1"
                          >
                            Log in
                          </Link>
                          .
                        </p>
                      </div>
                    </form>
                  )}
                  {values.accountType === "Intern" && (
                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 grid grid-cols-4 gap-5"
                    >
                      <div className="col-span-4">
                        <label
                          for="FirstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>

                        <input
                          type="text"
                          id="FirstName"
                          name="first_name"
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                          // required={}
                        />

                        {validationErrors?.first_name && (
                          <p className="text-red-500 text-sm">
                            {validationErrors.first_name}
                          </p>
                        )}
                      </div>

                      <div className="col-span-4 ">
                        <label
                          for="LastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>

                        <input
                          type="text"
                          id="LastName"
                          name="last_name"
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                        />

                        {validationErrors?.last_name && (
                          <p className="text-red-500 text-sm">
                            {validationErrors.last_name}
                          </p>
                        )}
                      </div>

                      <div className="col-span-4">
                        <label
                          for="Email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="Email"
                          name="email"
                          onChange={handleChange}
                          className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-1"
                        />

                        {validationErrors?.email && (
                          <p className="text-red-500 text-sm">
                            {validationErrors.email}
                          </p>
                        )}
                      </div>

                      <div className="col-span-4 flex flex-col">
                        <div className="flex flex-col">
                          <label
                            for="Password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>

                          <input
                            type="password"
                            id="Password"
                            name="password"
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="PasswordConfirmation"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password Confirmation
                          </label>

                          <input
                            type="password"
                            id="PasswordConfirmation"
                            name="confirm_password"
                            onChange={handleChange}
                            className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="col-span-4">
                        <label for="MarketingAccept" className="flex gap-4">
                          <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_opt_in"
                            checked={values.marketing_opt_in === "true"}
                            onChange={handleChange}
                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                          />

                          <span className="text-sm text-gray-700">
                            I want to receive emails about events, product
                            updates and company announcements.
                          </span>
                        </label>
                      </div>

                      <div className="col-span-4">
                        <p className="text-sm text-gray-500">
                          By creating an account, you agree to our{" "}
                          <span className="mx-1">
                            <a href="/homepage/talent_terms" target="_blank" className="text-gray-700 underline">
                              terms and conditions
                            </a>{" "}
                          </span>
                          and{" "}
                          <span className="mx-1">
                            {" "}
                            <a href="/homepage/privacy" target="_blank" className="text-gray-700 underline">
                              privacy policy
                            </a>
                          </span>
                          .
                        </p>
                      </div>

                      <div className="col-span-4 sm:flex sm:items-center sm:gap-4">
                        <button
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                          disabled={!validateForm() || buttonClicked}
                        >
                          Create an account
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          Already have an account? <span className="mx-1"><Link
                            href="/homepage/login"
                            className="text-gray-700 underline"
                          >
                            Log in
                          </Link></span>
                          
                          .
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </main>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default tech_signup;
