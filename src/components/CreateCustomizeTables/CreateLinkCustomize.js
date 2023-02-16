import React, { useEffect, useRef, useState } from "react";
import downArrow from "../../assets/icons/link-customize-icons/down-arrow.svg";
import upArrow from "../../assets/icons/link-customize-icons/up-arrow.svg";
import moveToTop from "../../assets/icons/link-customize-icons/move-to-top.svg";
import effects from "../../assets/icons/link-customize-icons/effects.svg";
import deletes from "../../assets/icons/link-customize-icons/delete.svg";
import linkClick from "../../assets/icons/link-customize-icons/link-click.svg";
import schedule from "../../assets/icons/link-customize-icons/schedule.svg";
import fire from "../../assets/icons/link-customize-icons/fire.svg";
import blueRight from '../../assets/icons/blue-right.png'
import lock from "../../assets/icons/link-customize-icons/pro-lock.svg";
import swap from "../../assets/icons/link-customize-icons/swap.svg";
import edit from "../../assets/icons/link-customize-icons/edit.svg";
import EffectsModal from "../Modals/CustomizeLinkModals/EffectsModal";
import FastLinkProModal from "../Modals/CustomizeLinkModals/FastLinkProModal";
import ScheduleModal from "../Modals/CustomizeLinkModals/ScheduleModal";
import ImageUploadModal from "../Modals/CustomizeLinkModals/ImageUploadModal";
import DeleteModal from "../Modals/CommonModals/DeleteModal";
import { Buffer } from "buffer";
import DefaultSwitch from "../ToggleSwitch/DefaultSwitch";

