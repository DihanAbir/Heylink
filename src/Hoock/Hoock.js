import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRenderReducer } from "../Slices/getDataSlice";
import { ServiceContext } from "../ContextAPI/ServiceProvider/ServiceProvider";

// get fetch data
const useFetch = (endpoint) => {
  const { getData, fetchData } = useContext(ServiceContext)
  const token = localStorage.getItem("ShowmoreinfoToken")
  const { render } = useSelector((state) => state.getData);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://3twn4n.xn--b5bp.com/app/v2/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (endpoint === "links") {
          // dispatch(setLinksData(data.data))
        }
        setData(data.data)
      });
    // dispatch(setRenderReducer({ render: false }))
  }, [render, getData, fetchData]);

  return data;
};

export default useFetch;