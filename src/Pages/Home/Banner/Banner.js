import React from 'react';
import { Link } from 'react-router-dom';
import Navber from '../../Shared/Navber/Navber';

const Banner = () => {
    return (
        <section className='bg-[#393AA7] min-h-screen px-8'>
            <Navber />
            <div className='grid md:grid-cols-3'>
                <div className='text-white'>
                    <p className='font-bold text-2xl'>LET'S CREATE!</p>
                    <h1 className='font-bold text-6xl'>Just one link for everything</h1>
                    <p className='my-8 font-semibold text-2xl'>Place all your necessary links <br /> in one location.</p>
                    <Link to='' className='font-semibold py-4 px-16 bg-orange-500 hover:bg-sky-500 duration-300 rounded-[50px]'>
                        <button>Start For Free</button>
                    </Link>
                    <span className='my-6 block font-semibold'>Already on HeyLink.me? <Link to='' className='underline'>Log In</Link></span>
                </div>
                <div className='col-span-2'>
                    <img className='w-full' src="https://cdn-f.heylink.me/static/img/index-header-img.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;