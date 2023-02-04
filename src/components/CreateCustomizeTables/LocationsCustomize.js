import React, { useEffect, useState } from 'react';
import downArrow from '../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../assets/icons/link-customize-icons/up-arrow.svg'
import deletes from '../../assets/icons/link-customize-icons/delete.svg'
import swap from '../../assets/icons/link-customize-icons/swap.svg'
import edit from '../../assets/icons/link-customize-icons/edit.svg'
import lock from '../../assets/icons/link-customize-icons/pro-lock.svg'
import add from '../../assets/icons/locations-tab-icons/add.svg'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const LocationsCustomize = ({ location }) => {
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(true);
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";

    const closeModal = () => {
    }
    let editRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!editRef.current.contains(e.target)) {
                setOpenEdit(true);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div>
            <div className='relative w-full my-6 border border-gray-200 rounded-md'>

                <div className='h-28 flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6'>
                    <div>
                        <img className='w-5' src={swap} alt="" />
                    </div>

                    {/* -----------edit and input  icon start----------- */}
                    <div className='flex-grow flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <input className='w-32 md:w-full border-none focus:outline-none text-gray-700 text-sm font-semibold' type="text" defaultValue={location} />
                            <img className='w-3' src={edit} alt="" />
                        </div>
                    </div>
                    {/* -----------edit  and input icon end----------- */}

                    <div className='flex md:justify-center items-center gap-2 md:gap-6'>
                        <div className='hidden md:block md:flex flex-col justify-center items-center gap-2'>
                            <img className='w-4' src={deletes} alt="" />
                            <span className='text-sm text-gray-500'>Delete</span>
                        </div>

                        {/* -----------toggler switch start----------- */}
                        <div className="flex flex-col justify-center h-screen items-center ">
                            {/*   Switch Container */}
                            <div onClick={() => setToggle(!toggle)}
                                className={`md:w-12 md:h-6 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${!toggle ? 'bg-gray-300' : 'bg-red-100'}`}>
                                <div className={`bg-gray-600 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out 
                                            ${toggle && 'bg-green-600'}` + (toggle ? false : toggleClass)}></div>
                            </div>
                        </div>
                        {/* -----------toggler switch start----------- */}
                    </div>
                </div>
                {
                    open && <div className='relative h-fit cursor-pointer border-t border-gray-200 py-4 px-4'>
                        <div className='mb-2'>
                            <h1 className='text-gray-900 font-semibold text-sm'>Markers on the map</h1>
                        </div>
                        <div ref={editRef} className='flex items-center gap-3'>
                            <div className='flex items-center w-full h-12 bg-gray-200 rounded-md'>
                                <input className='w-full h-full px-3 border-none bg-gray-200 focus:outline-none text-gray-700 text-sm font-semibold' type="text" disabled={openEdit} defaultValue={location} />
                            </div>
                            {openEdit && <img onClick={() => setOpenEdit(false)} className='w-3' src={edit} alt="" />}
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <img src={add} alt="" />
                            <Link to='' className='text-blue-600 underline'>Add another marker</Link>
                            <div className='flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                <img className='w-7' src={lock} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Spotlight</h1>
                                    <div className='flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                        <img className='w-7' src={lock} alt="" />
                                    </div>
                                </div>
                                <p className='text-gray-500 text-sm'>Link automatically expands when visitors arrive on your HeyLink.me page</p>
                            </div>
                            {/* -----------toggler switch start----------- */}
                            <div onClick={() => setToggle(!toggle)}
                                className={`md:w-12 md:h-6 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${!toggle ? 'bg-gray-300' : 'bg-red-100'}`}>
                                <div className={`bg-gray-600 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out 
                                            ${toggle && 'bg-green-600'}` + (toggle ? false : toggleClass)}></div>
                            </div>
                            {/* -----------toggler switch start----------- */}
                        </div>

                        <div className='flex justify-between items-center mt-4'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-gray-900 font-semibold'>Map is Hidden</h1>
                                <div className='flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                    <img className='w-7' src={lock} alt="" />
                                </div>
                            </div>
                            {/* -----------toggler switch start----------- */}
                            <div onClick={() => setToggle(!toggle)}
                                className={`md:w-12 md:h-6 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${!toggle ? 'bg-gray-300' : 'bg-red-100'}`}>
                                <div className={`bg-gray-600 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out 
                                            ${toggle && 'bg-green-600'}` + (toggle ? false : toggleClass)}></div>
                            </div>
                            {/* -----------toggler switch start----------- */}
                        </div>

                        <div className='flex justify-between items-center mt-4'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-gray-900 font-semibold'>Map is Locked</h1>
                                <div className='flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                    <img className='w-7' src={lock} alt="" />
                                </div>
                            </div>
                            {/* -----------toggler switch start----------- */}
                            <div onClick={() => setToggle(!toggle)}
                                className={`md:w-12 md:h-6 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${!toggle ? 'bg-gray-300' : 'bg-red-100'}`}>
                                <div className={`bg-gray-600 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out 
                                            ${toggle && 'bg-green-600'}` + (toggle ? false : toggleClass)}></div>
                            </div>
                            {/* -----------toggler switch start----------- */}
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center gap-8 mt-4'>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Marker Button Color</h1>
                                    <div className='flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                        <img className='w-7' src={lock} alt="" />
                                    </div>
                                </div>
                                <p className='text-gray-500 text-sm'>Choose the colour visitors will see for the location buttons on your page</p>
                                <div className='h-10 w-44 mt-2 bg-orange-600 rounded-md'></div>
                            </div>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Marker Font Color</h1>
                                    <div className='flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                        <img className='w-7' src={lock} alt="" />
                                    </div>
                                </div>
                                <p className='text-gray-500 text-sm'>You can change the font of the location button here</p>
                                <div className='h-10 w-44 mt-2 border border-gray-300 rounded-md'></div>
                            </div>

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

export default LocationsCustomize;