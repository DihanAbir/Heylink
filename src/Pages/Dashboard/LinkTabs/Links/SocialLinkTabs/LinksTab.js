import React, { useEffect, useRef, useState } from 'react';
import link from '../../../../../assets/icons/link.svg'
import threeSocial from '../../../../../assets/icons/three-social.svg'
import uparrow from '../../../../../assets/icons/gif-images/up-arrow.gif'
import { useForm } from 'react-hook-form';
import AdvancedLinkModal from './AdvancedLinkModal';
const LinksTab = () => {
    const [openAdvancedLinkModal, setOpenAdvancedLinkModal] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleUrl = (data) => {
        console.log(data);
    }

    const closeModal = () => {
        setOpenAdvancedLinkModal(false)
    }
    return (
        <section>
            <form onSubmit={handleSubmit(handleUrl)} className='flex justify-between md:px-6 w-full lg:w-[980px] mx-auto'>
                <div className='flex-grow flex items-center bg-gray-200 rounded-3xl'>
                    <div className='cursor-pointer w-12 py-3 border-r border-gray-400 flex justify-center items-center'>
                        <img src={link} alt="" />
                    </div>
                    <input {...register('url', { required: 'URL should not be empty' })}
                        className='flex-grow focus:outline-none focus:bg-red-50 bg-gray-200 lg:rounded-r-3xl py-3 px-2 w-full border-none' type="text" name='url' placeholder='Paste Your Link Here' />
                </div>
                <div className='bg-blue-300 lg:ml-6 rounded-r-3xl lg:rounded-3xl flex justify-center items-center px-3 lg:px-6'>
                    <button className='font-semibold text-white md:hidden'>Add</button>
                    <button className='font-semibold text-white hidden md:block'>+ Add New Link</button>
                </div>
            </form>
            <div className='mt-8 cursor-pointer'>
                <div onClick={() => setOpenAdvancedLinkModal(!openAdvancedLinkModal)} className='w-72 h-12 hover:border-2 hover:border-white hover:shadow-md mx-auto hover:shadow-blue-300 bg-[#E7F8FF] rounded-3xl flex justify-center gap-6 items-center'>
                    <h1 className='text-blue-500 font-bold'>+ Advanced Links</h1>
                    <img src={threeSocial} alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center py-8'>
                <img src={uparrow} alt="" />
                <h1 className='text-gray-500 text-xl'>
                    Paste <br />
                    <strong>
                        your first <br /> link </strong>
                    here
                </h1>
            </div>

            <div className='flex justify-center items-center'>
                {
                    openAdvancedLinkModal && <AdvancedLinkModal closeModal={closeModal} />
                }
            </div>
        </section>
    );
};

export default LinksTab;


