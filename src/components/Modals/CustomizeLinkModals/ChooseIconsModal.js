import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const icons = [
    { id: "1", url: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png" },
    { id: "2", url: "https://cdn-icons-png.flaticon.com/128/4138/4138124.png" },
    { id: "3", url: "https://cdn-icons-png.flaticon.com/128/3670/3670147.png" },
    { id: "4", url: "https://cdn-icons-png.flaticon.com/128/149/149071.png" },
    { id: "5", url: "https://cdn-icons-png.flaticon.com/128/3670/3670051.png" },
    { id: "6", url: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png" },
    { id: "7", url: "https://cdn-icons-png.flaticon.com/128/3670/3670151.png" },
    { id: "8", url: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" },
    // { id: "9", url: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" },
    // { id: "10", url: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" },
    // { id: "11", url: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" },
    // { id: "12", url: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" },
]

const ChooseIconsModal = ({ closeModal }) => {
    const [selectedIcon, setSelectedIcon] = useState('')

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(false)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div className='fixed z-40 min-h-screen min-w-full left-0 right-0 top-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center'>

            <div ref={modalRef} className='z-500 w-80 h-fit p-4 flex flex-col justify-center items-center gap-4 rounded-xl border bg-white'>
                <div className='grid grid-cols-4 gap-6 bg-white '>
                    {
                        icons?.map((icon, i) => (
                            <button key={i} onClick={() => setSelectedIcon(icon?.url)}
                                className={`w-14 h-14 rounded-full
                            ${selectedIcon === icon?.url && "border-4 border-blue-600"}`}>
                                <img className='w-full h-full object-cover rounded-full' src={icon?.url} alt="" />
                            </button>
                        ))
                    }
                </div>

                {
                    selectedIcon ? <button className='text-white text-xl font-semibold flex justify-center items-center w-52 h-12 rounded-3xl bg-[#215FC1]'>
                        <span>Choose</span>
                    </button>
                        :
                        <button disabled className='text-white cursor-not-allowed text-xl font-semibold flex justify-center items-center w-52 h-12 rounded-3xl bg-[#84aff3]'>
                            <span>Choose</span>
                        </button>
                }
            </div>

        </div>
    );
};

export default ChooseIconsModal;