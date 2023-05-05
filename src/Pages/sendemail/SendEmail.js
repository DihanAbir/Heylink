import React, { useState, useEffect } from 'react';
// import { useAuthState } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';

export const SendEmail = () => {
    const auth = getAuth(app)

    // const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const { search } = location;

    const [email, setEmail] = useState('');

    const [loginLoading, setLoginLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

    const [infoMsg, setInfoMsg] = useState('');

    const [initialLoading, setInitialLoading] = useState(false);
    const [initialError, setInitialError] = useState('');
    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            // now in case user clicks the email link on a different device, we will ask for email confirmation
            let email = localStorage.getItem('email');
            if (!email) {
                email = window.prompt('Please provide your email');
            }
            // after that we will complete the login process
            setInitialLoading(true);
            signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
                .then((result) => {
                    // we can get the user from result.user but no need in this case
                    console.log(result);
                    localStorage.removeItem('email');
                    setInitialLoading(false);
                    setInitialError('');
                }).catch((err) => {
                    setInitialLoading(false);
                    setInitialError(err.message);
                })
        }
    }, [search, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        sendSignInLinkToEmail(auth, email, {

            // this is the URL that we will redirect back to after clicking on the link in mailbox
            // url: 'http://localhost:3000/login',
            handleCodeInApp: true,
        })
            .then(() => {
                localStorage.setItem('email', email);
                console.log(auth, email);
                alert('We have sent you an email with a link to sign in');
            }).catch(err => {
                setLoginLoading(false);
                setLoginError(err.message);
            })
    }

    return (
        <div className='box'>
            <form className='form-group custom-form' onSubmit={handleLogin}>
                <label>Email</label>
                <input type={'email'} required placeholder='Enter Email'
                    className='form-control w-full h-12 border border-blue-600'
                    value={email || ''} onChange={(e) => setEmail(e.target.value)} />


                <button type='submit' className='bg-blue-600 px-6 py-2 rounded text-white mx-auto'>
                    {loginLoading ? (
                        <span>Logging you in</span>
                    ) : (
                        <span>Login</span>
                    )}
                </button>

            </form>
        </div>
    )
}