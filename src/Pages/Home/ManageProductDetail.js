import React from 'react';

const ManageProductDetail = ({product,deleteProduct}) => {
    return (
        <div class="card w-96 bg-base-200 shadow-xl mt-4">
        <figure class="px-10 pt-10">
          <img src={product.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{product.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class=" btn bg-gradient-to-r  from-pink-500 to-yellow-500 ...hover:from-green-400 hover:to-blue-500" onClick={()=>deleteProduct(product._id)}>Delete</button>
          </div>
        </div>
      </div>
    );
};

export default ManageProductDetail;