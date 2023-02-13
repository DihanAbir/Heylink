import React, { useState } from 'react';
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrow-down.svg'
import CustomeTheme from '../CustomeTheme/CustomeTheme/CustomeTheme';
import PlacementManager from '../PlacementManager/PlacementManager';
import AvatarTitle from '../QuicklyItems/AvatarTitle';
import LayoutSimple from '../QuicklyItems/LayoutSimple';
import Shortcut from '../QuicklyItems/Shortcut';
import ShortUserName from '../QuicklyItems/ShortUserName';
import UserName from '../QuicklyItems/UserName';

const jumpItems = [
    { name: 'Shortcut', img: arrowDown },
    { name: 'username', img: arrowDown },
    { name: 'Short-username', img: arrowDown },
    { name: 'layout', img: arrowDown },
    { name: 'avatar-Title', img: arrowDown },
    { name: 'Placement-Manager', img: arrowDown },
    { name: 'Theme', img: arrowDown },
]

const Appearance = () => {
    const [openJump, setOpenJump] = useState(false)
    return (
        <section className='min-h-screen py-6 cursor-pointer'>
            <div onClick={() => setOpenJump(!openJump)}
                className='flex justify-between items-center gap-4 mb-4'>
                <h1>Quickly jump to:</h1>
                <div className='relative flex-grow md:flex-grow-0'>
                    <div className='flex justify-between items-center px-2 w-full md:w-[500px] h-12 bg-gray-200 text-black rounded-md'>
                        <h1>username3</h1>
                        <img className='w-4' src={arrowDown} alt="" />
                    </div>
                    {
                        openJump && <div className='absolute w-full md:w-[500px] h-fit max-h-56 overflow-y-auto bg-white border'>
                            {
                                jumpItems.map(item => <div className='w-full h-10 hover:bg-gray-200 flex justify-start items-center gap-4 px-4'>
                                    <img className='w-5' src={item.img} alt="" />
                                    <a className='' href={'#' + item.name.toLowerCase()}>{item.name}</a>
                                </div>)
                            }
                        </div>
                    }
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                <Shortcut />
                <UserName />
                <ShortUserName />
                <LayoutSimple />
                <AvatarTitle />
            </div>
            <div className='mt-6'>
                <PlacementManager />
                <CustomeTheme />
            </div>
        </section>
    );
};

export default Appearance;