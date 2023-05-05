import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Body from './Main/Body';
import Footer from './Footer';
import Error from './Error';
import About from './About/About';
import Contacts from './Contact/Contact';
import Login from './Authentication/Login';
import RestaurantDetails from './RestaurantInfo/RestaurantDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contacts />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'restaurant/:id',
        element: <RestaurantDetails />,
      },
      {
        path: '*',
        element: <Error title='404' paragraph='Page Not Found' />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
