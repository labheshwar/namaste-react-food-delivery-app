import { useState } from 'react';
import Card from './Card';
import data from '../restaurantData.json';
import Search from '../Search';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantData, setRestaurantData] = useState(data);

  const filterRestaurant = () => {
    const filteredData = data.filter((item) =>
      item.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantData(filteredData);
  };

  return (
    <>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        filterRestaurant={filterRestaurant}
      />
      <main>
        {restaurantData.map((item) => {
          return <Card key={item.data.uuid} {...item.data} />;
        })}
      </main>
    </>
  );
};

export default Body;
