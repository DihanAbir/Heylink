import { TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallLoader from "../../../components/loaders/SmallLoader";
import { AuthContext } from "../../../ContextAPI/AuthProvider/AuthProvider";
import Navber from "../../Shared/Navber/Navber";

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  const [isLoasding, setIsLoading] = useState(false)
  const [emailResult, setEmailResult] = useState("")
  const [usernameResult, setUsernameResult] = useState("")
  const [passwordResult, setPasswordResult] = useState("")

  const { setUserData } = useContext(AuthContext)

  const refetchNav = (token) => {
    fetch(`http://localhost:8000/app/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data?.data));
  }


  const handleSignupReady = (data) => {
    setIsLoading(true)
    axios.post(`http://localhost:8000/app/v2/user/signup`, data)
      .then((res) => {

        console.log(res.data);
        if (res?.data?.message?.emailMessage) {
          setEmailResult(res?.data?.message?.emailMessage)
          setIsLoading(false)
        }
        if (res?.data?.message?.usernameMessage) {
          setUsernameResult(res?.data?.message?.usernameMessage)
          setIsLoading(false)
        }

        if (res?.data?.data?.token) {
          localStorage.setItem("HeyLinkToken", res?.data?.data?.token);
          refetchNav(res?.data?.data?.token)
          setIsLoading(false)

          setTimeout(() => {
            const getToken = localStorage.getItem("HeyLinkToken");
            getToken && toast.success('User Login Successfully')

            getToken && navigate(from, { replace: true });

          }, 1000)
        }
      });
  }


  // handle signup
  const handleSignup = (data) => {

    if (data?.password.length < 6) {
      return setPasswordResult("password is too short"); // password is too short
    }
    if (data?.password.length > 12) {
      return setPasswordResult("password is too long"); // password is too long
    }
    if (!/[A-Z]/.test(data?.password)) {
      return setPasswordResult("password does not contain at least one capital letter"); // password does not contain at least one capital letter
    }
    if (!/[a-z]/.test(data?.password)) {
      return setPasswordResult("password does not contain at least one small letter"); // password does not contain at least one small letter
    }

    else {
      handleSignupReady(data)
    }
  };

  return (
    <section className="bg-[#393AA7] min-h-screen pb-6">
      <Navber />
      <div className="px-4">
        <div className="bg-white rounded-2xl md:w-[500px] mx-auto p-6">
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            Get started for free
          </h1>

          {/* ---------signup form start--------- */}
          <form onSubmit={handleSubmit(handleSignup)} className="">
            <div className="my-4">
              <TextField
                {...register("email", { required: "Email is required" })}
                className="w-full"
                id="email"
                label="Email Address"
                variant="standard"
                onChange={(e) => setEmailResult("")}
              />
              {errors.email && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {errors.email.message}
                  </p>
                </div>
              )}
              {emailResult && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {emailResult}
                  </p>
                </div>
              )}
            </div>

            <div className="my-4">
              <TextField
                {...register("username", { required: "username is required" })}
                className="w-full"
                id="username"
                label="username"
                variant="standard"
                onChange={(e) => setUsernameResult("")}
              />
              {errors.username && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {errors.username.message}
                  </p>
                </div>
              )}
              {usernameResult && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {usernameResult}
                  </p>
                </div>
              )}
            </div>

            <div className="my-4">
              <TextField
                {...register("password", { required: "password is required" })}
                className="w-full"
                id="password"
                label="password"
                variant="standard"
                onChange={(e) => setPasswordResult("")}
              />
              {errors.password && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {errors.password.message}
                  </p>
                </div>
              )}
              {passwordResult && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {passwordResult}
                  </p>
                </div>
              )}
            </div>

            <button type="submit" className="h-12 w-full flex justify-center items-center bg-[#239ae7] hover:bg-blue-600 duration-150 text-white rounded-[50px] my-4">
              <h1 className="font-bold">
                {!isLoasding ? "Sign Up" : <SmallLoader />}
              </h1>
            </button>
            {/* <div>
              <p className="text-center text-sm text-gray-600">
                Or sign up with Google or Facebook
              </p>
            </div> */}
          </form>
          {/* ---------signup form end--------- */}

          {/* <div className="mt-4 cursor-pointer">
            <div className="flex justify-center items-center gap-3 py-3 px-4 shadow shadow-gray-400 rounded-[50px]">
              <img
                className="w-6"
                src="https://cdn-f.heylink.me/static/media/ic_google.f9a3cace.svg"
                alt=""
              />
              <h1 className="flex items-center gap-2">
                <span>Signup With</span>
                <span className="font-semibold text-gray-600">Google</span>
              </h1>
            </div>
          </div> */}

          {/* <div className="mt-4 cursor-pointer">
            <div className="flex justify-center items-center gap-3 py-3 px-4 shadow shadow-gray-400 rounded-[50px]">
              <img
                className="w-6"
                src="https://cdn-f.heylink.me/static/media/ic_facebook.9b9eb9fd.svg"
                alt=""
              />
              <h1 className="flex items-center gap-2">
                <span>Signup With</span>
                <span className="font-semibold text-gray-600">Facebook</span>
              </h1>
            </div>
          </div> */}
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline text-blue-600">
                Log In
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
