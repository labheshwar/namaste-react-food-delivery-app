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
import Cart from './Cart/Cart';
import Login from './Authentication/Login';
import RestaurantDetails from './RestaurantInfo/RestaurantDetails';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='font-inter'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error title='404' paragraph='Page Not Found' />,
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
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'restaurant/:id',
        element: <RestaurantDetails />,
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
