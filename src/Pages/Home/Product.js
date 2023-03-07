import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,name,img,description,price}= product;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
      navigate(`/products/${id}`);
    }
    return (
       
      
           <div class="card sm:max-w-sm md:max-w-md  lg:max-w-lg  bg-base-100 ">
        <figure>
          {/* pt-10 */}
          <img 
          style={{height:'400px', width:'300px'}}
          src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>Price:$ {price}</p>
          <div class="card-actions">
            <button onClick={() =>navigateToProductDetail(_id)} class=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Buy Now</button>
          </div>
        </div>
      </div>

      
       
    );
};

export default Product;