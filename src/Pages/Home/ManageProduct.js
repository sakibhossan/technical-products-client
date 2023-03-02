import React from 'react';
import { useState } from 'react';
import useManageProduct from '../../hooks/useManageProduct';
import Loading from '../Shared/Loading';


const ManageProduct = () => {
    const [loading,setLoading]= useState(false);
  
   
    const [product, setProduct] = useManageProduct();
    if(loading){
        <Loading></Loading>
    }
     const deleteProduct =id =>{
        console.log(id);
        const proceed = window.confirm('Are you sure delete this product?');
        if(proceed){
            const url =`https://technical-backend-code.vercel.app/products/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                const remaining = product.filter(product => product._id !== id);
               
                setProduct(remaining);
                setLoading(true);
                 })
                 }
    }
    return (
        <div>
            <h2>this manage</h2>
            {
                product.map(product => <div
                key={product._id}
                // product={product}
                >
<h4>{product.name} <button onClick={()=>deleteProduct(product._id)}>Delete</button></h4>
</div>)
            }
        </div>
    );
};

export default ManageProduct;