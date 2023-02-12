import React, { useState } from 'react';

const ProToggleSwitch = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
                                    ${toggle ? 'bg-red-100' : 'bg-gray-200'}`}>
            <div className={`h-5 w-5 rounded-full shadow-md bg-gray-300`}>
            </div>
        </div>
    );
};

export default ProToggleSwitch;