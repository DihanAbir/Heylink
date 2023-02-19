import React, { useEffect, useState } from "react";
import useFetch from "../../../Hoock/Hoock";
import { Buffer } from "buffer";
import { Link } from "react-router-dom";
import arrowRight from '../../../assets/icons/right-arrow.svg'
const SidebarPreviewMain = () => {
  const token = localStorage.getItem("HeyLinkToken");
  const [userData, setUserData] = useState({});
  // console.log(userData);
  const linksData = useFetch("common");
  const socialData = useFetch("social");
  const galleryData = useFetch("gallery");
  const menuData = useFetch("menu");
  const cryptoData = useFetch("crypto");
  const locationsData = useFetch("location");
  const musicData = useFetch("music");
  const commerceData = useFetch("commerce");
  const appsData = useFetch("apps");
  // console.log(linksData);

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
  // const { link } = socialData;
  return (
    <div className="fixed flex flex-col justify-center items-center cursor-pointer">

      <div className=" bg-black pr-1 w-[310px] h-[640px] rounded-[50px] flex justify-center items-center">
        <div className=" h-1 w-16 bg-gray-300 rounded-3xl absolute top-6"></div>

        <div
          className="flex flex-col justify-start items-center bg-[#ffc31b] h-[530px] w-[300px] mx-auto overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col justify-center items-center mt-6">
            <img
              className="rounded-full w-20 border"
              src="https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://api.heylink.me/static/images/defaults/avatar_user.png"
              alt=""
            />
            <h2 className="font-bold text-2xl mt-2 text-center">{username}</h2>
          </div>


          <div className="grid grid-cols-1 gap-4 mx-auto w-full px-2 mt-4 pb-4">
            {galleryData.length > 0 && (
              <div className="grid grid-cols-1 gap-4 w-full">
                {galleryData.map((item, index) => (
                  //   console.log("item number: " + index + bufferToImage(item))
                  <img
                    key={index}
                    className="rounded-2xl w-full"
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
                    target='_blank'
                    href={item.link}
                    className="flex justify-start items-center border-2 border-black w-full h-10 px-2 bg-white"
                  >
                    <h2>{item.link}</h2>
                  </a>
                ))}
              </div>
            )}

            {socialData.length > 0 && (
              <div className="grid grid-cols-4 gap-4 w-full">
                {socialData.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex justify-center items-center"
                  >
                    <img src={item.image} alt="" className="rounded-full h-[50px] w-[50px]" />
                  </a>
                ))}
              </div>
            )}

            {musicData.length > 0 && (
              <div className="grid grid-cols-1 gap-4 w-full">
                {musicData.map((music, index) => (
                  <div
                    className="w-full h-24 p-2 flex justify-between items-center gap-2 border border-white bg-rose-500">
                    <div className="flex justify-start items-center gap-2 h-full">
                      <img className='w-28 h-full' src="https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-Tropical-island-with-palms..jpg" alt="" />
                      <h1 className="text-white text-xl font-semibold">{music?.title ? music.title : music.link}</h1>
                    </div>
                    <img className="w-8" src={arrowRight} alt="" />
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
      </div>

      <Link to={`/${userData.username}`}
        className="w-32 h-8 bg-blue-600 rounded-2xl flex justify-center items-center mx-auto mt-4">
        <h1 className="text-white font-semibold">View Live</h1>
      </Link>

    </div>
  );
};

export default SidebarPreviewMain;
