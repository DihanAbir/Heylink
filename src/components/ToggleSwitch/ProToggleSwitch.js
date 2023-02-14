import React, { useState } from 'react';
import ProModal from '../Modals/CommonModals/ProModal';

const ProToggleSwitch = () => {
    const [toggle, setToggle] = useState(false)
    const [viewModal, setViewModal] = useState(false)
    return (
        <div className="relative flex items-center gap-2">
            <span className='text-gray-500 text-sm font-semibold'>OFF</span>
            <div onClick={() => setViewModal(!viewModal)} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                    ${toggle ? 'bg-red-100' : 'bg-gray-200'}`}>
                <div className={`h-5 w-5 rounded-full shadow-md bg-gray-300`}>
                </div>
            </div>
            <span className='text-gray-500 text-sm font-semibold'>ON</span>

            {
                viewModal && <ProModal setCloseModal={setViewModal} />
            }
        </div>
    );
};

export default ProToggleSwitch;