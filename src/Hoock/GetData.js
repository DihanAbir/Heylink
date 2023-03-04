import { useEffect, useState } from "react";

// get fetch data
const useGetData = (endpoint) => {
    const [data, setData] = useState(null);
    const token = localStorage.getItem("HeyLinkToken")

    useEffect(() => {
        fetch(`https://hey.ahmadalanazi.com/app/v1/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setData(data.data[0]));
    }, []);

    return data;
};

export default useGetData;
