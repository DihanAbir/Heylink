import React, { useState } from 'react';
import downArrow from '../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../assets/icons/link-customize-icons/up-arrow.svg'
import swap from '../../assets/icons/link-customize-icons/swap.svg'
import edit from '../../assets/icons/link-customize-icons/edit.svg'
import deletes from '../../assets/icons/link-customize-icons/delete.svg'

const AllSocialLinks = ({ socialLink }) => {
    const [open, setOpen] = useState(false)
    const [selectBtn, setSelectBtn] = useState(true)
    return (
        <div>
            <div className='relative w-full my-6 border border-gray-200 rounded-md'>

                <div className='h-28 flex justify-between items-center gap-4 md:gap-6 py-4 px-2 md:px-6'>
                    <div>
                        <img className='w-5' src={swap} alt="" />
                    </div>

                    <div className='w-full flex flex-col md:flex-row md:justify-between gap-2 md:items-center'>
                        <div className='flex items-center gap-4'>
                            <img className='w-6' src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' alt="" />
                            <h1 className='flex items-center gap-1'>
                                <span className='text-gray-300'>My</span>
                                <span className='text-gray-300'>Facebook</span>
                            </h1>
                        </div>

                        <div className='flex-grow flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <input className='w-32 md:w-full border-none focus:outline-none text-blue-600 px-3' type="text" defaultValue={socialLink} />
                                <img className='w-3' src={edit} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {
                    open && <div className='flex flex-col justify-center items-center gap-2 h-36 border-t border-gray-200 py-4 sm:py-0'>

                        <div className='relative cursor-pointer flex justify-center flex-wrap sm:flex-nowrap items-center gap-6'>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-gray-500'>Show as</h1>
                                    <h1 className='flex justify-center items-center w-4 h-4 bg-gray-200 rounded-full text-white'>
                                        <span>?</span>
                                    </h1>
                                </div>
                            </div>
                            <div onClick={() => setSelectBtn(!selectBtn)}
                                className='flex items-center'>
                                <div className={`flex justify-center items-center h-10 w-20 bg-blue-100 rounded-l-md ${selectBtn && 'rounded-y border border-blue-600'}`}>
                                    <h1 className='text-gray-500 p-2'>Button</h1>
                                </div>
                                <div className={`flex justify-center items-center h-10 w-20 bg-blue-100 rounded-r-md ${!selectBtn && 'rounded-y border border-blue-600'}`}>
                                    <h1 className='text-gray-500 p-2'>icon</h1>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2 my-1'>
                            <img className='w-4' src={deletes} alt="" />
                            <span className='text-sm text-gray-500'>Delete</span>
                        </div>

                    </div>

                }


                {/* -----------toggler button start----------- */}
                <div onClick={() => setOpen(!open)}
                    className='cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center'>
                    <img className='w-4' src={open ? upArrow : downArrow} alt="" />
                </div>
                {/* -----------toggler button end----------- */}
            </div>
        </div>
    );
};

export default AllSocialLinks;