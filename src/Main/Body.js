import { useState } from 'react';
import Card from './Card';
import data from '../restaurantData.json';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantData, setRestaurantData] = useState(data);

  const filterRestaurant = () => {
    const filteredData = data.filter(item => item.data.name.toLowerCase().includes(searchText.toLowerCase()))  
    setRestaurantData(filteredData);
  }
  
  return (
    <>
      <div className='search'>
        <input
          type='search'
          value={searchText}
          placeholder='Search for restaurants'
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={filterRestaurant}>Search</button>
      </div>
      <main>
        {restaurantData.map((item) => {
          return <Card key={item.data.uuid} {...item.data} />;
        })}
      </main>
    </>
  );
};

export default Body;
