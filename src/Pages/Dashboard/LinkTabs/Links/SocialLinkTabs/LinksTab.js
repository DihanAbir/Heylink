import React, { useContext, useEffect, useState } from "react";
import link from "../../../../../assets/icons/link.svg";
import threeSocial from "../../../../../assets/icons/three-social.svg";
import uparrow from "../../../../../assets/icons/gif-images/up-arrow.gif";
import CreateLinkCustomize from "../../../../../components/CreateCustomizeTables/CreateLinkCustomize";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../ContextAPI/AuthProvider/AuthProvider";
import useFetch from "../../../../../Hoock/Hoock";
const LinksTab = () => {
  const { userData } = useContext(AuthContext);
  const [openAdvancedLinkModal, setOpenAdvancedLinkModal] = useState(false);
  const [errorUrl, setErrorUrl] = useState("");
  const data = useFetch("common");

  const handleUrl = (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    const data = {
      link: url,
      userInfo: userData,
    };

    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/common`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();

        // data = useFetch("common");
        toast.success("Link URL Add Successfully");
        setErrorUrl("");
      });
  };

  useEffect(() => {}, [errorUrl]);

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
            <button
              type="submit"
              className="bg-blue-600 lg:ml-6 rounded-r-3xl lg:rounded-3xl flex justify-center items-center px-3 lg:px-6"
            >
              <h1 className="font-semibold text-white md:hidden">Add</h1>
              <h1 className="font-semibold text-white hidden md:block">
                + Add New Link
              </h1>
            </button>
          ) : (
            <button
              disabled
              className="bg-blue-300 cursor-not-allowed lg:ml-6 rounded-r-3xl lg:rounded-3xl flex justify-center items-center px-3 lg:px-6"
            >
              <h1 className="font-semibold text-white md:hidden">Add</h1>
              <h1 className="font-semibold text-white hidden md:block">
                + Add New Link
              </h1>
            </button>
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
                    openAdvancedLinkModal && <AdvancedLinkModal closeModal={setOpenAdvancedLinkModal} />
                }
            </div> */}
    </section>
  );
};

export default LinksTab;
