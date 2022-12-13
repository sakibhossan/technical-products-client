import React from 'react';
import useProducts from '../hooks/useProducts';

const SearchBar = () => {
    const [products] = useProducts([]);
    return (
      <div class='py-4 '>
        <input type="text" placeholder="Type here" class="input input-bordered input-success w-full block mx-auto max-w-xs" />

      </div>
    );
};

export default SearchBar;