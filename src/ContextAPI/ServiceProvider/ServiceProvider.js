import React, { createContext } from 'react';
import { toast } from 'react-hot-toast';

export const ServiceContext = createContext()
const ServiceProvider = ({ children }) => {
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

    const data = {
        handleDefaultSwitch,
        handleTitleUpdate,
    }
    return (
        <ServiceContext.Provider value={data}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;