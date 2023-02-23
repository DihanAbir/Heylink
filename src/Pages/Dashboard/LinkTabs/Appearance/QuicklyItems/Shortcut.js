import React, { useContext, useState } from 'react';
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import { toast } from 'react-hot-toast';
import DefaultSwitch from '../../../../../components/ToggleSwitch/DefaultSwitch';
import { AuthContext } from '../../../../../ContextAPI/AuthProvider/AuthProvider';

const Shortcut = () => {
    const { userData } = useContext(AuthContext)
    const [open, setOpen] = useState(true)
    // const [shortcutToggle, setShortcutToggle] = useState(userData?.shortcut === "true")

    console.log(userData?.shortcut === "true");

    const handleShortcut = (input) => {
        console.log(input);
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/user/${userData?._id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ shortcut: input }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.acknowledged) {
                    toast.success('Shortcut Switch Updated')
                    // setShortcutToggle(data)
                }
            });
    }
    return (
        <section id='shortcut' className='mb-4 md:col-span-2'>
            <div className='flex items-center justify-between'>
                <h1 onClick={() => setOpen(!open)} className='text-left font-semibold text-blue-900 mb-2'>SHORTCUT</h1>
                {
                    open ? <img onClick={() => setOpen(!open)} src={arrowDown} alt="" />
                        :
                        <img onClick={() => setOpen(!open)} src={arrowRight} alt="" />
                }
            </div>
            {
                open && <div className='flex justify-between items-center gap-4 px-2 border rounded-xl w-full h-20'>
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-600'>Add Shortcut to HeyLink.me page</span>
                        <h1 className='w-5 h-5 flex justify-center items-center rounded-full bg-gray-400'><span className='p-1 text-white'>!</span></h1>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className='text-gray-500 text-sm font-semibold'>Off</span>
                            <DefaultSwitch initialToggle={userData?.shortcut === "true"} getToggle={handleShortcut} />
                            <span className='text-gray-500 text-sm font-semibold'>On</span>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default Shortcut;