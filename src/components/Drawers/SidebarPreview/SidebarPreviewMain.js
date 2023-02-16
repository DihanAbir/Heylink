import React, { useEffect, useState } from "react";
import useFetch from "../../../Hoock/Hoock";
import { Buffer } from "buffer";
const SidebarPreviewMain = () => {
  const token = localStorage.getItem("HeyLinkToken");
  const [userData, setUserData] = useState({});
  console.log(userData);
  const linksData = useFetch("common");
  const socialData = useFetch("social");
  const galleryData = useFetch("gallery");
  const menuData = useFetch("menu");
  const cryptoData = useFetch("crypto");
  const locationsData = useFetch("locations");
  const musicData = useFetch("music");
  const commerceData = useFetch("commerce");
  const appsData = useFetch("apps");
  console.log(linksData);

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
    <div className=" fixed bg-black pr-1 w-[310px] h-[640px] rounded-[50px] flex justify-center items-center">
      <div className=" h-1 w-16 bg-gray-300 rounded-3xl absolute top-6"></div>
      <div className="bg-[#ffc31b] h-[530px] w-[290px] overflow-y-auto">
        <div className="flex flex-col justify-center items-center mt-16  ">
          <img
            className="rounded-full w-[50%]"
            src="https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://api.heylink.me/static/images/defaults/avatar_user.png"
            alt=""
          />
          <h2 className="font-bold text-2xl">{username}</h2>
        </div>

        {galleryData.length > 0 && (
          <div className="p-2 pt-4 ">
            {galleryData.map((item, index) => (
              //   console.log("item number: " + index + bufferToImage(item))
              <img
                key={index}
                className="rounded-2xl"
                src={`data:image/png;base64, ${bufferToImage(item)}`}
                alt=""
              />
            ))}
          </div>
        )}

        {linksData.length > 0 && (
          <div className="flex flex-col gap-y-4">
            {linksData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="mx-4 border-2 border-black h-10 flex items-center pl-4 "
              >
                <h2>{item.link}</h2>
              </a>
            ))}
          </div>
        )}

        {socialData.length > 0 && (
          <div className="flex flex-col  items-center gap-y-4 pt-4">
            {socialData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className=" flex items-center pl-4 "
              >
                <img src={item.image} alt="" className="w-[50px]" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarPreviewMain;
