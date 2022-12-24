import React from 'react';
import useManageProduct from '../../hooks/useManageProduct';

const ManageProduct = () => {
    const [product, setProduct] = useManageProduct();
    const deleteProduct =id =>{
        const proceed = window.confirm('Are you sure delete this product?');
        if(proceed){
            const url =`http://localhost:5000/products/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                const remaining = product.filter(product => product._id !== id);
                setProduct(remaining);
            })

        }
    }
    return (
        <div>
            <h2>this manage</h2>
            {
                product.map(product => <div
                key={product._id}
                
                >
<h4>{product.name} <button onClick={()=>deleteProduct(product._id)}>X</button></h4>



                </div>)
            }
        </div>
    );
};

export default ManageProduct;