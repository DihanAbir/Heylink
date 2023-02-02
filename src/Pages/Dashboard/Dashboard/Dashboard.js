import React from 'react';
import DashboardNavber from '../DashboardNavber/DashboardNavber';

const Dashboard = () => {
    return (
        <section className='bg-[#393AA7] min-h-screen md:px-4 md:py-8'>
            <div className='bg-white md:rounded-3xl md:shadow max-w-[1440px] mx-auto'>
                <DashboardNavber />
            </div>
        </section>
    );
};

export default Dashboard;