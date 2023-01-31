import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownCountries from '../../../components/DropdownCountries/DropdownCountries';
import logo from '../../../assets/logo/logo.png'

const Navber = () => {
    const [open, setOpen] = useState(false)
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

    return (
        <nav ref={dropdownRef} className='py-14 text-white cursor-pointer max-w-[1440px] mx-auto'>
            <section className='flex justify-between items-center md:gap-12 px-3 md:px-8'>
                <div className='md:flex justify-between items-center md:gap-12 text-xl font-semibold'>
                    <Link to='/' className='flex items-center gap-2'>
                        <img className='w-8' src={logo} alt="" />
                        <h1 className='font-bold md:text-3xl hover:text-sky-500 duration-300 text-md'>Heylink.me</h1>
                    </Link>
                    <Link to='/templates'><h1 className='hidden md:block hover:text-sky-500 duration-300'>Free Templates</h1></Link>
                    <Link to='/'><h1 className='hidden md:block hover:text-sky-500 duration-300'>Services & Help</h1></Link>
                    <Link to='/'><h1 className='hidden md:block hover:text-sky-500 duration-300'>Pricing</h1></Link>
                </div>
                <div className='flex justify-between items-center gap-3 md:gap-12 text-xl font-semibold'>
                    <Link to='/'><h1 className='hidden md:block hover:text-sky-500 duration-300'>Dashboard</h1></Link>
                    <div onClick={() => setDropdown(!dropdown)} className='relative'>
                        <button onClick={() => setDropdown(!dropdown)} className=''>
                            <img className='w-8' src="https://cdn-f.heylink.me/static/img/lang-flags/en.svg" alt="" />
                        </button>
                        {
                            dropdown && <DropdownCountries />
                        }
                    </div>

                    {/* only small device show */}
                    <Link to='/' className='block md:hidden bg-orange-500 hover:bg-sky-500 hover:text-white border-white hover:border-sky-500 py-1 px-2 rounded-[50px] duration-300 text-sm'><button>Start for free</button></Link>

                    {/* medium + device show */}
                    <div className='hidden md:block border-2 border-white hover:text-sky-500 hover:border-sky-500 py-2 px-6 rounded-[50px] duration-300'>
                        <button><span className='font-bold text-white text-2xl mr-6 inline-block'>> </span> Start for free</button>
                    </div>

                    <div onClick={() => setOpen(!open)} className="w-10 md:hidden text-white">
                        {
                            open ? <span>
                                <svg className='w-8 mr-4 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                            </span>
                                :
                                <span>
                                    <svg className='w-6 ml-2 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                                </span>
                        }
                    </div>
                </div>
            </section>

            <div className='md:hidden flex justify-between items-center py-2 px-6 mt-3 bg-slate-400'>
                <Link to='/'><h1 className='hover:text-sky-500 text-white duration-300'>Free Templates</h1></Link>
                <Link to='/'><h1 className='hover:text-sky-500 text-white duration-300'>Pricing</h1></Link>
                <Link to='/'><h1 className='hover:text-sky-500 text-white duration-300'>Login</h1></Link>
            </div>
            {
                open && <div onClick={() => setOpen(false)} className={`bg-[#393AA7] min-h-screen flex flex-col gap-4 items-center py-6`}>
                    <div className='bg-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <Link to='/'>Dashboard</Link>
                    </div>
                    <div className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <Link to='/'>Free Templates</Link>
                    </div>
                    <div className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <Link to='/'>Blog and Help</Link>
                    </div>
                    <div className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <Link to='/'>Contact</Link>
                    </div>
                    <div className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <Link to='/'>Community</Link>
                    </div>
                    <div className='border-2 border-white hover:border-sky-500 hover:text-sky-500 px-6 py-2 rounded-[50px] text-center w-44 font-semibold'>
                        <Link to='/'>Agency</Link>
                    </div>
                </div>
            }
        </nav>
    );
};

export default Navber;