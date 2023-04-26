export const IMAGE_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export const API_ALL_RESTAURANTS = (offset) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;

export const API_RESTAURANT_INFO_URL = (id) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&submitAction=ENTER`;
