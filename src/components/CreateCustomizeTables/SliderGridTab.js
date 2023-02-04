import React, { useState } from 'react';


const SliderGridTab = ({ slideGrid }) => {
    const [sliderTabView, setSliderTabView] = useState(1);
    const [toggle, setToggle] = useState(false);
    const toggleClass = " transform translate-x-5";
    return (
        <div>
            {
                slideGrid && <div className='px-2'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-gray-900 font-semibold'>Show Title</h1>
                            <div className='flex justify-center items-center h-4 w-8 rounded-[50px] bg-orange-600 p-1'>
                                <img src="https://cdn-f.heylink.me/static/media/ic_pro_lock.f3e6f73e.svg" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center ">
                            {/*   Switch Container */}
                            <div
                                className="md:w-12 md:h-6 w-12 h-6 flex items-center bg-red-100 rounded-full p-1 cursor-pointer"
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                            >
                                {/* Switch */}
                                <div
                                    className={
                                        `md:w-6 bg-green-600 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                                                ${toggle && 'bg-white'}` +
                                        (toggle ? null : toggleClass)
                                    }
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='cursor-pointer mt-4 flex items-center flex-wrap md:flex-nowrap gap-6 w-full'>
                        <div onClick={() => setSliderTabView(1)}
                            className={`border-b-2 border-white ${sliderTabView === 1 && 'border-green-500'}`}>
                            <h1 className='mb-2 text-black text-sm'>Description & Link</h1>
                        </div>
                        <div onClick={() => setSliderTabView(2)}
                            className={`border-b-2 border-white ${sliderTabView === 2 && 'border-green-500'}`}>
                            <h1 className='mb-2 text-black text-sm'>Shap & Size</h1>
                        </div>
                        <div onClick={() => setSliderTabView(3)}
                            className={`border-b-2 border-white ${sliderTabView === 3 && 'border-green-500'}`}>
                            <h1 className='mb-2 text-black text-sm'>Appearance</h1>
                        </div>
                    </div>
                    <hr className='border-gray-200' />
                </div>
            }
            {
                !slideGrid && <div className=' px-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-gray-900 font-semibold'>Show Title</h1>
                            <div className='flex justify-center items-center h-4 w-8 rounded-[50px] bg-orange-600 p-1'>
                                <img src="https://cdn-f.heylink.me/static/media/ic_pro_lock.f3e6f73e.svg" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center ">
                            {/*   Switch Container */}
                            <div
                                className="md:w-12 md:h-6 w-12 h-6 flex items-center bg-red-100 rounded-full p-1 cursor-pointer"
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                            >
                                {/* Switch */}
                                <div
                                    className={
                                        `md:w-6 bg-green-600 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                                                                ${toggle && 'bg-white'}` +
                                        (toggle ? null : toggleClass)
                                    }
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer mt-4 flex items-center flex-wrap md:flex-nowrap gap-6 w-full'>
                        <div className='border-b-2 border-green-500'>
                            <h1 className='mb-2 text-black text-sm'>Images</h1>
                        </div>
                        <div className='border-b-2 border-green-500'>
                            <h1 className='mb-2 text-black text-sm'>Shap & Size</h1>
                        </div>
                    </div>
                    <hr className='border-gray-200' />
                </div>
            }
            <div>
                {
                    sliderTabView === 1 && <div>
                        <div className='flex items-center pl-6 mt-6 text-gray-600 cursor-pointer gap-6 h-16 w-full bg-blue-200 rounded-md'>
                            <input checked type="radio" name="forSlider" id="forSlider" />
                            <label className='cursor-pointer' htmlFor="forSlider" id='forSlider'>For Slider</label>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <h1 className='text-gray-600 font-bold'>Add Description</h1>
                            <div className="flex items-center gap-2">
                                <span className='text-gray-500 text-sm font-semibold'>Off</span>
                                <div onClick={() => setToggle(!toggle)}
                                    className={`md:w-12 md:h-6 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${!toggle ? 'bg-gray-300' : 'bg-red-100'}`}>
                                    <div className={`bg-gray-600 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out 
                                            ${toggle && 'bg-green-600'}` + (toggle ? null : toggleClass)}></div>
                                </div>
                                <span className='text-gray-500 text-sm font-semibold'>On</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <h1 className='text-gray-600 font-bold'>Add Link</h1>
                            <div className="flex items-center gap-2">
                                <span className='text-gray-500 text-sm font-semibold'>Off</span>
                                <div onClick={() => setToggle(!toggle)}
                                    className={`md:w-12 md:h-6 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${!toggle ? 'bg-gray-300' : 'bg-red-100'}`}>
                                    <div className={`bg-gray-600 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out 
                                            ${toggle && 'bg-green-600'}` + (toggle ? null : toggleClass)}></div>
                                </div>
                                <span className='text-gray-500 text-sm font-semibold'>On</span>
                            </div>
                        </div>

                        <div className='flex items-center pl-6 mt-6 text-gray-600 cursor-pointer gap-6 h-16 w-full bg-gray-200 rounded-md'>
                            <input disabled type="radio" name="forEveryImage" id="forEveryImage" />
                            <label disabled className='cursor-pointer' htmlFor="forEveryImage" id='forEveryImage'>For Every Image</label>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default SliderGridTab;