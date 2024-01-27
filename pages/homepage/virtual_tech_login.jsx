import React, { useState, useEffect } from "react";
import Layout from "../layout";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { API_URL } from "@/config";


const Virtual_login = () => {
 
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Before token fetch");

    // const response = await fetch("http://127.0.0.1:8000/api/token/", {
    const response = await fetch(
      `https://${API_URL}/api/token/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      }
    );

    console.log("After token fetch");

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.access);

      const token = data.access;
      const decodedToken = jwt_decode(token);
      const id = decodedToken.user_id;

      // const response = await fetch(`http://127.0.0.1:8000/api/user_type/${id}/`, {
      const response = await fetch(
        `https://${API_URL}/api/user_type/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("setting response fetch");

        const responseData = await response.text();

         if (responseData === `"company profile"`) {
          
          router.push("/dashboard");
        }
         
        if (responseData === `"village profile"`) {
          
          router.push("/virtual_tech_village");
        }
      } else {
        // Handle error cases (e.g., network errors)
        handleLoginError();
      }
    }
  };

  return (
    <div className="bg-gray-900">
      <Layout>
        <div className="lg:pt-32">
          <div class="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 bg-slate-50">
            <div class="mx-auto max-w-lg">
              <h1 class="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                Get started today
              </h1>

             

              <form
                action=""
                class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                onSubmit={onSubmit}
              >
                <p class="text-center text-lg font-medium">
                  Sign in to your account
                </p>

                <div>
                  <label for="email" class="sr-only">
                    Email
                  </label>

                  <div class="relative">
                    <input
                      type="email"
                      name="username"
                      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                      onChange={onChange}
                      value={username}
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label for="password" class="sr-only">
                    Password
                  </label>

                  <div class="relative">
                    <input
                      type="password"
                      name="password"
                      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      onChange={onChange}
                      value={password}
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  class="block w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>

                <p class="text-center text-sm text-gray-500">
                  No account?
                  <Link href={"/homepage/tech_signup"} class="underline" >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Virtual_login;
