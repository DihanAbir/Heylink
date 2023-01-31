import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownCountries from '../../../components/DropdownCountries/DropdownCountries';

const Navber = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='py-12 text-white'>
            <section className='flex justify-between items-center gap-12'>
                <div className='flex justify-between items-center gap-12 text-xl font-semibold'>
                    <Link to='/'><h1 className='font-bold text-3xl hover:text-sky-500 duration-300'>Heylink.me</h1></Link>
                    <Link to='/'><h1 className='hover:text-sky-500 duration-300'>Free Templates</h1></Link>
                    <Link to='/'><h1 className='hover:text-sky-500 duration-300'>Services & Help</h1></Link>
                    <Link to='/'><h1 className='hover:text-sky-500 duration-300'>Pricing</h1></Link>
                </div>
                <div className='flex justify-between items-center gap-12 text-xl font-semibold'>
                    <Link to='/'><h1 className='hover:text-sky-500 duration-300'>Dashboard</h1></Link>
                    <div className='relative'>
                        <button onClick={() => setOpen(!open)} className=''>
                            <img className='w-8' src="https://cdn-f.heylink.me/static/img/lang-flags/en.svg" alt="" />
                        </button>
                        {
                            open && <DropdownCountries />
                        }
                    </div>
                    <Link to='/' className='border-2 border-white hover:border-sky-500 py-3 px-6 rounded-[50px] hover:text-sky-500 duration-300'><h1>Start for free</h1></Link>
                </div>
            </section>
        </nav>
    );
};

export default Navber;