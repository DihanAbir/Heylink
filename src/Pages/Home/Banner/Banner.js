import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButtons from '../../../components/Buttons/PrimaryButtons';
import Navber from '../../Shared/Navber/Navber';

const Banner = () => {
    return (
        <section className='bg-[#393AA7] min-h-screen'>
            <Navber />
            <div className='grid md:grid-cols-3 px-6 md:px-16 max-w-[1440px] mx-auto' style={{ backgroundImage: `url('https://cdn-f.heylink.me/static/img/index-header-img.png')`, backgroundSize: '1000px', backgroundPosition: '300px', backgroundRepeat: 'no-repeat' }}>
                <div className='text-white col-span-2'>
                    <p className='font-bold text-2xl'>LET'S CREATE!</p>
                    <h1 className='font-bold text-4xl md:text-7xl font'>Just one link for</h1>
                    <h1 className='font-bold text-4xl md:text-7xl font md:mt-6'>everything</h1>
                    <p className='my-8 font-semibold text-2xl'>Place all your necessary links <br /> in one location.</p>
                    <Link to='' className=''>
                        <PrimaryButtons>
                            Start For Free
                        </PrimaryButtons>
                    </Link>
                    <span className='my-6 block font-semibold'>Already on HeyLink.me?
                        <Link to='' className='underline'>Log In</Link>
                    </span>
                </div>

                <div className='md:hidden w-72'>
                    <img src="https://cdn-f.heylink.me/static/img/index-header-img.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;