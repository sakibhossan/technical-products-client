import React from 'react';

import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useProducts from '../../hooks/useProducts';

const ProductDetail = () => {
    const { productId } = useParams();
    const [products] = useProducts(productId);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { _id, name, img, description, price } = products;


    return (


     


            <form className=' w-72 lg:w-96   mx-auto  mt-4' onSubmit={handleSubmit(onSubmit)}>

                <input className= 'w-80 lg:w-96 mt-2   rounded ring ring-lime-500' src={img} style={{ border: '2px solid red' }} type="image" alt='' {...register("image")} />


                <textarea className='w-56 lg:w-72 px-10 mx-10 mt-4 text-lg  lg:text-xl  py-2    rounded' value={name} style={{ border: '2px solid green' }}  {...register("name", { required: true, maxLength: 20 })} />


                <input className='w-32 mx-24 mt-2 px-12  text-lg text-blue-500 rounded ring ring-green-500' value={price} style={{ border: '2px solid red' }} {...register("lastName")} />

                <br />
                <Link to={`/checkout/${productId}`}><button class="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... w-32 mx-24   mt-6 text-black">Place Order</button></Link>

            </form>




         
        
    );
};

export default ProductDetail;