import { useState, useEffect } from 'react';

const RestaurantMenuTitle = ({ item }) => {
  const booleanExpression = item?.card?.card?.itemCards?.length > 0;
  return (
    <>
      {!booleanExpression ? null : (
        <>
          <h3 className='text-3xl m-8'>{item?.card?.card?.title}</h3>
          <div className='menu-items'>
            {item?.card?.card?.itemCards?.map((menuItem) => {
              const { name, category, price } = menuItem?.card?.info;
              const { vegClassifier } = menuItem?.card?.info?.itemAttribute;
              const { rating, ratingCount } =
                menuItem?.card?.info?.ratings?.aggregatedRating;

              const menuItemProps = {
                name,
                category,
                price,
                vegClassifier,
                rating,
                ratingCount,
              };

              return (
                <RestaurantMenuItem
                  key={menuItem?.card?.info?.id}
                  menuItem={menuItemProps}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

const RestaurantMenuItem = ({ menuItem }) => {
  const { name, category, price, vegClassifier, rating, ratingCount } =
    menuItem;
  console.log(name, category, price, vegClassifier, rating, ratingCount);
  return (
    <div className='bg-white text-teal-800 p-5 rounded-lg shadow-md shadow-gray-400 m-8'>
      <div className='flex justify-between'>
        <div className='text-2xl font-bold mb-3'>{name}</div>
        {rating !== undefined && ratingCount !== undefined ? (
          <div className='flex items-center font-lg'>
            {rating}{' '}
            <i
              className='fa-solid fa-star'
              style={{ color: '#003e5d', margin: '0 10px' }}
            ></i>
            ({ratingCount})
          </div>
        ) : null}
      </div>

      <div className='text-lg mb-3'>{category}</div>
      <div className='menuItemDetails'>
        <div className='font-bold text-xl'>For Rs. {price / 100}/-</div>
        <div className='font-bold text-lg uppercase text-teal-500 ml-3'>
          {vegClassifier}
        </div>
      </div>
    </div>
  );
};

const RestaurantMenu = ({ restaurantMenu }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (restaurantMenu?.length !== 0) {
      setIsLoaded(true);
    }
  }, [restaurantMenu]);
  return (
    <>
      {!isLoaded
        ? null
        : restaurantMenu?.map((item, index) => (
            <RestaurantMenuTitle key={index} item={item} />
          ))}
    </>
  );
};

export default RestaurantMenu;
