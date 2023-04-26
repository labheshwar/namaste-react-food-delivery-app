import { IMAGE_URL as imageUrl } from '../config';

const Card = ({
  name,
  cuisines,
  cloudinaryImageId: imageId,
  avgRating: rating,
  costForTwo: price,
}) => {
  return (
    <div className='card'>
      {imageId && <img src={imageUrl + imageId} alt={name} />}
      <h1>{name}</h1>
      <p>
        Cuisines: <br />
        {cuisines?.join(', ')}
      </p>
      <div className='price'>
        <p>
          {rating}{' '}
          <i className='fa-solid fa-star' style={{ color: '#ffde0a' }}></i>
        </p>
        <p>Rs. {price / 100}/-</p>
      </div>
    </div>
  );
};

export default Card;
