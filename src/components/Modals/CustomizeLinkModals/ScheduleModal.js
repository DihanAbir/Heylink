import React, { useEffect, useRef } from 'react';

const ScheduleModal = ({ closeModal }) => {

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={dropdownRef} className="z-50 absolute top-4">
            <div className="h-96 lg:w-[800px] bg-white p-4 flex justify-center">

            </div>
        </div>
    );
};

export default ScheduleModal;