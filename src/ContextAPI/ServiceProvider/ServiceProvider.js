import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const ServiceContext = createContext()
const ServiceProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([])
    const token = localStorage.getItem("ShowmoreinfoToken")


    const fetchData = (endPoint) => {
        setIsLoading(true)
        fetch(`https://3twn4n.xn--b5bp.com/app/v2/${endPoint}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            });
        setIsLoading(false)
    }


    // handle toggle switch
    const handleDefaultSwitch = (id, toggleData, endPoint, reFetch) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v2/${endPoint}/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("ShowmoreinfoToken")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(toggleData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.data.acknowledged) {
                    reFetch && reFetch()
                    fetchData(endPoint)
                    toast.success('Switch Updated')
                    setLoader(true)
                }
            })
    }

    const handleTitleUpdate = (id, data, endPoint) => {
        fetch(`https://3twn4n.xn--b5bp.com/app/v2/${endPoint}/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("ShowmoreinfoToken")}`,
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
        setLoader,
        isLoading,
        data,
        setData,
        fetchData,
        loader
    }
    return (
        <ServiceContext.Provider value={dataInfo}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;