/**
 *  Filename: BookGrid.js
 *  Description: The file creates the UI of each book on all three services pages.
 * The books are displayed as a grid that can adjust to the screen size.
 */

import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './BuyBooks.css';

import {
  setCartItem,
  setViewBook,
  setRating,
  setSellerEmail,
} from '../redux/actions/userActions';

// import book post info for each book to be displayed
const BookGrid = ({
  id,
  title,
  author,
  department,
  isbn,
  condition,
  image,
  price,
  type,
  sellerid,
  name,
  sellerEmail,
}) => {
  const [ratingData, setData] = useState([]);
  const ratings = useSelector((state) => state.userReducer.ratings);

  // if price not a number, set price to a numeric value
  if (isNaN(price)) {
    price = 0.0;
  }
  // to dispatch values to redux store
  const dispatch = useDispatch();
  // to toggle with hover effect on each book
  const [mouseEnter, setMouseEnter] = React.useState(false);

  // funtion to hover on specific screen size
  const handleMouseEnter = () => {
    if (!window.matchMedia('screen and (max-width: 768px)').matches) {
      setMouseEnter(true);
    }
  };

  // function to not hover on specific screen size
  const handleMouseLeave = () => {
    if (!window.matchMedia('screen and (max-width: 768px)').matches) {
      setMouseEnter(false);
    }
  };

  // dispatch book ost info to viewbooks to retrieve data to show detail
  // of each book
  const handleBookDetail = () => {
    dispatch(
      setViewBook({
        id,
        title,
        author,
        department,
        isbn,
        condition,
        image,
        price,
        type,
        name,
        sellerid,
        sellerEmail,
      })
    );

    // redirect to viewbook page
    return <Redirect to="/viewbook" />;
  };

  // store book post info into cart when a book is added to cart
  const handleAddCart = () => {
    dispatch(
      setCartItem({
        id,
        title,
        author,
        department,
        isbn,
        condition,
        image,
        price,
        type,
        sellerid,
        name,
      })
    );

    // dispatch book post info into rating to retrieve data for seller review
    dispatch(
      setRating({
        id,
        title,
        author,
        department,
        isbn,
        condition,
        image,
        price,
        type,
        name,
      })
    );


  };
  // localStorage.setItem(
  //   'ratings',
  //   JSON.stringify({
  //     id,
  //     title,
  //     author,
  //     department,
  //     isbn,
  //     condition,
  //     image,
  //     price,
  //     type,
  //     name,
  //   })
  // );

  // console.log('here is ', ratingData);

  // update email that's associated to selected book whose details are to be displayed
  dispatch(setSellerEmail(sellerEmail));

  return (
    <div>
      {/** Display book grid of paid books */}
      {price !== 0 && (
        <div
          className="post__book__details"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              style={{ height: 230, width: 170 }}
              src={`data:image/jpeg;base64,${image}`}
              alt="book_image"
              className="post__book__image"
            />
          </Link>
          <div className="button__buy" onClick={handleAddCart}>
            <span className="button__text">ADD TO CART</span>
          </div>

          <p className="post__book__price">${price}</p>
        </div>
      )}

      {/** Dipslay book grid of trade and free books */}
      {price === 0 && (
        <div
          className="post__book__details"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              style={{ height: 230, width: 170 }}
              src={`data:image/jpeg;base64,${image}`}
              alt="book_image"
              className={
                mouseEnter ? 'post__book__image__hover' : 'post__book__image'
              }
            />
          </Link>
          <div className="button__buy" onClick={handleAddCart}>
            <span className="button__text">ADD TO CART</span>
          </div>
          <p className="post__book__price">$0.00</p>
        </div>
      )}
    </div>
  );
};

export default BookGrid;
