import React, { useEffect, useRef } from 'react';

const AdvancedLinkModal = ({ closeModal }) => {

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
    return (
        <div ref={dropdownRef} className="z-50 absolute top-4">
            <div className="h-96 lg:w-[800px] bg-white p-4 flex justify-center">
                <div>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <div>
                            <h1 className='text-gray-600 font-bold'>SHARE YOUR CONTENT</h1>
                        </div>
                        <div>
                            <h1 className='text-gray-600 font-bold'>MONETISE USING CRYPTO & COMMERCE</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedLinkModal;