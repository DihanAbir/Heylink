import React, { useState } from 'react';
import PreviewDrawer from '../../../components/Drawers/PreviewDrawer';
import DashboardNavber from '../DashboardNavber/DashboardNavber';
import LinkTabs from '../LinkTabs/LinkTabs';
import img1 from '../../../assets/icons/drawer-left-arrow.png'
import img2 from '../../../assets/icons/drawer-right-arrow.png'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [preview, setPreview] = useState(false)
    return (
        <section className='bg-[#393AA7] min-h-screen md:px-4 md:py-8'>
            <div className='relative bg-white min-h-screen md:rounded-3xl md:shadow max-w-[1440px] mx-auto'>
                <DashboardNavber />
                <LinkTabs />
                <div className='my-6 px-4 md:px-12'>
                    <Outlet />
                </div>

                {/* -------Preview Drawer icon start------- */}
                <div onClick={() => setPreview(!preview)} className='hidden md:block'>
                    <PreviewDrawer>
                        {
                            preview ? <img className='w-8' src={img1} alt="" />
                                :
                                <img className='w-8' src={img2} alt="" />
                        }
                    </PreviewDrawer>
                </div>
                {/* -------Preview Drawer icon end------- */}

            </div>
        </section>
    );
};

export default Dashboard;