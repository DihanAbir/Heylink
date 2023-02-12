import React, { useState } from 'react';
import menu from '../../../../../assets/icons/menu-tab-icons/menu.svg'
import empty from '../../../../../assets/icons/menu-tab-icons/empty.svg'
import { Link } from 'react-router-dom';
import MenuListCustomize from '../../../../../components/CreateCustomizeTables/MenuListCustomize/MenuListCustomize';

const MenuTab = () => {
    const [allMenuLists, setAllMenuLists] = useState(0)
    // console.log(allMenuLists);
    return (
        <section className='min-h-screen'>
            <div>
                {
                    allMenuLists === 0 ? <button onClick={() => setAllMenuLists(allMenuLists + 1)}
                        className='flex justify-center items-center gap-4 w-fit px-6 mx-auto cursor-pointer h-12 rounded-[50px] bg-blue-600'>
                        <img src={menu} alt="" />
                        <h1 className='text-white font-semibold'>Add Menu or Price List</h1>
                    </button>
                        :
                        <button className='flex justify-center items-center gap-4 w-fit px-6 mx-auto cursor-pointer h-12 rounded-[50px] bg-blue-200' disabled >
                            <img src={menu} alt="" />
                            <h1 className='text-white font-semibold'>Add Menu or Price List</h1>
                        </button>
                }

                <div className='flex items-center gap-3 h-12 max-w-[600px] mx-auto mt-6 bg-yellow-100 rounded-md px-4'>
                    <div className='w-8 h-8 flex justify-center items-center bg-yellow-400 rounded-full'><span className='text-white p-1'>!</span></div>
                    <p className='text-sm'>You must upgrade to PRO account in order to create more than 1 menu.</p>
                </div>

                {
                    allMenuLists >= 1 ? <MenuListCustomize />
                        :
                        <div className='flex justify-center items-center my-6'>
                            <img className='md:w-[400px]' src={empty} alt="" />
                        </div>
                }




                <h1 className='text-gray-600 text-sm text-center py-6'>You can add multiple menus & price lists on the PRO plan. Check it <Link to='/' className='text-blue-600 underline'>here</Link></h1>
            </div>
        </section>
    );
};

export default MenuTab;