import { useState, useEffect } from 'react';
import Card from './Card';
import Search from './Search';
import Error from '../Error';
import Shimmer from './Shimmer';
import { API_ALL_RESTAURANTS } from '../config';
import { Link } from 'react-router-dom';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState(restaurantData);
  const [offset, setOffset] = useState(16);
  const [error, setError] = useState('');

  const filterRestaurant = (value) => {
    const dataAfterFilter = restaurantData.filter((item) =>
      item.data.data.name
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(value.toLowerCase())
    );
    setFilteredData(dataAfterFilter);
  };

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const data = await fetch(API_ALL_RESTAURANTS(offset));
      const json = await data.json();
      const destructuredData = json?.data?.cards;
      setRestaurantData(destructuredData);
      setFilteredData(destructuredData);
    } catch (error) {
      setError('Something Went Wrong');
    }
  };

  const loadMoreData = async () => {
    setOffset((prevOffset) => prevOffset + 16);
    try {
      const data = await fetch(API_ALL_RESTAURANTS(offset + 16));
      const json = await data.json();
      const destructuredData = json?.data?.cards;
      setRestaurantData([...restaurantData, ...destructuredData]);
      setFilteredData([...restaurantData, ...destructuredData]);
    } catch (error) {
      setError('Something Went Wrong');
    }
  };

  return error ? (
    <Error
      title={'Something Went Wrong'}
      paragraph={
        'It seems like there is a problem with the server. Please check your internet connection and try again later.'
      }
    />
  ) : (
    <>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        filterRestaurant={filterRestaurant}
      />
      {restaurantData?.length === 0 ? (
        <Shimmer />
      ) : filteredData?.length === 0 ? (
        <Error
          title={'No Restaurant Found'}
          paragraph={
            "It looks like there is no restaurant with the name you've searched. Make sure you are finding the right restaurant and double check your spelling"
          }
        />
      ) : (
        <main>
          {filteredData?.map((item) => {
            return (
              <Link
                className='card-container'
                to={`/restaurant/${item.data.data.id}`}
                key={item.data.data.uuid}
              >
                <Card {...item.data.data} />
              </Link>
            );
          })}
          {restaurantData?.length !== offset && <Shimmer />}
          <button className='load-more-data-button' onClick={loadMoreData}>
            Load More
          </button>
        </main>
      )}
    </>
  );
};

export default Body;
