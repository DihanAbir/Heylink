import { TextField } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallLoader from "../../../components/loaders/SmallLoader";
import { AuthContext } from "../../../ContextAPI/AuthProvider/AuthProvider";
import Navber from "../../Shared/Navber/Navber";
import { GoogleAuthProvider } from "firebase/auth";
import UsernameModal from "../../../components/Modals/UserManagementModals/UsernameModal";
import Loader from "../../../components/loaders/Loader";

const Login = () => {
  const { userRefetch, userData, setUserData, signupWithGoogle } = useContext(AuthContext)
  const token = localStorage.getItem("ShowmoreinfoToken");
  const navigate = useNavigate()
  const location = useLocation()
  const googleProvider = new GoogleAuthProvider()
  const from = location.state?.from?.pathname || '/dashboard'

  const [isLoasding, setIsLoading] = useState(false)
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)
  const [emailResult, setEmailResult] = useState("")
  const [passwordResult, setPasswordResult] = useState("")

  const [socialData, setSocialData] = useState(null)
  const [usernameModal, setUsernameModal] = useState(false)


  const { register, handleSubmit, formState: { errors }, } = useForm();

  const refetchNav = (token) => {
    fetch(`https://3twn4n.xn--b5bp.com/app/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data?.data));
  }



  // handle save user by social user
  const handleSaveUser = (newUser) => {
    setIsLoadingGoogle(true)
    fetch(`https://3twn4n.xn--b5bp.com/app/v2/user/signup/withsocial`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data?.message?.usernameMessage) {
          setUsernameModal(true)
          setIsLoadingGoogle(false)
        }
        if (data?.token) {
          localStorage.setItem("ShowmoreinfoToken", data.token);
          userRefetch()
          setTimeout(() => {
            const getToken = localStorage.getItem("ShowmoreinfoToken")
            getToken && toast.success('User Login Successfully')

            getToken && navigate(from, { replace: true });

          }, 1000)
          userData && toast.success('User Login Successfully')
        }
      })
  }


  const handleLoginWithGoogle = () => {
    signupWithGoogle(googleProvider)
      .then(result => {
        const user = result.user
        const newUser = {
          email: user.email,
          profiletitle: user.displayName,
          username: user.displayName.toLowerCase().replaceAll(" ", "").replace(".", ""),
          image: user.photoURL,
          createWith: "google",
          verified: "true"
        }
        const filteredNewUser = Object.fromEntries(
          Object.entries(newUser).filter(([key, value]) => value)
        );
        if (filteredNewUser) {
          handleSaveUser(filteredNewUser);
          setSocialData(filteredNewUser)
        }
      })
      .catch(err => {
        // console.log(err)
      }
      )
  }



  const handleLogin = (data) => {
    setIsLoading(true)
    axios.post(`https://3twn4n.xn--b5bp.com/app/v2/user/login`, data, {
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
    })
      .then((res) => {

        // console.log(res);
        if (res?.data?.message?.emailMessage) {
          setEmailResult(res?.data?.message?.emailMessage)
          setIsLoading(false)
        }
        if (res?.data?.message?.passwordMessage) {
          setPasswordResult(res?.data?.message?.passwordMessage)
          setIsLoading(false)
        }

        if (res?.data?.data?.token) {
          localStorage.setItem("ShowmoreinfoToken", res?.data?.data?.token);
          refetchNav(res?.data?.data?.token)
          setIsLoading(false)

          setTimeout(() => {
            const getToken = localStorage.getItem("ShowmoreinfoToken");
            getToken && toast.success('User Login Successfully')

            getToken && navigate(from, { replace: true });

          }, 1000)
        }
      });
  };
  return (
    <section className="bg-[#393AA7] min-h-screen pb-6">
      <Navber />
      <div className="px-4">
        <div className="bg-white rounded-2xl md:w-[500px] mx-auto p-6">
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            Log in to your HeyLink.me account
          </h1>

          {/* ---------login form start--------- */}
          <form onSubmit={handleSubmit(handleLogin)} className="">
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
                {...register("password", { required: "password is required" })}
                className="w-full"
                id="password"
                label="Enter your password"
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

            {/* ---------Forget password--------- */}
            <div className="flex justify-center items-center">
              <Link
                to="/password-security"
                className="underline text-center text-gray-600 hover:text-gray-900"
              >
                Forgot Password?
              </Link>
            </div>
            {/* ---------Forget password--------- */}

            <button type="submit" className="h-12 w-full flex justify-center items-center bg-[#239ae7] hover:bg-blue-600 duration-150 text-white rounded-[50px] my-4">
              <h1 className="font-bold" >
                {!isLoasding ? "Log in" : <SmallLoader />}
              </h1>
            </button>
            {/* <div>
              <p className="text-center text-sm text-gray-600">
                Or sign up with Google or Facebook
              </p>
            </div> */}
          </form>
          {/* ---------login form end--------- */}


          <div onClick={() => handleLoginWithGoogle()} className="mt-4 cursor-pointer">
            <div className="flex justify-center items-center gap-3 py-3 px-4 shadow shadow-gray-400 rounded-[50px] hover:bg-gray-200">
              <img
                className="w-6"
                src="https://cdn-f.heylink.me/static/media/ic_google.f9a3cace.svg"
                alt=""
              />
              <div className="flex items-center gap-2">
                <span>Login With</span>
                <span className="font-semibold text-gray-600">Google</span>
              </div>

            </div>
          </div>


          {/* <div className="mt-4 cursor-pointer">
            <div className="flex justify-center items-center gap-3 py-3 px-4 shadow shadow-gray-400 rounded-[50px]">
              <img
                className="w-6"
                src="https://cdn-f.heylink.me/static/media/ic_facebook.9b9eb9fd.svg"
                alt=""
              />
              <h1 className="flex items-center gap-2">
                <span>Login With</span>
                <span className="font-semibold text-gray-600">Facebook</span>
              </h1>
            </div>
          </div> */}


          <div className="mt-6">
            <h1 className="text-sm text-gray-600 text-center">
              Don't have an account yet?{" "}
              <Link to="/signup" className="underline text-blue-600">
                Signup
              </Link>
            </h1>
          </div>
        </div>
      </div>


      {
        usernameModal && <UsernameModal closeModal={setUsernameModal} handleSaveUser={handleSaveUser} newUser={socialData} />
      }

      {isLoasding && <Loader />}
      {isLoadingGoogle && <Loader />}

    </section>
  );
};

export default Login;
