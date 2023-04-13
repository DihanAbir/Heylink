import React from 'react';

const SocialItems = ({ item }) => {
    console.log(item);
    return (
        <a
            target="_blank"
            href={`https://${item?.name}.com/${item?.link}`}
            className="flex justify-center items-center flex-wrap"
        >
            <img src={item?.image} alt="" className="rounded-full h-8 w-8 object-cover" />
        </a>
    );
};

export default SocialItems;