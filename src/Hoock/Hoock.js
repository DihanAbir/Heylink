import { useEffect, useState } from "react";

// get fetch data
const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("HeyLinkToken")
  // console.log(token);
  // console.log(endpoint);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return data;
};

export default useFetch;
