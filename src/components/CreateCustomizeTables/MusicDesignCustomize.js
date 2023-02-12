import React, { useEffect, useState } from 'react';
import downArrow from '../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../assets/icons/link-customize-icons/up-arrow.svg'
import deletes from '../../assets/icons/link-customize-icons/delete.svg'
import swap from '../../assets/icons/link-customize-icons/swap.svg'
import edit from '../../assets/icons/link-customize-icons/edit.svg'
import arrowDown from '../../assets/icons/social-tab-icons/arrow-down.svg'
import blueRight from '../../assets/icons/blue-right.png'
import { useRef } from 'react';
import DeleteModal from '../Modals/CommonModals/DeleteModal';
import ProModal from '../Modals/CommonModals/ProModal';
import ProButton from '../Buttons/ProButton';
import ProToggleSwitch from '../ToggleSwitch/ProToggleSwitch';

const musics = [
    {
        id: '1',
        name: 'Anghami',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '2',
        name: 'Qobuz',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '3',
        name: 'Apple Music',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '4',
        name: 'iTunes Store',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
        id: '5',
        name: 'KKBOX',
        img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    }
]

const MusicDesignCustomize = ({ url }) => {
    const [open, setOpen] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteModal2, setDeleteModal2] = useState(false)
    const [openProModal, setOpenProModal] = useState(false)
    const [descriptionSwitchPermit, setDescriptionSwitchPermit] = useState(false)
    const [descriptionSwitch, setDescriptionSwitch] = useState(false)
    const [mainToggle, setMainToggle] = useState(false);
    const [openInputChange1, setOpenInputChange1] = useState(false);
    const [openInputChange2, setOpenInputChange2] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newURL, setNewURL] = useState('');

    const [selectedMusicCtg, setSelectedMusicCtg] = useState('')
    const [musicImg, setMusicImg] = useState('')
    const [musicLink, setMusicLink] = useState('')
    const [search, setSearch] = useState(false)

    console.log(selectedMusicCtg, musicImg)

    const handleTitleUpdate = () => {
        setNewTitle('')
    }

    const handleURLUpdate = () => {
        setNewURL('')
    }

    const handleAddMusicData = (name, img) => {
        setSelectedMusicCtg(name)
        setMusicImg(img)
    }

    const handleAddStore = (e) => {
        e.preventDefault()
        console.log(musicLink)
        e.target.reset()
    }

    let editRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!editRef.current.contains(e.target)) {
                setOpenInputChange1(false);
                setOpenInputChange2(false);
                search(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <>
            <div className='relative w-full my-6 border border-gray-200 rounded-md cursor-pointer'>
                <div className='relative flex justify-end mr-4 mt-4'>
                    <img onClick={() => setDeleteModal(!deleteModal)} className='w-4' src={deletes} alt="" />
                    {
                        deleteModal && <DeleteModal closeModal={setDeleteModal} />
                    }
                </div>

                <div className='h-28 flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6 mb-4'>
                    <div className='flex-grow flex items-center gap-4'>
                        <div>
                            <img className='w-5' src={swap} alt="" />
                        </div>

                        <div ref={editRef} className='flex-grow flex items-center gap-4'>
                            <div className='w-16 h-16 md:w-24 md:h-24'>
                                <img className='w-full h-full' src="https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-Tropical-island-with-palms..jpg" alt="" />
                            </div>
                            <div className='flex-grow'>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <input onChange={(e) => setNewTitle(e.target.value)}
                                            className={`mr-3 pr-3 rounded w-full focus:outline-none text-gray-700 font-bold $${openInputChange1 ? 'bg-blue-100 border border-blue-600' : 'border-none cursor-pointer'}`} type="text" disabled={!openInputChange1} defaultValue='FARXIYA KABAYARE DHAKAC' name='' />
                                        {
                                            newTitle ? <img onClick={() => handleTitleUpdate()} className='w-3 cursor-pointer' src={blueRight} alt="" />
                                                :
                                                <img onClick={() => setOpenInputChange1(!openInputChange1)} className='w-3 cursor-pointer' src={edit} alt="" />
                                        }
                                    </div>
                                    <p className='text-sm text-gray-500'>Title</p>
                                </div>

                                <div>
                                    <div className='flex justify-between items-center'>
                                        <input onChange={(e) => setNewURL(e.target.value)}
                                            className={`mr-3 pr-3 rounded w-full focus:outline-none text-gray-700 font-bold $${openInputChange2 ? 'bg-blue-100 border border-blue-600' : 'border-none cursor-pointer'}`} type="text" disabled={!openInputChange2} defaultValue={url} name='address' />
                                        {
                                            newURL ? <img onClick={() => handleURLUpdate()} className='w-3 cursor-pointer' src={blueRight} alt="" />
                                                :
                                                <img onClick={() => setOpenInputChange2(!openInputChange2)} className='w-3 cursor-pointer' src={edit} alt="" />
                                        }
                                    </div>
                                    <p className='text-sm text-gray-500'>Scan Source</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setMainToggle(!mainToggle)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                ${mainToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                ${mainToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    open && <div className='py-3 px-4'>
                        <div className='flex items-center gap-6'>
                            <div className='w-16 h-16 md:w-24 md:h-24'>
                                <img className='w-full h-full' src="https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-Tropical-island-with-palms..jpg" alt="" />
                            </div>
                            <div className='relative'>
                                <button onClick={() => setOpenProModal(!openProModal)} className='flex justify-center items-center w-40 h-12 border-2 border-blue-600 rounded-[50px]'>
                                    <h1 className='text-blue-600 font-semibold'>Update Cover</h1>
                                </button>
                                {
                                    openProModal && <ProModal setCloseModal={setOpenProModal} />
                                }
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-4 mb-4'>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Add Description</h1>
                                    <ProButton />
                                </div>
                                <p className='text-gray-500 text-sm'>Provide a short description about this track or our new album</p>
                            </div>

                            {
                                descriptionSwitchPermit ? <div className="flex flex-col justify-center items-center ">
                                    <div onClick={() => setDescriptionSwitch(!descriptionSwitch)}
                                        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                ${descriptionSwitch ? 'bg-red-200' : 'bg-gray-300'}`}>
                                        <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                ${descriptionSwitch ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    <ProToggleSwitch />
                            }
                        </div>

                        <div className='flex justify-between items-center mb-4'>
                            <div className='flex-grow flex items-center gap-4'>
                                <div className='w-6 h-6 bg-blue-600 rounded-full flex justify-center items-center'>
                                    <svg className='w-4 text-white p-1' viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.35471 4.34855L2.16096 0.649984C1.6365 0.33677 0.964355 0.715519 0.964355 1.32963V8.7157C0.964355 9.33284 1.63775 9.70641 2.16096 9.39623L8.35382 5.70837C8.86846 5.40141 8.86739 4.65659 8.35471 4.34855Z"></path></g></svg>
                                </div>
                                <input onChange={(e) => setNewTitle(e.target.value)}
                                    className={`mr-3 pr-3 rounded w-full focus:outline-none text-gray-700 font-bold $${openInputChange1 ? 'bg-blue-100 border border-blue-600' : 'border-none cursor-pointer'}`} type="text" disabled={!openInputChange1} defaultValue={url} name='' />
                            </div>
                            <div className='flex items-center gap-2'>
                                {
                                    newTitle ? <img onClick={() => handleTitleUpdate()} className='w-3 cursor-pointer' src={blueRight} alt="" />
                                        :
                                        <img onClick={() => setOpenInputChange1(!openInputChange1)} className='w-3 cursor-pointer' src={edit} alt="" />
                                }
                                <button className='w-16 h-8 bg-white border rounded-3xl flex justify-center items-center'><span>Play</span></button>
                                <div className='relative'>
                                    <img onClick={() => setDeleteModal2(!deleteModal2)} className='w-4' src={deletes} alt="" />
                                    {
                                        deleteModal2 && <DeleteModal closeModal={setDeleteModal2} />
                                    }
                                </div>
                            </div>
                        </div>


                        <form onSubmit={handleAddStore}
                            className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex-grow relative'>
                                    <div onClick={() => setSearch(!search)}
                                        className='relative border-b flex justify-between items-center px-4 h-14 w-full bg-white'>
                                        <div className='flex items-center gap-4'>
                                            <img className='w-6' src={musicImg && musicImg} alt="" />
                                            <h1>{selectedMusicCtg}</h1>
                                        </div>
                                        <div>
                                            <img className='w-3' src={arrowDown} alt="" />
                                        </div>
                                    </div>
                                    {
                                        search && <div ref={editRef}
                                            className="w-full top-12 border-x border-b right-0 cursor-pointer absolute z-50 border bg-gray-50 shadow">
                                            <div className='p-3'>
                                                <div className='w-full h-12 border border-blue-600 bg-gray-200'>
                                                    <input className='w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none' type="text" placeholder='Start typing or select...' />
                                                </div>
                                            </div>
                                            <div className='w-full h-44 border-t overflow-y-auto bg-white'>
                                                {
                                                    musics && musics.map(m => <div
                                                        onClick={() => handleAddMusicData(m.name, m.img)}
                                                        className='h-8 w-full flex items-center gap-4 mb-2 hover:bg-blue-200 px-2'>
                                                        <img className='w-6' src={m.img} alt="" />
                                                        <h1 className='text-gray-900'>{m.name}</h1>
                                                    </div>)
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>

                                {musicLink ? <div className='flex justify-center items-center gap-1 px-4 rounded-[50px] h-10 md:h-14 w-26 md:w-56 bg-blue-600'>
                                    <button type='submit' className='text-white font-semibold'>Add Store</button>
                                </div>
                                    :
                                    <div className='cursor-wait flex justify-center items-center gap-1 px-4 rounded-[50px] h-10 md:h-14 w-26 md:w-56 bg-gray-200'>
                                        <button disabled className='text-white font-semibold'>Add Store</button>
                                    </div>
                                }
                            </div>
                            {
                                selectedMusicCtg && <div className='flex items-center gap-4'>
                                    <img className='w-6' src={musicImg} alt="" />
                                    <input onChange={(e) => setMusicLink(e.target.value)} className='w-full px-2 rounded-3xl h-12 bg-gray-200 focus:bg-red-100 focus:outline-none border-none' type="text" name='musicLink' placeholder='Past Your Link Here' />
                                </div>
                            }
                        </form>
                    </div>

                }

                {/* -----------toggler button start----------- */}
                <div onClick={() => setOpen(!open)}
                    className='cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center'>
                    <img className='w-4' src={open ? upArrow : downArrow} alt="" />
                </div>
                {/* -----------toggler button end----------- */}
            </div>
        </>
    );
};

export default MusicDesignCustomize;