import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextAPI/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import SmallLoader from '../../loaders/SmallLoader';

const UsernameModal = ({ closeModal, newUser }) => {
    const { userRefetch, userData, setUserData } = useContext(AuthContext)
    const [usernameError, setUsernameError] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/dashboard'
    const [isLoasding, setIsLoading] = useState(false)


    // handle save user by social user
    const handleUser = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        newUser.username = username;

        if (!username) {
            return setUsernameError("Please Enter Username")
        }
        else {
            setIsLoading(true)
            fetch(`https://3twn4n.xn--b5bp.com/app/v2/user/signup/withsocial`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.message?.usernameMessage) {
                        setUsernameError(data?.message?.usernameMessage)
                    }
                    if (data?.token) {
                        localStorage.setItem("ShowmoreinfoToken", data.token);
                        userRefetch()
                        userData && toast.success('User Login Successfully')
                        closeModal(false)
                        navigate(from, { replace: true });
                    }
                    setIsLoading(false)
                })
        }
    }


    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center cursor-pointer'>

            <form onSubmit={handleUser} className={`z-500 w-80 md:w-[600px] h-fit p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white zoom-in`}>

                <h1 className='text-xl font-semibold text-gray-900 text-center'>Please Enter Your Username</h1>

                <div className='grid grid-cols-1 gap-4 w-full py-4'>
                    <input onChange={(e) => setUsernameError("")}
                        className={`w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl focus:outline-none focus:border-blue-600
                        ${usernameError ? "border border-red-500" : "border hover:border-blue-600"}`}
                        type="username" name="username" placeholder='Enter Your Username' />

                    <button type="submit" className="h-12 w-full flex justify-center items-center bg-[#239ae7] hover:bg-blue-600 duration-150 text-white rounded-[50px] my-4">
                        <h1 className="font-bold">
                            {!isLoasding ? "Save" : <SmallLoader />}
                        </h1>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UsernameModal;