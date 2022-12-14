
import React, { useEffect, useState } from 'react';
import Product from './Product';


const Products = () => {
   
    const [products, setProducts] = useState([]);
    const [searchText,setSearchText] = useState('');
    const [searchResult,setSearchResult] = useState([]);


    // const handleSearchChanges = event =>{
    //     const searchText = event.target.value;
    //     const matchResult = products.filter(p => p.name.includes(searchText));
    //     setSearchResult(matchResult);
    //   }
    
    useEffect(()=>{
        fetch('https://technical-products-production.up.railway.app/products')
        .then(res =>res.json())
        .then(data => {
            const matchResult = data.filter(d => d.name.toLowerCase().startsWith(searchText.toLowerCase()));
            setSearchResult(matchResult);
            // console.log(data);
            // setProducts(data);
        });
    },[searchText]);
 const handleSearchChanges = event =>{
    setSearchText(event.target.value);
 }
    return (
         <section>
              <div class='py-4 '>
        <input onChange={handleSearchChanges}  type="text" placeholder="Type here" class="input input-bordered input-success w-full block mx-auto max-w-xs" />
        

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