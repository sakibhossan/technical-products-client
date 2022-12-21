import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";


const useProducts = () =>{
    const {productId} = useParams();
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch(`https://technical-products-production.up.railway.app/products/${productId}`)
        .then (res =>res.json())
        .then(data=>setProducts(data));
    },[]);
    return [products,setProducts];

}
export default useProducts;