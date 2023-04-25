import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo'>
      <img
        src='https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-logo-burger-fast-food-by-vexels.png'
        alt='Logo'
      />
      <h1>
        <a href='/'>Food Anomaly</a>
      </h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
