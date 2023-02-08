export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  username,
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  password,
});
export const setUserId = (userid) => ({
  type: 'SET_USERID',
  userid,
});
export const setRatingSellerId = (ratingSellerId) => ({
  type: 'SET_RATING_SELLER_ID',
  ratingSellerId,
});
export const setUserRating = (userRating) => ({
  type: 'SET_USER_RATING',
  userRating,
});

export const setSellerId = (sellerid) => ({
  type: 'SET_SELLERID',
  sellerid,
});

export const setEmail = (email) => ({
  type: 'SET_EMAIL',
  email,
});

export const setSeller = (name) => ({
  type: 'SET_SELLER',
  name,
});

export const setRatingSeller = (ratingSeller) => ({
  type: 'SET_RATING_SELLER',
  ratingSeller,
});

export const setSellerEmail = (sellerEmail) => ({
  type: 'SET_SELLER_EMAIL',
  sellerEmail,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: 'SET_LOGGED_IN',
  isLoggedIn,
});

export const setSearchField = (searchField) => ({
  type: 'SET_SEARCH_FIELD',
  searchField,
});
export const setSearchType = (searchType) => ({
  type: 'SET_SEARCH_TYPE',
  searchType,
});
export const setUserPosts = (userPosts) => ({
  type: 'SET_USER_POSTS',
  userPosts,
});

export const setImageBuffer = (imageBuffer) => ({
  type: 'SET_IMAGE_BUFFER',
  imageBuffer,
});

export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts,
});
export const setrandomMsg = (randomMsg) => ({
  type: 'SET_RANDOM_MSG',
  randomMsg,
});

export const setRating = (rating) => ({
  type: 'SET_RATING',
  rating,
});

export const setCartItem = (item) => ({
  type: 'ADD_TO_CART',
  item,
});

export const setDeleteCart = () => ({
  type: 'SET_DELETE_CART',
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  id,
});

export const setViewBook = (book) => ({
  type: 'SET_VIEW_BOOK',
  book,
});
