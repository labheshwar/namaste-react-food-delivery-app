import { useState, useEffect } from 'react';
import Card from './Card';
import Search from './Search';
import Error from './Error';
import { API_URL } from '../config';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState(restaurantData);
  const [error, setError] = useState('');

  const filterRestaurant = (value) => {
    const dataAfterFilter = restaurantData.filter((item) =>
      item.data.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(dataAfterFilter);
  };

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      const destructuredData = json?.data?.cards[2]?.data?.data?.cards;
      setRestaurantData(destructuredData);
      setFilteredData(destructuredData);
    } catch (error) {
      setError('Something Went Wrong');
    }
  };

  return error ? (
    <Error />
  ) : (
    <>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        filterRestaurant={filterRestaurant}
      />

      <main>
        {filteredData.map((item) => {
          return <Card key={item.data.uuid} {...item.data} />;
        })}
      </main>
    </>
  );
};

export default Body;
