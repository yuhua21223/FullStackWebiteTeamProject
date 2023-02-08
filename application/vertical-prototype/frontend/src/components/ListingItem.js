/**
 * Filename: ListingItem.js
 * Description: This file shows the add to cart items
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import './ListingItem.css';
import { removeFromCart } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const ListingItem = ({
  id,
  title,
  author,
  department,
  isbn,
  condition,
  price,
  image,
  name,
}) => {
  const dispatch = useDispatch();

  // remove item from the cart
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="listingitem__item">
      <img
        className="listingitem__item__image"
        src={`data:image/jpeg;base64,${image}`}
        alt="Image_loading"
      />
      <div className="listingitem__item__details">
        <p className="listingitem__item__title">{title}</p>
        <p className="listingitem__item__author">
          <strong>Author: </strong>
          {author}
        </p>
        <p className="listingitem__item__department">
          <strong>Department: </strong>
          {department}
        </p>
        <p className="listingitem__item__condition">
          <strong>Condition: </strong>
          {condition.charAt(0).toUpperCase() + condition.slice(1)}
        </p>
        <p className="listingitem__item__isbn">
          <strong>ISBN: </strong>
          {isbn}
        </p>
        <p className="listingitem__item__username">
          posted by <strong className="listingitem__username">{name}</strong>
        </p>
        <div className="listingitem__bottom">
          <p className="listingitem__item__price">${price}</p>
          <Button onClick={handleRemove} className="listingitem__item__button">
            REMOVE FROM CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
