/**
 * Filename: Services.js
 * Description: This file is to display our services cards
 */
import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

import 'tachyons';

const Services = () => {
  return (
    <div id="services">
      <div className="services__title">
        <h1 className="service">OUR SERVICES</h1>
      </div>

      <div className="services__pages">
        <div className="top__services">
          <div className="bg-light-white dib br3 ma5 grow bw3 shadow-3 card__shrink">
            <img
              className="services__image"
              alt="books"
              src="https://apprecs.org/ios/images/app-icons/256/e3/1147112163.jpg"
            ></img>
            <h1 className="services__heading">Buy Books! </h1>
            <p className="services__detail"> -buy any books you like </p>
            <Link to="/buybooks">
              <button className="buy" type="button">
                Buy Here
              </button>
            </Link>
          </div>

          <div className="bg-light-white dib br3 pa ma5 grow bw3 shadow-3 card__shrink">
            <img
              className="services__image"
              alt="books"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/trade-1689731-1435793.png"
            ></img>
            <h1 className="service__heading">Trade Books! </h1>
            <p className="services__detail"> -Trade any books you like </p>
            <Link to="/tradebooks">
              <button className="trade" type="button">
                Trade Here
              </button>
            </Link>
          </div>

          <div className="bg-light-white dib br3 pa ma5 grow bw3 shadow-3 card__shrink ">
            <img
              className="services__image"
              alt="books"
              src="https://www.freeiconspng.com/uploads/open-book-icon-free-books-and-education-13.png"
            ></img>
            <h1 className="service__heading">Free Books! </h1>
            <p className="services__detail"> -Donate any books you like</p>
            <Link to="/freebooks">
              <button class="free" type="button">
                Free Books
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
