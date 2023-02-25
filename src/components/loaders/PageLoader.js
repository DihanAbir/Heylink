import React from 'react';
import loader from '../../assets/loader/loader.svg'

const PageLoader = () => {
    return (
        <div className='w-full min-h-screen flex justify-center mx-auto bg-white'>
            <img className='w-44' src={loader} alt="" />
        </div>
    );
};

export default PageLoader;