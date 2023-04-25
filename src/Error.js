import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = ({ title, paragraph }) => {
  return (
    <div className='error'>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default Error;
