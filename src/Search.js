import React from 'react';

const Search = ({ searchText, setSearchText, filterRestaurant }) => {
  return (
    <>
      <div className='search'>
        <input
          type='search'
          value={searchText}
          placeholder='Search for restaurants'
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && filterRestaurant()}
        />
        <button onClick={filterRestaurant}>Search</button>
      </div>
    </>
  );
};

export default Search;
