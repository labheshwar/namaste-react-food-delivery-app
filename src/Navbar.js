import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='mx-auto md:flex md:items-center md:mx-0'>
      <img
        className='h-14 w-14 my-3'
        src='https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png'
        alt='Logo'
      />
      <h1 className='font-bold text-xl hidden md:block md:ml-4 lg:ml-5'>
        <Link to='/'>Food Anamoly</Link>
      </h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-between px-5 md:flex-row md:items-center bg-teal-800 text-white'>
      <Logo />
      <ul className='flex justify-between mb-7  md:text-left md:[&>*]:mr-4 md:mb-0 lg:[&>*]:mr-5'>
        <li>
          <Link
            to='/'
            className='font-semibold transition duration-150 ease-in rounded border-b-2 p-2 border-transparent hover:border-teal-100 hover:text-teal-100'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className='font-semibold transition duration-150 ease-in rounded border-b-2 p-2 border-transparent hover:border-teal-100 hover:text-teal-100'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className='font-semibold transition duration-150 ease-in rounded border-b-2 p-2 border-transparent hover:border-teal-100 hover:text-teal-100'
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to='/login'
            className='font-semibold transition duration-150 ease-in rounded border-b-2 p-2 border-transparent hover:border-teal-100 hover:text-teal-100'
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
