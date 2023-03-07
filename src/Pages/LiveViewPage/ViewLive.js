import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import arrowRight from '../../assets/icons/right-arrow.svg'
import avatar from '../../assets/avatars/user-avatar.png'
import PageLoader from "../../components/loaders/PageLoader";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
const ViewLive = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const location = useLocation()
    const [data, setData] = useState([])
    const { userData, commonData, socialData, galleryData, menuData, locationData, musicData, messageData } = data;

    console.log(messageData);

    useEffect(() => {
        const name = location.pathname.slice(1, location?.pathname?.length)
        fetch(`https://hey.ahmadalanazi.com/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            });
    }, []);

    const handleMessageSend = (data) => {
        console.log(data);
    }

    const [openLocationData, setOpenLocationData] = useState(false)
    const [openMenuData, setOpenMenuData] = useState(false)

    const bufferToImage = (data) => {
        const buff = Buffer.from(
            data?.image?.data?.data
                ? data?.image?.data?.data
                : [
                    "https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://api.heylink.me/static/images/defaults/avatar_user.png",
                ]
        );
        return buff?.toString("base64");
    };

    // image convarte buffer
    const buff = Buffer.from(
        userData?.image?.data?.data ? userData?.image?.data?.data : "https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://api.heylink.me/static/images/defaults/avatar_user.png"
    );
    const base64 = buff?.toString("base64");

    return (
        <section className="w-full min-h-screen bg-[#ffc31b]">


            {data?.length === 0 ? <PageLoader />
                :
                <div className="max-w-[880px] mx-auto">
                    {
                        !userData ? <div className="flex justify-center items-center w-full min-h-screen">
                            <h1 className="text-white font-bold text-3xl md:text-4xl text-center">
                                URL is Wrong
                            </h1>
                        </div>
                            :
                            <div
                                className="flex flex-col justify-start items-center">
                                <div className="flex flex-col justify-center items-center mt-6">
                                    <img
                                        className="rounded-full w-20 border"
                                        src={`data:image/png;base64, ${base64}`}
                                        alt=""
                                    />
                                    <h2 className="font-bold text-2xl mt-2 text-center">{userData?.username}</h2>
                                </div>

                                <div className="grid grid-cols-1 gap-4 mx-auto w-full px-2 mt-4 pb-4">

                                    {/* ---------------Link tab data--------------- */}
                                    {commonData?.length > 0 && (
                                        <div className="grid grid-cols-1 gap-4 w-full">
                                            {commonData?.map((item, index) => <>
                                                {
                                                    item?.show === 'true' && <div className={`flex justify-between items-center border-2 border-white w-full h-16 px-3 bg-purple-200`}>
                                                        <a
                                                            key={index}
                                                            target='_blank'
                                                            href={item.link}
                                                            className=""
                                                        >
                                                            {item.link.slice(0, 40)}
                                                        </a>
                                                        <svg className="w-6" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M24.112 29.996c-3.304 0-5.892-2.577-5.892-5.866 0-.935.039-1.606.114-2.102l-7.543-3.934c-1.096 1.642-2.977 2.716-4.907 2.716-3.304 0-5.891-2.577-5.891-5.867 0-3.288 2.587-5.866 5.891-5.866 1.26 0 2.514.624 3.051.891.345.173.834.608 1.308 1.078l8.007-5.763c.285-3.005 2.757-5.28 5.862-5.28 3.304 0 5.892 2.576 5.892 5.865s-2.588 5.866-5.892 5.866c-1.636 0-3.155-.662-4.171-1.817a1.102 1.102 0 01.104-1.561 1.112 1.112 0 011.569.104c.584.664 1.518 1.061 2.498 1.061 2.058 0 3.67-1.604 3.67-3.653 0-2.048-1.612-3.652-3.67-3.652-2.056 0-3.669 1.604-3.669 3.652 0 .355-.17.689-.459.897l-9.225 6.641a1.115 1.115 0 01-1.472-.149c-.539-.586-1.18-1.204-1.371-1.322-.337-.167-1.296-.644-2.032-.644-2.058 0-3.67 1.604-3.67 3.652 0 2.049 1.612 3.653 3.67 3.653 1.588 0 2.946-1.239 3.412-2.403a1.11 1.11 0 01.648-.627c.295-.11.621-.088.901.057l9.337 4.87a1.103 1.103 0 01.401 1.607c-.041.143-.14.641-.14 2.03 0 2.048 1.613 3.652 3.669 3.652 2.058 0 3.67-1.604 3.67-3.652s-1.612-3.652-3.67-3.652c-.708 0-.874.067-1.391.325a1.12 1.12 0 01-1.494-.495 1.105 1.105 0 01.5-1.485c.79-.395 1.298-.559 2.385-.559 3.304 0 5.892 2.577 5.892 5.866 0 3.289-2.588 5.866-5.892 5.866z" fill=""></path></svg>
                                                    </div>
                                                }
                                            </>
                                            )}
                                        </div>
                                    )}


                                    {/* ---------------social tab data--------------- */}
                                    {socialData?.length > 0 && (
                                        <div className="flex justify-center items-center flex-wrap gap-4 w-full">
                                            {socialData?.map((item, index) => (
                                                <>
                                                    {
                                                        item?.bottom === 'icon' ?
                                                            <a
                                                                key={index}
                                                                target='_blank'
                                                                href={`https://${item?.name}/${item?.link}`}
                                                                className="flex justify-center items-center"
                                                            >
                                                                <img src={item?.image} alt="" className="rounded-full h-[40px] w-[50px]" />
                                                            </a>
                                                            :
                                                            <a
                                                                key={index}
                                                                target='_blank'
                                                                href={`https://${item?.name}/${item?.link}`}
                                                                className="h-16 w-full bg-purple-200 border-white border flex justify-center items-center gap-2"
                                                            >
                                                                <img src={item?.image} alt="" className="rounded-full h-[30px] w-[40px]" />
                                                                <h1 className="text-purple-600 font-semibold md:text-2xl">{item?.name}</h1>
                                                            </a>
                                                    }
                                                </>
                                            ))}
                                        </div>
                                    )}

                                    {/* ---------------Gallery tab data--------------- */}
                                    {galleryData?.length > 0 && (
                                        <div className="grid grid-cols-1 gap-4 w-full">
                                            {galleryData?.map((item, index) => (
                                                //   console.log("item number: " + index + bufferToImage(item))
                                                <img
                                                    key={index}
                                                    className="rounded-2xl w-full"
                                                    src={`data:image/png;base64, ${bufferToImage(item)}`}
                                                    alt=""
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* ---------------Music tab data--------------- */}
                                    {musicData?.length > 0 && (
                                        <div className="grid grid-cols-1 gap-4 w-full">
                                            {musicData?.map((music, index) => <>
                                                {
                                                    music?.show === 'true' && <div
                                                        className="w-full h-20 p-2 flex justify-between items-center gap-2 border border-white bg-rose-500">
                                                        <div className="flex justify-start items-center gap-2 h-full max-w-full">
                                                            <img className='w-16 h-full' src="https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999947-Tropical-island-with-palms..jpg" alt="" />
                                                            <p className="text-white font-semibold">{music?.title ? music.title : music.link}</p>
                                                        </div>
                                                        <img className="w-8" src={arrowRight} alt="" />
                                                    </div>
                                                }
                                            </>

                                            )}
                                        </div>
                                    )}


                                    {/* ---------------Location tab data--------------- */}
                                    {locationData?.length > 0 && (
                                        <div className="grid grid-cols-1 gap-4 w-full">
                                            {locationData?.map((location, index) => <>
                                                {
                                                    location?.show === 'true' && <div className="w-full min-h-16 bg-purple-300 border-white border">
                                                        <div onClick={() => setOpenLocationData(!openLocationData)}
                                                            className="w-full h-16 flex justify-start items-center px-3">
                                                            <h1 className="w-full">{location?.name.slice(0, 40)}</h1>
                                                        </div>
                                                        {
                                                            openLocationData && <>
                                                                <div className="w-full flex flex-col justify-start items-start gap-4 bg-white px-3 py-2">
                                                                    <div className="w-full h-96">
                                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28881.17424342704!2d55.28268127919007!3d25.19827208970151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sThe%20Dubai%20Mall!5e0!3m2!1sen!2sbd!4v1677291607353!5m2!1sen!2sbd" className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                                    </div>
                                                                    <button className="w-full h-14 flex justify-center items-center bg-purple-600 px-3 rounded-md">
                                                                        <a target='_blank' href="" className="text-white font-semibold">
                                                                            {location?.markersOnMap ? location?.markersOnMap?.slice(0, 40) : location?.name?.slice(0, 40)}
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                }
                                            </>)}
                                        </div>
                                    )}

                                    {
                                        menuData?.length > 0 && (
                                            <div className="w-full grid grid-cols-1 gap-4">
                                                {
                                                    menuData?.map((menu, i) => <>
                                                        {
                                                            menu?.show === 'true' && <div className="w-full min-h-12 bg-purple-300 border-white border">
                                                                <div onClick={() => setOpenMenuData(!openMenuData)}
                                                                    className="w-full h-16 flex justify-start items-center px-3">
                                                                    <h1 className="w-full">{menu?.name.slice(0, 40)}</h1>
                                                                </div>
                                                                {
                                                                    openMenuData && <>
                                                                        {
                                                                            menu?.item.map((itemData, i) => (
                                                                                <div className="w-full min-h-16 flex flex-col justify-start items-start gap-3 bg-white px-3 py-2">
                                                                                    <h1>{itemData?.itemText}</h1>
                                                                                    <h1 className="text-black font-semibold">{itemData?.ItemPrice} {menu?.currency}</h1>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </>
                                                                }
                                                            </div>
                                                        }
                                                    </>)
                                                }
                                            </div>
                                        )
                                    }


                                    {
                                        messageData[0] && messageData[0]?.turnOnOffMessage === 'true' && <div className="w-full h-fit bg-purple-300 p-3">
                                            <form onSubmit={handleSubmit(handleMessageSend)} className="">
                                                <div className="mb-4">
                                                    <input
                                                        {...register("messageText", { required: 'Text is Required', maxLength: { value: 510, message: '510 characters remaining' } })}
                                                        className="w-full h-14 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-100 text-xl"
                                                        name="messageText"
                                                        placeholder={messageData[0]?.messageText ? messageData[0]?.messageText : 'Leave your message here...'} />
                                                    {errors.messageText && (
                                                        <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                                            <p className="text-white text-sm py-3 px-2">
                                                                {errors.messageText.message}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>

                                                {
                                                    messageData[0]?.nameFieldChacked === 'true' && <div className="mb-4">
                                                        <input
                                                            {...register("name", messageData[0]?.turnOnName === 'true' && { required: 'Name is Required', maxLength: { value: 16, message: '16 characters remaining' } })}
                                                            className="w-full h-14 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-100 text-xl"
                                                            name="name"
                                                            placeholder={`${messageData[0]?.namePlaceholder ? messageData[0]?.namePlaceholder : 'Enter Your Name'} ${messageData[0]?.turnOnName === 'true' ? '' : '(Optional)'}`} />
                                                        {errors.name && (
                                                            <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                                                <p className="text-white text-sm py-3 px-2">
                                                                    {errors.name.message}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                }
                                                {
                                                    messageData[0]?.emailFieldChacked === 'true' && <div className="mb-4">
                                                        <input
                                                            {...register("email", messageData[0]?.turnOnEmail === 'true' && { required: 'Email is Required', maxLength: { value: 40, message: '40 characters remaining' } })}
                                                            className="w-full h-14 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-100 text-xl"
                                                            name="email"
                                                            placeholder={`${messageData[0]?.emailPlaceholder ? messageData[0]?.emailPlaceholder : 'Your Email Address'} ${messageData[0]?.turnOnEmail === 'true' ? '' : '(Optional)'}`} />
                                                        {errors.email && (
                                                            <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                                                <p className="text-white text-sm py-3 px-2">
                                                                    {errors.email.message}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                }
                                                {
                                                    messageData[0]?.phoneNumberFieldChacked === 'true' && <div className="mb-4">
                                                        <input
                                                            {...register("phoneNumber", messageData[0]?.turnOnPhoneNumber === 'true' && { required: 'Phone Number is Required', maxLength: { value: 15, message: '15 characters remaining' } })}
                                                            className="w-full h-14 bg-transparent border-rose-600 border-b focus:outline-none focus:text-rose-600 focus:placeholder-rose-600 placeholder-gray-100 text-xl"
                                                            name="phoneNumber"
                                                            placeholder={`${messageData[0]?.phoneNumberPlaceholder ? messageData[0]?.phoneNumberPlaceholder : 'Your Phone Number'} ${messageData[0]?.turnOnPhoneNumber === 'true' ? '' : '(Optional)'}`} />
                                                        {errors.phoneNumber && (
                                                            <div className="bg-red-600 h-6 w-full flex justify-end items-center">
                                                                <p className="text-white text-sm py-3 px-2">
                                                                    {errors.phoneNumber.message}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                }


                                                <button className="w-full h-12 bg-purple-400 flex justify-center items-center gap-3" type="submit">
                                                    <h1 className="text-rose-600 text-xl font-semibold">Send Message</h1>
                                                    <svg className="w-6" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.5 9.3L1.2.1C1.1 0 .9 0 .8 0 .6 0 .5.1.3.2.2.3.1.4.1.6 0 .7 0 .9.1 1l2.5 9-2.5 9v.4c0 .1.1.2.2.3.1.1.2.2.3.2 0 .1.1.1.3.1.1 0 .3 0 .4-.1l18.3-9.2c.1-.1.3-.2.3-.3s.1-.2.1-.4 0-.3-.1-.4c-.1-.2-.2-.3-.4-.3zM2.2 17.6L4 10.8l5-.8-5-.8-1.8-6.8L17.3 10 2.2 17.6z"></path></svg>
                                                </button>
                                            </form>
                                        </div>
                                    }

                                </div>
                            </div>
                    }

                </div>

            }

        </section>
    );
};

export default ViewLive;