import React, { useContext, useEffect, useRef, useState } from "react";
import downArrow from "../../assets/icons/link-customize-icons/down-arrow.svg";
import upArrow from "../../assets/icons/link-customize-icons/up-arrow.svg";
import moveToTop from "../../assets/icons/link-customize-icons/move-to-top.svg";
import moveToDown from "../../assets/icons/link-customize-icons/move-to-down.svg";
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
import ImageUploadModal from "../Modals/CustomizeLinkModals/ImageUploadModal";
import DeleteModal from "../Modals/CommonModals/DeleteModal";
import { Buffer } from "buffer";
import DefaultSwitch from "../ToggleSwitch/DefaultSwitch";
import CalanderData from "../Modals/CalanderModals/CalanderData";
import { toast } from "react-hot-toast";
import { ServiceContext } from "../../ContextAPI/ServiceProvider/ServiceProvider";
const CreateLinkCustomize = ({ url }) => {
  const { handleDefaultSwitch, handleTitleUpdate } = useContext(ServiceContext)
  const [open, setOpen] = useState(false);
  const [openEffcetsModal, setOpenEffcetsModal] = useState(false);
  const [fastLinkProModal, setFastLinkProModal] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);

  const [startDateCalander, setStartDateCalander] = useState(false);
  const [endDateCalander, setEndDateCalander] = useState(false);
  const [showStartDate, setShowStartDate] = useState(url?.activeFrom);
  const [showEndDate, setShowEndDate] = useState(url?.activeUntile);

  const [uploadImageModal, setUploadImageModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [openInputChange1, setOpenInputChange1] = useState(false);
  const [openInputChange2, setOpenInputChange2] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkURL, setLinkURL] = useState('');
  const [imageUrl, setImageUrl] = useState("");

  // console.log(url);

  const handleToggleSwitch = (input) => {
    handleDefaultSwitch(url?._id, { show: input }, 'links/common',)
  }

  // link name update--------------
  const handleUpdateLinkName = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/common/${url?._id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ linkTitle: linkName })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.data.acknowledged) {
          toast.success('Link Title Updated')
          setLinkName('')
          setOpenInputChange1(false)
        }
      })
  }

  // link url update--------------
  const handleUpdateLinkURL = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/common/${url?._id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ link: linkURL })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.data.acknowledged) {
          toast.success('Link URL Updated')
          setLinkURL('')
          setOpenInputChange2(false)
        }
      })
  }


  const linkNameChange = (e) => {
    const newLinkName = e.target.value
    if (newLinkName !== url.linkTitle) {
      setLinkName(newLinkName)
    }
  }


  const linkURLChange = (e) => {
    const newLinkURL = e.target.value
    if (newLinkURL !== url.link) {
      setLinkURL(newLinkURL)
    }
  }

  const handleActiveFrom = (date) => {
    const startDate = new Date(date);
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/common/${url?._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ activeFrom: startDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.acknowledged) {
          toast.success('Active From Added')
          setStartDateCalander(false)
          setShowStartDate(startDate)
        }
      });
  }


  const handleActiveUntile = (date) => {
    const endDate = new Date(date);
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/common/${url?._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ activeUntile: endDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.acknowledged) {
          toast.success('Active Untile Added')
          setEndDateCalander(false)
          setShowEndDate(endDate)
        }
      });
  }

  const handleMoveUpdate = (input) => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/common/${url?._id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ moveToBottom: input })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.data.acknowledged) {
          toast.success('Successfully Updated')
        }
      })
  }

  // image convarte buffer
  const buff = Buffer.from(
    url?.image?.data?.data ? url?.image?.data?.data : imageUrl
  );
  const base64 = buff?.toString("base64");

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
                      className="w-12 h-12 cursor-pointer"
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
                  closeModal={setUploadImageModal}
                  endPoint='common'
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
                type="text" disabled={!openInputChange1}
                defaultValue={url?.linkTitle ? url?.linkTitle : url?.link} name="linkName"
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
                <a target="_blank" href={url?.link}>
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
                  closeModal={setDeleteModal}
                ></DeleteModal>
              )}
            </div>

            {/* -----------toggler switch start----------- */}
            <DefaultSwitch initialToggle={url?.show === 'true'} getToggle={handleToggleSwitch} />
            {/* -----------toggler switch start----------- */}
          </div>
        </div>


        {open && (
          <div className="h-full border-t border-gray-200 py-12">
            <div className="relative cursor-pointer flex justify-center flex-wrap sm:flex-nowrap items-center gap-6  ">
              {/* -----------Move to Top start----------- */}
              {url?.moveToBottom === 'true' ?
                <div onClick={() => handleMoveUpdate(false)} className="flex flex-col justify-center items-center gap-2">
                  <div>
                    <img className="w-4" src={moveToDown} alt="" />
                  </div>
                  <h1 className="text-gray-400 text-sm">Move to Down</h1>
                </div>
                :
                <div onClick={() => handleMoveUpdate(true)} className="flex flex-col justify-center items-center gap-2">
                  <div>
                    <img className="w-4" src={moveToTop} alt="" />
                  </div>
                  <h1 className="text-gray-400 text-sm">Move to Top</h1>
                </div>
              }
              {/* -----------Move to Top end----------- */}

              {/* -----------schedule start----------- */}
              <div
                onClick={() => setOpenSchedule(!openSchedule)}
                className="flex flex-col justify-center items-center gap-2"
              >
                <div>
                  <img className="w-4" src={schedule} alt="" />
                </div>
                <h1 className="text-gray-400 text-sm">schedule</h1>
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
                {openEffcetsModal && <EffectsModal closeModal={setOpenEffcetsModal} url={url} />}
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
                {fastLinkProModal && <FastLinkProModal closeModal={setFastLinkProModal} />}
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

            {openSchedule &&
              <div className="mt-4 w-full md:ml-8 relative">
                <h1 className="font-bold text-black text-left mb-3">Schedule Link</h1>

                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-gray-500 font-semibold text-left">Active From</h1>
                    <div onClick={() => setStartDateCalander(!startDateCalander)}
                      className="flex items-center justify-between gap-2 w-72 px-2 h-12 rounded-md bg-gray-200">
                      <input className="cursor-pointer w-full focus:outline-none border-none bg-gray-200 text-gray-600" type="text" value={showStartDate && showStartDate} readOnly placeholder="Select Date" />
                      <img className="w-5" src={schedule} alt="" />
                    </div>
                    {startDateCalander &&
                      <CalanderData selectedDate={showStartDate} setSelectedDate={handleActiveFrom}
                        closeDate={setStartDateCalander} />
                    }
                  </div>

                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-gray-500 font-semibold text-left">Active Until</h1>
                    <div onClick={() => setEndDateCalander(!endDateCalander)}
                      className="flex items-center justify-between gap-2 w-72 px-2 h-12 rounded-md bg-gray-200">
                      <input className="cursor-pointer w-full focus:outline-none border-none bg-gray-200 text-gray-600" type="text" value={showEndDate && showEndDate} readOnly placeholder="Select Date" />
                      <img className="w-5" src={schedule} alt="" />
                    </div>
                    {endDateCalander &&
                      <CalanderData selectedDate={showEndDate} setSelectedDate={handleActiveUntile}
                        closeDate={setEndDateCalander} />
                    }
                  </div>
                </div>
              </div>
            }
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
