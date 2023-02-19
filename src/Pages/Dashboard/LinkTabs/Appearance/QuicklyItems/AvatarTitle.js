import React, { useContext, useEffect, useRef, useState } from 'react';
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import edit from '../../../../../assets/icons/appearance-tab-icons/edit.svg'
import right from '../../../../../assets/icons/appearance-tab-icons/blue-right.png'
import avatar from '../../../../../assets/avatars/user-avatar.png'
import ProButton from '../../../../../components/Buttons/ProButton';
import ProToggleSwitch from '../../../../../components/ToggleSwitch/ProToggleSwitch';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const AvatarTitle = () => {
    const { userData } = useContext(AuthContext)
    const [open, setOpen] = useState(true)
    const [inputChange, setInputChange] = useState(false)
    const [newProfileTitle, setNewProfileTitle] = useState('')
    const [viewModal, setViewModal] = useState(false)
    const token = localStorage.getItem("HeyLinkToken");
    // console.log(user);


    const handleUpdate = () => {
        const profileTitle = { profiletitle: newProfileTitle }
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/user/${userData?._id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(profileTitle),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.acknowledged) {
                    toast.success('Profile Title Updated')
                    setNewProfileTitle('')
                    setInputChange(false)
                }
            });
    }

    // handle profile image update
    const handleProfileImageUpdate = (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        const url = `${process.env.REACT_APP_API_KEY}/app/v1/user/${userData?._id}`;
        fetch(url, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.acknowledged) {
                    toast.success('Profile Image Updated')
                }
            });
    }


    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                setInputChange(false);
                setViewModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section id='avatar-Title' className='mb-4'>
            <div className='flex items-center justify-between'>
                <h1 onClick={() => setOpen(!open)} className='text-left font-semibold text-blue-900 mb-2'>AVATAR & TITLE</h1>
                {
                    open ? <img onClick={() => setOpen(!open)} src={arrowDown} alt="" />
                        :
                        <img onClick={() => setOpen(!open)} src={arrowRight} alt="" />
                }
            </div>
            {
                open && <div className='p-2 md:p-4 border rounded-xl w-full h-full'>
                    <div className='flex items-center gap-4'>
                        <img className='w-16 h-16 rounded-full'
                            src={userData?.photoURL ? userData?.image : avatar} alt="" />

                        <button className='relative flex justify-center items-center cursor-pointer w-36 h-10 rounded-3xl text-white bg-blue-600'>
                            <h1 className='cursor-pointer'>Upload Avatar</h1>
                            <input onChange={handleProfileImageUpdate} className='w-full h-full opacity-0 absolute cursor-pointer' type="file" name="image" id="" />
                        </button>
                    </div>
                    <div ref={modalRef} className='mt-6'>
                        <div className='flex-grow flex items-center gap-1'>
                            <input onChange={(e) => setNewProfileTitle(e.target.value)}
                                className={`bg-white flex-grow focus:outline-none border-none 
                                ${inputChange && 'bg-blue-200'}`} disabled={!inputChange} type="text"
                                defaultValue={userData?.profiletitle ? userData.profiletitle : ''} placeholder='Add Profile Title' />
                            {
                                newProfileTitle ? <>
                                    {
                                        newProfileTitle !== userData?.profiletitle ? <img onClick={() => handleUpdate()} className='w-4' src={right} alt="" />
                                            :
                                            <img onClick={() => setInputChange(!inputChange)} className='w-4' src={edit} alt="" />
                                    }
                                </>
                                    :
                                    <img onClick={() => setInputChange(!inputChange)} className='w-4' src={edit} alt="" />
                            }
                        </div>
                        <h1 className='text-sm text-gray-500 flex items-center gap-2 mt-2'>
                            <span>Profile Title</span>
                            <h1 className='flex justify-center items-center w-4 h-4 font-bold rounded-full bg-gray-300 text-white'><span>!</span></h1></h1>
                    </div>

                    <div className='mt-6'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-left font-bold text-black'>Hide Avatar</h1>
                            <div className='relative'>
                                <ProToggleSwitch />
                                <div className='absolute -top-5 -right-2'>
                                    <ProButton />
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-10'>
                            <h1 className='text-left font-bold text-black'>Hide Title</h1>
                            <div className='relative'>
                                <ProToggleSwitch />
                                <div className='absolute -top-5 -right-2'>
                                    <ProButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default AvatarTitle;