import React, { useContext, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import close from "../../../assets/icons/link-customize-icons/close.svg";
import { setDeleteModal } from '../../../Slices/controllerSlice';
import { ServiceContext } from '../../../ContextAPI/ServiceProvider/ServiceProvider';

const MessageDeleteModal = ({ id, endPoint, reFetch }) => {
    const token = localStorage.getItem("HeyLinkToken");
    const { data, fetchData } = useContext(ServiceContext)

    const closeModal = () => {
        dispatch(setDeleteModal(''))
    }

    const dispatch = useDispatch()
    // console.log(id, "id");
    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                dispatch(setDeleteModal(''))
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });


    const DeleteHandle = () => {
        const url = `http://localhost:8000/app/v2/${endPoint}/${id}`;
        // console.log(url);
        fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.acknowledged) {
                    reFetch()
                    toast.success('Delete Successfully')
                    dispatch(setDeleteModal(''))
                }
            });
    };
    return (
        <div
            ref={dropdownRef}
            className="cursor-pointer w-60 absolute right-12 top-0 border z-50 mt-2 rounded-md bg-gray-50 shadow zoom-in"
        >
            <div className="p-2 relative">
                <button onClick={() => closeModal()}
                    className="absolute top-1 right-1 w-8 h-8 flex justify-center items-center rounded-full bg-sky-100 hover:bg-sky-500 text-black hover:text-white duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div>
                    <h1 className="text-gray-900 font-bold text-center py-2">Delete</h1>
                    <p className="text-sm text-red-400 text-center">
                        Are you sure you want to delete this link? You can't undo this
                        action.
                    </p>
                </div>
                <div className="flex justify-center items-center gap-6 mt-4">
                    <button
                        onClick={() => closeModal(false)}
                        class="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => DeleteHandle()}
                        class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageDeleteModal;