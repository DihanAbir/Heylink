import React, { useState } from 'react';
import link from '../../../../../assets/icons/link.svg'
import threeSocial from '../../../../../assets/icons/three-social.svg'
import uparrow from '../../../../../assets/icons/gif-images/up-arrow.gif'

const MusicTab = () => {
    const [errorUrl, setErrorUrl] = useState('')
    const [allUrls, setAllUrls] = useState([])

    const handleUrl = (event) => {
        event.preventDefault()
        const url = event.target.url.value
        setAllUrls([...allUrls, url])
        event.target.reset()
        setErrorUrl('')
    }

    const closeModal = () => {
    }
    return (
        <section className='min-h-screen'>
            <div className='md:px-6 w-full lg:w-[980px] mx-auto'>
                <form onSubmit={handleUrl} className='flex justify-between w-full mx-auto' >
                    <div className='flex-grow flex items-center bg-gray-200 rounded-3xl'>
                        <div className='cursor-pointer w-12 py-3 border-r border-gray-400 flex justify-center items-center'>
                            <img src='https://cdn-f.heylink.me/static/media/ic_music_note.c09fa0ce.svg' alt="" />
                        </div>
                        <input onChange={e => setErrorUrl(e.target.value)}
                            className='flex-grow focus:outline-none bg-gray-200 lg:rounded-r-3xl py-3 px-2 w-full border-none' type="text" name='url' placeholder='Paste Your Link Here' />
                    </div>
                    {
                        errorUrl ? <div className='bg-blue-600 lg:ml-6 rounded-r-3xl lg:rounded-3xl flex justify-center items-center px-3 lg:px-6'>
                            <button type='submit' className='font-semibold text-white md:hidden'>Add</button>
                            <button type='submit' className='font-semibold text-white hidden md:block'>+ Add New Link</button>
                        </div>
                            :
                            <div className='bg-blue-300 lg:ml-6 rounded-r-3xl lg:rounded-3xl flex justify-center items-center px-3 lg:px-6'>
                                <button disabled className='font-semibold text-white md:hidden'>Add</button>
                                <button disabled className='font-semibold text-white hidden md:block'>+ Add New Link</button>
                            </div>
                    }
                </form>
                <div className='flex items-center rounded-md w-full h-12 bg-red-100 gap-4 px-4 mt-8'>
                    <div className='flex justify-center items-center w-5 h-5 bg-red-600 rounded-full'><span className='text-white'>!</span></div>
                    <span className='text-red-400 text-sm'>Oops… please add valid music link / ISRC</span>
                </div>
                <div className='flex items-center rounded-md w-full h-28 md:h-14 bg-gray-200 gap-4 px-4 mt-8'>
                    <div className='flex justify-center items-center w-5 h-5 bg-gray-400 rounded-full'><span className='text-white'>!</span></div>
                    <span className='text-gray-600 text-sm'>We support <strong>integration</strong> with <strong>Apple Music</strong>, <strong>iTunes</strong>, <strong>Spotify</strong>, <strong>Deezer</strong> and <strong>YouTube</strong>. You can also add manually <strong>Tidal, Soundcloud, Pandora, Audiomack</strong> .</span>
                </div>

                <div className='flex justify-center items-center py-8'>
                    <img src={uparrow} alt="" />
                    <h1 className='text-gray-500 text-xl'>
                        Paste <br />
                        <strong>
                            your first music <br /> link </strong>
                        here
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default MusicTab;