import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import SettingsLayout from "./layout";
import {
  BsCameraFill,
  BsFillBuildingFill,
  BsGlobe,
  BsPenFill,
} from "react-icons/bs";
import Deca from "/public/assets/deca-logo.png";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
// import Form_success from '@/pages/homepage/components/alerts/form_success';
// import Image_success from "@/";
import Image_success from "../../../pages/homepage/components/alerts/image_success"

const Settings = () => {
  const [formImage, setFormImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const [companyData, setCompanyData] = useState([]);

  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const { current_password, new_password, confirm_password } = formData;

  // ================== success alert

  const [alert, setAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);

  const handleAlert = () => {
    setAlert(true);
  };

  const handPasswordleAlert = () => {
    setPasswordAlert(true);
  };
  const alertDismiss = () => {
    setAlert(false);
    router.reload();
  };

  const PasswordAlertDismiss = () => {
    setPasswordAlert(false);
  };

  function checkToken() {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("../homepage/login");
    }
  }

  const handleImageChange = async (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);

      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const id = decodedToken.user_id;

      const newFormImage = new FormData();
      newFormImage.append("image", event.target.files[0]);

      setFormImage(newFormImage);
    }
  };

  const handleImageFile = async (e) => {
    e.preventDefault();

    // Use current form image state
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    try {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/company_image/${id}/`,
        // `http://127.0.0.1:8000/api/company_image/${id}/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formImage,
        }
      );
      if (response.ok) {
        // alert("Image changed successfully!")
        // window.location.reload();

        handleAlert();
      }
    } catch (error) {
      alert("Image change was not successful!");
      console.error("There was an error:", error);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const response = await fetch(
      `https://baobabpad-334a8864da0e.herokuapp.com/api/change_password/${id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          current_password: formData.current_password,
          new_password: formData.new_password,
          confirm_password: formData.confirm_password,
        }),
      }
    );
    if (response.ok) {
      // alert("password change was successful!")
      handPasswordleAlert();
    } else {
      alert("Please ensure that the two password fields match!");
    }
  };

  useEffect(() => {
    checkToken();

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const fetchData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/company_data/${id}/`
      );
      const data = await response.json();
      setCompanyData(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <SettingsLayout title="My Account" description="Manage your Account">
        <div className="w-full relative border-b flex flex-col sm:flex-row gap-5 py-5 pb-20 sm:pb-5">
          {alert && (
            <Image_success
              alertDismiss={alertDismiss}
              message="Image changed successfully"
            />
          )}
          {passwordAlert && (
            <Image_success
              alertDismiss={PasswordAlertDismiss}
              message="Password changed successfully"
            />
          )}

          {companyData.map(({ profile_image }) => (
            <form onSubmit={handleImageFile}>
              <div className="w-40 h-40 rounded relative overflow-hidden">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                ) : (
                  <Image
                    src={`${profile_image}`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                )}
                <div className="absolute text-white cursor-pointer bottom-0 right-0 h-7 w-7 rounded-tl flex justify-center items-center bg-gray-800">
                  <label
                    className="w-full h-full flex justify-center items-center cursor-pointer"
                    htmlFor="imageUpload"
                  >
                    <BsCameraFill />
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>{" "}
              <button
                type="submit"
                className="p-1 rounded border text-white bg-teal-600 max-w-[160px] w-full mt-2 hover:bg-teal-500 transition-colors"
              >
                Set image
              </button>
            </form>
          ))}

          {companyData.map(({ company_name, company_email }) => (
            <div className="flex flex-col gap-5">
              <span className="text-lg gap-2 flex items-center font-bold text-gray-800">
                <BsFillBuildingFill />
                <h1 className="text-xl md:text-3xl">{company_name}</h1>
              </span>
              <span className="flex gap-2 text-gray-600 items-center">
                <BsGlobe />
                <a href="#" className="text-md">
                  {company_email}
                </a>
              </span>
            </div>
          ))}

          <div className="absolute right-2 bottom-5">
            <span className="px-6 py-2 text-gray-200 rounded bg-teal-600 flex items-center">
              <BsPenFill />
            </span>
          </div>
        </div>

        <form className="w-full flex flex-col py-5" onSubmit={handleSubmit}>
          <h1 className="text-green-600">Password</h1>

          <div className="w-full flex flex-col mt-5 pl-8 sm:pl-20 gap-1">
            <label className="text-sm text-gray-600 font-bold">
              Current Password
            </label>
            <input
              className="outline-none border rounded px-2 text-gray-700 w-full h-8 text-sm"
              name="current_password"
              type="password"
              onChange={onChange}
              value={current_password}
              required
            />
          </div>
          <div className="w-full flex flex-col pl-8 sm:pl-20 gap-1">
            <label className="text-sm text-gray-600 font-bold">
              New Password
            </label>
            <input
              className="outline-none border rounded px-2 text-gray-700 w-full h-8 text-sm"
              name="new_password"
              type="password"
              onChange={onChange}
              value={new_password}
              required
            />
          </div>
          <div className="w-full flex flex-col pl-8 sm:pl-20 gap-1">
            <label className="text-sm text-gray-600 font-bold">
              Confirm Password
            </label>
            <input
              className="outline-none border rounded px-2 text-gray-700 w-full h-8 text-sm"
              name="confirm_password"
              type="password"
              onChange={onChange}
              value={confirm_password}
              required
            />
          </div>
          <div className="w-full flex justify-end mt-5">
            <button className="px-5 py-2 text-white rounded bg-teal-600 hover:bg-teal-500 transition-colors">
              Submit
            </button>
          </div>
        </form>
      </SettingsLayout>
    </>
  );
};
export default Settings;
