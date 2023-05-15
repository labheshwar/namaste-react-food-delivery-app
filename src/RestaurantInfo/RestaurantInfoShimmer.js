import React from 'react';

const RestaurantInfoShimmer = () => {
  return (
    <div className='animate-pulse m-4 rounded-lg md:m-8 md:p-8 md:shadow-xl md:shadow-teal-800'>
      <div className='flex flex-col md:flex-row'>
        <div>
          <div className='w-40 h-40 rounded-full m-auto bg-teal-500 md:mr-2 md:w-50 md:h-50' />
        </div>
        <div className='flex flex-col w-full md:ml-8'>
          <div className='flex justify-between'>
            <div className='w-11/12'>
              <h1 className='mt-4 mb-1 font-bold rounded-2xl bg-teal-200 w-2/4 h-6'></h1>
              <p className='mt-4 rounded-2xl bg-teal-200 w-2/6 h-4'></p>
            </div>
            <div className='rounded-2xl bg-teal-200 h-4 w-1/12'></div>
          </div>
          <div className='mt-4 rounded-2xl bg-teal-200 h-5 w-3/5 md:mt-6 md:w-4/12'></div>
          <div className='mt-auto flex justify-between '>
            <p className='mt-3 rounded-2xl bg-teal-200 h-4 w-2/12 md:w-1/12'></p>
            <p className='mt-3 rounded-2xl bg-teal-200 h-4 w-2/12'></p>
          </div>
          <div className='mt-auto flex justify-between w-full'>
            <p className='mt-3 rounded-2xl bg-teal-200 h-4 w-1/12'></p>
            <p className='mt-3 rounded-2xl bg-teal-200 h-4 w-2/12'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoShimmer;
