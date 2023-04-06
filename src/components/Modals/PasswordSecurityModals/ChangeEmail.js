import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navber from '../../../Pages/Shared/Navber/Navber';
import { useRef } from 'react';
import { useEffect } from 'react';

const ChangeEmail = ({ closeModal }) => {
    const [modal, setModal] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handlePasswrodReset = (data) => {
        console.log(data);
    }


    useEffect(() => {
        setTimeout(() => {
            setModal(false)
        },);
    },)

    console.log(modal);


    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(0)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center cursor-pointer'>

            <div draggable ref={modalRef} className={`z-500 w-80 md:w-[800px] h-fit p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white ${modal ? "opacity-50" : "opacity-100 duration-1000"}`}>
                <div className='bg-white rounded-2xl w-full mx-auto p-6'>
                    <h1 className='text-3xl font-semibold text-gray-900 text-center'>Password Recovery</h1>

                    {/* ---------Forgot password form start--------- */}
                    <form onSubmit={handleSubmit(handlePasswrodReset)}
                        className='grid grid-cols-1 gap-4 mt-6' >

                        <input
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="password" name="current_password" placeholder='Current Password' required />

                        <input
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="password" name="new_password" placeholder='New Password' required />

                        <input
                            className='w-full h-14 bg-[#E5E7EB] px-3 rounded-3xl border hover:border-blue-600 focus:outline-none focus:border-blue-600'
                            type="password" name="repeat_new_password" placeholder='Repeat New Password' required />

                        <div className='h-12 flex justify-center items-center bg-[#239ae7] text-white rounded-[50px] my-4'>
                            <button className='font-bold' type='submit'>Change Password</button>
                        </div>
                    </form>
                    {/* ---------Forgot password form end--------- */}

                    <h1 onClick={() => closeModal(0)} className='cursor-pointer font-semibold text-gray-900 text-center'>Cancel</h1>
                </div>
            </div>
        </div>
    );
};

export default ChangeEmail;