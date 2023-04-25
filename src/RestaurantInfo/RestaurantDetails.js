import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantInfo from './RestaurantInfo';
import { API_RESTAURANT_INFO_URL } from '../config';
import Error from '../Error';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const data = await fetch(API_RESTAURANT_INFO_URL(id));
      const json = await data.json();
      const {
        name,
        city,
        areaName,
        avgRating,
        backgroundImage,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        isOpen,
        logo,
        totalRatings,
      } = json?.data?.cards[0]?.card?.card?.info;
      const { deliveryTime } = json?.data?.cards[0]?.card?.card?.info?.sla;
      setRestaurantInfo({
        name,
        city,
        areaName,
        avgRating,
        backgroundImage,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        isOpen,
        logo,
        totalRatings,
        deliveryTime,
      });
      setRestaurantMenu(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    } catch (error) {
      setError('Something Went Wrong');
    }
  };
  return (
    <>
      {error ? (
        <Error
          title={'Something Went Wrong'}
          paragraph={
            'It seems like there is a problem with the server. Please check your internet connection and try again later.'
          }
        />
      ) : (
        <>
          <RestaurantInfo restaurantInfo={restaurantInfo} />
        </>
      )}
    </>
  );
};

export default RestaurantDetails;
