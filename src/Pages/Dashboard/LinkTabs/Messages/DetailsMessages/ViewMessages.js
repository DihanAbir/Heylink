import React, { useState } from 'react';
import ProButton from '../../../../../components/Buttons/ProButton';
import SmallIcon from '../../../../../components/Buttons/SmallIcon';
import DisabledSwitch from '../../../../../components/ToggleSwitch/DisabledSwitch';
import ProToggleSwitch from '../../../../../components/ToggleSwitch/ProToggleSwitch';

const ViewMessages = () => {
    const [messageText, setMessageText] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [termsCondition, setTermsCondition] = useState(false)

    // your name---------
    const [nameChecked, setNameChecked] = useState(false)
    const [nameToggle, setNameToggle] = useState(false)
    const [yourName, setYourName] = useState('')

    // your email-----------
    const [emailChecked, setEmailChecked] = useState(false)
    const [emailToggle, setEmailToggle] = useState(false)
    const [emailAddress, setEmailAddress] = useState('')

    // your phone number-----------
    const [phoneNumberChecked, setPhoneNumberChecked] = useState(false)
    const [phoneNumberToggle, setPhoneNumberToggle] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')

    // custom field 1-----------
    const [customFieldChecked1, setCustomFieldChecked1] = useState(false)
    const [customField1, setCustomField1] = useState('')

    // custom field 2-----------
    const [customFieldChecked2, setCustomFieldChecked2] = useState(false)
    const [customField2, setCustomField2] = useState('')

    // custom field 3-----------
    const [customFieldChecked3, setCustomFieldChecked3] = useState(false)
    const [customField3, setCustomField3] = useState('')

    return (
        <div className='mt-4'>
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-gray-500 text-left'>Display shortcut on scroll</h1>
                    <SmallIcon>?</SmallIcon>
                    <ProButton />
                </div>
                <ProToggleSwitch />
            </div>

            <div className='mb-4'>
                <h1 className='text-black font-bold text-left'>Appearance</h1>
                <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
                    <div>
                        <label className='text-sm text-gray-500' htmlFor="messageText">Message Text</label>
                        <input onChange={(e) => setMessageText(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none' type="text" name='messageText' id='messageText' defaultValue='Leave your message here...' />
                    </div>

                    <div>
                        <label className='text-sm text-gray-500' htmlFor="successMessageText">Success Message Text</label>
                        <input onChange={(e) => setSuccessMessage(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none' type="text" name='successMessageText' id='successMessageText' defaultValue='Your message was sent successfully!' />
                    </div>
                </div>

                <button className='mt-4 w-20 h-8 flex justify-center items-center text-white bg-blue-600 rounded-md font-semibold' type='submit' ><span>SAVE</span></button>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <h1 className=' text-gray-500'>Input Field Text</h1>
                <h1 className=' text-gray-500'>Required Field</h1>
            </div>
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setNameChecked(!nameChecked)} checked={nameChecked} type="checkbox" name="yourName" id="yourName" />
                    <input onChange={(e) => setYourName(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm' type="text" name='yourName' id='yourName' defaultValue='Your Name' />
                </div>

                {
                    nameChecked ? <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setNameToggle(!nameToggle)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
            ${nameToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
            ${nameToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                        :
                        <DisabledSwitch />
                }
            </div>


            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setEmailChecked(!emailChecked)} checked={emailChecked} type="checkbox" name="email" id="email" />
                    <input onChange={(e) => setEmailAddress(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm' type="email" name='email' id='email' defaultValue='Your Email Address' />
                </div>

                {
                    emailChecked ? <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setEmailToggle(!emailToggle)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
            ${emailToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
            ${emailToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                        :
                        <DisabledSwitch />
                }
            </div>


            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setPhoneNumberChecked(!phoneNumberChecked)} checked={phoneNumberChecked} type="checkbox" name="email" id="email" />
                    <input onChange={(e) => setPhoneNumber(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm'
                        type="email" name='email' id='email' defaultValue='Your Phone Number' />
                </div>

                {
                    phoneNumberChecked ? <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setPhoneNumberToggle(!phoneNumberToggle)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
            ${phoneNumberToggle ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
            ${phoneNumberToggle ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                        :
                        <DisabledSwitch />
                }
            </div>



            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setCustomFieldChecked1(!customFieldChecked1)} checked={customFieldChecked1} type="checkbox" name="customField1" id="customField1" />
                    <input onChange={(e) => setCustomField1(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm'
                        type="text" name='customField1' id='customField1' defaultValue='Custom Field #1' />
                </div>

                <ProToggleSwitch />
            </div>

            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setCustomFieldChecked2(!customFieldChecked2)} checked={customFieldChecked2} type="checkbox" name="customField2" id="customField2" />
                    <input onChange={(e) => setCustomField2(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm'
                        type="text" name='customField2' id='customField2' defaultValue='Custom Field #2' />
                </div>

                <ProToggleSwitch />
            </div>

            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setCustomFieldChecked3(!customFieldChecked3)} checked={customFieldChecked3} type="checkbox" name="customField3" id="customField3" />
                    <input onChange={(e) => setCustomField3(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm'
                        type="text" name='customField3' id='customField3' defaultValue='Custom Field #3' />
                </div>

                <ProToggleSwitch />
            </div>

        </div>
    );
};

export default ViewMessages;