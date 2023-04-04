import React from 'react';

const SocialItems = ({ item }) => {
    return (
        <>
            {
                item?.bottom === 'icon' &&
                <a
                    target="_blank"
                    href={`https://${item?.name}/${item?.link}`}
                    className="flex justify-center items-center flex-wrap"
                >
                    <img src={item?.image} alt="" className="rounded-full h-8 w-8 object-cover" />
                </a>
                // :
                // <a
                //   key={index}
                //   target="_blank"
                //   href={`https://${item?.name}/${item?.link}`}
                //   className="h-14 w-full bg-purple-200 border-white border flex justify-center items-center gap-2"
                // >
                //   <img src={item?.image} alt="" className="rounded-full h-8 w-8 object-cover" />
                //   <h1 className="text-purple-600 font-semibold">{item?.name}</h1>
                // </a>
            }
        </>
    );
};

export default SocialItems;