import React, { useEffect, useRef, useState } from 'react';
import close from '../../../assets/icons/link-customize-icons/close.svg'
import lock from '../../../assets/icons/link-customize-icons/pro-lock.svg'
import FastLinkProModal from './FastLinkProModal';

const ImageUploadModal = ({ closeModal }) => {
    const [openFastLinkModal, setOpenFastLinkModal] = useState(false)
    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    const closeModal2 = () => {
        setOpenFastLinkModal(false)
    }
    return (
        <div ref={dropdownRef}
            className="cursor-pointer absolute border -bottom-8 z-50 mt-2 rounded-md bg-gray-50 shadow">
            <div className='p-3'>
                <div className='w-full flex justify-end'>
                    <img onClick={() => closeModal(false)} className='w-3' src={close} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-6 mt-3'>
                    <div className="relative w-24 h-24 flex justify-center items-center bg-gray-200 hover:bg-blue-600 rounded-md">
                        <label className="cursor-pointer flex justify-center items-center">
                            <div className=" relative flex cursor-pointer items-center justify-center">
                                <span className='p-2 hover:text-white text-center text-gray-600 text-sm'>Upload Your own Image</span>
                                <input type="file" name='image' className="w-6 absolute opacity-0 cursor-pointer" />
                            </div>
                        </label>
                    </div>
                    <div onClick={() => setOpenFastLinkModal(!openFastLinkModal)}
                        className="relative w-24 h-24 flex justify-center items-center bg-gray-200 rounded-md">
                        <label className="cursor-pointer flex justify-center items-center">
                            <div className=" relative flex cursor-pointer items-center justify-center">
                                <span className='p-2 hover:text-white text-center text-gray-600 text-sm'>Choose from 700+ icons</span>
                                <input type="file" name='image' className="w-6 absolute opacity-0 cursor-pointer" />
                            </div>
                        </label>
                        <div className='absolute flex justify-center items-center w-24 h-24'>
                            <div className='bg-white h-8 w-8 p-1 rounded-full'>
                                <img className='w-full' src={lock} alt="" />
                            </div>
                        </div>
                        <div className='absolute -top-4 right-6 flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]'>
                            <img className='w-7' src={lock} alt="" />
                        </div>
                    </div>
                </div>

                {
                    openFastLinkModal && <FastLinkProModal closeModal2={closeModal2} />
                }
            </div>
        </div>
    );
};

export default ImageUploadModal;