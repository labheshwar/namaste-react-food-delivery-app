import { IMAGE_URL as imageUrl } from '../config';

const Card = ({
  name,
  cuisines,
  cloudinaryImageId: imageId,
  avgRating: rating,
  costForTwo: price,
}) => {
  return (
    <div className='flex flex-col bg-teal-800 opacity-90 text-white p-4 m-4 h-96 w-64 cursor-pointer hover:duration-300 hover:opacity-100'>
      {imageId && <img src={imageUrl + imageId} alt={name} />}
      <div className='flex flex-col justify-between h-full'>
        <h1 className='font-bold text-xl pt-7'>{name}</h1>
        <p>
          <span className='font-semibold text-lg'>Cuisines:</span>
          <span className='ml-3'>
            {cuisines?.join(', ').length > 30
              ? cuisines?.join(', ').slice(0, 30) + '...'
              : cuisines?.join(', ')}
          </span>
        </p>
        <div className='flex justify-between'>
          <p>
            {rating}{' '}
            <i className='fa-solid fa-star' style={{ color: '#ffde0a' }}></i>
          </p>
          <p className='font-semibold'>Rs. {price / 100}/-</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
