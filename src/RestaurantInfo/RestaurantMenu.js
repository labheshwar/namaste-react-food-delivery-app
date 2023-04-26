import { useState, useEffect } from 'react';

const RestaurantMenuTitle = ({ item }) => {
  const booleanExpression = item?.card?.card?.itemCards?.length > 0;
  return (
    <>
      {!booleanExpression ? null : (
        <>
          <h3 className='menu-title'>{item?.card?.card?.title}</h3>
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
    <div className='menuItem'>
      <div className='menu-name-rating'>
        <div className='menuItemName'>{name}</div>
        {rating !== undefined && ratingCount !== undefined ? (
          <div className='menuItemRating'>
            {rating}{' '}
            <i
              className='fa-solid fa-star'
              style={{ color: '#003e5d', margin: '0 10px' }}
            ></i>
            ({ratingCount})
          </div>
        ) : null}
      </div>

      <div className='menuItemCategory'>{category}</div>
      <div className='menuItemDetails'>
        <div className='menuItemPrice'>For Rs. {price / 100}/-</div>
        <div className='menuItemVeg'>{vegClassifier}</div>
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
        : restaurantMenu.map((item, index) => (
            <RestaurantMenuTitle key={index} item={item} />
          ))}
    </>
  );
};

export default RestaurantMenu;
