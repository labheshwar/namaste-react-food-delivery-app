import React from 'react';

const Search = ({ searchText, setSearchText, filterRestaurant }) => {
  return (
    <div className='bg-teal-50 flex pt-4 items-center justify-center'>
      <input
        type='search'
        value={searchText}
        className='w-2/3 h-10 border text-teal-800 border-teal-500 rounded-md p-4 md:w-3/4 placeholder:text-teal-800 focus:outline-none focus:border-teal-900'
        placeholder='Search for restaurants'
        onChange={(e) => {
          setSearchText(e.target.value);
          filterRestaurant(e.target.value);
        }}
        onKeyDown={(e) => e.key === 'Enter' && filterRestaurant(searchText)}
      />
      <button
        className='ml-2 w-1/4 bg-teal-800 text-white rounded-md h-10 md:ml-4 md:w-1/5 hover:duration-200 hover:bg-teal-900 hover:scale-105'
        onClick={() => filterRestaurant(searchText)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
