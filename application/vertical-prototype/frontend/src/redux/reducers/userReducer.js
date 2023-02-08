const initState = () => ({
  username: '',
  password: '',
  userid: 0,
  sellerid: 0,
  email: '',
  user: '',
  sellerEmail: '',
  isLoggedIn: null,
  searchField: '',
  searchType: '',
  imageBuffer: '',
  posts: [],
  userRating: 0,
  userPosts: [],
  viewBooks: [],
  cart: [],
  ratings: [],
  ratingSellerId: 0,
  randomMsg: '',
  ratingSeller: '',
});

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

//Side Note: Type has to match the case
const userReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };

    case 'SET_SELLER':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_RATING_SELLER':
      return {
        ...state,
        ratingSeller: action.ratingSeller,
      };
    case 'SET_SELLER_EMAIL':
      return {
        ...state,
        sellerEmail: action.sellerEmail,
      };

    case 'SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case 'SET_SEARCH_FIELD':
      return {
        ...state,
        searchField: action.searchField,
      };
    case 'SET_SEARCH_TYPE':
      return {
        ...state,
        searchType: action.searchType,
      };
    case 'SET_IMAGE_BUFFER':
      return {
        ...state,
        imageBuffer: action.imageBuffer,
      };
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.posts,
      };

    case 'SET_USER_POSTS':
      return {
        ...state,
        userPosts: action.userPosts,
      };
    case 'SET_USERID':
      return {
        ...state,
        userid: action.userid,
      };
    case 'SET_RATING_SELLER_ID':
      return {
        ...state,
        ratingSellerId: action.ratingSellerId,
      };
    case 'SET_USER_RATING':
      return {
        ...state,
        userRating: action.userRating,
      };
    case 'SET_SELLERID':
      return {
        ...state,
        sellerid: action.sellerid,
      };
    case 'SET_VIEW_BOOK':
      return {
        ...state,
        viewBooks: [...state.viewBooks, action.book],
      };
    case 'SET_RATING':
      return {
        ...state,
        ratings: [...state.ratings, action.rating],
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case 'SET_DELETE_CART':
      return {
        ...state,
        cart: [],
      };

    case 'REMOVE_FROM_CART':
      // coping the previous items into new array
      let newCart = [...state.cart];

      // check if the id is there
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index < 0) {
        console.warn(`Cant remove the product with id: ${action.id} `);
        // if item exists, remove it from the cart
        newCart.splice(index, 1);
      } else {
        // if item exists, remove it from the cart
        newCart.splice(index, 1);
      }
      return { ...state, cart: newCart };
    case 'SET_RANDOM_MSG':
      return {
        ...state,
        randomMsg: action.randomMsg,
      };

    default:
      return state;
  }
};

export default userReducer;
