import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'fdf' })
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("HeyLinkToken");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/user/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setUserData(data?.data));
    }, []);



    const authInfo = {
        user,
        userData,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;