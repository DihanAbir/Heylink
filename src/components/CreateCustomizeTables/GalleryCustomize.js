import React, { useState } from 'react';
import deletes from '../../assets/icons/link-customize-icons/delete.svg'
import downArrow from '../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../assets/icons/link-customize-icons/up-arrow.svg'
import swap from '../../assets/icons/link-customize-icons/swap.svg'
import edit from '../../assets/icons/link-customize-icons/edit.svg'
import gifDownArrow from '../../assets/icons/gif-images/down-arrow.gif'
import sliderActive from '../../assets/icons/gallery-tab-icons/slider-active.svg'
import sliderInactive from '../../assets/icons/gallery-tab-icons/slider-inactive.svg'
import gridActive from '../../assets/icons/gallery-tab-icons/grid-active.svg'
import gridInactive from '../../assets/icons/gallery-tab-icons/grid-inactive.svg'
import { Link } from 'react-router-dom';
import SliderGridTab from './SliderGridTab';
import DeleteModal from '../Modals/CommonModals/DeleteModal';

const GalleryCustomize = () => {
    const [open, setOpen] = useState(false)
    const [slideGrid, setSlideGrid] = useState(true)
    const [deleteModal, setDeleteModal] = useState(false)

    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";

    const closeModal = () => {
        setDeleteModal(false)
    }

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
                            <input className='w-32 md:w-full border-none focus:outline-none text-gray-700 font-bold' type="text" defaultValue='New Gallery Image' />
                            <img className='w-3' src={edit} alt="" />
                        </div>
                    </div>
                    {/* -----------edit  and input icon end----------- */}

                    <div className='flex md:justify-center items-center gap-2 md:gap-6'>
                        <div className='relative cursor-pointer'>
                            <div onClick={() => setDeleteModal(!deleteModal)}
                                className='hidden md:block md:flex flex-col justify-center items-center gap-2'>
                                <img className='w-4' src={deletes} alt="" />
                                <span className='text-sm text-gray-500'>Delete</span>
                            </div>
                            {
                                deleteModal && <DeleteModal closeModal={closeModal}></DeleteModal>
                            }
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
                    open && <div
                        className='grid lg:grid-cols-2 gap-2 border-t border-gray-200 py-4 mx-3 sm:py-0'>
                        <div className='w-full md:p-4'>
                            <div className='relative cursor-pointer h-60 w-full rounded-xl border-2 border-dashed border-gray'>
                                <div className='p-3'>
                                    <h1 className='text-sm text-gray-400'>
                                        <span>Drop your images here, or just</span>
                                        <span className='text-blue-600 font-semibold px-1'>Browse</span>
                                        <span>your local storage</span>
                                    </h1>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h1 className='text-gray-600'>click to <br /> <span className='text-gray-600 font-bold'>Add Image</span></h1>
                                    <img className='w-20 md:w-28' src={gifDownArrow} alt="" />
                                </div>
                                <div className='flex justify-center items-center mx-auto my-3 h-10 w-56 rounded-[50px] bg-blue-600 px-6'>
                                    <h1 className='text-white font-semibold'>+ Add Image</h1>
                                </div>
                                <input className='absolute h-56 top-0 cursor-pointer w-full opacity-0' type="file" name="image" id="" />
                            </div>
                        </div>

                        <div className='my-6'>
                            <div
                                className='flex justify-between items-center p-2 cursor-pointer'>
                                <div onClick={() => setSlideGrid(true)}
                                    className={`flex justify-center items-center h-10 w-full border rounded-l-md ${slideGrid && 'rounded-y border border-blue-600 bg-blue-100'}`}>
                                    <img src={slideGrid ? sliderActive : sliderInactive} alt="" />
                                    <h1 className='text-gray-500 p-2'>Show as Slider</h1>
                                </div>
                                <div onClick={() => setSlideGrid(false)}
                                    className={`flex justify-center items-center h-10 w-full border rounded-r-md ${!slideGrid && 'rounded-y border border-blue-600 bg-blue-100'}`}>
                                    <img src={!slideGrid ? gridActive : gridInactive} alt="" />
                                    <h1 className='text-gray-500 p-2'>Show as Grid</h1>
                                </div>
                            </div>
                            <div className='h-96'>
                                <SliderGridTab slideGrid={slideGrid} />
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

            <h1 className='text-gray-600 text-sm pb-6'>You can add multiple Image Sliders on the PRO plan.Check it <Link to='/' className='text-blue-600 underline'>here</Link></h1>

        </div>
    );
};

export default GalleryCustomize;