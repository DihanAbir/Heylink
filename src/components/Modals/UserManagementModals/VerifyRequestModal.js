import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextAPI/AuthProvider/AuthProvider";
import app from '../../../Firebase/Firebase.config';
import { getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import img from "../../../assets/icons/sendEmail.png"
import VerifySuccessModal from "./VerifySuccessModal";
import Loader from "../../loaders/Loader";
import EmailVerifyModal from "./EmailVerifyModal";

const VerifyRequestModal = () => {
    const { userRefetch, userData, setUserData } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const auth = getAuth(app)
    const { search } = location;

    const [verifySuccessModal, setVerifySuccessModal] = useState(false)
    const [openSendEmailModal, setOpenSendEmailModal] = useState(false)
    const [isLoasding, setIsLoading] = useState(false)

    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
                .then((result) => {
                    const user = result?.user
                    if (user?.emailVerified) {
                        const updateData = {
                            profiletitle: user.displayName,
                            image: user.photoURL && user.photoURL,
                            verified: "true"
                        }
                        setIsLoading(true)
                        fetch(`https://3twn4n.xn--b5bp.com/app/v2/user/${userData?._id}`, {
                            method: "PATCH",
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("ShowmoreinfoToken")}`,
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(updateData),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                userRefetch()
                                if (data?.data.acknowledged) {
                                    setIsLoading(false)
                                    setVerifySuccessModal(true)
                                }
                            });
                    }
                    // console.log(result?.user);
                    setOpenSendEmailModal(false)
                    localStorage.removeItem('email');
                }).catch((err) => {
                    // console.log(err.message);
                })
        }
    }, [search, navigate, userData?._id]);

    const handleSendEmail = (email) => {
        setIsLoading(true)
        sendSignInLinkToEmail(auth, email, {
            url: 'https://showmore.info/dashboard',
            handleCodeInApp: true,
        })
            .then((result) => {
                localStorage.setItem('email', email);
                setIsLoading(false)
                setOpenSendEmailModal(true)
            }).catch(err => {
                setIsLoading(false)
                if (err.message) {
                    navigate("/dashboard")
                }
                // console.log(err.message);
            })
    }

    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center cursor-pointer'>

            <div className={`z-500 w-80 md:w-[600px] h-96 p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white zoom-in`}>

                <img draggable={false} className='w- h-44' src={img} alt="" />
                <div className='flex flex-col items-center justify-center gap-2 text-center'>
                    <p>You've entered <strong>{userData?.email}</strong> as the email address for your account.</p>
                    <p>please verify this email address</p>
                    <button onClick={() => handleSendEmail(userData?.email)} className='w-44 h-12 bg-blue-600 hover:bg-blue-700 duration-150 flex items-center justify-center rounded text-white mx-auto text-sm font-bold'>
                        <span>Verify Request</span>
                    </button>
                </div>

            </div>


            {isLoasding && <Loader />}
            {openSendEmailModal && <EmailVerifyModal email={userData?.email} />}
            {verifySuccessModal && <VerifySuccessModal closeModal={setVerifySuccessModal} />}

        </div>
    );
};

export default VerifyRequestModal;