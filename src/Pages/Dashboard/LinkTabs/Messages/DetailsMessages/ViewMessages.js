import React, { useState } from 'react';
import ProButton from '../../../../../components/Buttons/ProButton';
import SmallIcon from '../../../../../components/Buttons/SmallIcon';
import DefaultSwitch from '../../../../../components/ToggleSwitch/DefaultSwitch';
import DisabledSwitch from '../../../../../components/ToggleSwitch/DisabledSwitch';
import ProToggleSwitch from '../../../../../components/ToggleSwitch/ProToggleSwitch';
import edit from "../../../../../assets/icons/link-customize-icons/edit.svg";
import blueRight from '../../../../../assets/icons/blue-right.png'

const ViewMessages = ({ message }) => {
    const [messageText, setMessageText] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [termsCondition, setTermsCondition] = useState(false)

    // your name---------
    const [nameChecked, setNameChecked] = useState(false)
    const [nameToggle, setNameToggle] = useState(true)
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

    const handleInputFieldText = (inputName) => {
        // fetch(`https://hey.ahmadalanazi.com/app/v1/message`, {
        //     method: 'POST',
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then((data) => {
        //         event.target.reset();
        //         toast.success('Link URL Add Successfully')
        //         setErrorUrl("");
        //     });
    }

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


            {/* ----------------------------------------------------- */}
            <div className='flex justify-between items-center mb-4'>
                <h1 className=' text-gray-500'>Input Field Text</h1>
                <h1 className=' text-gray-500'>Required Field</h1>
            </div>
            <div className='flex justify-between items-center w-full h-full mb-4'>
                <div className='flex items-center gap-2' >
                    <input onClick={() => setNameChecked(!nameChecked)} checked={nameChecked}
                        type="checkbox" name="name" id="name" />
                    <input onChange={(e) => setYourName(e.target.value)} className='text-gray-600 w-full h-8 border-b focus:outline-none text-sm' type="text" name='name' id='name' defaultValue='Your Name' />
                    {
                        yourName && <button onClick={() => handleInputFieldText('name')}
                            className='w-10 h-full p-1 hover:bg-gray-100 rounded-md flex justify-center items-center'>
                            <img className='w-4 h-full cursor-pointer' src={blueRight} alt="" />
                        </button>
                    }
                </div>

                {
                    nameChecked ? <DefaultSwitch initialToggle={nameToggle} getToggle={setNameToggle} />
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
                    emailChecked ? <DefaultSwitch initialToggle={emailToggle} getToggle={setEmailToggle} />
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
                    phoneNumberChecked ? <DefaultSwitch initialToggle={phoneNumberToggle} getToggle={setPhoneNumberToggle} />
                        :
                        <DisabledSwitch />
                }
            </div>

            {/* -------------------------------------------------------------- */}



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