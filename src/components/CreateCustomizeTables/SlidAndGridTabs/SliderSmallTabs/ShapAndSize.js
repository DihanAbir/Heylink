import React, { useEffect, useRef, useState } from 'react';
import downArrow from '../../../../assets/icons/down-arrow.svg'
import rightArrow from '../../../../assets/icons/right-arrow.svg'

const shapAndSizes = [
    'Square 1:1 (Width:Height)',
    'Landscape 4:3 (Width:Height)',
    'Vertical 3:4 (Width:Height)'
]

const ShapAndSize = () => {
    const [viewShapAndSizes, setViewShapAndSizes] = useState(false)
    const [addShapAndSize, setAddShapAndSize] = useState('Landscape 4:3 (Width:Height)')


    const advanceImagesAutomatic = (e) => {
        if (e.checked) {
            alert('check');
        } else {
            alert('unchecked');
        }
    }

    let outSideRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!outSideRef.current.contains(e.target)) {
                setViewShapAndSizes(false)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section>
            <div className='relative cursor-pointer mt-4'>
                <div onClick={() => setViewShapAndSizes(!viewShapAndSizes)}
                    className='h-12 w-full bg-gray-100 flex justify-between items-center px-4'>
                    <h1 className='text-gray-600'>{addShapAndSize}</h1>
                    {
                        viewShapAndSizes ? <img className='w-5' src={downArrow} alt="" />
                            :
                            <img className='w-5' src={rightArrow} alt="" />
                    }
                </div>
                {
                    viewShapAndSizes && <div ref={outSideRef} className='absolute w-full z-10 border py-2 bg-white'>
                        {shapAndSizes.map(shapSize => <div onClick={() => setAddShapAndSize(shapSize)}
                            className='w-full h-10 flex justify-start items-center px-4 hover:bg-gray-200'>
                            <h1 className={`text-gray-900 ${addShapAndSize === shapSize && 'font-semibold'}`} >{shapSize}</h1>
                        </div>
                        )}
                    </div>
                }
                <div className='flex items-center gap-4 mt-4'>
                    <input className='cursor-pointer' onChange={(e) => advanceImagesAutomatic(e)} type="checkbox" name="advanceImage" id="advanceImage" />
                    <label className='cursor-pointer' htmlFor="advanceImage">Advance images automatically</label>
                </div>
            </div>
        </section>
    );
};

export default ShapAndSize;