import React, { useState } from 'react';
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'

const Shortcut = () => {
    const [open, setOpen] = useState(true)
    const [shortcutToggle, setShortcutToggle] = useState(true)
    return (
        <section id='shortcut' className='mb-4 md:col-span-2'>
            <div className='flex items-center justify-between'>
                <h1 onClick={() => setOpen(!open)} className='text-left font-semibold text-blue-900 mb-2'>SHORTCUT</h1>
                {
                    open ? <img onClick={() => setOpen(!open)} src={arrowDown} alt="" />
                        :
                        <img onClick={() => setOpen(!open)} src={arrowRight} alt="" />
                }
            </div>
            {
                open && <div className='flex justify-between items-center gap-4 px-2 border rounded-xl w-full h-20'>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-600'>Add Shortcut to HeyLink.me page</span>
                        <h1 className='w-5 h-5 flex justify-center items-center rounded-full bg-gray-400'><span className='p-1 text-white'>!</span></h1>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className='text-gray-500 text-sm font-semibold'>Off</span>
                            <div className="flex flex-col justify-center items-center ">
                                <div onClick={() => setShortcutToggle(!shortcutToggle)}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                ${shortcutToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                                    <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                ${shortcutToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                    </div>
                                </div>
                            </div>
                            <span className='text-gray-500 text-sm font-semibold'>On</span>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default Shortcut;