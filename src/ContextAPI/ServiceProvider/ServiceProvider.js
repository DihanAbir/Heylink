import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const ServiceContext = createContext()
const ServiceProvider = ({ children }) => {
    const [render, setRender] = useState(false);

    const handleDefaultSwitch = (id, toggleData, endPoint) => {
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/${endPoint}/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(toggleData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Switch Updated')
                    setRender(true)
                }
            })
    }

    const handleTitleUpdate = (id, data, endPoint) => {
        fetch(`${process.env.REACT_APP_API_KEY}/app/v1/${endPoint}/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    toast.success('Switch Updated')
                }
            })
    }

    const dataInfo = {
        handleDefaultSwitch,
        handleTitleUpdate,
        setRender,
        render
    }
    return (
        <ServiceContext.Provider value={dataInfo}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;