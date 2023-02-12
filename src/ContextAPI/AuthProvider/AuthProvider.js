import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'abcd', img: '' })
    const [loading, setLoading] = useState(true)


    // // signup with google
    // const signupWithGoogle = (provider) => {
    //     return signInWithPopup(auth, provider)
    // }


    const authInfo = {
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;