import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../Hoock/Hoock";
import { Link } from "react-router-dom";
import arrowRight from '../../assets/icons/right-arrow.svg'
import avatar from '../../assets/avatars/user-avatar.png'
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../ContextAPI/AuthProvider/AuthProvider";
import SmallLoader from "../../components/loaders/SmallLoader";
import SendMessageForm from "../../components/ViewLiveComponents/SendMessageForm";
import LocationItems from "../../components/Drawers/SidebarPreview/PreviewItems/LocationItems";
import LinkItems from "../../components/Drawers/SidebarPreview/PreviewItems/LinkItems";
import SocialItems from "../../components/Drawers/SidebarPreview/PreviewItems/SocialItems"
import { ServiceContext } from "../../ContextAPI/ServiceProvider/ServiceProvider";
const SmallDevicePreview = () => {
    const { render } = useSelector((state) => state.getData)
    const { userData } = useContext(AuthContext)
    const { getData } = useContext(ServiceContext)
    const dispatch = useDispatch()

    const linksData = useFetch("links");
    const socialData = useFetch("social");
    // const galleryData = useFetch("links/gallery");
    // const menuData = useFetch("links/menu");
    // const musicData = useFetch("links/music");
    const locationsData = useFetch("locations");

    const [data, setData] = useState([])


    // console.log(socialData);

    useEffect(() => {
        if (userData?._id) {
            console.log(userData?.username);
            fetch(`http://localhost:8000/${userData?.username}`)
                .then((res) => res.json())
                .then((data) => {
                    const { messageData } = data?.data
                    setData(messageData[0])
                });
        }
    }, []);

    return (
        <div style={{ backgroundColor: `${userData?.backgroundColor}`, color: `${userData?.pageTextColor}` }}>
            <div
                className="max-w-[800px] h-screen relative flex flex-col justify-start items-center mx-auto overflow-y-auto overflow-x-hidden scrollBar"
            >
                {render && !userData?._id ? <SmallLoader />
                    :

                    <>
                        <div className="flex flex-col justify-center items-center mt-6">
                            <img
                                className="rounded-full w-20 h-20 object-cover"
                                src={`${userData?.image ? userData?.image : avatar}`}
                                alt="prifle image"
                            />
                            <h2 className="font-bold text-2xl mt-2 text-center">{userData?.profiletitle ? userData?.profiletitle : userData?.username}</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mx-auto w-full px-2 mt-4 pb-4">


                            {/* ---------------social tab data--------------- */}
                            {socialData.length > 0 && (
                                <div className="flex justify-center items-center flex-wrap gap-4 w-full">
                                    {socialData.map((item, index) => <SocialItems key={index} item={item} />)}
                                </div>
                            )}

                            {/* ---------------Link tab data--------------- */}
                            {linksData.length > 0 && (
                                <div className="grid grid-cols-1 gap-4 w-full">
                                    {linksData.map((item, index) => <LinkItems key={index} item={item} />)}
                                </div>
                            )}




                            {/* ---------------Location tab data--------------- */}
                            {locationsData.length > 0 && (
                                <div className="grid grid-cols-1 gap-4 w-full">
                                    {locationsData.map((location, index) => <>
                                        {
                                            location?.show === 'true' && <LocationItems key={index} location={location} />
                                        }
                                    </>)}
                                </div>
                            )}



                            {
                                data && data?.turnOnOffMessage === 'true' &&
                                <SendMessageForm messageData={data} />
                            }

                        </div>
                    </>

                }
            </div>
        </div>
    );
};

export default SmallDevicePreview;