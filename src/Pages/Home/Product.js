import React from 'react';

const Product = (props) => {
    const {_id,name,img,description,price}= props.product;
    return (
       
      
           <div class="card sm:max-w-sm md:max-w-md  lg:max-w-lg  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img 
          style={{height:'400px', width:'300px'}}
          src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      
       
    );
};

export default Product;