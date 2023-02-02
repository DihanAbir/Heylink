import React from 'react';
import DashboardNavber from '../DashboardNavber/DashboardNavber';
import LinkTabs from '../LinkTabs/LinkTabs';

const Dashboard = () => {
    return (
        <section className='bg-[#393AA7] min-h-screen md:px-4 md:py-8'>
            <div className='bg-white min-h-screen md:rounded-3xl md:shadow max-w-[1440px] mx-auto'>
                <DashboardNavber />
                <LinkTabs />
            </div>
        </section>
    );
};

export default Dashboard;