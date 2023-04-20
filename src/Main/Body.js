import { useState, useEffect } from 'react';
import Card from './Card';
import data from '../restaurantData.json';
import Search from './Search';
import { API_URL } from '../config';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);

  const filterRestaurant = (value) => {
    const filteredData = data.filter((item) =>
      item.data.name.toLowerCase().includes(value.toLowerCase())
    );
    setRestaurantData(filteredData);
  };

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const destructuredData = json?.data?.cards[2]?.data?.data?.cards;
    console.log(destructuredData);
    setRestaurantData(destructuredData);
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
