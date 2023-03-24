import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Links = () => {
    const [viewTab, setViewTab] = useState(1)
    const [viewMore, setViewMore] = useState(false)

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setViewMore(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section ref={dropdownRef} className=''>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center gap-2 md:gap-2 md:flex-wrap cursor-pointer w-full lg:w-[980px] mx-auto'>

                    <Link to='/dashboard/links' onClick={() => setViewTab(1)}
                        className={`flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 1 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 1 && 'bg-green-600'}`}>
                            <svg className='' width="20" height="20" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.872 6.16771L21.1342 9.42178C22.2885 10.5732 22.2885 12.4756 21.1342 13.6771C20.9335 13.8773 20.7829 14.0275 20.6323 14.1777C20.0301 14.7284 19.0765 14.7284 18.5746 14.1277C18.1731 13.7272 18.0225 13.0763 18.2233 12.5257C18.3237 12.2753 18.3237 12.3254 18.4742 11.975C18.675 11.5745 18.5746 10.9737 18.1731 10.6733L15.7139 8.22027L13.2547 5.81727C12.9034 5.46683 12.3513 5.41677 11.9498 5.5169C11.5483 5.71715 11.5985 5.71715 11.3977 5.76721C10.8958 5.96746 10.2434 5.86733 9.79169 5.41677C9.23962 4.86608 9.18943 3.91489 9.7415 3.36421C9.94225 3.16395 10.0928 3.01377 10.2434 2.86358C11.3977 1.71214 13.3049 1.71214 14.5094 2.86358L17.872 6.16771Z" fill={viewTab === 1 ? 'white' : 'gray'} />
                                <path d="M8.28607 15.8298L5.82685 13.3767C5.47553 13.0263 5.42534 12.5257 5.52572 12.1252C5.57591 11.975 5.72647 11.6746 5.77666 11.5745C6.0276 11.0238 5.87704 10.423 5.42534 9.92242C4.87327 9.37173 3.9197 9.32167 3.36763 9.87236C3.16688 10.0726 3.01631 10.2228 2.86575 10.373C1.71142 11.5244 1.71142 13.4268 2.86575 14.6283L6.12798 17.8824L9.39021 21.1364C10.5445 22.2879 12.4517 22.2879 13.6562 21.1364C13.857 20.9362 14.0075 20.786 14.1581 20.6358C14.7102 20.0351 14.7102 19.0839 14.1079 18.5832C13.7064 18.1827 13.0038 18.0326 12.4517 18.2328C12.3011 18.2829 12.0502 18.4331 11.8996 18.4831C11.4981 18.6333 10.946 18.5332 10.6449 18.1827L8.28607 15.8298Z" fill={viewTab === 1 ? 'white' : 'gray'} />
                                <path d="M17.32 19.985C18.0226 20.6858 19.1769 20.6858 19.8795 19.985C20.5822 19.2841 20.5822 18.1327 19.8795 17.4318C17.872 15.4293 17.9724 15.5294 15.9649 13.5269C15.2622 12.826 14.1079 12.826 13.4053 13.5269C12.7026 14.2278 12.7026 15.3792 13.4053 16.0801C15.463 18.0325 15.3626 17.9324 17.32 19.985Z" fill={viewTab === 1 ? 'white' : 'gray'} />
                                <path d="M7.98499 10.5732C8.68762 11.2741 9.84195 11.2741 10.5446 10.5732C11.2472 9.87236 11.2472 8.72092 10.5446 8.02005C8.53706 6.01754 8.63744 6.11767 6.62991 4.11517C5.92727 3.41429 4.77295 3.41429 4.07031 4.11517C3.36768 4.81604 3.36768 5.96748 4.07031 6.66836C6.07784 8.67086 5.92727 8.6208 7.98499 10.5732Z" fill={viewTab === 1 ? 'white' : 'gray'} />
                            </svg>
                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 1 && 'text-blue-900'}`}>Links</h1>
                    </Link>

                    <Link to='/dashboard/links/social' onClick={() => setViewTab(2)}
                        className={`flex flex-col items-center py-2 rounded-md w-20
                        ${viewTab === 2 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                        ${viewTab === 2 && 'bg-green-600'}`}>
                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15.8V14H18.5C18.0394 14 17.6667 14.403 17.6667 14.9V17.6H16V19.4H17.6667V23H19.3333V19.4H21V17.6H19.3333V15.8H21Z" fill={viewTab === 2 ? 'white' : 'gray'} />
                                <path d="M23.5 11H13.5C12.1215 11 11 12.1215 11 13.5V23.5C11 24.8785 12.1215 26 13.5 26H23.5C24.8786 26 26 24.8785 26 23.5V13.5C26 12.1215 24.8786 11 23.5 11ZM24.3333 23.5C24.3333 23.9594 23.9598 24.3333 23.5 24.3333H13.5C13.0402 24.3333 12.6667 23.9594 12.6667 23.5V13.5C12.6667 13.0406 13.0402 12.6667 13.5 12.6667H23.5C23.9598 12.6667 24.3333 13.0406 24.3333 13.5V23.5Z" fill={viewTab === 2 ? 'white' : 'gray'} />
                                <path d="M11.9979 6.7285C11.9812 6.44138 11.8645 6.17675 11.6767 6.00288L10.8249 5.21375C10.6212 3.95312 9.71585 3 8.63316 3C7.41147 3 6.415 4.21388 6.39904 5.71338C5.7454 5.57375 5.1206 5.26713 4.56125 4.80663L4.276 4.57125C4.02594 4.36475 3.70152 4.34225 3.43387 4.517C3.16703 4.69038 3.00001 5.03025 3.00001 5.39987V6.22025C3.00001 7.42537 3.29723 8.57475 3.84859 9.54012L3.23658 10.297C3.0041 10.5836 2.93609 11.0129 3.06322 11.3854C3.19014 11.7574 3.48817 12 3.81822 12H7.78304C9.36432 12 10.6715 10.5269 10.8473 8.63625L11.7638 7.503C11.9292 7.29838 12.0147 7.01613 11.9979 6.7285ZM9.46732 7.49712C9.31554 7.68412 9.23075 7.93712 9.23075 8.20025C9.23075 9.1925 8.5811 10 7.78294 10H5.70152C5.831 9.63575 5.77506 9.19625 5.53297 8.897C5.15108 8.42438 4.87779 7.82963 4.73952 7.1885C5.52019 7.59088 6.35916 7.79988 7.21735 7.79988C7.66962 7.79988 8.03556 7.35213 8.03556 6.79988V5.75C8.03556 5.33637 8.30403 5 8.63326 5C8.96248 5 9.23096 5.33637 9.23096 5.75C9.23096 6.063 9.35082 6.35788 9.55456 6.54688L9.94454 6.90775L9.46732 7.49712Z" fill={viewTab === 2 ? 'white' : 'gray'} />
                                <path d="M12.5 0H2.5C1.12146 0 0 1.12146 0 2.5V12.5C0 13.8785 1.12146 15 2.5 15H12.5C13.8785 15 15 13.8785 15 12.5V2.5C15 1.12146 13.8785 0 12.5 0ZM13.3333 12.5C13.3333 12.9594 12.9598 13.3333 12.5 13.3333H2.5C2.04021 13.3333 1.66667 12.9594 1.66667 12.5V2.5C1.66667 2.04062 2.04021 1.66667 2.5 1.66667H12.5C12.9598 1.66667 13.3333 2.04062 13.3333 2.5V12.5Z" fill={viewTab === 2 ? 'white' : 'gray'} />
                                <path d="M21.1667 4H17.8333C17.3738 4 17 4.37382 17 4.83333V8.16667C17 8.62618 17.3738 9 17.8333 9H21.1667C21.6262 9 22 8.62618 22 8.16667V4.83333C22 4.37382 21.6262 4 21.1667 4ZM21.4444 8.16667C21.4444 8.31979 21.3199 8.44444 21.1667 8.44444H17.8333C17.6801 8.44444 17.5556 8.31979 17.5556 8.16667V4.83333C17.5556 4.68021 17.6801 4.55556 17.8333 4.55556H21.1667C21.3199 4.55556 21.4444 4.68021 21.4444 4.83333V8.16667Z" fill={viewTab === 2 ? 'white' : 'gray'} stroke="#878CAC" />
                                <path d="M8.16667 17H4.83333C4.37382 17 4 17.3738 4 17.8333V21.1667C4 21.6262 4.37382 22 4.83333 22H8.16667C8.62618 22 9 21.6262 9 21.1667V17.8333C9 17.3738 8.62618 17 8.16667 17ZM8.44444 21.1667C8.44444 21.3198 8.31993 21.4444 8.16667 21.4444H4.83333C4.68007 21.4444 4.55556 21.3198 4.55556 21.1667V17.8333C4.55556 17.6802 4.68007 17.5556 4.83333 17.5556H8.16667C8.31993 17.5556 8.44444 17.6802 8.44444 17.8333V21.1667Z" fill={viewTab === 2 ? 'white' : 'gray'} stroke="#878CAC" />
                            </svg>

                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 2 && 'text-blue-900'}`}>Social</h1>
                    </Link>

                    {/* <Link to='/dashboard/links/gallery' onClick={() => setViewTab(3)}
                        className={`flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 3 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 3 && 'bg-green-600'}`}>
                            <svg width="20" height="20" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57167 15.5858L9.28583 11.5858L12.5357 15.0858L18.5712 8.58579L20.4283 10.5858V4H5.57167V15.5858ZM5.57167 18.4142V20H14.4724L9.28583 14.4142L5.57167 18.4142ZM17.0987 20H20.4283V13.4142L18.5712 11.4142L13.8489 16.5L17.0987 20ZM5.57167 2H20.4283C21.4539 2 22.2854 2.89543 22.2854 4V20C22.2854 21.1046 21.4539 22 20.4283 22H5.57167C4.54604 22 3.7146 21.1046 3.7146 20V4C3.7146 2.89543 4.54604 2 5.57167 2ZM12.0714 5C13.6099 5 14.8571 6.34315 14.8571 8C14.8571 9.65685 13.6099 11 12.0714 11C10.533 11 9.28583 9.65685 9.28583 8C9.28583 6.34315 10.533 5 12.0714 5ZM12.0714 7C11.5586 7 11.1429 7.44772 11.1429 8C11.1429 8.55228 11.5586 9 12.0714 9C12.5843 9 13 8.55228 13 8C13 7.44772 12.5843 7 12.0714 7ZM0 6C0 4.89543 0.831442 4 1.85708 4H1.85746H2.78518C2.78494 4.52698 2.78521 4.74722 2.78551 4.99931V4.99932V4.99934V4.99939C2.78579 5.22564 2.7861 5.47759 2.7861 6H1.85746V18H2.7861C2.7861 18.5224 2.78579 18.7744 2.78551 19.0006V19.0007V19.0007C2.78521 19.2528 2.78494 19.473 2.78518 20H1.85746H1.85724C1.36153 20 0.911199 19.7908 0.578204 19.4498C0.222275 19.0854 0.000382493 18.5706 0.000382493 18V6H0ZM24.1429 20C25.1686 20 26 19.1046 26 18H25.9996L25.9996 6C25.9996 5.42506 25.7744 4.90679 25.4137 4.54195C25.0815 4.20587 24.6345 4 24.1428 4H24.1425L23.2148 4C23.2151 4.52661 23.2148 4.74691 23.2145 4.99877V4.99938C23.2142 5.22563 23.2139 5.47758 23.2139 6H24.1425V18H23.2139C23.2139 18.5224 23.2142 18.7744 23.2145 19.0006V19.0007V19.0012C23.2148 19.2531 23.2151 19.4734 23.2148 20H24.1425H24.1429Z" fill={viewTab === 3 ? 'white' : 'gray'} />
                            </svg>

                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 3 && 'text-blue-900'}`}>Gallery</h1>
                    </Link> */}


                    <Link to='/dashboard/links/menu' onClick={() => setViewTab(4)}
                        className={`flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 4 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 4 && 'bg-green-600'}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40039 6C2.40039 5.68174 2.52682 5.37651 2.75186 5.15147C2.97691 4.92643 3.28213 4.8 3.60039 4.8H14.4004C14.7186 4.8 15.0239 4.92643 15.2489 5.15147C15.474 5.37651 15.6004 5.68174 15.6004 6C15.6004 6.31826 15.474 6.62348 15.2489 6.84853C15.0239 7.07357 14.7186 7.2 14.4004 7.2H3.60039C3.28213 7.2 2.97691 7.07357 2.75186 6.84853C2.52682 6.62348 2.40039 6.31826 2.40039 6ZM2.40039 12C2.40039 11.6817 2.52682 11.3765 2.75186 11.1515C2.97691 10.9264 3.28213 10.8 3.60039 10.8H14.4004C14.7186 10.8 15.0239 10.9264 15.2489 11.1515C15.474 11.3765 15.6004 11.6817 15.6004 12C15.6004 12.3183 15.474 12.6235 15.2489 12.8485C15.0239 13.0736 14.7186 13.2 14.4004 13.2H3.60039C3.28213 13.2 2.97691 13.0736 2.75186 12.8485C2.52682 12.6235 2.40039 12.3183 2.40039 12ZM2.75186 17.1515C2.52682 17.3765 2.40039 17.6817 2.40039 18C2.40039 18.3183 2.52682 18.6235 2.75186 18.8485C2.97691 19.0736 3.28213 19.2 3.60039 19.2H14.4004C14.7186 19.2 15.0239 19.0736 15.2489 18.8485C15.474 18.6235 15.6004 18.3183 15.6004 18C15.6004 17.6817 15.474 17.3765 15.2489 17.1515C15.0239 16.9264 14.7186 16.8 14.4004 16.8H3.60039C3.28213 16.8 2.97691 16.9264 2.75186 17.1515Z" fill={viewTab === 4 ? 'white' : 'gray'} />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6C18 5.68174 18.1264 5.37651 18.3515 5.15147C18.5765 4.92643 18.8817 4.8 19.2 4.8H20.4C20.7183 4.8 21.0235 4.92643 21.2485 5.15147C21.4736 5.37651 21.6 5.68174 21.6 6C21.6 6.31826 21.4736 6.62348 21.2485 6.84853C21.0235 7.07357 20.7183 7.2 20.4 7.2H19.2C18.8817 7.2 18.5765 7.07357 18.3515 6.84853C18.1264 6.62348 18 6.31826 18 6ZM18 12C18 11.6817 18.1264 11.3765 18.3515 11.1515C18.5765 10.9264 18.8817 10.8 19.2 10.8H20.4C20.7183 10.8 21.0235 10.9264 21.2485 11.1515C21.4736 11.3765 21.6 11.6817 21.6 12C21.6 12.3183 21.4736 12.6235 21.2485 12.8485C21.0235 13.0736 20.7183 13.2 20.4 13.2H19.2C18.8817 13.2 18.5765 13.0736 18.3515 12.8485C18.1264 12.6235 18 12.3183 18 12ZM18.3515 17.1515C18.1264 17.3765 18 17.6817 18 18C18 18.3183 18.1264 18.6235 18.3515 18.8485C18.5765 19.0736 18.8817 19.2 19.2 19.2H20.4C20.7183 19.2 21.0235 19.0736 21.2485 18.8485C21.4736 18.6235 21.6 18.3183 21.6 18C21.6 17.6817 21.4736 17.3765 21.2485 17.1515C21.0235 16.9264 20.7183 16.8 20.4 16.8H19.2C18.8817 16.8 18.5765 16.9264 18.3515 17.1515Z" fill={viewTab === 4 ? 'white' : 'gray'} />
                            </svg>


                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 4 && 'text-blue-900'}`}>Menu</h1>
                    </Link>


                    {/* <Link to='/dashboard/links/crypto' onClick={() => setViewTab(5)}
                        className={`flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 5 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 5 && 'bg-green-600'}`}>
                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0295 6.09728C23.8552 5.81978 23.584 5.62618 23.2613 5.54874C22.9449 5.47775 22.6157 5.52938 22.3316 5.71007C22.054 5.88432 21.8604 6.15536 21.7829 6.47804C21.7119 6.79426 21.7635 7.12338 21.9443 7.40734C24.5653 11.5892 23.952 16.952 20.4595 20.4563C16.9605 23.9541 11.5958 24.5671 7.40604 21.9406C7.12844 21.7663 6.7992 21.7082 6.47641 21.7792C6.16008 21.8502 5.88895 22.0438 5.70819 22.3278C5.52743 22.6117 5.47578 22.9344 5.54679 23.2571C5.61781 23.5733 5.81148 23.8443 6.09553 24.025C8.16135 25.3157 10.5693 25.9998 13.0096 25.9998C13.4809 25.9998 13.9521 25.974 14.4234 25.9224C17.3543 25.5997 20.1109 24.2767 22.1961 22.1987C24.2748 20.1142 25.5982 17.3586 25.921 14.4287C26.2438 11.5117 25.5724 8.55606 24.0295 6.09728Z" fill={viewTab === 5 ? 'white' : 'gray'} />
                                <path d="M5.54666 5.54248C9.0521 2.04469 14.4168 1.43807 18.6001 4.05818C18.8777 4.23242 19.2134 4.2905 19.5362 4.21952C19.8525 4.14853 20.1236 3.94847 20.2979 3.67742C20.6595 3.10306 20.4852 2.34801 19.9106 1.98661C17.4445 0.431326 14.4878 -0.239836 11.5827 0.0763843C8.65185 0.399058 5.89526 1.72202 3.81007 3.80649C1.72488 5.88451 0.401457 8.6466 0.0786716 11.57C-0.244114 14.4741 0.433735 17.4298 1.97665 19.8886C2.17678 20.2112 2.50602 20.4177 2.88045 20.4565C2.92564 20.4629 2.97083 20.4629 3.01602 20.4629C3.3388 20.4629 3.64868 20.3338 3.88108 20.1015C4.28134 19.7014 4.35881 19.0625 4.05539 18.585C1.44083 14.4096 2.04766 9.04026 5.54666 5.54248Z" fill={viewTab === 5 ? 'white' : 'gray'} />
                                <path d="M12.816 4.49023C12.1381 4.49023 11.5894 5.03878 11.5894 5.7164V6.91674H9.89797C9.22012 6.91674 8.67139 7.46529 8.67139 8.1429V17.8489C8.67139 18.5265 9.22012 19.0751 9.89797 19.0751H11.5894V20.2754C11.5829 20.6046 11.712 20.9079 11.938 21.1402C12.1704 21.3725 12.4803 21.5016 12.8095 21.5016C13.4873 21.5016 14.0361 20.9531 14.0361 20.2754V19.0751H14.6365C16.6506 19.0751 18.2904 17.4359 18.2904 15.4224C18.2904 14.2479 17.7287 13.1573 16.7798 12.4603C17.1284 11.8859 17.3156 11.2341 17.3156 10.5694C17.3156 8.68499 15.8953 7.12971 14.0425 6.9361V5.7164C14.0425 5.03878 13.4938 4.49023 12.816 4.49023ZM15.8437 15.4224C15.8437 16.0871 15.3079 16.6228 14.6429 16.6228H11.1246V14.2221H14.6429C15.3079 14.2221 15.8437 14.7577 15.8437 15.4224ZM11.1246 11.7698V9.36906H13.6616C14.3266 9.36906 14.8624 9.9047 14.8624 10.5694C14.8624 11.2341 14.3266 11.7698 13.6616 11.7698H11.1246Z" fill={viewTab === 5 ? 'white' : 'gray'} />
                            </svg>
                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 5 && 'text-blue-900'}`}>Crypto</h1>
                    </Link> */}



                    {/* --------------show only medium device ++ for responsive --------------------- */}
                    <Link to='/dashboard/links/locations' onClick={() => setViewTab(6)}
                        className={`hidden md:block md:flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 6 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 6 && 'bg-green-600'}`}>
                            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17C17.206 17 19 15.206 19 13C19 10.794 17.206 9 15 9C12.794 9 11 10.794 11 13C11 15.206 12.794 17 15 17ZM15 11C16.103 11 17 11.897 17 13C17 14.103 16.103 15 15 15C13.897 15 13 14.103 13 13C13 11.897 13.897 11 15 11Z" fill={viewTab === 6 ? 'white' : 'gray'} />
                                <path d="M14.4201 24.814C14.5893 24.9349 14.7921 24.9998 15.0001 24.9998C15.2081 24.9998 15.4108 24.9349 15.5801 24.814C15.8841 24.599 23.0291 19.44 23.0001 13C23.0001 8.589 19.4111 5 15.0001 5C10.5891 5 7.00009 8.589 7.00009 12.995C6.97109 19.44 14.1161 24.599 14.4201 24.814ZM15.0001 7C18.3091 7 21.0001 9.691 21.0001 13.005C21.0211 17.443 16.6121 21.428 15.0001 22.735C13.3891 21.427 8.97909 17.441 9.00009 13C9.00009 9.691 11.6911 7 15.0001 7Z" fill={viewTab === 6 ? 'white' : 'gray'} />
                            </svg>

                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 6 && 'text-blue-900'}`}>Locations</h1>
                    </Link>


                    <Link to='/dashboard/links/music' onClick={() => setViewTab(7)}
                        className={`hidden md:block md:flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 7 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 7 && 'bg-green-600'}`}>
                            <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.25 13.0719L12 14.9302V22.3477C12 24.5524 9.94454 26.25 7.5 26.25C5.05546 26.25 3 24.5524 3 22.3477C3 20.143 5.05546 18.4454 7.5 18.4454C8.31357 18.4454 9.08405 18.6335 9.75 18.9656V6.35153L25.5 3.75V21.2328C25.5 23.4375 23.4445 25.1351 21 25.1351C18.5555 25.1351 16.5 23.4375 16.5 21.2328C16.5 19.0281 18.5555 17.3305 21 17.3305C21.8136 17.3305 22.584 17.5185 23.25 17.8507V13.0719ZM7.5 24.0201C8.78339 24.0201 9.75 23.2218 9.75 22.3477C9.75 21.4736 8.78339 20.6753 7.5 20.6753C6.21661 20.6753 5.25 21.4736 5.25 22.3477C5.25 23.2218 6.21661 24.0201 7.5 24.0201ZM21 22.9052C22.2834 22.9052 23.25 22.1069 23.25 21.2328C23.25 20.3587 22.2834 19.5604 21 19.5604C19.7166 19.5604 18.75 20.3587 18.75 21.2328C18.75 22.1069 19.7166 22.9052 21 22.9052ZM12 8.24052V12.6695L23.25 10.8113V6.38228L12 8.24052Z" fill={viewTab === 7 ? 'white' : 'gray'} />
                            </svg>


                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 7 && 'text-blue-900'}`}>Music</h1>
                    </Link>


                    {/* <Link to='/dashboard/links/commerce' onClick={() => setViewTab(8)}
                        className={`hidden md:block md:flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 8 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 8 && 'bg-green-600'}`}>
                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1058 8.01986C10.9 7.2256 12.264 7.79486 12.264 8.91411C12.264 9.36775 12.6317 9.73545 13.0854 9.73545C13.539 9.73545 13.9067 9.36775 13.9067 8.91411C13.9067 7.59643 13.025 6.48135 11.8213 6.12614V5.5772C11.8213 5.12356 11.4536 4.75586 11 4.75586C10.5464 4.75586 10.1787 5.12356 10.1787 5.5772V6.12458C8.78026 6.53447 7.87767 7.93548 8.19642 9.40889C8.39277 10.3156 9.02088 11.0688 9.87607 11.4229L11.4948 12.0932C12.2437 12.4031 12.4677 13.364 11.926 13.9453C11.149 14.7781 9.73545 14.2328 9.73545 13.0849C9.73545 12.6312 9.36775 12.2635 8.91411 12.2635C8.46047 12.2635 8.09277 12.6312 8.09277 13.0849C8.09277 14.3676 8.94119 15.5114 10.1781 15.8723V16.4218C10.1781 16.8754 10.5459 17.2431 10.9995 17.2431C11.4531 17.2431 11.8208 16.8754 11.8208 16.4218V15.8707C12.2792 15.7374 12.6984 15.4926 13.0442 15.151C14.4718 13.739 13.9604 11.337 12.1234 10.5761L10.5042 9.90576C9.74743 9.59222 9.51983 8.60683 10.1058 8.01986Z" fill={viewTab === 8 ? 'white' : 'gray'} stroke="#878CAC" stroke-width="0.4" />
                                <path d="M18.0694 3.93061C14.1622 0.0233902 7.83834 0.0228692 3.93061 3.93061C0.0233916 7.83783 0.0228707 14.1617 3.93061 18.0694C7.83782 21.9766 14.1617 21.9772 18.0694 18.0694C21.9766 14.1622 21.9771 7.83783 18.0694 3.93061ZM11.0003 19.3548C6.39306 19.3548 2.64522 15.607 2.64522 10.9998C2.64522 6.39255 6.39306 2.6447 11.0003 2.6447C15.6075 2.6447 19.3553 6.39255 19.3553 10.9998C19.3553 15.607 15.6075 19.3548 11.0003 19.3548Z" fill={viewTab === 8 ? 'white' : 'gray'} stroke="#878CAC" stroke-width="0.4" />
                            </svg>
                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 8 && 'text-blue-900'}`}>Commerce</h1>
                    </Link> */}


                    <Link to='/dashboard/links/apps' onClick={() => setViewTab(9)}
                        className={`hidden md:block md:flex flex-col items-center py-2 rounded-md w-20
                    ${viewTab === 9 && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewTab === 9 && 'bg-green-600'}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35862 0H3.64138C1.62859 0 0 1.63077 0 3.63889V7.36111C0 9.36841 1.62894 11 3.64138 11H7.35862C9.37106 11 11 9.36841 11 7.36111V3.63889C11 1.63077 9.37141 0 7.35862 0ZM3.50002 2L7.35862 2C8.42508 2 9.00001 2.56365 9.00001 3.63889V7.3611C9.00001 8.43563 8.42462 9 7.35862 9H3.50002C2.43402 9 2.00002 8.43563 2.00002 7.3611L1.99999 3.63889C1.99999 2.56365 2.43356 2 3.50002 2ZM20.3586 0H16.6414C14.6286 0 13 1.63077 13 3.63889V7.36111C13 9.36841 14.6289 11 16.6414 11H20.3586C22.3711 11 24 9.36841 24 7.36111V3.63889C24 1.63077 22.3714 0 20.3586 0ZM16.5 2L20.3586 2C21.4251 2 22 2.56365 22 3.63889V7.3611C22 8.43563 21.4246 9 20.3586 9H16.5C15.434 9 15 8.43563 15 7.3611L15 3.63889C15 2.56365 15.4336 2 16.5 2ZM3.64138 13H7.35862C9.37141 13 11 14.6308 11 16.6389V20.3611C11 22.3684 9.37106 24 7.35862 24H3.64138C1.62894 24 0 22.3684 0 20.3611V16.6389C0 14.6308 1.62859 13 3.64138 13ZM7.35862 15L3.50002 15C2.43356 15 1.99999 15.5636 1.99999 16.6389L2.00002 20.3611C2.00002 21.4356 2.43402 22 3.50002 22H7.35862C8.42462 22 9.00001 21.4356 9.00001 20.3611V16.6389C9.00001 15.5636 8.42508 15 7.35862 15ZM20.3586 13H16.6414C14.6286 13 13 14.6308 13 16.6389V20.3611C13 22.3684 14.6289 24 16.6414 24H20.3586C22.3711 24 24 22.3684 24 20.3611V16.6389C24 14.6308 22.3714 13 20.3586 13ZM16.5 15L20.3586 15C21.4251 15 22 15.5636 22 16.6389V20.3611C22 21.4356 21.4246 22 20.3586 22H16.5C15.434 22 15 21.4356 15 20.3611L15 16.6389C15 15.5636 15.4336 15 16.5 15Z" fill={viewTab === 9 ? 'white' : 'gray'} />
                            </svg>
                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 9 && 'text-blue-900'}`}>Apps</h1>
                    </Link>
                    {/* --------------show only medium device ++ for responsive --------------------- */}


                    {/* -----more button click to another button show_------ */}
                    <div onClick={() => setViewMore(!viewMore)}
                        className={`relative md:hidden flex flex-col items-center py-2 rounded-md w-20
                    ${viewMore && 'bg-blue-50'}`}>
                        <div
                            className={`bg-gray-200 rounded-full flex justify-center items-center w-10 h-10
                    ${viewMore && 'bg-green-600'}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="12" r="2" stroke={viewMore ? 'white' : 'gray'} stroke-width="2" />
                                <circle cx="12" cy="12" r="2" stroke={viewMore ? 'white' : 'gray'} stroke-width="2" />
                                <circle cx="21" cy="12" r="2" stroke={viewMore ? 'white' : 'gray'} stroke-width="2" />
                            </svg>

                        </div>
                        <h1 className={`text-gray-600 pt-1 ${viewTab === 6 && 'text-blue-900'}`}>More</h1>

                        {
                            viewMore && <div class="absolute right-0 top-20 z-10 mt-2 w-[340px] rounded-md bg-gray-50 shadow">
                                <div className='p-3'>
                                    <Link to='/dashboard/links/locations' onClick={() => setViewTab(6)}
                                        className='grid grid-cols-5 gap-10 hover:bg-gray-300 items-center py-2 rounded-md w-full px-2'>
                                        <div
                                            className='hover:bg-blue-600 rounded-full flex justify-center items-center w-12 h-12'>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 17C17.206 17 19 15.206 19 13C19 10.794 17.206 9 15 9C12.794 9 11 10.794 11 13C11 15.206 12.794 17 15 17ZM15 11C16.103 11 17 11.897 17 13C17 14.103 16.103 15 15 15C13.897 15 13 14.103 13 13C13 11.897 13.897 11 15 11Z" fill={viewTab === 6 ? 'white' : 'gray'} />
                                                <path d="M14.4201 24.814C14.5893 24.9349 14.7921 24.9998 15.0001 24.9998C15.2081 24.9998 15.4108 24.9349 15.5801 24.814C15.8841 24.599 23.0291 19.44 23.0001 13C23.0001 8.589 19.4111 5 15.0001 5C10.5891 5 7.00009 8.589 7.00009 12.995C6.97109 19.44 14.1161 24.599 14.4201 24.814ZM15.0001 7C18.3091 7 21.0001 9.691 21.0001 13.005C21.0211 17.443 16.6121 21.428 15.0001 22.735C13.3891 21.427 8.97909 17.441 9.00009 13C9.00009 9.691 11.6911 7 15.0001 7Z" fill={viewTab === 6 ? 'white' : 'gray'} />
                                            </svg>

                                        </div>
                                        <h1 className={`text-gray-600 pt-1 ${viewTab === 6 && 'text-blue-900'}`}>Locations</h1>
                                    </Link>


                                    <Link to='/dashboard/links/music' onClick={() => setViewTab(7)}
                                        className='grid grid-cols-5 gap-10 hover:bg-gray-300 items-center py-2 rounded-md w-full px-2'>
                                        <div
                                            className='hover:bg-blue-600 rounded-full flex justify-center items-center w-12 h-12'>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.25 13.0719L12 14.9302V22.3477C12 24.5524 9.94454 26.25 7.5 26.25C5.05546 26.25 3 24.5524 3 22.3477C3 20.143 5.05546 18.4454 7.5 18.4454C8.31357 18.4454 9.08405 18.6335 9.75 18.9656V6.35153L25.5 3.75V21.2328C25.5 23.4375 23.4445 25.1351 21 25.1351C18.5555 25.1351 16.5 23.4375 16.5 21.2328C16.5 19.0281 18.5555 17.3305 21 17.3305C21.8136 17.3305 22.584 17.5185 23.25 17.8507V13.0719ZM7.5 24.0201C8.78339 24.0201 9.75 23.2218 9.75 22.3477C9.75 21.4736 8.78339 20.6753 7.5 20.6753C6.21661 20.6753 5.25 21.4736 5.25 22.3477C5.25 23.2218 6.21661 24.0201 7.5 24.0201ZM21 22.9052C22.2834 22.9052 23.25 22.1069 23.25 21.2328C23.25 20.3587 22.2834 19.5604 21 19.5604C19.7166 19.5604 18.75 20.3587 18.75 21.2328C18.75 22.1069 19.7166 22.9052 21 22.9052ZM12 8.24052V12.6695L23.25 10.8113V6.38228L12 8.24052Z" fill={viewTab === 7 ? 'white' : 'gray'} />
                                            </svg>


                                        </div>
                                        <h1 className={`text-gray-600 pt-1 ${viewTab === 7 && 'text-blue-900'}`}>Music</h1>
                                    </Link>


                                    <Link to='/dashboard/links/commerce' onClick={() => setViewTab(8)}
                                        className='grid grid-cols-5 gap-10 hover:bg-gray-300 items-center py-2 rounded-md w-full px-2'>
                                        <div
                                            className='hover:bg-blue-600 rounded-full flex justify-center items-center w-12 h-12'>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1058 8.01986C10.9 7.2256 12.264 7.79486 12.264 8.91411C12.264 9.36775 12.6317 9.73545 13.0854 9.73545C13.539 9.73545 13.9067 9.36775 13.9067 8.91411C13.9067 7.59643 13.025 6.48135 11.8213 6.12614V5.5772C11.8213 5.12356 11.4536 4.75586 11 4.75586C10.5464 4.75586 10.1787 5.12356 10.1787 5.5772V6.12458C8.78026 6.53447 7.87767 7.93548 8.19642 9.40889C8.39277 10.3156 9.02088 11.0688 9.87607 11.4229L11.4948 12.0932C12.2437 12.4031 12.4677 13.364 11.926 13.9453C11.149 14.7781 9.73545 14.2328 9.73545 13.0849C9.73545 12.6312 9.36775 12.2635 8.91411 12.2635C8.46047 12.2635 8.09277 12.6312 8.09277 13.0849C8.09277 14.3676 8.94119 15.5114 10.1781 15.8723V16.4218C10.1781 16.8754 10.5459 17.2431 10.9995 17.2431C11.4531 17.2431 11.8208 16.8754 11.8208 16.4218V15.8707C12.2792 15.7374 12.6984 15.4926 13.0442 15.151C14.4718 13.739 13.9604 11.337 12.1234 10.5761L10.5042 9.90576C9.74743 9.59222 9.51983 8.60683 10.1058 8.01986Z" fill={viewTab === 8 ? 'white' : 'gray'} stroke="#878CAC" stroke-width="0.4" />
                                                <path d="M18.0694 3.93061C14.1622 0.0233902 7.83834 0.0228692 3.93061 3.93061C0.0233916 7.83783 0.0228707 14.1617 3.93061 18.0694C7.83782 21.9766 14.1617 21.9772 18.0694 18.0694C21.9766 14.1622 21.9771 7.83783 18.0694 3.93061ZM11.0003 19.3548C6.39306 19.3548 2.64522 15.607 2.64522 10.9998C2.64522 6.39255 6.39306 2.6447 11.0003 2.6447C15.6075 2.6447 19.3553 6.39255 19.3553 10.9998C19.3553 15.607 15.6075 19.3548 11.0003 19.3548Z" fill={viewTab === 8 ? 'white' : 'gray'} stroke="#878CAC" stroke-width="0.4" />
                                            </svg>
                                        </div>
                                        <h1 className={`text-gray-600 pt-1 ${viewTab === 8 && 'text-blue-900'}`}>Commerce</h1>
                                    </Link>


                                    <Link to='/dashboard/links/apps' onClick={() => setViewTab(9)}
                                        className='grid grid-cols-5 gap-10 hover:bg-gray-300 items-center py-2 rounded-md w-full px-2'>
                                        <div
                                            className='hover:bg-blue-600 rounded-full flex justify-center items-center w-12 h-12'>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35862 0H3.64138C1.62859 0 0 1.63077 0 3.63889V7.36111C0 9.36841 1.62894 11 3.64138 11H7.35862C9.37106 11 11 9.36841 11 7.36111V3.63889C11 1.63077 9.37141 0 7.35862 0ZM3.50002 2L7.35862 2C8.42508 2 9.00001 2.56365 9.00001 3.63889V7.3611C9.00001 8.43563 8.42462 9 7.35862 9H3.50002C2.43402 9 2.00002 8.43563 2.00002 7.3611L1.99999 3.63889C1.99999 2.56365 2.43356 2 3.50002 2ZM20.3586 0H16.6414C14.6286 0 13 1.63077 13 3.63889V7.36111C13 9.36841 14.6289 11 16.6414 11H20.3586C22.3711 11 24 9.36841 24 7.36111V3.63889C24 1.63077 22.3714 0 20.3586 0ZM16.5 2L20.3586 2C21.4251 2 22 2.56365 22 3.63889V7.3611C22 8.43563 21.4246 9 20.3586 9H16.5C15.434 9 15 8.43563 15 7.3611L15 3.63889C15 2.56365 15.4336 2 16.5 2ZM3.64138 13H7.35862C9.37141 13 11 14.6308 11 16.6389V20.3611C11 22.3684 9.37106 24 7.35862 24H3.64138C1.62894 24 0 22.3684 0 20.3611V16.6389C0 14.6308 1.62859 13 3.64138 13ZM7.35862 15L3.50002 15C2.43356 15 1.99999 15.5636 1.99999 16.6389L2.00002 20.3611C2.00002 21.4356 2.43402 22 3.50002 22H7.35862C8.42462 22 9.00001 21.4356 9.00001 20.3611V16.6389C9.00001 15.5636 8.42508 15 7.35862 15ZM20.3586 13H16.6414C14.6286 13 13 14.6308 13 16.6389V20.3611C13 22.3684 14.6289 24 16.6414 24H20.3586C22.3711 24 24 22.3684 24 20.3611V16.6389C24 14.6308 22.3714 13 20.3586 13ZM16.5 15L20.3586 15C21.4251 15 22 15.5636 22 16.6389V20.3611C22 21.4356 21.4246 22 20.3586 22H16.5C15.434 22 15 21.4356 15 20.3611L15 16.6389C15 15.5636 15.4336 15 16.5 15Z" fill={viewTab === 9 ? 'white' : 'gray'} />
                                            </svg>
                                        </div>
                                        <h1 className={`text-gray-600 pt-1 ${viewTab === 9 && 'text-blue-900'}`}>Apps</h1>
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                    {/* -----more button click to another button show_------ */}
                </div>
            </div>

            <div className='mt-8'>
                <Outlet />
            </div>
        </section>
    );
};

export default Links;