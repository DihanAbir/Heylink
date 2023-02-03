import React, { useState } from 'react';
import downArrow from '../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../assets/icons/link-customize-icons/up-arrow.svg'
import moveToTop from '../../assets/icons/link-customize-icons/move-to-top.svg'
import effects from '../../assets/icons/link-customize-icons/effects.svg'
import deletes from '../../assets/icons/link-customize-icons/delete.svg'
import linkClick from '../../assets/icons/link-customize-icons/link-click.svg'
import schedule from '../../assets/icons/link-customize-icons/schedule.svg'
import fire from '../../assets/icons/link-customize-icons/fire.svg'
import lock from '../../assets/icons/link-customize-icons/pro-lock.svg'
import swap from '../../assets/icons/link-customize-icons/swap.svg'
import edit from '../../assets/icons/link-customize-icons/edit.svg'
import EffectsModal from '../Modals/CustomizeLinkModals/EffectsModal';
import FastLinkProModal from '../Modals/CustomizeLinkModals/FastLinkProModal';
import ScheduleModal from '../Modals/CustomizeLinkModals/ScheduleModal';
import ImageUploadModal from '../Modals/CustomizeLinkModals/ImageUploadModal';


const CreateLinkCustomize = ({ url }) => {
    const [open, setOpen] = useState(false)
    const [openEffcetsModal, setOpenEffcetsModal] = useState(false)
    const [fastLinkProModal, setFastLinkProModal] = useState(false)
    const [openScheduleModal, setOpenScheduleModal] = useState(false)
    const [uploadImageModal, setUploadImageModal] = useState(false)

    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";

    const closeModal = () => {
        setOpenEffcetsModal(false)
        setFastLinkProModal(false)
        setOpenScheduleModal(false)
        setUploadImageModal(false)
    }
    return (
        <div>
            <div className='relative w-full my-6 border border-gray-200 rounded-md'>

                <div className='h-28 flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6'>
                    <div>
                        <img className='w-5' src={swap} alt="" />
                    </div>

                    {/* -----------image upload input field end----------- */}
                    <div onClick={() => setUploadImageModal(!uploadImageModal)}
                        class="relative w-12 h-12 flex justify-center items-center mx-auto bg-gray-200 rounded-md">
                        <label class="flex justify-center items-center">
                            <div class=" relative flex cursor-pointer items-center justify-center">
                                <img className='w-4 cursor-pointer' src="https://i.ibb.co/ZdVGz3n/add-photo-alternate.png" alt="" />
                            </div>
                        </label>
                    </div>
                    {/* -----------image upload input field end----------- */}

                    {/* -----------edit and input  icon start----------- */}
                    <div className='flex-grow flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <input className='w-32 md:w-full border-none focus:outline-none text-gray-700 font-bold' type="text" defaultValue={url} />
                            <img className='w-3' src={edit} alt="" />
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <a href=""><img className='w-6' src={linkClick} alt="" /></a>
                                <input className='w-32 md:w-full text-blue-600 border-none focus:outline-none' type="text" defaultValue={url} />
                            </div>
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
                            <div
                                className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-red-100 rounded-full p-1 cursor-pointer"
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                            >
                                {/* Switch */}
                                <div
                                    className={
                                        `md:w-6 bg-green-600 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                    ${toggle && 'bg-white'}` +
                                        (toggle ? null : toggleClass)
                                    }
                                ></div>
                            </div>
                        </div>
                        {/* -----------toggler switch start----------- */}
                    </div>
                </div>
                {
                    open && <div className='relative cursor-pointer flex justify-center flex-wrap sm:flex-nowrap items-center gap-6 h-36 border-t border-gray-200 py-4 sm:py-0'>

                        {/* -----------Move to Top start----------- */}
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div>
                                <img className='w-4' src={moveToTop} alt="" />
                            </div>
                            <h1 className='text-gray-400 text-sm'>Move to Top</h1>
                        </div>
                        {/* -----------Move to Top end----------- */}

                        {/* -----------schedule start----------- */}
                        <div onClick={() => setOpenScheduleModal(!openScheduleModal)}
                            className='flex flex-col justify-center items-center gap-2'>
                            <div>
                                <img className='w-4' src={schedule} alt="" />
                            </div>
                            <h1 className='text-gray-400 text-sm'>schedule</h1>
                        </div>
                        {/* -----------schedule end----------- */}

                        {/* -----------effects start----------- */}
                        <div onClick={() => setOpenEffcetsModal(!openEffcetsModal)}
                            className='relative flex flex-col justify-center items-center gap-2'>
                            <div>
                                <img className='w-4' src={effects} alt="" />
                            </div>
                            <h1 className='text-gray-400 text-sm'>effects</h1>

                            {
                                openEffcetsModal && <EffectsModal closeModal={closeModal} />
                            }
                        </div>
                        {/* -----------effects end----------- */}

                        {/* -----------Fast Link start----------- */}
                        <div onClick={() => setFastLinkProModal(!fastLinkProModal)}
                            className='relative flex flex-col justify-center items-center gap-2'>
                            <div className='relative'>
                                <img className='w-4' src={fire} alt="" />

                                <div className='absolute -top-4 -right-3 flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                                    <img className='w-7' src={lock} alt="" />
                                </div>
                            </div>
                            <h1 className='text-gray-400 text-sm'>Fast Link</h1>
                            {
                                fastLinkProModal && <FastLinkProModal closeModal={closeModal} />
                            }
                        </div>
                        {/* -----------Fast Link end----------- */}

                        {/* -----------only small device show----------- */}
                        <div className='sm:hidden flex flex-col justify-center items-center gap-2'>
                            <div>
                                <img className='w-4' src={deletes} alt="" />
                            </div>
                            <h1 className='text-gray-400 text-sm'>Delete</h1>
                        </div>
                        {/* -----------only small device show end----------- */}
                    </div>

                }

                {/* -----------toggler button start----------- */}
                <div onClick={() => setOpen(!open)}
                    className='cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center'>
                    <img className='w-4' src={open ? upArrow : downArrow} alt="" />
                </div>
                {/* -----------toggler button end----------- */}

                {/* all Modals */}
                <div>
                    {
                        uploadImageModal && <ImageUploadModal closeModal={closeModal} />
                    }
                    {
                        openScheduleModal && <ScheduleModal closeModal={closeModal} />
                    }
                </div>
            </div>



        </div>
    );
};

export default CreateLinkCustomize;