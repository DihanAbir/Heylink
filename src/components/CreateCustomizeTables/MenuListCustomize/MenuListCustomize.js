import React, { useEffect, useRef, useState } from 'react';
import downArrow from '../../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../../assets/icons/link-customize-icons/up-arrow.svg'
import plus from '../../../assets/icons/plus.svg'
import downArrow2 from '../../../assets/icons/down-arrow.svg'
import deletes from '../../../assets/icons/link-customize-icons/delete.svg'
import swap from '../../../assets/icons/link-customize-icons/swap.svg'
import DeleteModal from '../../Modals/CommonModals/DeleteModal';
import MenuItems from './MenuItems';
import ProButton from '../../Buttons/ProButton';
import ProToggleSwitch from '../../ToggleSwitch/ProToggleSwitch';
import ProModal from '../../Modals/CommonModals/ProModal';

const currencyItems = [
    'USD', 'UYU', 'UZS', 'VEF', 'VES', 'VND', 'ZWL', 'ZMW', 'ZMK', 'ZAR', 'YER', 'XPF', 'XOF', 'XCD'
]

const MenuListCustomize = () => {
    const [open, setOpen] = useState(false)
    const [menuToggle, setMenuToggle] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false)
    const [menuItems, setMenuItems] = useState(['addItem'])
    const [viewCurrency, setViewCurrency] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState('USD')
    const [spotlightToggle, setSpotlightToggle] = useState(false);
    const [linkURLToggle, setLinkURLToggle] = useState(false);
    const [togglePermit, setTogglePermit] = useState(false);
    const [proModal1, setProModal1] = useState(false);
    const [proModal2, setProModal2] = useState(false);

    console.log(menuItems)

    let outSideRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!outSideRef.current.contains(e.target)) {
                setViewCurrency(false)
                setProModal1(false)
                setProModal2(false)
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

                    <div className='w-full h-14'>
                        <input className='focus:outline-none text-red-500 border-none w-full h-12 px-4 bg-gray-200' type="text" placeholder='Please enter the name of the menu or price list' />
                        <p className='text-right text-sm text-gray-500'>128 characters left</p>
                    </div>

                    <div className='flex md:justify-center items-center gap-2 md:gap-6'>
                        <div className='relative cursor-pointer'>
                            <div onClick={() => setDeleteModal(!deleteModal)} className='hidden md:block md:flex flex-col justify-center items-center gap-2'>
                                <img className='w-4' src={deletes} alt="" />
                                <span className='text-sm text-gray-500'>Delete</span>
                            </div>
                            {
                                deleteModal && <DeleteModal closeModal={setDeleteModal}></DeleteModal>
                            }
                        </div>

                        {/* -----------toggler switch start----------- */}
                        <div className="flex flex-col justify-center items-center ">
                            <div onClick={() => setMenuToggle(!menuToggle)}
                                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                            ${menuToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                                <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                            ${menuToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                </div>
                            </div>
                        </div>
                        {/* -----------toggler switch start----------- */}
                    </div>
                </div>


                {
                    open && menuItems.map(item => <MenuItems />)
                }


                {
                    open && <div className='px-4 cursor-pointer py-4'>
                        <button onClick={() => setMenuItems([...menuItems, 'addItem'])}
                            className='flex items-center gap-4 mt-5'>
                            <img className='w-5' src={plus} alt="" />
                            <span className='text-blue-900 underline'>Add additional item</span>
                        </button>

                        <div ref={outSideRef} className='flex items-center gap-6 mt-4'>
                            <h1 className='font-semibold text-black'>Currency</h1>
                            <div className='relative'>
                                <div onClick={() => setViewCurrency(!viewCurrency)}
                                    className='flex items-center justify-between px-2 w-60 h-12 bg-gray-100 border rounded-md'>
                                    <h1 className='text-black font-semibold'>{selectedCurrency}</h1>
                                    <img src={downArrow2} alt="" />
                                </div>
                                {
                                    viewCurrency && <div className='bg-whtie absolute h-44 border w-full overflow-y-auto bg-white px-2'>
                                        {
                                            currencyItems.map(i => <div
                                                onClick={() => setSelectedCurrency(i)}
                                                className='hover:bg-gray-200 h-8 w-full flex items-center justify-start'>
                                                <h1 className={`text-black ${i === selectedCurrency && 'font-semibold'}`}>{i}</h1>
                                            </div>)
                                        }
                                    </div>
                                }
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-between items-center mt-4'>
                                <div>
                                    <div className='flex items-center gap-4'>
                                        <h1 className='text-gray-900 font-semibold'>Spotlight</h1>
                                        <ProButton />
                                    </div>
                                    <p className='text-gray-500 text-sm'>Link automatically expands when visitors arrive on your HeyLink.me page</p>
                                </div>
                                {/* -----------toggler switch start----------- */}

                                {
                                    togglePermit ? <div className="flex flex-col justify-center items-center ">
                                        <div onClick={() => setSpotlightToggle(!spotlightToggle)}
                                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                ${spotlightToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                ${spotlightToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                            </div>
                                        </div>
                                    </div>
                                        :
                                        <div className='relative'>
                                            <div onClick={() => setProModal1(!proModal1)}>
                                                <ProToggleSwitch />
                                            </div>
                                            {
                                                proModal1 && <ProModal closeModal={setProModal1} />
                                            }
                                        </div>
                                }

                                {/* -----------toggler switch start----------- */}
                            </div>

                            <div className='flex justify-between items-center mt-4'>
                                <div>
                                    <div className='flex items-center gap-4'>
                                        <h1 className='text-gray-900 font-semibold'>Add Link / URL</h1>
                                        <ProButton />
                                    </div>
                                    <p className='text-gray-500 text-sm'>Link automatically expands when visitors arrive on your HeyLink.me page</p>
                                </div>
                                {/* -----------toggler switch start----------- */}

                                {
                                    togglePermit ? <div className="flex flex-col justify-center items-center ">
                                        <div onClick={() => setLinkURLToggle(!linkURLToggle)}
                                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                ${linkURLToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                ${linkURLToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                            </div>
                                        </div>
                                    </div>
                                        :
                                        <div className='relative'>
                                            <div onClick={() => setProModal2(!proModal2)}>
                                                <ProToggleSwitch />
                                            </div>
                                            {
                                                proModal2 && <ProModal closeModal={setProModal2} />
                                            }
                                        </div>
                                }

                                {/* -----------toggler switch start----------- */}
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

export default MenuListCustomize;