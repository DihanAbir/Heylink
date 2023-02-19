import React, { useEffect, useState } from 'react';
import downArrow from '../../assets/icons/link-customize-icons/down-arrow.svg'
import upArrow from '../../assets/icons/link-customize-icons/up-arrow.svg'
import deletes from '../../assets/icons/link-customize-icons/delete.svg'
import swap from '../../assets/icons/link-customize-icons/swap.svg'
import edit from '../../assets/icons/link-customize-icons/edit.svg'
import add from '../../assets/icons/locations-tab-icons/add.svg'
import blueRight from '../../assets/icons/blue-right.png'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import DefaultSwitch from '../ToggleSwitch/DefaultSwitch';
import ProToggleSwitch from '../ToggleSwitch/ProToggleSwitch';
import DeleteModal from "../Modals/CommonModals/DeleteModal";
import ProButton from '../Buttons/ProButton';
import { toast } from 'react-hot-toast';

const LocationsCustomize = ({ location }) => {
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);
    const [openInputChange, setOpenInputChange] = useState(false);
    const [newAddress, setNewAddress] = useState('');
    const [markersOnTheMapAddress, setMarkersOnTheMapAddress] = useState('');

    const handleUpdateMarkerOnTheMapAddress = () => {
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/location/${location?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ name: newAddress })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Location Updated')
                    setNewAddress('')
                    setOpenInputChange(false)
                }
            })
        alert(markersOnTheMapAddress + 'add korte hobe')
        setMarkersOnTheMapAddress('')
        setOpenEdit(true)
    }

    const handleUpdateLocation = () => {
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/location/${location?._id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ name: newAddress })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Location Updated')
                    setNewAddress('')
                    setOpenInputChange(false)
                }
            })
    }

    const locationChange = (event) => {
        const newAddress = event.target.value
        if (newAddress !== location.name) {
            setNewAddress(newAddress)
        }
    }

    let editRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!editRef.current.contains(e.target)) {
                setOpenEdit(true);
                setOpenInputChange(false)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <>
            <div className='relative w-full my-6 border border-gray-200 rounded-md cursor-pointer'>

                <div className='h-28 flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6'>
                    <div>
                        <img className='w-5' src={swap} alt="" />
                    </div>

                    {/* -----------edit and input  icon start----------- */}
                    <div className='flex-grow flex flex-col gap-2'>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <input onChange={(e) => locationChange(e)}
                                className={`mr-3 px-2 h-8 bg-white rounded w-full focus:outline-none text-gray-700 
                                ${openInputChange ? 'font-normal bg-blue-100 border border-blue-600' : 'font-bold  border-none cursor-pointer'}`} type="text" disabled={!openInputChange} defaultValue={location?.name} name='address' />
                            {
                                newAddress ? <img onClick={() => handleUpdateLocation()}
                                    className='w-4 cursor-pointer' src={blueRight} alt="" />
                                    :
                                    <img onClick={() => setOpenInputChange(!openInputChange)}
                                        className='w-4 cursor-pointer' src={edit} alt="" />
                            }
                        </div>
                    </div>
                    {/* -----------edit  and input icon end----------- */}

                    <div className='flex md:justify-center items-center gap-2 md:gap-6'>
                        <div className='relative'>
                            <div onClick={() => setDeleteModal(!deleteModal)} className='hidden md:block md:flex flex-col justify-center items-center gap-2'>
                                <img className='w-4' src={deletes} alt="" />
                                <span className='text-sm text-gray-500'>Delete</span>
                            </div>
                            {deleteModal && (
                                <DeleteModal
                                    endPoint={"location"}
                                    id={location._id}
                                    closeModal={setDeleteModal}
                                ></DeleteModal>
                            )}
                        </div>
                        <DefaultSwitch initialToggle={mainToggle} getToggle={setMainToggle} />
                    </div>
                </div>
                {
                    open && <div className='relative h-fit cursor-pointer border-t border-gray-200 py-4 px-4'>
                        <div className='mb-2'>
                            <h1 className='text-gray-900 font-semibold text-sm'>Markers on the map</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center w-full h-12 bg-gray-200 rounded-md'>
                                <input onChange={(e) => setMarkersOnTheMapAddress(e.target.value)}
                                    className='w-full h-full px-3 border-none bg-gray-200 focus:outline-none text-gray-700 text-sm font-semibold' type="text" disabled={openEdit}
                                    defaultValue={location?.markersOnTheMap ? location.markersOnTheMap : location.name} />
                            </div>
                            {
                                markersOnTheMapAddress && <img
                                    onClick={() => handleUpdateMarkerOnTheMapAddress()}
                                    className='w-4 cursor-pointer' src={blueRight} alt="" />
                            }

                            {openEdit && <img onClick={() => setOpenEdit(false)} className='w-3' src={edit} alt="" />}
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <img src={add} alt="" />
                            <Link to='' className='text-blue-600 underline'>Add another marker</Link>
                            <ProButton />
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Spotlight</h1>
                                    <ProButton />
                                </div>
                                <p className='text-gray-500 text-sm'>Link automatically expands when visitors arrive on your HeyLink.me page</p>
                            </div>
                            {/* -----------toggler switch start----------- */}
                            <ProToggleSwitch />
                            {/* -----------toggler switch start----------- */}
                        </div>

                        <div className='flex justify-between items-center mt-4'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-gray-900 font-semibold'>Map is Hidden</h1>
                                <ProButton />
                            </div>
                            {/* -----------toggler switch start----------- */}
                            <ProToggleSwitch />
                            {/* -----------toggler switch start----------- */}
                        </div>

                        <div className='flex justify-between items-center mt-4'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-gray-900 font-semibold'>Map is Locked</h1>
                                <ProButton />
                            </div>
                            {/* -----------toggler switch start----------- */}
                            <ProToggleSwitch />
                            {/* -----------toggler switch start----------- */}
                        </div>

                        <div className='flex flex-col md:flex-row md:items-center gap-8 mt-4'>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Marker Button Color</h1>
                                    <ProButton />
                                </div>
                                <p className='text-gray-500 text-sm'>Choose the colour visitors will see for the location buttons on your page</p>
                                <div className='h-10 w-44 mt-2 bg-orange-600 rounded-md'></div>
                            </div>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-gray-900 font-semibold'>Marker Font Color</h1>
                                    <ProButton />
                                </div>
                                <p className='text-gray-500 text-sm'>You can change the font of the location button here</p>
                                <div className='h-10 w-44 mt-2 border border-gray-300 rounded-md'></div>
                            </div>

                        </div>
                    </div>

                }

                {/* -----------toggler button start----------- */}
                <div onClick={() => setOpen(!open)}
                    className='cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center'>
                    <img className='w-4' src={open ? upArrow : downArrow} alt="" />
                </div>
                {/* -----------toggler button end----------- */}
            </div>



        </>
    );
};

export default LocationsCustomize;