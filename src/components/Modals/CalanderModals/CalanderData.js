import React, { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'

const CalanderData = ({ selectedDate, setSelectedDate, closeDate }) => {

    let closeCalander = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!closeCalander.current.contains(e.target)) {
                closeDate(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={closeCalander} class="absolute z-50 right-4/5 top-0 border shadow mx-auto bg-white w-80 h-80">
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
            />
        </div>
    );
};

export default CalanderData;