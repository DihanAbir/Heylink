import React from 'react';
import { useState } from 'react';
import ColorPicker from '../../../../../components/ColorPicker/ColorPicker';

const PageAppearance = () => {
    const [bgColor, setBgColor] = useState('#EF5F24')
    const [pageTextColor, setPageTextColor] = useState('#282523')
    const [buttonBgColor, setButtonBgColor] = useState('#FFFFFF')
    const [buttonTextColor, setButtonTextColor] = useState('#282523')
    const [openPicker, setOpenPicker] = useState(0)
    return (
        <div className='col-span-2 mb-4 bg-white'>

            <h1 className='text-left font-bold text-black'>PAGE APPEARANCE</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-fit border rounded-3xl p-2 md:p-4'>

                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 1 ? 0 : 1)}>
                        <h1 className='mb-2 text-black font-bold'>Background Color</h1>
                        <div className={`h-16 flex justify-center items-center w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: bgColor }}>
                            <span className='text-white font-bold text-center'>{bgColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 1 && <ColorPicker getColor={setBgColor}
                            closePicker={setOpenPicker} />
                    }
                </div>


                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 2 ? 0 : 2)}>
                        <h1 className='mb-2 text-black font-bold'>Page text color</h1>
                        <div className={`h-16 flex justify-center items-center w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: pageTextColor }}>
                            <span className='text-white font-bold text-center'>{pageTextColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 2 && <ColorPicker getColor={setPageTextColor}
                            closePicker={setOpenPicker} />
                    }
                </div>


                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 3 ? 0 : 3)}>
                        <h1 className='mb-2 text-black font-bold'>Button Background Color</h1>
                        <div className={`h-16 flex justify-center items-center border w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: buttonBgColor }}>
                            <span className='text-white font-bold text-center'>{buttonBgColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 3 && <ColorPicker getColor={setButtonBgColor}
                            closePicker={setOpenPicker} />
                    }
                </div>


                <div className='relative'>
                    <div onClick={() => setOpenPicker(openPicker === 4 ? 0 : 4)}>
                        <h1 className='mb-2 text-black font-bold'>Button Text Color</h1>
                        <div className={`h-16 flex justify-center items-center border w-full bg-gray-400 rounded-md `}
                            style={{ backgroundColor: buttonTextColor }}>
                            <span className='text-white font-bold text-center'>{buttonTextColor}</span>
                        </div>
                    </div>
                    {
                        openPicker === 4 && <ColorPicker getColor={setButtonTextColor}
                            closePicker={setOpenPicker} />
                    }
                </div>

            </div>


        </div>
    );
};

export default PageAppearance;