import React from 'react';
import img from "../../../assets/icons/tick.png"
import { Link } from 'react-router-dom';

const VerifySuccessModal = ({ closeModal }) => {
    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center cursor-pointer'>

            <div className={`z-500 w-80 md:w-[600px] h-96 p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white zoom-in`}>

                <img draggable={false} className='w-24' src={img} alt="" />
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-gray-800 font-bold text-center text-2xl'>Verified!</h1>
                    <p className='text-gray-800'>You Have Successfully Verified Account</p>
                    <Link to="/dashboard"
                        onClick={() => closeModal(false)}
                        className='w-44 h-12 bg-blue-600 hover:bg-blue-700 duration-150 flex items-center justify-center rounded text-white mx-auto mt-2'>
                        <span>Dashboard</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default VerifySuccessModal;