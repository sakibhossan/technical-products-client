import { useEffect } from "react";
import { useState } from "react"



const useProducts =(productId) =>{
    // const {productId} = useParams();
    const [products,setProducts] = useState({});
    useEffect(()=>{
        fetch(`https://technical-backend-code.vercel.app/products/${productId}`)
        .then (res =>res.json())
        .then(data=>setProducts(data));
    },[productId]);
    return [products,setProducts];

}
export default useProducts;