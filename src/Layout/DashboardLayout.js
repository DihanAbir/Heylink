import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavber from '../Pages/Dashboard/DashboardNavber/DashboardNavber';

const DashboardLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;