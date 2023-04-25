import React from 'react';

const RestaurantInfoShimmer = () => {
  return (
    <div className='restaurant-info-shimmer'>
      <div className='info-container-shimmer'>
        <div className='logo-container-shimmer'>
          <div className='logo-shimmer'></div>
        </div>
        <div className='additional-info-shimmer'>
          <div className='flex-space-between'>
            <div className='location-shimmer'></div>
            <div className='open-status-shimmer'></div>
          </div>
          <div className='restaurant-info-cuisines-shimmer'></div>
          <div className='delivery-and-cost-shimmer flex-space-between'>
            <div className='cost-for-two-shimmer'></div>
            <div className='delivery-time-shimmer'></div>
          </div>
          <div className='ratings-shimmer flex-space-between'>
            <div className='restaurant-info-rating-shimmer'></div>
            <div className='total-ratings-shimmer'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoShimmer;
