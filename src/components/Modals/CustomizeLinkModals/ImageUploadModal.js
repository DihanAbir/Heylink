import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import close from "../../../assets/icons/link-customize-icons/close.svg";
import lock from "../../../assets/icons/link-customize-icons/pro-lock.svg";
import { setRenderReducer } from "../../../Slices/getDataSlice";
import { setOpenFastLinkModal, setUploadImageModal } from "../../../Slices/controllerSlice";
import FastLinkProModal from "./FastLinkProModal";

const ImageUploadModal = ({ url, endPoint }) => {
  const { openFastLinkModal } = useSelector((state) => state.controllerSlice)
  const dispatch = useDispatch()
  const imageID = url?._id;

  const {
    register,
    handleSubmit
  } = useForm();

  const ImageUpload = (data) => {
    const formData = new FormData();
    formData.append("file", data.image[0]);

    const url = `http://localhost:8000/app/v1/links/${endPoint}/${imageID}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.acknowledged) {
          toast.success('Image Upload Successfully')
          dispatch(setUploadImageModal(''))
          dispatch(setRenderReducer({ render: true }))
        }
      });
  };

  let dropdownRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        dispatch(setUploadImageModal(''))
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className="cursor-pointer absolute border -bottom-8 z-50 mt-2 rounded-md bg-gray-50 shadow"
    >
      <div className="p-3">
        <div className="w-full flex justify-end">
          <img
            onClick={() => dispatch(setUploadImageModal(''))}
            className="w-3"
            src={close}
            alt=""
          />
        </div>
        <form
          onChange={handleSubmit(ImageUpload)}
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-2 gap-6 mt-3">
            <div
              //   onClick={() => closeModal(false)}
              className="relative w-24 h-24 flex justify-center items-center bg-gray-200 hover:bg-blue-600 rounded-md"
            >
              <label className="cursor-pointer flex justify-center items-center">
                <div className=" relative flex cursor-pointer items-center justify-center">
                  <span className="p-2 hover:text-white text-center text-gray-600 text-sm">
                    Upload Your own Image
                  </span>
                  <input
                    {...register("image", { required: "image is Required" })}
                    type="file"
                    name="image"
                    className="w-6 absolute opacity-0 cursor-pointer"
                  />
                </div>
              </label>
            </div>
            <div
              onClick={() => dispatch(setOpenFastLinkModal(openFastLinkModal ? '' : url?._id))}
              className="relative w-24 h-24 flex justify-center items-center bg-gray-200 rounded-md"
            >
              <label className="cursor-pointer flex justify-center items-center">
                <div className=" relative flex cursor-pointer items-center justify-center">
                  <span className="p-2 hover:text-white text-center text-gray-600 text-sm">
                    Choose from 700+ icons
                  </span>
                  <input
                    type="file"
                    name="image"
                    className="w-6 absolute opacity-0 cursor-pointer"
                  />
                </div>
              </label>
              <div className="absolute flex justify-center items-center w-24 h-24">
                <div className="bg-white h-8 w-8 p-1 rounded-full">
                  <img className="w-full" src={lock} alt="" />
                </div>
              </div>
              <div className="absolute -top-4 right-6 flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]">
                <img className="w-7" src={lock} alt="" />
              </div>
            </div>
          </div>
        </form>

        {openFastLinkModal === url?._id && <FastLinkProModal />}
      </div>
    </div>
  );
};

export default ImageUploadModal;
