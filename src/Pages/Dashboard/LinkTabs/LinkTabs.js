import React, { useEffect, useRef, useState } from 'react';

const LinkTabs = () => {
    const [viewTab, setViewTab] = useState(1)
    const [viewTabsDropdown, setViewTabsDropdown] = useState(false)

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setViewTabsDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section ref={dropdownRef}>
            <div className='max-w-[1440px] mx-auto'>
                <div className='flex items-center md:flex-wrap gap-5 md:gap-10 px-4 md:px-12'>
                    <div onClick={() => setViewTab(1)}
                        className={`text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 1 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Links</button>
                    </div>
                    <div onClick={() => setViewTab(2)}
                        className={`text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 2 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Appearance</button>
                    </div>
                    <div onClick={() => setViewTab(3)}
                        className={`text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 3 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Settings</button>
                    </div>
                    <div onClick={() => setViewTab(4)}
                        className={`text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 4 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>PRO</button>
                    </div>

                    {/* ------- More button clcik to dropdown show--------- start */}
                    <div onClick={() => setViewTabsDropdown(!viewTabsDropdown)}
                        className='relative md:hidden text-blue-500 pb-2 pt-2 border-b-4 border-white'>
                        <button className=''>More</button>
                        {
                            viewTabsDropdown && <div class="absolute right-0 z-10 mt-2 w-60 rounded-md bg-gray-50 shadow">
                                <div className='p-3'>
                                    <div onClick={() => setViewTab(5)}
                                        className='h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Analytics</button>
                                    </div>

                                    <div onClick={() => setViewTab(6)}
                                        className='relative h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Earn</button>

                                        {/* beta budget */}
                                        <div className='absolute -top-1 left-6 bg-blue-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                                            <span className='text-[8px] text-white'>BETA</span>
                                        </div>
                                    </div>

                                    <div onClick={() => setViewTab(7)}
                                        className='h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Store</button>
                                    </div>

                                    <div onClick={() => setViewTab(8)}
                                        className='h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Signups</button>
                                    </div>
                                    <div onClick={() => setViewTab(9)}
                                        className='h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Messages</button>
                                    </div>

                                    <div onClick={() => setViewTab(10)}
                                        className='relative h-8 flex items-center justify-start hover:bg-gray-200 rounded-md text-gray-500 p-2 mb-2'>
                                        <button className=''>Earn</button>

                                        {/* beta budget */}
                                        <div className='absolute -top-1 left-6 bg-green-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                                            <span className='text-[8px] text-white'>BETA</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }

                    </div>
                    {/* ------- More button clcik to dropdown show--------- end */}

                    {/* -------only md + device show--------- start */}
                    <div onClick={() => setViewTab(5)}
                        className={`hidden md:block text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 5 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Analytics</button>
                    </div>
                    <div onClick={() => setViewTab(6)}
                        className={`relative hidden md:block text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 6 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Earn</button>
                        {/* beta budget */}
                        <div className='absolute top-0 -right-4 bg-blue-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                            <span className='text-[8px] text-white'>BETA</span>
                        </div>
                    </div>
                    <div onClick={() => setViewTab(7)}
                        className={`hidden md:block text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 7 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Store</button>
                    </div>
                    <div onClick={() => setViewTab(8)}
                        className={`hidden md:block text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 8 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Signups</button>
                    </div>
                    <div onClick={() => setViewTab(9)}
                        className={`hidden md:block text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 9 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Messages</button>
                    </div>
                    <div onClick={() => setViewTab(10)}
                        className={`relative hidden md:block text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${viewTab === 10 && ' border-green-600 text-blue-900 duration-300'}`}>
                        <button className=''>Integrations</button>
                        {/* new budget */}
                        <div className='absolute top-0 -right-4 bg-green-400 h-4 w-8 flex justify-center items-center rounded-[50px]'>
                            <span className='text-[8px] text-white'>NEW</span>
                        </div>
                    </div>
                    {/* -------only md + device show--------- end */}

                </div>
                <hr className='border-gray-300' />
            </div>
        </section>
    );
};

export default LinkTabs;