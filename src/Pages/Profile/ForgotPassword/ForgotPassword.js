import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Navber from '../../Shared/Navber/Navber';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handlePasswrodReset = (data) => {
        console.log(data);
    }
    return (
        <section className='bg-[#393AA7] min-h-screen pb-6'>
            <Navber />
            <div className='px-4'>
                <div className='bg-white rounded-2xl md:w-[500px] mx-auto p-6'>
                    <h1 className='text-3xl font-semibold text-gray-900 text-center'>Password Recovery</h1>

                    {/* ---------Forgot password form start--------- */}
                    <form onSubmit={handleSubmit(handlePasswrodReset)} className='' >
                        <div className='my-4'>
                            <TextField {...register('email', { required: 'Email is required' })}
                                className='w-full' id="email" label="Email Address" variant="standard" />
                            {errors.email && <div className='bg-red-200 h-6 w-full flex justify-end items-center'>
                                <p className='text-gray-900 text-sm py-3 px-2'>{errors.email.message}</p>
                            </div>}
                        </div>

                        <div className='h-12 flex justify-center items-center bg-[#239ae7] text-white rounded-[50px] my-4'>
                            <button className='font-bold' type='submit'>Send Reset Link</button>
                        </div>
                    </form>
                    {/* ---------Forgot password form end--------- */}
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;