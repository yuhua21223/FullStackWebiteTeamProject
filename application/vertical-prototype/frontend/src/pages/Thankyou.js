/**
 * Filename: Thnakyou.js
 *  Description: This file create a thank you page after seller has done shopping and wants to continue shopping.

 *  to be rated once.
 */

import React from 'react';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';
import './RatingMessage.css';
import Footer from '../components/Footer';

export default function Thankyou() {
  // generating receipt id

  // importing objects from redux
  const ratings = useSelector((state) => state.userReducer.ratings);
  const username = useSelector((state) => state.userReducer.username);
  const ratingSeller = useSelector((state) => state.userReducer.ratingSeller);

  console.log('Rating danish ' + ratingSeller);
  // console.log('ohhh ratings ' + JSON.parse(ratings));

  // creating array to store distinct seller names
  var filtered = [];

  // filter duplilcate sellers and add distinct seller to a new array
  var filtered_ratings = ratings.filter(function (e, i) {
    if (filtered.includes(ratings[i].name)) {
    } else {
      filtered.push(ratings[i].name);
      return ratings[i];
    }
  });

  return (
    <div className="ratingmessage">
      <Navigation />
      <div className="main__container">
        <div className="ratingmessage__top">
          <p className="confirmation__text">
            <h1>
              Hi{' '}
              <strong>
                {username.charAt(0).toUpperCase() + username.slice(1)}
              </strong>
            </h1>
            <h3> Thank You For Shopping With Us</h3>
          </p>
          <p className="confirmation__text2">
            You can go back and continue shopping :){' '}
          </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
