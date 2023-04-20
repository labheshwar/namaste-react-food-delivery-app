import React from 'react';

const ShimmerCard = () => (
  <div className='shimmer'>
    <div className='shimmer__image'></div>
    <div className='shimmer__title'></div>
    <div className='shimmer__cuisines'></div>
    <div className='shimmer__extras'>
      <div className='shimmer__rating'>
        <div className='shimmer__rating__number'></div>
        <i className='fa-solid fa-star' style={{ color: 'lightblue' }}></i>
      </div>
      <div className='shimmer__price'></div>
    </div>
  </div>
);

const Shimmer = () => {
  return (
    <div className='shimmer__parent'>
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
