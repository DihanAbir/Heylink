import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, updateProfile, signOut, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('HeyLinkToken')
    const auth = getAuth(app)
    // console.log(userData);
    // user data reFetch if user data updated
    const userRefetch = () => {
        fetch(`http://localhost:8000/app/v2/user/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setUserData(data?.data));
    }

    useEffect(() => {
        if (!userData?._id) {
            setLoading(true)
            if (token) {
                fetch(`http://localhost:8000/app/v2/user/me`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                        "content-type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => setUserData(data?.data));
            }
            else {
                setUserData(null)
            }
            setLoading(false)
        }
    }, [token]);





    // set user Display name and image
    // const updateUser = (profile) => {
    //     setLoading(true)
    //     return updateProfile(auth.currentUser, profile)
    // }


    // signup with google
    const signupWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // user Logout
    const logout = () => {
        setLoading(true)
        localStorage.removeItem('HeyLinkToken')
        return signOut(auth)
    }


    // load user to useEffact
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUserData(currentUser)
    //         setLoading(false)
    //     })

    //     return () => {
    //         unSubscribe()
    //     }
    // }, [])


    const authInfo = {
        userData,
        userRefetch,
        setUserData,
        loading,
        setLoading,
        signupWithGoogle,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;