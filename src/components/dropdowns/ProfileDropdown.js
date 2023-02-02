import React from 'react';
import appearance from '../../assets/icons/appearance.svg'
import security from '../../assets/icons/security.svg'
import billing from '../../assets/icons/billing.svg'
import logout from '../../assets/icons/logout.svg'

const ProfileDropdown = () => {
    return (
        <div class="absolute right-0 z-10 mt-2 w-60 rounded-md bg-gray-50 shadow shadow-gray-400">
            <div className='p-3'>
                <div className='flex flex-col items-center gap-0 py-4'>
                    <span className='text-center text-gray-600 text-[16px] font-bold'>robiulalam76</span>
                    <span className='text-center text-gray-600 text-sm '>robiulalam@gmail.com</span>
                </div>
                <hr className='mb-2 border-gray-400' />
                <div className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={appearance} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Appearance</h1>
                </div>
                <div className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={security} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Password & Security</h1>
                </div>
                <div className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={billing} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Billing & Subscription</h1>
                </div>
                <div className='grid grid-cols-5 items-center hover:bg-gray-200 p-2 mb-2 rounded'>
                    <img className='w-6 col-span-1' src={logout} alt="" />
                    <h1 className='col-span-4 text-gray-500 text-[16px] font-semibold'>Log out</h1>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;