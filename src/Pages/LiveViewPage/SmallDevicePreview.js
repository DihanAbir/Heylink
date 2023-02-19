import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import arrowRight from '../../assets/icons/right-arrow.svg'
import useFetch from "../../Hoock/Hoock";
const SmallDevicePreview = () => {
    const token = localStorage.getItem("HeyLinkToken");
    const [userData, setUserData] = useState({});
    console.log(userData);
    const linksData = useFetch("common");
    const socialData = useFetch("social");
    const galleryData = useFetch("gallery");
    const menuData = useFetch("menu");
    const cryptoData = useFetch("crypto");
    const locationsData = useFetch("location");
    const musicData = useFetch("music");
    const commerceData = useFetch("commerce");
    const appsData = useFetch("apps");
    console.log(musicData);

    const bufferToImage = (data) => {
        const buff = Buffer.from(
            data?.image?.data?.data
                ? data?.image?.data?.data
                : [
                    "https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://api.heylink.me/static/images/defaults/avatar_user.png",
                ]
        );
        return buff?.toString("base64");
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/user/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setUserData(data?.data));
    }, []);

    const { username } = userData;

    return (
        <section className="w-full min-h-screen bg-[#ffc31b]">
            <div className="max-w-[880px] mx-auto">
                <div className="flex flex-col justify-center items-center pt-16  ">
                    <img
                        className="rounded-full w-20 md:w-44 h-20 md:h-44 border border-blue-500"
                        src="https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://api.heylink.me/static/images/defaults/avatar_user.png"
                        alt=""
                    />
                    <h2 className="font-bold text-center text-2xl md:text-3xl mt-4">{username}</h2>
                </div>


                <div className="grid grid-cols-1 gap-4 mt-4 w-full px-3">
                    {galleryData.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 w-full">
                            {galleryData.map((item, index) => (
                                //   console.log("item number: " + index + bufferToImage(item))
                                <img
                                    key={index}
                                    className="rounded-2xl w-full max-h-60"
                                    src={`data:image/png;base64, ${bufferToImage(item)}`}
                                    alt=""
                                />
                            ))}
                        </div>
                    )}

                    {linksData.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 w-full">
                            {linksData.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="border-2 border-black bg-white w-full h-12 flex items-center px-2"
                                >
                                    <h2>{item.link}</h2>
                                </a>
                            ))}
                        </div>
                    )}

                    {socialData.length > 0 && (
                        <div className="flex justify-center items-center flex-wrap gap-4 w-full">
                            {socialData.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="flex items-center justify-center"
                                >
                                    <img src={item.image} alt="" className="rounded-full w-[60px] h-[60px] md:w-20 md:h-20" />
                                </a>
                            ))}
                        </div>
                    )}

                    {musicData.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 w-full">
                            {musicData.map((music, index) => (
                                <div
                                    className="w-full h-24 p-4 flex justify-between items-center gap-2 border border-white bg-rose-500">
                                    <div className="flex justify-start items-center gap-2">
                                        <img className='w-28 h-full' src="https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-Tropical-island-with-palms..jpg" alt="" />
                                        <h1 className="text-white text-xl font-semibold">{music?.title ? music.title : music.link}</h1>
                                    </div>
                                    <img className="w-12" src={arrowRight} alt="" />
                                </div>
                            ))}
                        </div>
                    )}

                    {locationsData.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 w-full">
                            {locationsData.map((location, index) => (
                                <h1
                                    key={index}
                                    className="flex justify-start items-center border-2 border-purple-600 text-purple-600 w-full h-14 px-2 bg-rose-100"
                                >
                                    <p>{location.name}</p>
                                </h1>
                            ))}
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default SmallDevicePreview;