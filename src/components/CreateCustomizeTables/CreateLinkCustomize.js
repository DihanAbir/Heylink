import React, { useContext, useState } from "react";
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
import { setEndDateCalander, setFastLinkProModal, setLinkName, setLinkURL, setOpenEffcetsModal, setOpenInputChange1, setOpenInputChange2, setOpenSchedule, setStartDateCalander } from "../../Slices/linksSlice";
import { setOpen, setUploadImageModal, setDeleteModal } from "../../Slices/controllerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setRenderReducer } from "../../Slices/getDataSlice";
import { ServiceContext } from "../../ContextAPI/ServiceProvider/ServiceProvider";
const CreateLinkCustomize = ({ url }) => {
  const {
    openEffcetsModal,
    fastLinkProModal,
    openSchedule,
    startDateCalander,
    endDateCalander,
    openInputChange1,
    openInputChange2,
    linkName,
    linkURL
  } = useSelector((state) => state.linksSlice);
  const { open, uploadImageModal, deleteModal } = useSelector((state) => state.controllerSlice);
  const { loader, handleDefaultSwitch } = useContext(ServiceContext)
  const [imageData, setImageData] = useState("");
  const dispatch = useDispatch()

  console.log(url);

  const handleToggleSwitch = (input) => {
    handleDefaultSwitch(url?._id, { show: input }, 'links/common',)
    if (loader) {
      dispatch(setRenderReducer({ render: true }))
    }
  }

  // link name update--------------
  const handleUpdateLinkName = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/common/${url?._id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ linkTitle: linkName?.linkName })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.data.acknowledged) {
          toast.success('Link Title Updated')
          dispatch(setRenderReducer({ render: true }))
          dispatch(setLinkName({ id: '', linkName: '' }))
          dispatch(setOpenInputChange1(''))
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
      body: JSON.stringify({ link: linkURL?.linkURL })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.data.acknowledged) {
          toast.success('Link URL Updated')
          dispatch(setRenderReducer({ render: true }))
          dispatch(setLinkURL({ id: '', linkURL: '' }))
          dispatch(setOpenInputChange2(''))
        }
      })
  }


  const linkNameChange = (e) => {
    if (e !== url.linkTitle) {
      dispatch(setLinkName({ id: url?._id, linkName: e }))
    }
  }

  const linkURLChange = (e) => {
    if (e !== url.link) {
      dispatch(setLinkURL({ id: url?._id, linkURL: e }))
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
          dispatch(setRenderReducer({ render: true }))
          dispatch(setStartDateCalander(''))
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
          dispatch(setRenderReducer({ render: true }))
          dispatch(setEndDateCalander(''))
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
          dispatch(setRenderReducer({ render: true }))
        }
      })
  }

  // image convarte buffer
  const buff = Buffer.from(
    url?.image?.data?.data ? url?.image?.data?.data : imageData
  );
  const base64 = buff?.toString("base64");

  return (
    <div>
      <div className="relative w-full my-6 border border-gray-200 rounded-md cursor-pointer">
        <div className="h-28 flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6">
          <div>
            <img className="w-5" src={swap} alt="" />
          </div>

          {/* -----------image upload input field end----------- */}
          {imageData ? (
            <div class="relative w-12 h-12 flex justify-center items-center mx-auto bg-gray-200 rounded-md">
              <img className="w-full h-full" src={imageData} alt="" />
            </div>
          ) : (
            <div>
              <div
                onClick={() => dispatch(setUploadImageModal(uploadImageModal ? '' : url?._id))}
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
              {uploadImageModal === url?._id && (
                <ImageUploadModal
                  url={url}
                  imageData={setImageData}
                  endPoint='common'
                />
              )}
            </div>
          )}
          {/* -----------image upload input field end----------- */}

          {/* -----------edit and input  icon start----------- */}
          <div className="flex-grow flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <input onChange={(e) => linkNameChange(e.target.value)}
                className={`mr-3 px-2 h-8 bg-white rounded w-full focus:outline-none text-gray-700 font-bold ${openInputChange1 === url?._id ? "bg-blue-100 border border-blue-600" : "border-none cursor-pointer"}`}
                type="text" disabled={openInputChange1 === url?._id ? false : true}
                defaultValue={url.linkTitle ? url.linkTitle : url?.link} name="linkName"
              />
              {
                linkName?.id === url?._id && linkName.linkName ? <img onClick={() => handleUpdateLinkName()}
                  className='w-4 cursor-pointer' src={blueRight} alt="" />
                  :
                  <img onClick={() => dispatch(setOpenInputChange1(openInputChange1 ? '' : url?._id))}
                    className='w-4 cursor-pointer' src={edit} alt="" />
              }
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center w-full gap-2">
                <a target="_blank" href={url?.link}>
                  <img className="w-6" src={linkClick} alt="" />
                </a>
                <input onChange={(e) => linkURLChange(e.target.value)}
                  className={`mr-3 px-2 h-8 bg-white rounded w-full text-sm focus:outline-none text-blue-600 
                  ${openInputChange2 === url?._id ? "border border-blue-600" : "border-none cursor-pointer"}`}
                  type="text" disabled={openInputChange2 === url?._id ? false : true}
                  defaultValue={url?.link} name="linkURL" />
              </div>
              {
                linkURL?.id === url?._id && linkURL.linkURL ? <img onClick={() => handleUpdateLinkURL()}
                  className='w-4 cursor-pointer' src={blueRight} alt="" />
                  :
                  <img onClick={() => dispatch(setOpenInputChange2(openInputChange2 ? '' : url?._id))}
                    className='w-4 cursor-pointer' src={edit} alt="" />
              }
            </div>
          </div>
          {/* -----------edit  and input icon end----------- */}

          <div className="flex md:justify-center items-center gap-2 md:gap-6">
            <div className="relative cursor-pointer">
              <div
                onClick={() => dispatch(setDeleteModal(deleteModal ? '' : url?._id))}
                className="hidden md:block md:flex flex-col justify-center items-center gap-2"
              >
                <img className="w-4" src={deletes} alt="" />
                <span className="text-sm text-gray-500">Delete</span>
              </div>
              {deleteModal === url?._id && (
                <DeleteModal
                  endPoint={"common"}
                  id={url._id}
                ></DeleteModal>
              )}
            </div>

            {/* -----------toggler switch start----------- */}
            <DefaultSwitch initialToggle={url?.show === 'true'} getToggle={handleToggleSwitch} />
            {/* -----------toggler switch start----------- */}
          </div>
        </div>


        {open === url?._id && (
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
                onClick={() => dispatch(setOpenSchedule(openSchedule ? '' : url?._id))}
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
                  onClick={() => dispatch(setOpenEffcetsModal(openEffcetsModal ? '' : url?._id))}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <div>
                    <img className="w-4" src={effects} alt="" />
                  </div>
                  <h1 className="text-gray-400 text-sm">effects</h1>
                </div>
                {openEffcetsModal === url?._id && <EffectsModal url={url} />}
              </div>
              {/* -----------effects end----------- */}

              {/* -----------Fast Link start----------- */}
              <div className="relative">
                <div
                  onClick={() => dispatch(setFastLinkProModal(fastLinkProModal ? '' : url?._id))}
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
                {fastLinkProModal === url?._id && <FastLinkProModal />}
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

            {openSchedule === url?._id &&
              <div className="mt-4 w-full md:ml-8 relative">
                <h1 className="font-bold text-black text-left mb-3">Schedule Link</h1>

                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-gray-500 font-semibold text-left">Active From</h1>
                    <div onClick={() => dispatch(setStartDateCalander(startDateCalander ? '' : url?._id))}
                      className="flex items-center justify-between gap-2 w-72 px-2 h-12 rounded-md bg-gray-200">
                      <input className="cursor-pointer w-full focus:outline-none border-none bg-gray-200 text-gray-600" type="text" value={url?.activeFrom && url?.activeFrom} readOnly placeholder="Select Date" />
                      <img className="w-5" src={schedule} alt="" />
                    </div>
                    {startDateCalander === url?._id &&
                      <CalanderData selectedDate={url?.activeFrom} setSelectedDate={handleActiveFrom} />
                    }
                  </div>

                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-gray-500 font-semibold text-left">Active Until</h1>
                    <div onClick={() => dispatch(setEndDateCalander(endDateCalander ? '' : url?._id))}
                      className="flex items-center justify-between gap-2 w-72 px-2 h-12 rounded-md bg-gray-200">
                      <input className="cursor-pointer w-full focus:outline-none border-none bg-gray-200 text-gray-600" type="text" value={url?.activeUntile && url?.activeUntile} readOnly placeholder="Select Date" />
                      <img className="w-5" src={schedule} alt="" />
                    </div>
                    {endDateCalander === url?._id &&
                      <CalanderData selectedDate={url?.activeUntile} setSelectedDate={handleActiveUntile} />
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        )}

        {/* -----------toggler button start----------- */}
        <div
          onClick={() => dispatch(setOpen(open ? '' : url?._id))}
          className="cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center"
        >
          <img className="w-4" src={open === url?._id ? upArrow : downArrow} alt="" />
        </div>
        {/* -----------toggler button end----------- */}
      </div>
    </div>
  );
};

export default CreateLinkCustomize;
