import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Appearance from '../Pages/Dashboard/LinkTabs/Appearance/Appearance/Appearance';
import Links from '../Pages/Dashboard/LinkTabs/Links/Links';
import AppsTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/AppsTab';
import CommerceTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/CommerceTab';
import CryptoTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/CryptoTab';
import GalleryTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/GalleryTab';
import LinksTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/LinksTab';
import LocationsTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/LocationsTab';
import MenuTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/MenuTab';
import MusicTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/MusicTab';
import SocialTab from '../Pages/Dashboard/LinkTabs/Links/SocialLinkTabs/SocialTab';
import Settings from '../Pages/Dashboard/LinkTabs/Settings/Settings';
import Subscription from '../Pages/Dashboard/LinkTabs/Subscription/Subscription';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import PricingCards from '../Pages/PricingCards/PricingCards';
import ForgotPassword from '../Pages/Profile/ForgotPassword/ForgotPassword';
import Login from '../Pages/Profile/Login/Login';
import Signup from '../Pages/Profile/Signup/Signup';
import Templates from '../Pages/Templates/Templates';
import PriveteRoute from './PriveteRoute/PriveteRoute';

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
        element: <PriveteRoute><DashboardLayout></DashboardLayout></PriveteRoute>,
        children: [
            {
                path: '/dashboard', element: <PriveteRoute><Dashboard></Dashboard></PriveteRoute>,
                children: [
                    {
                        path: '/dashboard/', element: <Links></Links>,
                        children: [
                            { path: '/dashboard/', element: <LinksTab></LinksTab> },
                            { path: '/dashboard/links', element: <LinksTab /> },
                            { path: '/dashboard/links/social', element: <SocialTab /> },
                            { path: '/dashboard/links/gallery', element: <GalleryTab /> },
                            { path: '/dashboard/links/menu', element: <MenuTab /> },
                            { path: '/dashboard/links/crypto', element: <CryptoTab /> },
                            { path: '/dashboard/links/locations', element: <LocationsTab /> },
                            { path: '/dashboard/links/music', element: <MusicTab /> },
                            { path: '/dashboard/links/commerce', element: <CommerceTab /> },
                            { path: '/dashboard/links/apps', element: <AppsTab /> },
                        ]
                    },
                    {
                        path: '/dashboard/appearance', element: <Appearance></Appearance>,
                        children: [

                        ]
                    },
                    { path: '/dashboard/settings', element: <Settings /> },
                    { path: '/dashboard/billing/subscription', element: <Subscription /> },
                ]
            },

        ]
    }
])

export default router;