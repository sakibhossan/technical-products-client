
import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
   
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('https://technical-products-production.up.railway.app/products')
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            setProducts(data);
        });
    },[]);
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12'>
               
            {
                products.map(product =>
                  <Product 
                  key={product._id}
                  product={product}
                  ></Product>

                    )
            }
            
        </div>
    );
};

export default Products;