import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});
    console.log(product)
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
        <div className='text-center'>
            <h2>product detail : {product.name}</h2>
            <div>
            <Link to='/checkout'><button class="btn btn-accent">Button</button></Link>
            </div>
                
        </div>
    );
};

export default ProductDetail;