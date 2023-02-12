import React, { useState } from 'react';
import ColorPicker from '../../../ColorPicker/ColorPicker';

const Apearance = () => {
    const [desAndTitleColor, setDesAndTitleColor] = useState('');
    const [linkTextColor, setLinkTextColor] = useState('');
    const [btnBgColor, setBtnBgColor] = useState('');
    const [showDesAndTitleColor, setShowDesAndTitleColor] = useState(false);
    const [showLinkTextColor, setShowLinkTextColor] = useState(false);
    const [showBtnBgColor, setShowBtnBgColor] = useState(false);


    return (
        <section className='flex flex-col items-start gap-4 mt-4'>
            <div className='flex items-center gap-4'>
                <div className='relative'>
                    <div onClick={() => setShowDesAndTitleColor(!showDesAndTitleColor)}>
                        <h1 className='mb-2'>Title & Description Color</h1>
                        <div className={`h-10 w-full md:w-56 bg-yellow-600 rounded-md `}
                            style={{ backgroundColor: desAndTitleColor }} ></div>
                    </div>
                    {
                        showDesAndTitleColor && <ColorPicker getColor={setDesAndTitleColor}
                            closePicker={setShowDesAndTitleColor} />
                    }
                </div>

                <div className='relative'>
                    <div onClick={() => setShowLinkTextColor(!showLinkTextColor)}>
                        <h1 className='mb-2'>Link Text Color</h1>
                        <div className={`h-10 w-full md:w-56 bg-gray-400 rounded-md `}
                            style={{ backgroundColor: linkTextColor }}></div>
                    </div>
                    {
                        showLinkTextColor && <ColorPicker getColor={setLinkTextColor}
                            closePicker={setShowLinkTextColor} />
                    }
                </div>
            </div>
            <div className='relative'>
                <div onClick={() => setShowBtnBgColor(!showBtnBgColor)}>
                    <h1 className='mb-2'>Button Background Color</h1>
                    <div className={`h-10 w-full md:w-56 bg-blue-400 rounded-md `}
                        style={{ backgroundColor: btnBgColor }}></div>
                </div>
                {
                    showBtnBgColor && <ColorPicker getColor={setBtnBgColor}
                        closePicker={setShowBtnBgColor} />
                }
            </div>
        </section>
    );
};

export default Apearance;