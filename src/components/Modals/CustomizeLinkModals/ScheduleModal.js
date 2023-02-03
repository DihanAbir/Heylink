import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const ScheduleModal = ({ closeModal }) => {
    const [selectedDate, setSelectedDate] = useState(new Date)
    let menuRef = useRef();
    // console.log(selectedDate);
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                closeModal(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });


    return (
        <div ref={menuRef} class="fixed md:w-[800px] bg-white flex justify-center left-0 sm:left-6 md:left-auto top-20 shadow rounded-md z-50 w-full md:h-fit">
            <div className=" p-6 flex justify-center">
                <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;