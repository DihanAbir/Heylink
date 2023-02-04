import React from 'react';
import menu from '../../../../../assets/icons/menu-tab-icons/menu.svg'
import empty from '../../../../../assets/icons/menu-tab-icons/empty.svg'
import { Link } from 'react-router-dom';

const MenuTab = () => {
    return (
        <section className='min-h-screen'>
            <div>
                <div className='flex justify-center items-center gap-4 w-fit px-6 mx-auto cursor-pointer h-12 rounded-[50px] bg-blue-600'>
                    <img src={menu} alt="" />
                    <h1 className='text-white font-semibold'>Add Menu or Price List</h1>
                </div>
                <div className='flex justify-center items-center my-6'>
                    <img className='md:w-[400px]' src={empty} alt="" />
                </div>
                <h1 className='text-gray-600 text-sm text-center py-6'>You can add multiple menus & price lists on the PRO plan. Check it <Link to='/' className='text-blue-600 underline'>here</Link></h1>
            </div>
        </section>
    );
};

export default MenuTab;