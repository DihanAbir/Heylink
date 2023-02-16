import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.confiq';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'adbd' })
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app)


    // signup with google
    const signupWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // signup with facebook
    const signupWithFacebook = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // load user to useEffact
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         setLoading(false)
    //     })

    //     return () => {
    //         unSubscribe()
    //     }
    // }, [])


    const authInfo = {
        user,
        loading,
        signupWithGoogle,
        signupWithFacebook,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;