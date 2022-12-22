
import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
   
    const [searchText,setSearchText] = useState('');
    const [searchResult,setSearchResult] = useState([]);


   
    
    useEffect(()=>{
        fetch('https://technical-products-production.up.railway.app/products')
        .then(res =>res.json())
        .then(data => {
            const matchResult = data.filter(d => d.name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchResult(matchResult);
            
        });
    },[searchText]);

 const handleSearchChanges = event =>{
    setSearchText(event.target.value);
 }


    return (
         <section>
              <div class='py-4 '>
        <input onChange={handleSearchChanges}  type="text" placeholder="Search for anything..." class="input input-bordered input-success w-full block mx-auto max-w-xs" />
        

      </div>

 

             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12'>
               
               {
                   searchResult.map(product =>
                     <Product 
                     key={product._id}
                     product={product}
                     ></Product>
   
                       )
               }
               
           </div>

         </section>
       
    );
};

export default Products;