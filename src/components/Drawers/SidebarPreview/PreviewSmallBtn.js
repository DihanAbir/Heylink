import React from 'react';
import eye from '../../../assets/icons/eye.svg'

const PreviewSmallBtn = ({ fullPagepreview, setFullPagePreview }) => {
    return (
        <>
            {fullPagepreview ? <div onClick={() => setFullPagePreview(false)} className='cursor-pointer block lg:hidden flex justify-center'>
                <div className='fixed bottom-8 right-auto flex gap-2 items-center justify-center w-10 h-10 rounded-full bg-gray-300 border border-blue-900'>
                    <img className='w-4' src='https://cdn-f.heylink.me/static/media/ic_close.5c9d2dc7.svg' alt="" />
                </div>
            </div>
                :
                <div onClick={() => setFullPagePreview(true)} className='cursor-pointer block lg:hidden flex justify-center'>
                    <div className='fixed bottom-8 right-auto flex gap-2 items-center justify-center w-24 h-8 rounded-[50px] bg-gray-300 border border-blue-900'>
                        <img className='w-4' src={eye} alt="" />
                        <h1 className='text-sm text-blue-900'>Preview</h1>
                    </div>
                </div>
            }
        </>
    );
};

export default PreviewSmallBtn;