import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navber from '../Shared/Navber/Navber';
import downArrow from '../../assets/icons/down-arrow.png'
import twitter from '../../assets/icons/twitter.png'
import logo from '../../assets/logo/logo.png'


const Templates = () => {
    const [dropdown, setDropdown] = useState(false)

    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    const templetes = ['All Templetes', 'Creators', 'Musicians', 'NFT & Crypto', 'Brand & Business', 'Simple']
    return (
        <section className='bg-[#393AA7]'>
            <Navber />
            <div className='text-center text-white'>
                <h1 className='font-bold text-6xl text-center'>Free Templates</h1>
                <p className='text-3xl mt-6'>Create Your HeyLink.me bio link in seconds!</p>
            </div>

            <div ref={dropdownRef} className='relative md:hidden mt-8 flex justify-center py-12'>
                <button onClick={() => setDropdown(!dropdown)} className='flex justify-between items-center gap-6 border-2 border-white text-white py-3 px-6 rounded-[50px]'>
                    <span className='pr-16 font-bold text-xl'>All Templetes</span>
                    <img className='w-4' src={downArrow} alt="" />
                </button>
                {
                    dropdown && <div className='absolute left-54 top-16 w-60 rounded-lg bg-white py-5 grid grid-cols-1'>
                        {
                            templetes.map(tem => {
                                return (
                                    <button className='hover:bg-slate-100 px-4 py-4 text-sky-600 font-semibold text-left'>
                                        <span className='text-xl'>{tem}</span></button>
                                )
                            })
                        }
                    </div>
                }
            </div>

            {/* only medium device  */}
            <div className='hidden md:block md:grid md:grid-cols-6 gap-4 max-w-fit mx-auto py-12'>
                {
                    templetes.map(tem => {
                        return (
                            <button className='border-2 border-white text-white hover:text-sky-600 hover:bg-white py-3 px-6 rounded-[50px] font-semibold text-xl'>{tem}</button>
                        )
                    })
                }
            </div>

            <div className='bg-[#393AA7] relative'>
                <div className='bg-[#393AA7] h-96'></div>
                <div className='bg-white min-h-screen flex justify-center'>
                    <div className='max-w-[1440px] flex justify-center'>
                        <div className='absolute top-16 grid md:grid-cols-4 gap-12 mx-auto  px-16'>

                            {/* -------------- card 1 --------------*/}
                            <div className='flex flex-col items-center py-6 border-4 bg-slate-600 border-white rounded-3xl'>
                                <img className='w-16 rounded-full' src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
                                <div className='text-center mt-2'>
                                    <h1 className='font-bold text-white text-xl'>Mr. John cena</h1>
                                    <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className='flex justify-center gap-3 mt-3'>
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                </div>
                                <div className='grid grid-cols-1'>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 mt-10 text-white'>
                                    <img className='w-5' src={logo} alt="" />
                                    <h1 className='font-bold'>Heylink.me</h1>
                                </div>
                            </div>

                            {/* -------------- card 2 --------------*/}
                            <div className='flex flex-col items-center py-6 border-4 bg-slate-600 border-white rounded-3xl'>
                                <img className='w-16 rounded-full' src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
                                <div className='text-center mt-2'>
                                    <h1 className='font-bold text-white text-xl'>Mr. John cena</h1>
                                    <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className='flex justify-center gap-3 mt-3'>
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                </div>
                                <div className='grid grid-cols-1'>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 mt-10 text-white'>
                                    <img className='w-5' src={logo} alt="" />
                                    <h1 className='font-bold'>Heylink.me</h1>
                                </div>
                            </div>

                            {/* -------------- card 3 --------------*/}
                            <div className='flex flex-col items-center py-6 border-4 bg-slate-600 border-white rounded-3xl'>
                                <img className='w-16 rounded-full' src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
                                <div className='text-center mt-2'>
                                    <h1 className='font-bold text-white text-xl'>Mr. John cena</h1>
                                    <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className='flex justify-center gap-3 mt-3'>
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                </div>
                                <div className='grid grid-cols-1'>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 mt-10 text-white'>
                                    <img className='w-5' src={logo} alt="" />
                                    <h1 className='font-bold'>Heylink.me</h1>
                                </div>
                            </div>

                            {/* -------------- card 4 --------------*/}
                            <div className='flex flex-col items-center py-6 border-4 bg-slate-600 border-white rounded-3xl'>
                                <img className='w-16 rounded-full' src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
                                <div className='text-center mt-2'>
                                    <h1 className='font-bold text-white text-xl'>Mr. John cena</h1>
                                    <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className='flex justify-center gap-3 mt-3'>
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                    <img className='w-5' src={twitter} alt="" />
                                </div>
                                <div className='grid grid-cols-1'>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                    <div className='h-12 w-full mt-4 flex justify-center items-center bg-white'>
                                        <h1 className='text-gray-900 text-sm px-6'>By my pathron on pathron.com</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 mt-10 text-white'>
                                    <img className='w-5' src={logo} alt="" />
                                    <h1 className='font-bold'>Heylink.me</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Templates;