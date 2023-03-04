import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRenderReducer } from "../Slices/getDataSlice";

// get fetch data
const useFetch = (endpoint) => {
  const { render } = useSelector((state) => state.getData);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  console.log(data);

  useEffect(() => {
    fetch(`https://hey.ahmadalanazi.com/app/v1/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      });
    dispatch(setRenderReducer({ render: false }))
  }, [render]);
  return data;
};

export default useFetch;
