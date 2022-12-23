import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useProducts from '../../hooks/useProducts';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});
    const [products] = useProducts([]);
        const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const {_id,name,img,description,price}= products;
    
    useEffect(
        ()=>{
            const url = `http://localhost:5000/products/${productId}`;
            
            fetch(url)
            .then(res => res.json())
            .then(data => {
                
                
                setProduct(data);
            })
        }
        ,[])
    return (
     <section className=''>
           
            {/* <h2>product detail : {product.name}</h2> */}
             <form  className='w-96 flex flex-col mx-auto justify-items-center' onSubmit={handleSubmit(onSubmit)}>

             <input className='mt-2  w-60 md:w-80 lg:w-96 rounded ring ring-lime-500' src={img} style={{border:'2px solid red',height:'400px'}} type="image" alt='' {...register("image" )} />

     
     <textarea className='mt-2  text-lg  w-48 md:w-56  lg:w-96 h-24 rounded' value={name}  style={{border:'2px solid green'}}  {...register("name", { required: true, maxLength: 20 })} />

    
      <input className='mt-2 pl-4  w-16 md:w-48 lg:w-48 text-lg text-blue-500 rounded ring ring-green-500'value={price} style={{border:'2px solid red'}} {...register("lastName")} />
      
      
      
      
    </form>
           
           
                
        
         {/* <div className='mt-60'>
         <Link to='/checkout'><button class="btn btn-accent">Button</button></Link>
         </div> */}
     </section>
    );
};

export default ProductDetail;