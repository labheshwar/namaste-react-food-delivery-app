import { useParams } from 'react-router-dom';
import RestaurantInfo from './RestaurantInfo';
import RestaurantMenu from './RestaurantMenu';
import Error from '../Error';
import useRestaurantDetails from '../Hooks/useRestaurantDetails';

const RestaurantDetails = () => {
  const { id } = useParams();
  const { restaurantInfo, restaurantMenu, error } = useRestaurantDetails(id);

  return (
    <>
      {error ? (
        <Error
          title={'Something Went Wrong'}
          paragraph={
            'It seems like there is a problem with the server. Please check your internet connection and try again later.'
          }
        />
      ) : (
        <>
          <RestaurantInfo restaurantInfo={restaurantInfo} />
          <RestaurantMenu restaurantMenu={restaurantMenu} />
        </>
      )}
    </>
  );
};

export default RestaurantDetails;
