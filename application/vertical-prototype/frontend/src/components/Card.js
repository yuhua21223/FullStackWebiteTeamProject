/**
 * Filename: Card.js
 * Description: This file displays a book in a form of card
 * with book details and can be slided with a carousel.
 */

import React from 'react';
import './Trending.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setViewBook } from '../redux/actions/userActions';

// import each books details
const Card = ({
  key,
  number,
  id,
  title,
  author,
  department,
  isbn,
  condition,
  image,
  price,
  name,
  sellerid,
  sellerEmail,
}) => {
  // to dispatch values to redux
  const dispatch = useDispatch();

  // function that adds book to viewbooks to see its detail
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
        name,
        sellerid,
        sellerEmail,
      })
    );

    return <Redirect to="/viewbook" />;
  };

  return (
    <div>
      {/** display card when there is a image */}
      {image && (
        <div className="card">
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              src={`data:image/jpeg;base64,${image}`}
              alt="card_image"
              className="card__image"
              style={{ height: '300px', width: '100%' }}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
