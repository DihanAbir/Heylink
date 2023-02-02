import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Appearance from '../Pages/Dashboard/LinkTabs/Appearance';
import Links from '../Pages/Dashboard/LinkTabs/Links';
import LinkTabs from '../Pages/Dashboard/LinkTabs/LinkTabs';
import Settings from '../Pages/Dashboard/LinkTabs/Settings';
import Subscription from '../Pages/Dashboard/LinkTabs/Subscription';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/templates', element: <Templates></Templates> },
            { path: '/pricing', element: <PricingCards></PricingCards> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '/login', element: <Login></Login> },
            { path: '/forgot-password', element: <ForgotPassword></ForgotPassword> },
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard', element: <Dashboard></Dashboard>,
                children: [
                    { path: '/dashboard/', element: <Links /> },
                    { path: '/dashboard/appearance', element: <Appearance /> },
                    { path: '/dashboard/settings', element: <Settings /> },
                    { path: '/dashboard/billing/subscription', element: <Subscription /> },
                ]
            },

        ]
    }
])

export default router;