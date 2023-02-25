import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import arrowDown from "../../../../../assets/icons/social-tab-icons/arrow-down.svg";
import empty from "../../../../../assets/icons/social-tab-icons/empty.svg";
import AllSocialLinks from "../../../../../components/CreateCustomizeTables/AllSocialLinks";
import useFetch from "../../../../../Hoock/Hoock";

const socials = [
  {
    id: "1",
    name: "Facebook",
    url: "https://facebook.com/username",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  },
  {
    id: "2",
    name: "WhatsUp",
    url: "https://whatsup.com/username",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  },
  {
    id: "3",
    name: "LinkedIn",
    url: "https://linkedin.com/username",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  },
  {
    id: "4",
    name: "twitter",
    url: "https://twitter.com/username",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  },
  {
    id: "5",
    name: "twitter",
    url: "https://twitter.com/username",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  },
  {
    id: "6",
    name: "twitter",
    url: "https://twitter.com/username",
    img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  },
];

const SocialTab = () => {
  const [selectedSocial, setSelectedSocial] = useState(
    "Select Popular Social Link"
  );
  const [usernamePlacehoder, setUsernamePlaceholder] = useState(
    "Paste Your Social Link here"
  );
  const [socialImg, setSocialImg] = useState("");
  const [search, setSearch] = useState(false);
  const [inputError, setInputError] = useState("");
  const [userData, setUserData] = useState([]);
  let dropdownRef = useRef();
  //   get link data from hook
  const data = useFetch("social");

  // console.log(data);

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSocialSet = (url, name, img) => {
    setSelectedSocial(name);
    setUsernamePlaceholder(url);
    setSocialImg(img);
  };
  // get user id
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/user/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data?.data?._id));
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const data = {
      image: socialImg,
      name: selectedSocial,
      link: username,
      userInfo: userData,
    };

    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/social`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((data) => {
        event.target.reset();
        toast.success('Socail Address Add Successfully')
        setInputError("");
      });
  };
  return (
    <section className="min-h-screen pb-6">
      <div className="px-2 w-full lg:max-w-[960px] mx-auto cursor-pointer">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6">
          <div className="relative">
            <div
              onClick={() => setSearch(!search)}
              className="relative border-b flex justify-between items-center px-4 h-14 w-full bg-white"
            >
              <div className="flex items-center gap-4">
                <img className="w-6" src={socialImg && socialImg} alt="" />
                <h1>{selectedSocial}</h1>
              </div>
              <div>
                <img className="w-3" src={arrowDown} alt="" />
              </div>
            </div>
            {search && (
              <div
                ref={dropdownRef}
                className="w-full top-12 border-x border-b right-0 cursor-pointer absolute z-50 border bg-gray-50 shadow"
              >
                <div className="p-3">
                  <div className="w-full h-12 border border-blue-600 bg-gray-200">
                    <input
                      className="w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none"
                      type="text"
                      placeholder="Start typing or select..."
                    />
                  </div>
                </div>
                <div className="w-full h-44 border-t overflow-y-auto bg-white">
                  {socials &&
                    socials?.map((s) => (
                      <div
                        onClick={() => handleSocialSet(s.url, s.name, s.img)}
                        className="h-8 w-full flex items-center gap-4 mb-2 hover:bg-blue-200 px-2"
                      >
                        <img className="w-6" src={s.img} alt="" />
                        <h1 className="text-gray-900">{s.name}</h1>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="rounded-[50px] h-14 w-full bg-gray-200">
            <input
              onChange={(e) => setInputError(e.target.value)}
              className="w-full h-full rounded-[50px] px-4 focus:text-gray-700 text-gray-400 bg-gray-200 focus:outline-none border-none"
              name="username"
              type="text"
              placeholder={usernamePlacehoder}
            />
          </div>

          {inputError && selectedSocial !== "Select Popular Social Link" ? (
            <button className="flex justify-center items-center gap-1 px-4 rounded-[50px] h-14 w-56 mx-auto md:w-full bg-blue-600">
              <h1 className="text-white font-semibold">+ Add</h1>
              <h1 className="text-white font-semibold">
                {selectedSocial}
              </h1>
            </button>
          ) : (
            <button disabled className="cursor-not-allowed flex justify-center items-center gap-1 px-4 rounded-[50px] h-14 w-56 mx-auto md:w-full bg-[#9FC1EA]">
              <h1 className="text-white font-semibold">
                + Add
              </h1>
              <h1 className="text-white font-semibold">
                {selectedSocial}
              </h1>
            </button>
          )}
        </form>
      </div>

      <div>
        {data &&
          data.map((socialLink) => <AllSocialLinks socialLink={socialLink} />)}
        {data.length === 0 && (
          <div className="flex flex-col justify-center items-center mt-12">
            <img className="md:w-96" src={empty} alt="" />
            <p className="text-center mt-6 text-gray-400">
              You haven't added any Social Links
            </p>
          </div>
        )}
      </div>

    </section>
  );
};

export default SocialTab;
