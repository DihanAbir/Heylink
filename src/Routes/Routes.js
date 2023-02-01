import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import PricingCards from '../Pages/PricingCards/PricingCards';
import ForgotPassword from '../Pages/Profile/ForgotPassword/ForgotPassword';
import Login from '../Pages/Profile/Login/Login';
import Signup from '../Pages/Profile/Signup/Signup';
import Templates from '../Pages/Templates/Templates';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/templates', element: <Templates></Templates> },
            { path: '/pricing', element: <PricingCards></PricingCards> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '/login', element: <Login></Login> },
            { path: '/forgot-password', element: <ForgotPassword></ForgotPassword> },
        ]
    }
])

export default router;