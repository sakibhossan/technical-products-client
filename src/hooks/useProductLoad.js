
import { useEffect, useState } from 'react';

const useProductLoad = (url) => {
     const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [url, update]);
  return {data,setData, loading,update,setUpdate};

};

export default useProductLoad;
// import { useEffect, useState } from "react";

// const useDataLoad = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [update, setUpdate] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     fetch(url)
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.log(error);
//       });
//   }, [url, update])