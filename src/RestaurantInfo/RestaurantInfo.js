import { useState, useEffect } from 'react';
import { IMAGE_URL } from '../config';

const RestaurantInfo = ({ restaurantInfo }) => {
  const {
    name,
    city,
    areaName,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    totalRatings,
    deliveryTime,
  } = restaurantInfo;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (cloudinaryImageId) {
      setIsLoaded(true);
    }
  }, [restaurantInfo]);

  return (
    <>
      {isLoaded ? (
        <div className='restaurant-info'>
          <div className='info-container'>
            <div className='logo'>
              <img src={IMAGE_URL + cloudinaryImageId} alt='Logo' />
            </div>
            <div className='additional-info'>
              <div className='flex-space-between'>
                <div className='location'>
                  <h1>{name}</h1>
                  <p>{`${areaName}, ${city}`}</p>
                </div>
                <div className='open-status'>{isOpen ? 'Open' : 'Closed'}</div>
              </div>
              <div className='restaurant-info-cuisines'>
                {cuisines.join(', ')}
              </div>
              <div className='delivery-and-cost flex-space-between'>
                <p className='cost-for-two'>{`Rs. ${
                  costForTwo / 100 / 2
                }/-`}</p>
                <p className='delivery-time'>{deliveryTime} Minutes</p>
              </div>
              <div className='ratings flex-space-between'>
                <p className='restaurant-info-rating'>
                  {avgRating}{' '}
                  <i
                    className='fa-solid fa-star'
                    style={{ color: '#ffde0a' }}
                  ></i>
                </p>
                <p className='total-ratings'>Total Ratings: {totalRatings}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default RestaurantInfo;
