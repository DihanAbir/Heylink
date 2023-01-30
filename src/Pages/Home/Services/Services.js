import React from 'react';

const Services = () => {
    return (
        <section className='px-8'>
            <h1 className='text-center font-bold text-gray-900 my-16 text-xl md:text-3xl'>The one link to rule them all</h1>
            <div className='grid md:grid-cols-3 gap-12 mx-auto'>
                <div className='grid grid-cols-1'>
                    <img className='w-24 mx-auto' src="https://cdn-f.heylink.me/static/img/ic_create.svg" alt="" />
                    <div className='text-center px-6'>
                        <h1 className='font-bold text-gray-900 text-2xl mt-6'>Create</h1>
                        <p className='text-gray-400 mt-6 text-xl'>Easily create & manage all your
                            links in one place: personal website,
                            store, recent video or social post.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <img className='w-24 mx-auto' src="https://cdn-f.heylink.me/static/img/ic_integrate.svg" alt="" />
                    <div className='text-center px-6'>
                        <h1 className='font-bold text-gray-900 text-2xl mt-6'>Integrate</h1>
                        <p className='text-gray-400 mt-6 text-xl'>Integrate with ecommerce or lead
                            generation solutions, add donation form
                            or analysis of your social profile.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <img className='w-24 mx-auto' src="https://cdn-f.heylink.me/static/img/ic_share.svg" alt="" />
                    <div className='text-center px-6'>
                        <h1 className='font-bold text-gray-900 text-2xl mt-6'>Share</h1>
                        <p className='text-gray-400 mt-6 text-xl'>Share your link anywhere: Instagram,
                            YouTube, TikTok, in messengers
                            or via SMS.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;