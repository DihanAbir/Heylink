import React from 'react';


const PreviewDrawer = ({ children }) => {
    return (
        <div className='absolute -right-3 top-56'>
            {children}
        </div>
    );
};

export default PreviewDrawer;