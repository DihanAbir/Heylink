import React from 'react';

const SidebarPreviewMain = () => {
    return (
        <div className='fixed bg-black pr-1 w-[310px] h-[640px] rounded-[50px] flex justify-center items-center'>
            <div className='h-1 w-16 bg-gray-300 rounded-3xl absolute top-6'></div>
            <div className='bg-white h-[530px] w-[290px] overflow-y-auto'>
                <div className='flex justify-center items-center mt-16'>
                    <img className='rounded-full' src="https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://api.heylink.me/static/images/defaults/avatar_user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SidebarPreviewMain;