const CreateLinkCustomize = ({ url }) => {
  const [open, setOpen] = useState(false);
  const [openEffcetsModal, setOpenEffcetsModal] = useState(false);
  const [fastLinkProModal, setFastLinkProModal] = useState(false);
  const [openScheduleModal, setOpenScheduleModal] = useState(false);
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [openInputChange1, setOpenInputChange1] = useState(false);
  const [openInputChange2, setOpenInputChange2] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkURL, setLinkURL] = useState('');
  const [linkToggle, setLinkToggle] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpdateLinkName = () => {
    alert(linkName + ' updated')
    setLinkName('')
    setOpenInputChange1(false)
  }

  const handleUpdateLinkURL = () => {
    alert(linkURL + ' updated')
    setLinkURL('')
    setOpenInputChange2(false)
  }

  const linkNameChange = (e) => {
    const newLinkName = e.target.value
    if (newLinkName !== url.link) {
      setLinkName(newLinkName)
    }
  }


  const linkURLChange = (e) => {
    const newLinkURL = e.target.value
    if (newLinkURL !== url.link) {
      setLinkURL(newLinkURL)
    }
  }

  // console.log(linkName);
  // image convarte buffer
  const buff = Buffer.from(
    url?.image?.data?.data ? url?.image?.data?.data : imageUrl
  );
  const base64 = buff?.toString("base64");

  const closeModal = () => {
    setOpenEffcetsModal(false);
    setFastLinkProModal(false);
    setOpenScheduleModal(false);
    setUploadImageModal(false);
    setDeleteModal(false);
  };

  const imageData = (imgData) => {
    setImageUrl(imgData);
  };

  let outSideRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!outSideRef.current.contains(e.target)) {
        setOpenInputChange1(false);
        setOpenInputChange2(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div>
      <div className="relative w-full my-6 border border-gray-200 rounded-md cursor-pointer">
        <div className="h-28 flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6">
          <div>
            <img className="w-5" src={swap} alt="" />
          </div>

          {/* -----------image upload input field end----------- */}
          {imageUrl ? (
            <div class="relative w-12 h-12 flex justify-center items-center mx-auto bg-gray-200 rounded-md">
              <img className="w-full h-full" src={imageUrl} alt="" />
            </div>
          ) : (
            <div>
              <div
                onClick={() => setUploadImageModal(!uploadImageModal)}
                class="relative w-12 h-12 flex justify-center items-center mx-auto bg-gray-200 rounded-md"
              >
                <label class="flex justify-center items-center">
                  <div class=" relative flex cursor-pointer items-center justify-center">
                    <img
                      className="w-4 cursor-pointer"
                      src={`data:image/png;base64, ${base64}`}
                      alt=""
                    />
                  </div>
                </label>
              </div>
              {uploadImageModal && (
                <ImageUploadModal
                  url={url}
                  imageData={imageData}
                  closeModal={closeModal}
                />
              )}
            </div>
          )}
          {/* -----------image upload input field end----------- */}

          {/* -----------edit and input  icon start----------- */}
          <div ref={outSideRef} className="flex-grow flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <input onChange={(e) => linkNameChange(e)}
                className={`mr-3 px-2 h-8 bg-white rounded w-full focus:outline-none text-gray-700 font-bold ${openInputChange1
                  ? "bg-blue-100 border border-blue-600" : "border-none cursor-pointer"}`}
                type="text" disabled={!openInputChange1} defaultValue={url?.link} name="linkName"
              />
              {
                linkName ? <img onClick={() => handleUpdateLinkName()}
                  className='w-4 cursor-pointer' src={blueRight} alt="" />
                  :
                  <img onClick={() => setOpenInputChange1(!openInputChange1)}
                    className='w-4 cursor-pointer' src={edit} alt="" />
              }
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center w-full gap-2">
                <a target="_blank" href={url}>
                  <img className="w-6" src={linkClick} alt="" />
                </a>
                <input onChange={(e) => linkURLChange(e)}
                  className={`mr-3 px-2 h-8 bg-white rounded w-full text-sm focus:outline-none text-blue-600 
                  ${openInputChange2 ? "border border-blue-600" : "border-none cursor-pointer"}`}
                  type="text" disabled={!openInputChange2} defaultValue={url?.link} name="linkURL" />
              </div>
              {
                linkURL ? <img onClick={() => handleUpdateLinkURL()}
                  className='w-4 cursor-pointer' src={blueRight} alt="" />
                  :
                  <img onClick={() => setOpenInputChange2(!openInputChange2)}
                    className='w-4 cursor-pointer' src={edit} alt="" />
              }
            </div>
          </div>
          {/* -----------edit  and input icon end----------- */}

          <div className="flex md:justify-center items-center gap-2 md:gap-6">
            <div className="relative cursor-pointer">
              <div
                onClick={() => setDeleteModal(!deleteModal)}
                className="hidden md:block md:flex flex-col justify-center items-center gap-2"
              >
                <img className="w-4" src={deletes} alt="" />
                <span className="text-sm text-gray-500">Delete</span>
              </div>
              {deleteModal && (
                <DeleteModal
                  endPoint={"common"}
                  id={url._id}
                  closeModal={closeModal}
                ></DeleteModal>
              )}
            </div>

            {/* -----------toggler switch start----------- */}
            <DefaultSwitch initialToggle={linkToggle} getToggle={setLinkToggle} />
            {/* -----------toggler switch start----------- */}
          </div>
        </div>


        {open && (
          <div className="relative cursor-pointer flex justify-center flex-wrap sm:flex-nowrap items-center gap-6 h-36 border-t border-gray-200 py-4 sm:py-0">
            {/* -----------Move to Top start----------- */}
            <div className="flex flex-col justify-center items-center gap-2">
              <div>
                <img className="w-4" src={moveToTop} alt="" />
              </div>
              <h1 className="text-gray-400 text-sm">Move to Top</h1>
            </div>
            {/* -----------Move to Top end----------- */}

            {/* -----------schedule start----------- */}
            <div className="">
              <div
                onClick={() => setOpenScheduleModal(!openScheduleModal)}
                className="flex flex-col justify-center items-center gap-2"
              >
                <div>
                  <img className="w-4" src={schedule} alt="" />
                </div>
                <h1 className="text-gray-400 text-sm">schedule</h1>
              </div>
              {openScheduleModal && <ScheduleModal closeModal={closeModal} />}
            </div>
            {/* -----------schedule end----------- */}

            {/* -----------effects start----------- */}
            <div className="relative ">
              <div
                onClick={() => setOpenEffcetsModal(!openEffcetsModal)}
                className="flex flex-col justify-center items-center gap-2"
              >
                <div>
                  <img className="w-4" src={effects} alt="" />
                </div>
                <h1 className="text-gray-400 text-sm">effects</h1>
              </div>
              {openEffcetsModal && <EffectsModal closeModal={closeModal} />}
            </div>
            {/* -----------effects end----------- */}

            {/* -----------Fast Link start----------- */}
            <div className="relative">
              <div
                onClick={() => setFastLinkProModal(!fastLinkProModal)}
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="relative">
                  <img className="w-4" src={fire} alt="" />

                  <div className="absolute -top-4 -right-3 flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]">
                    <img className="w-7" src={lock} alt="" />
                  </div>
                </div>
                <h1 className="text-gray-400 text-sm">Fast Link</h1>
              </div>
              {fastLinkProModal && <FastLinkProModal closeModal={closeModal} />}
            </div>
            {/* -----------Fast Link end----------- */}

            {/* -----------only small device show----------- */}
            <div className="relative cursor-pointer">
              <div
                onClick={() => setDeleteModal(!deleteModal)}
                className="sm:hidden flex flex-col justify-center items-center gap-2"
              >
                <div>
                  <img className="w-4" src={deletes} alt="" />
                </div>
                <h1 className="text-gray-400 text-sm">Delete</h1>
              </div>
              {/* -----------only small device show end----------- */}
            </div>
          </div>
        )}

        {/* -----------toggler button start----------- */}
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center"
        >
          <img className="w-4" src={open ? upArrow : downArrow} alt="" />
        </div>
        {/* -----------toggler button end----------- */}
      </div>
    </div>
  );
};

export default CreateLinkCustomize;
