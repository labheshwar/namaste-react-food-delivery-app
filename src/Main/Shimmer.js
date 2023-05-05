import React from 'react';

const ShimmerCard = () => (
  <div className='flex flex-col bg-teal-800  p-4 m-4 h-96 w-64'>
    <div className='animate-pulse'>
      <div className='w-full h-36 bg-teal-100 '></div>
      <div className='flex flex-col'>
        <div className='bg-teal-100 w-5/6 h-7 mt-7 rounded-2xl'></div>
        <div className='bg-teal-100 w-4/6 h-6 mt-10 rounded-2xl'></div>
        <div className='flex mt-16 w-full'>
          <div className='flex w-1/2'>
            <div className='bg-teal-100 w-1/3 mr-2 h-5 rounded-2xl'></div>
            <i className='fa-solid fa-star text-teal-100'></i>
          </div>
          <div className='w-1/5 h-5 ml-16 bg-teal-100 rounded-2xl'></div>
        </div>
      </div>
    </div>
  </div>
);

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
