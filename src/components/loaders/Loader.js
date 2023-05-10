import React from 'react';
import logo from "../../assets/logo/logo.png"

const Loader = () => {
    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-sky-800 bg-opacity-75 flex justify-center items-center cursor-pointer'>
            <div className={`z-500 w-80 md:w-[800px] h-fit p-4 flex flex-col justify-center items-center gap-4`}>
                <img draggable={false} className='w-28' src={logo} alt="" />
                <div class="w-14 h-14 mx-auto rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent shadow-md">
                </div>
            </div>
        </div>
    );
};

export default Loader;