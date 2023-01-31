import React from 'react';
import Navber from '../Shared/Navber/Navber';
import check from '../../assets/icons/check.svg'
const PricingCards = () => {
    const starter = [
        'Unlimited Links', 'Link Analytics', 'Instant Checkout', 'Ecommerce Store & Unlimited Products', 'Lead Generation',
        'Bio Link Templates', 'Menu, Locations', 'Unlimited Social & Music Links', 'Unlimited Crypto Wallets', '9.9% + 30c (transaction fees)'
    ]
    const pro = [
        'Unlimited Links', 'Link Analytics', 'Instant Checkout', 'Ecommerce Store & Unlimited Products', 'Lead Generation',
        'Bio Link Templates', 'Menu, Locations', 'Unlimited Social & Music Links', 'Unlimited Crypto Wallets', '9.9% + 30c (transaction fees)'
    ]
    return (
        <section className='bg-[#393AA7] min-h-screen'>
            <Navber />
            <h1 className='font-bold text-white text-center text-3xl'>Simple & fair pricing</h1>

            <div className='grid md:grid-cols-2 gap-6 justify-center max-w-[500px] min-h-screen mx-auto mt-8'>
                <div className='w-96 md:absolute left-[46%] hover:z-10 duration-300 bg-white p-8 rounded-lg hover:shadow-md'>
                    <h1 className='font-bold text-blue-600 text-2xl'>STARTER</h1>
                    <div className='mt-8'>
                        <h1 className='text-3xl font-bold text-black inline-block'>Free</h1><span className='text-gray-800 font-semibold text-md'> / forever</span>
                    </div>
                    <div className='my-8'>
                        {
                            starter.map(str => <div className='flex items-center gap-4'>
                                <img className='w-4' src={check} alt="" />
                                <h1 className='text-gray-600 text-md font-semibold'>{str}</h1>
                            </div>)
                        }
                    </div>
                </div>

                <div className='w-96 md:absolute right-[46%] hover:z-10 duration-300 bg-white p-8 rounded-lg hover:shadow-md'>
                    <h1 className='font-bold text-blue-600 text-2xl'>PRO</h1>
                    <div className='mt-8'>
                        <h1 className='text-3xl font-bold text-black inline-block'>৳524 BDT</h1><span className='text-gray-800 font-semibold text-md'> / month</span>
                    </div>
                    <div className='my-8'>
                        {
                            starter.map(str => <div className='flex items-center gap-4'>
                                <img className='w-4' src={check} alt="" />
                                <h1 className='text-gray-600 text-md font-semibold'>{str}</h1>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCards;