import React, { useState } from "react";
import link from "../../../../../assets/icons/link.svg";
import threeSocial from "../../../../../assets/icons/three-social.svg";
import uparrow from "../../../../../assets/icons/gif-images/up-arrow.gif";
import CreateLinkCustomize from "../../../../../components/CreateCustomizeTables/CreateLinkCustomize";
import { useEffect } from "react";
import axios from "axios";
import useFetch from "../../../../../Hoock/Hoock";
const LinksTab = () => {
  const [openAdvancedLinkModal, setOpenAdvancedLinkModal] = useState(false);
  const [errorUrl, setErrorUrl] = useState("");
  const [allUrls, setAllUrls] = useState([]);
  const [userData, setUserData] = useState([]);
  // const [data, setData] = useState([]);
  const data = useFetch("common");
  const token = localStorage.getItem("HeyLinkToken");


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data?.data?._id));
  }, [userData]);

  // add links
  const handleUrl = (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    setAllUrls([...allUrls, url]);
    const data = {
      link: url,
      userInfo: userData,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}/app/v1/links/common`, data)
      .then((res) => {
        event.target.reset();
        setErrorUrl("");
      });
  };

  const closeModal = () => {
    setOpenAdvancedLinkModal(false);
  };
  return (
    <section className="pb-6">
      <form onSubmit={handleUrl}>
        <div className="flex justify-between md:px-6 w-full lg:max-w-[980px] mx-auto">
          <div className="flex-grow flex items-center bg-gray-200 rounded-3xl">
            <div className="cursor-pointer w-12 py-3 border-r border-gray-400 flex justify-center items-center">
              <img src={link} alt="" />
            </div>
            <input
              onChange={(e) => setErrorUrl(e.target.value)}
              className="flex-grow focus:outline-none focus:bg-red-50 bg-gray-200 lg:rounded-r-3xl py-3 px-2 w-full border-none"
              type="text"
              name="url"
              placeholder="Paste Your Link Here"
            />
          </div>
          {errorUrl ? (
            <div className="bg-blue-600 lg:ml-6 rounded-r-3xl lg:rounded-3xl flex justify-center items-center px-3 lg:px-6">
              <button className="font-semibold text-white md:hidden">
                Add
              </button>
              <button className="font-semibold text-white hidden md:block">
                + Add New Link
              </button>
            </div>
          ) : (
            <div className="bg-blue-300 lg:ml-6 rounded-r-3xl lg:rounded-3xl flex justify-center items-center px-3 lg:px-6">
              <button disabled className="font-semibold text-white md:hidden">
                Add
              </button>
              <button
                disabled
                className="font-semibold text-white hidden md:block"
              >
                + Add New Link
              </button>
            </div>
          )}
        </div>
        {!errorUrl && (
          <p className="text-red-600 text-end lg:mr-80 pr-4 text-sm">
            URL should not be empty
          </p>
        )}
      </form>

      <div className="mt-8 cursor-pointer">
        <div
          onClick={() => setOpenAdvancedLinkModal(!openAdvancedLinkModal)}
          className="w-72 h-12 hover:border-2 hover:border-white hover:shadow-md mx-auto hover:shadow-blue-300 bg-[#E7F8FF] rounded-3xl flex justify-center gap-6 items-center"
        >
          <h1 className="text-blue-500 font-bold">+ Advanced Links</h1>
          <img src={threeSocial} alt="" />
        </div>
      </div>

      {/* --------------Create Link------------ */}
      {data && data?.map((url) => <CreateLinkCustomize url={url} />)}
      {data?.length === 0 && (
        <div className="flex justify-center items-center py-8">
          <img src={uparrow} alt="" />
          <h1 className="text-gray-500 text-xl">
            Paste <br />
            <strong>
              your first <br /> link{" "}
            </strong>
            here
          </h1>
        </div>
      )}
      {/* -------------Create Link------------- */}

      {/* -----------Advanced Link Modal----------- */}
      {/* <div className='flex justify-center items-center'>
                {
                    openAdvancedLinkModal && <AdvancedLinkModal closeModal={closeModal} />
                }
            </div> */}
    </section>
  );
};

export default LinksTab;
