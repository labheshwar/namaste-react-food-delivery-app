import RestaurantInfoShimmer from './RestaurantInfoShimmer';
import { IMAGE_URL } from '../config';
import useLoaded from '../Hooks/useLoaded';

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
    totalRatingsString,
    deliveryTime,
  } = restaurantInfo;

  const isLoaded = useLoaded(cloudinaryImageId, [restaurantInfo]);

  return (
    <>
      {isLoaded ? (
        <div className='m-4 rounded-lg md:m-8 md:p-8 md:shadow-xl md:shadow-teal-800'>
          <div className='flex flex-col md:flex-row'>
            <div>
              <img
                className='w-40 h-40 rounded-full m-auto md:mr-12 md:w-50 md:h-50'
                src={IMAGE_URL + cloudinaryImageId}
                alt='Logo'
              />
            </div>
            <div className='flex flex-col w-full md:ml-8'>
              <div className='flex justify-between'>
                <div className='location'>
                  <h1 className='mt-4 mb-1 font-bold text-2xl'>{name}</h1>
                  <p>{`${areaName}, ${city}`}</p>
                </div>
                <div className='open-status'>{isOpen ? 'Open' : 'Closed'}</div>
              </div>
              <div className='font-semibold font-mono text-xl mt-4'>
                {cuisines.join(', ')}
              </div>
              <div className='mt-auto flex justify-between '>
                <p className='cost-for-two'>{`Rs. ${
                  costForTwo / 100 / 2
                }/-`}</p>
                <p className='delivery-time'>{deliveryTime} Minutes</p>
              </div>
              <div className='mt-auto flex justify-between w-full'>
                <p className='restaurant-info-rating'>
                  {avgRating}{' '}
                  <i
                    className='fa-solid fa-star'
                    style={{ color: '#ffde0a' }}
                  ></i>
                </p>
                <p className='total-ratings'>{totalRatingsString}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <RestaurantInfoShimmer />
      )}
    </>
  );
};

export default RestaurantInfo;
