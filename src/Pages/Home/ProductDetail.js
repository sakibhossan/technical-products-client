import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useProducts from '../../hooks/useProducts';

const ProductDetail = () => {
    const {productId} = useParams();
    const [products,setProducts] = useProducts(productId);
    // const [products,setProducts] = useProducts();
    // const [products,setProducts] = useState([]);
        const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const {_id,name,img,description,price}= products;
    
    // useEffect(
    //     ()=>{
    //         const url = `http://localhost:5000/products/${productId}`;
            
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
                
                
    //             setProducts(data);
    //         })
    //     }
    //     ,[])
    return (
        // <div>
        //     <h2>{products.name}</h2>
        // </div>

     <div className='mt-4 ' >
           
            {/* <h2>product detail : {product.name}</h2> */}
             <form className='w-24 md:w-80 lg:w-96  flex flex-col mx-auto justify-items-center'   onSubmit={handleSubmit(onSubmit)}>

             <input className='mt-2 h-64  rounded ring ring-lime-500' src={img} style={{border:'2px solid red'}} type="image" alt='' {...register("image" )} />

     
     <textarea className='mt-4  text-lg   h-24 rounded' value={name}  style={{border:'2px solid green'}}  {...register("name", { required: true, maxLength: 20 })} />

    
      <input className='mt-2 pl-6 lg:px-16 lg:mx-24 lg:w-48  text-lg text-blue-500 rounded ring ring-green-500'value={price} style={{border:'2px solid red'}} {...register("lastName")} />
      
      
      <Link to={`/manage/${productId}`}><button class="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... lg:mx-24 lg:w-48 mt-6 text-black">Place Order</button></Link> 
      
    </form>
           
           
                
        
         {/* <div className='w-96 lg:mx-24 mx-auto'>
    
         </div> */}
     </div>
    );
};

export default ProductDetail;