import React from 'react';
import useProducts from '../hooks/useProducts';

const SearchBar = () => {
    const [products] = useProducts([]);
    return (
      <div class='py-4  lg:w-96  md:w-96   mx-auto'>
        <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />

      </div>
    );
};

export default SearchBar;