import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'fdf', email: 'adv@gmail.com' })
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)

    // console.log(userData);

    useEffect(() => {
        fetch(`http://localhost:8000/app/v1/user/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setUserData(data?.data));
        setLoading(false)
    }, [loading]);


    const authInfo = {
        user,
        userData,
        setUserData,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;