import React, { useContext, useEffect, useState } from 'react';
import ViewMessages from '../DetailsMessages/ViewMessages';
import './MessagesTab.module.css'
import download from '../../../../../assets/icons/download.png'
import DefaultSwitch from '../../../../../components/ToggleSwitch/DefaultSwitch';
import { ServiceContext } from '../../../../../ContextAPI/ServiceProvider/ServiceProvider';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';

const MessagesTab = () => {
    const { userData } = useContext(AuthContext)
    const { handleDefaultSwitch } = useContext(ServiceContext)
    const [viewMessage, setViewMessage] = useState(false)
    const [messageData, setMessageData] = useState(null)
    console.log(messageData);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/message`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setMessageData(data.data[0]));
    }, []);

    const handleToggleSwitch = (input) => {
        if (messageData?.turnOnOffMessage === 'true') {
            handleDefaultSwitch(messageData?._id, { turnOnOffMessage: input }, 'message',)
        }
        else {
            fetch(`${process.env.REACT_APP_API_KEY}/app/v1/message`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                    "content-type": "application/json",
                },
                body: JSON.stringify({ turnOnOffMessage: input, userInfo: userData, })
            })
                .then(res => res.json())
                .then((data) => {
                    toast.success('Message Add Successfully')
                });
        }
    }

    return (
        <section className='min-h-full py-6'>
            <div className='w-full h-full rounded-xl border p-4 mt-6 mb-4'>
                <div className='flex justify-between items-center w-full h-full'>
                    <h1 className='text-black font-bold text-left'>Turn ON / OFF Message</h1>
                    <DefaultSwitch initialToggle={messageData?.turnOnOffMessage === 'true'}
                        getToggle={handleToggleSwitch} />
                </div>
                {
                    viewMessage && <ViewMessages message={messageData} />
                }
            </div>


            <div className='w-full h-full rounded-xl border p-4 mt-6 mb-4 cursor-pointer'>
                <h1 className='text-gray-900 font-bold text-left'>Messages</h1>

                <table className=''>
                    <thead>
                        <tr className=''>
                            <th className='text-sm text-gray-500 py-2 px-2' scope="col">#</th>
                            <th className='text-sm text-gray-500 py-2 px-2' scope="col">Text</th>
                            <th className='text-sm text-gray-500 py-2 px-2' scope="col">Your Name</th>
                            <th className='text-sm text-gray-500 py-2 px-2' scope="col">Your Email Address</th>
                            <th className='text-sm text-gray-500 py-2 px-2' scope="col">Your Phone Number</th>
                            <th className='text-sm text-gray-500 py-2 px-2' scope="col">Date Received</th>
                            <th className='text-sm text-gray-500 py-2 px-2' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-sm text-gray-500 py-2 px-2' data-label="#">1</td>
                            <td className='text-sm text-gray-500 py-2 px-2' data-label="Text">Enter Message...</td>
                            <td className='text-sm text-gray-500 py-2 px-2' data-label="Your Name">Robiul Alam</td>
                            <td className='text-sm text-gray-500 py-2 px-2' data-label="Your Email Address">robiul@alam.com</td>
                            <td className='text-sm text-gray-500 py-2 px-2' data-label="Your Phone Number">+88041565322</td>
                            <td className='text-sm text-gray-500 py-2 px-2' data-label="Date Received">22 days ago</td>
                            <td className='text-sm text-gray-500 py-2 px-2 flex justify-between items-center' data-label="Action">
                                <svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22"><path d="M9.998 12.521l2.294-2.281 1.414 1.407-2.293 2.281 2.293 2.281-1.414 1.407-2.294-2.281-2.293 2.281-1.413-1.407 2.293-2.281-2.293-2.281 1.413-1.407 2.293 2.281zM4.999 2.984v-.995c0-1.098.895-1.989 2-1.989h6c1.104 0 2 .891 2 1.989v.995h3c1.105 0 2 .891 2 1.99v1.99a1.994 1.994 0 01-2 1.989h-.08l-.92 10.944a1.994 1.994 0 01-2 1.989h-10c-1.105 0-2-.89-1.997-1.907L2.078 8.953h-.079c-1.106 0-2-.89-2-1.989v-1.99c0-1.099.894-1.99 2-1.99h3zm0 1.99h-3v1.99h16v-1.99h-13zm-.914 3.979l.914 10.944h10l.003-.083.91-10.861H4.085zm8.914-5.969v-.995h-6v.995h6z"></path></svg></td>
                        </tr>
                    </tbody>
                </table>

                <button className='relative mt-6 w-44 h-12 bg-blue-600 rounded-3xl flex justify-center items-center gap-2'>
                    <img className='w-5' src={download} alt="" />
                    <span className='text-white font-semibold'>Export to CSV</span>
                </button>
            </div>
        </section>
    );
};

export default MessagesTab;