import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Navbar from './Navbar';
import Body from './Main/Body';
import Footer from './Footer';

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
