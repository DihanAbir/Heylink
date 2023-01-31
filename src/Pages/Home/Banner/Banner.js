import React from 'react';
import { Link } from 'react-router-dom';
import Navber from '../../Shared/Navber/Navber';

const Banner = () => {
    return (
        <section className='bg-[#393AA7] min-h-screen '>
            <Navber />
            <div className='grid md:grid-cols-3 px-8 py-12 max-w-[1440px] mx-auto' style={{ backgroundImage: `url('https://cdn-f.heylink.me/static/img/index-header-img.png')`, backgroundSize: '1000px', backgroundPosition: '300px', backgroundRepeat: 'no-repeat' }}>
                <div className='text-white col-span-2'>
                    <p className='font-bold text-2xl'>LET'S CREATE!</p>
                    <h1 className='font-bold text-4xl md:text-7xl'>Just one link for everything</h1>
                    <p className='my-8 font-semibold text-2xl'>Place all your necessary links <br /> in one location.</p>
                    <Link to='' className='font-semibold py-4 px-16 bg-orange-500 hover:bg-sky-500 duration-300 rounded-[50px]'>
                        <button>Start For Free</button>
                    </Link>
                    <span className='my-6 block font-semibold'>Already on HeyLink.me? <Link to='' className='underline'>Log In</Link></span>
                </div>
                <div className='md:hidden w-72'>
                    <img src="https://cdn-f.heylink.me/static/img/index-header-img.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;