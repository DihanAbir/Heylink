import React, { useState } from 'react';

const DescriptionAndLink = () => {
    const [addLinkToggle, setAddLinkToggle] = useState(false);
    const [addDesToggle, setAddDesToggle] = useState(false);
    return (
        <div>
            <div className='flex items-center pl-6 mt-6 text-gray-600 cursor-pointer gap-6 h-16 w-full bg-blue-200 rounded-md'>
                <input checked type="radio" name="forSlider" id="forSlider" />
                <label className='cursor-pointer' htmlFor="forSlider" id='forSlider'>For Slider</label>
            </div>
            <div className='flex justify-between items-center mt-6'>
                <h1 className='text-gray-600 font-bold'>Add Description</h1>
                <div className="flex items-center gap-2">
                    <span className='text-gray-500 text-sm font-semibold'>Off</span>
                    <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setAddDesToggle(!addDesToggle)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                ${addDesToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                ${addDesToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                    <span className='text-gray-500 text-sm font-semibold'>On</span>
                </div>
            </div>

            {
                addDesToggle && <div className='w-full'>
                    <div className='w-full mb-4'>
                        <input className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='imageSliderTitle' id='imageSliderTitle' placeholder='Image Slider Title' />
                        <label className='text-gray-500' htmlFor="imageSliderTitle">Title</label>
                    </div>
                    <div className='w-full mb-4'>
                        <input className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='imageSliderDescription' id='imageSliderDescription' placeholder='Image Slider Description' />
                        <label className='text-gray-500' htmlFor="imageSliderDescription">Description</label>
                    </div>
                </div>
            }




            <div className='flex justify-between items-center mt-4'>
                <h1 className='text-gray-600 font-bold'>Add Link</h1>
                <div className="flex items-center gap-2">
                    <span className='text-gray-500 text-sm font-semibold'>Off</span>
                    <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setAddLinkToggle(!addLinkToggle)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                ${addLinkToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
                ${addLinkToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                    <span className='text-gray-500 text-sm font-semibold'>On</span>
                </div>
            </div>


            {
                addLinkToggle && <div className='w-full'>
                    <div className='w-full mb-4'>
                        <input className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='imageSliderLinkText' id='imageSliderLinkText' placeholder='Image Slider Link Text' />
                        <label className='text-gray-500' htmlFor="imageSliderLinkText">Link Text</label>
                    </div>
                    <div className='w-full mb-4'>
                        <input className='w-full h-10 border-b border-gray-400 focus:outline-none' type="text" name='imageSliderLinkURL' id='imageSliderLinkURL' placeholder='Image Slider Link URL' />
                        <label className='text-gray-500' htmlFor="imageSliderLinkURL">Link URL</label>
                    </div>
                </div>
            }


            <div className='flex items-center pl-6 mt-6 text-gray-600 cursor-pointer gap-6 h-16 w-full bg-gray-200 rounded-md'>
                <input disabled type="radio" name="forEveryImage" id="forEveryImage" />
                <label disabled className='cursor-pointer' htmlFor="forEveryImage" id='forEveryImage'>For Every Image</label>
            </div>
        </div>
    );
};

export default DescriptionAndLink;