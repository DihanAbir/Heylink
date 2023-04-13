import React from 'react';

const PageLoader = () => {
    return (
        <div className='fixed w-full h-full flex justify-center items-center mx-auto' role="status">
            <div class="w-14 h-14 mx-auto rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent shadow-md">
            </div>
        </div>
    );
};

export default PageLoader;