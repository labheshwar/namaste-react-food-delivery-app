import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import data from './restaurantData.json';

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
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const Body = () => {
  return (
    <main>
      <Card />
    </main>
  );
};

const Card = () => {
  return (
    <div className='card'>
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          data[0].data.cloudinaryImageId
        }
        alt={data[0].name}
      />
      <h1>{data[0].data.name}</h1>
      <p>
        Cuisines: <br />
        {data[0].data.cuisines.join(', ')}
      </p>
      <div className='price'>
        <p>
          {data[0].data.avgRating}{' '}
          <i className='fa-solid fa-star' style={{ color: '#ffde0a' }}></i>
        </p>
        <p>Rs. {data[0].data.costForTwo / 100}/-</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className='footer'>
      <h1>Footer</h1>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
