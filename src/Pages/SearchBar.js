import React from 'react';
import { useState } from 'react';
import useProducts from '../hooks/useProducts';

const SearchBar = () => {
    const [products] = useProducts([]);
    const [searchResult,setSearchResult] = useState([]);

    const handleSearchChanges = event =>{
      const searchText = event.target.value;
      const matchResult = products.filter(p => p.name.includes(searchText));
      setSearchResult(matchResult);
    }
    return (
      <div class='py-4 '>
        <input onChange={handleSearchChanges} type="text" placeholder="Type here" class="input input-bordered input-success w-full block mx-auto max-w-xs" />
        {searchResult}

      </div>
      
    );
};

export default SearchBar;