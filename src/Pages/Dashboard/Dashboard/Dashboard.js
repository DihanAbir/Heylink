import React, { useState } from 'react';
import PreviewDrawer from '../../../components/Drawers/PreviewDrawer';
import DashboardNavber from '../DashboardNavber/DashboardNavber';
import LinkTabs from '../LinkTabs/AllLinkTabs/LinkTabs';
import img1 from '../../../assets/icons/drawer-left-arrow.png'
import img2 from '../../../assets/icons/drawer-right-arrow.png'
import { Outlet } from 'react-router-dom';
import eye from '../../../assets/icons/eye.svg'

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

                <div onClick={() => setPreview(!preview)} className='block md:hidden flex justify-center'>
                    <div className='sticky bottom-8 right-auto flex gap-2 items-center justify-center w-24 h-8 rounded-[50px] bg-gray-300 border border-blue-900'>
                        <img className='w-4' src={eye} alt="" />
                        <h1 className='text-sm text-blue-900'>Preview</h1>
                    </div>
                </div>
                {/* -------Preview Drawer icon end------- */}

            </div>
        </section>
    );
};

export default Dashboard;