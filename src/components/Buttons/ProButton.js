import React from 'react';
import lock from '../../assets/icons/link-customize-icons/pro-lock.svg'

const ProButton = () => {
    return (
        <div className='flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
            <img className='w-7' src={lock} alt="" />
        </div>
    );
};

export default ProButton;