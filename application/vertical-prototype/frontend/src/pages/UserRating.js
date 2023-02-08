/**
 *  Filename: UserRating.js
 *  Description: The file is used to create each rating box that shows
 *  a seller name and their rating that is to be edited by the buyer.
 */

import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import './RatingMessage.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UserRating = ({ id, name }) => {
  // to change styling of rated boxes after they have been rated
  const [clickedStyle, setClickedStyle] = useState({});

  // console.log('rating seller ' + localStorage.getItem('ratingSeller'));

  const ratingSeller = useSelector((state) => state.userReducer.ratingSeller);

  console.log(ratingSeller);
  // styles effected after a box is rated
  const ratingChanged = (newRating) => {
    setClickedStyle({
      'pointer-events': 'none',
      opacity: '0.5',
      'background-color': '#f0f0f0',
      transition: '0.5s',
    });

    // stores rating of each user at a time
    const ratingObject = {
      newRating: newRating,
    };

    // send seller rating to backend
    axios
      .post(
        `http://${window.location.hostname}:3001/update_rating/${id}`,
        ratingObject
      )
      .then((response) => {
        if (response.data.succeed) {
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="stars_container" style={clickedStyle}>
      <p className="stars__username">
        {name.charAt(0).toUpperCase() + name.slice(1)}
        {/* {ratingSeller.charAt(0).toUpperCase() + ratingSeller.slice(1)} */}
      </p>
      <div className="stars__class">
        <ReactStars
          size={40}
          value={0}
          isHalf={false}
          edit={true}
          onChange={ratingChanged}
          numberOfStars={5}
          name="rating"
        />
      </div>
    </div>
  );
};

export default UserRating;
