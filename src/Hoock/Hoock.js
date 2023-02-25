import { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../ContextAPI/ServiceProvider/ServiceProvider";

// get fetch data
const useFetch = (endpoint) => {
  const { render, setRender } = useContext(ServiceContext)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/app/v1/links/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [render]);

  return data;
};

export default useFetch;
