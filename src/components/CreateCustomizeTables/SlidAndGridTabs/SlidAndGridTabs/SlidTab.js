import React, { useState } from 'react';
import Apearance from '../SliderSmallTabs/Apearance';
import DescriptionAndLink from '../SliderSmallTabs/DescriptionAndLink';
import ShapAndSize from '../SliderSmallTabs/ShapAndSize';

const SlidTab = () => {
    const [sliderTabView, setSliderTabView] = useState(1);

    return (
        <>
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

            <div>
                {
                    sliderTabView === 1 && <DescriptionAndLink />
                }
                {
                    sliderTabView === 2 && <ShapAndSize />
                }
                {
                    sliderTabView === 3 && <Apearance />
                }
            </div>
        </>
    );
};

export default SlidTab;