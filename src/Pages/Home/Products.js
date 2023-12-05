
import React, { useEffect, useState } from 'react';
import Product from './Product';
import Loading from '../Shared/Loading';
import TextAnimation from './TextAnimation';


const Products = () => {
   
    const [searchText,setSearchText] = useState('');
    const [searchResult,setSearchResult] = useState([]);
    const [loading, setLoading]= useState(true);
    
    
   


   
    
    useEffect(()=>{
        fetch('https://technical-backend-code.vercel.app/products/')
       
        .then(res =>res.json())
        .then(data => {
            
            
         
            const matchResult = data.filter(d => d.name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchResult(matchResult);
            setLoading(false);
           
            
            
            
            
        });
    },[searchText ]);
    //
    if(loading){
    return <Loading></Loading>
    }

 const handleSearchChanges = event =>{
    setSearchText(event.target.value);
 }


    return (
     
          <section className=''>
           
      <div class="card bg-green-400   mx-auto  lg:mx-28 h-40 mt-10 shadow-xl">
  <div class="card-body">
  <input onChange={handleSearchChanges}  type="text" placeholder="Search for anything..." class="input input-bordered input-success w-full my-6 block mx-auto max-w-xs" />
  </div>
</div>

<div className='mt-10 px-5 lg:px-96'>
<TextAnimation ></TextAnimation>
</div>

             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12 mt-12'>
               
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