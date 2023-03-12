import React from 'react';
import useManageProduct from '../../hooks/useManageProduct';
import ManageProductDetail from './ManageProductDetail';






const ManageProduct = () => {
    
  
   
    const [product, setProduct] = useManageProduct();
   


    
   
   
   
     
       
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
                   
                   
                     })
                     }
        }
       
      
   
    
    return (
        <div className=' w-72 lg:w-96 mx-auto mt-4'  data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <h2 className=' px-12 mt-4 text-lg italic font-medium text-amber-400  '>You can be Manage all Product :-</h2>
            {
                product.map(product => <ManageProductDetail
                key={product._id}
                product={product}
                deleteProduct={deleteProduct}
                
                >
{/* <h4>{product.name} <button onClick={()=>deleteProduct(product._id)}>Delete</button></h4> */}
</ManageProductDetail>)
            }
        </div>
    );
};

export default ManageProduct;