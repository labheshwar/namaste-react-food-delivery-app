import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = ({ title, paragraph }) => {
  return (
    <div className='flex flex-col min-h-screen pt-28 px-5 bg-teal-50 text-teal-900 md:pl-8'>
      <h1 className='font-bold text-3xl md:text-5xl'>{title}</h1>
      <p className='mt-5 text-xl text-black max-w-2xl md:mt-8 md:text-2xl'>
        {paragraph}
      </p>
    </div>
  );
};

export default Error;
