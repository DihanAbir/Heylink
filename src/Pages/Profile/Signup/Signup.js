import { TextField } from "@mui/material";
import axios from "axios";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextAPI/AuthProvider/AuthProvider";
import Navber from "../../Shared/Navber/Navber";

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const { signupWithGoogle, signupWithFacebook } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'


  const handleSignupGoogle = () => {
    signupWithGoogle(googleProvider)
      .then(result => {
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error))
  }

  const handleSignupFacebook = () => {
    signupWithFacebook(facebookProvider)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  const handleSignup = (data) => {
    axios.post(`${process.env.REACT_APP_API_KEY}/app/v1/user/signup`, data)
      .then((res) => { console.log(res) });
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
              />
              {errors.email && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {errors.email.message}
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
              />
              {errors.username && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {errors.username.message}
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
              />
              {errors.password && (
                <div className="bg-red-200 h-6 w-full flex justify-end items-center">
                  <p className="text-gray-900 text-sm py-3 px-2">
                    {errors.password.message}
                  </p>
                </div>
              )}
            </div>

            <div className="h-12 flex justify-center items-center bg-[#239ae7] text-white rounded-[50px] my-4">
              <button className="font-bold" type="submit">
                Sign Up
              </button>
            </div>
            <div>
              <p className="text-center text-sm text-gray-600">
                Or sign up with Google or Facebook
              </p>
            </div>
          </form>
          {/* ---------signup form end--------- */}

          <div onClick={() => handleSignupGoogle()} className="mt-4 cursor-pointer">
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
          </div>

          <div onClick={() => handleSignupFacebook()} className="mt-4 cursor-pointer">
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
          </div>
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
