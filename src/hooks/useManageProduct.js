import { useEffect } from "react";
import { useState } from "react"

const useManageProduct= ()=>{
    const [product,setProduct]= useState([]);
    useEffect(() =>{
    fetch('https://technical-backend-code.vercel.app/products/')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setProduct(data);
        })
    },[])
    return[product,setProduct]
        
}
export default useManageProduct;