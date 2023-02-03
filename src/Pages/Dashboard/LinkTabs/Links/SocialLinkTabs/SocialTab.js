import React, { useEffect, useRef, useState } from 'react';
import arrowDown from '../../../../../assets/icons/social-tab-icons/arrow-down.svg'
import empty from '../../../../../assets/icons/social-tab-icons/empty.svg'
import AllSocialLinks from '../../../../../components/CreateCustomizeTables/AllSocialLinks';


const socials = [
    {
        id: '1',
        name: 'Facebook',
        url: 'https://facebook.com/username',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '2',
        name: 'WhatsUp',
        url: 'https://whatsup.com/username',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        url: 'https://linkedin.com/username',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        url: 'https://linkedin.com/username',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        url: 'https://linkedin.com/username',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        url: 'https://linkedin.com/username',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '3',
        name: 'LinkedIn',
        url: 'https://linkedin.com/username',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
]

const SocialTab = () => {
    const [selectedSocial, setSelectedSocial] = useState('Facebook')
    const [usernamePlacehoder, setUsernamePlaceholder] = useState('https://facebook.com/username')
    const [socialImg, setSocialImg] = useState('https://cdn-icons-png.flaticon.com/128/5968/5968764.png')
    const [search, setSearch] = useState(false)
    const [allSocialLinks, setAllSocialLiks] = useState([])
    const [inputError, setInputError] = useState('')
    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setSearch(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    const handleSocialSet = (url, name, img) => {
        setSelectedSocial(name)
        setUsernamePlaceholder(url)
        setSocialImg(img)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const username = event.target.username.value
        setAllSocialLiks([...allSocialLinks, username])
        event.target.reset()
        setInputError('')
    }
    return (
        <section className='min-h-screen'>
            <div className='px-2 w-full lg:w-[960px] mx-auto'>
                <form onSubmit={handleSubmit}
                    className='grid md:grid-cols-3 gap-6'>
                    <div className='relative'>
                        <div onClick={() => setSearch(!search)}
                            className='relative border-b flex justify-between items-center px-4 h-14 w-full bg-white'>
                            <div className='flex items-center gap-4'>
                                <img className='w-6' src={socialImg} alt="" />
                                <h1>{selectedSocial}</h1>
                            </div>
                            <div>
                                <img className='w-3' src={arrowDown} alt="" />
                            </div>
                        </div>
                        {
                            search && <div ref={dropdownRef}
                                className="w-full top-12 border-x border-b right-0 cursor-pointer absolute z-50 border bg-gray-50 shadow">
                                <div className='p-3'>
                                    <div className='w-full h-12 border border-blue-600 bg-gray-200'>
                                        <input className='w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none' type="text" placeholder='Start typing or select...' />
                                    </div>
                                </div>
                                <div className='w-full h-44 border-t overflow-y-auto bg-white'>
                                    {
                                        socials && socials.map(s => <div
                                            onClick={() => handleSocialSet(s.url, s.name, s.img)}
                                            className='h-8 w-full flex items-center gap-4 mb-2 hover:bg-blue-200 px-2'>
                                            <img className='w-6' src={s.img} alt="" />
                                            <h1 className='text-gray-900'>{s.name}</h1>
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <div className='rounded-[50px] h-14 w-full bg-gray-200'>
                        <input onChange={e => setInputError(e.target.value)}
                            className='w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none' name='username' type="text" placeholder={usernamePlacehoder} />
                    </div>
                    {
                        inputError ? <div className='flex justify-center items-center gap-1 px-4 rounded-[50px] h-14 w-56 mx-auto md:w-full bg-blue-600'>
                            <button className='text-white font-semibold'>+ Add</button>
                            <button className='text-white font-semibold'>{selectedSocial}</button>
                        </div>
                            :
                            <div className='flex justify-center items-center gap-1 px-4 rounded-[50px] h-14 w-56 mx-auto md:w-full bg-[#9FC1EA]'>
                                <button disabled className='text-white font-semibold'>+ Add</button>
                                <button disabled className='text-white font-semibold'>{selectedSocial}</button>
                            </div>
                    }
                </form>

            </div>
            <div>
                {
                    allSocialLinks && allSocialLinks.map(socialLink => <AllSocialLinks socialLink={socialLink} />)
                }
                {
                    allSocialLinks.length === 0 && <div className='flex flex-col justify-center items-center mt-12'>
                        <img className='md:w-96' src={empty} alt="" />
                        <p className='text-center mt-6 text-gray-400'>You haven't added any Social Links</p>
                    </div>
                }
            </div>
        </section>
    );
};

export default SocialTab;