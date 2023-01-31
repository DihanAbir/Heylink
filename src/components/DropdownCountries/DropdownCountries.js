import React from 'react';
import img1 from '../../assets/icons/country-icons/img (1).svg'
import img2 from '../../assets/icons/country-icons/img (2).svg'
import img3 from '../../assets/icons/country-icons/img (3).svg'
import img4 from '../../assets/icons/country-icons/img (4).svg'
import img5 from '../../assets/icons/country-icons/img (5).svg'
import img6 from '../../assets/icons/country-icons/img (6).svg'
import img7 from '../../assets/icons/country-icons/img (7).svg'
import img8 from '../../assets/icons/country-icons/img (8).svg'
import img9 from '../../assets/icons/country-icons/img (9).svg'
import img10 from '../../assets/icons/country-icons/img (10).svg'
import img11 from '../../assets/icons/country-icons/img (11).svg'
import img12 from '../../assets/icons/country-icons/img (12).svg'
import img13 from '../../assets/icons/country-icons/img (13).svg'
import img14 from '../../assets/icons/country-icons/img (14).svg'
import img15 from '../../assets/icons/country-icons/img (15).svg'
import img16 from '../../assets/icons/country-icons/img (16).svg'

const DropdownCountries = () => {
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
    ]
    return (
        <div class="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="p-6">
                <div className='grid grid-cols-2 items-center gap-6 cursor-pointer'>
                    {
                        images.map(img => <div className='flex items-center gap-2'>
                            <img className='w-6' src={img} alt="" />
                            <p className='text-gray-900 hover:text-sky-500 text-xl'>English</p>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default DropdownCountries;