/**
 * Filename: Result.js
 * Description: This file displays the result of queries.
 */

import React from 'react';
import './Result.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import { useSelector } from 'react-redux';
import defaultImage from './book1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Trending = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  const searchField = useSelector((state) => state.userReducer.searchField);
  const posts = useSelector((state) => state.userReducer.posts);
  const randomMsg = useSelector((state) => state.userReducer.randomMsg);

  console.log(randomMsg);
  const breakPoints = [
    { width: 500, itemsTo0how: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];

  return (
    <div className="trending__container" data-aos="fade-right" id="trending">
      {randomMsg && posts.length > 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending"> {randomMsg}</h3>
          </div>

          <Carousel breakPoints={breakPoints}>
            {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  number={index}
                  image={post.image}
                  defaultImage={defaultImage}
                />
              );
            })}
          </Carousel>
        </div>
      )}
      {!randomMsg && posts.length > 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending"> Showing Results for {searchField}</h3>
          </div>

          <Carousel breakPoints={breakPoints}>
            {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  number={index}
                  image={post.image}
                  defaultImage={defaultImage}
                />
              );
            })}
          </Carousel>
        </div>
      )}

      {posts.length === 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending">Trending Books will appear here!</h3>
          </div>
          <div className="default__image">
            <img
              style={{ width: 300, height: 350 }}
              className="default__img"
              src={defaultImage}
              alt="default_image"
            />
            <img
              style={{ width: 300, height: 350 }}
              src={defaultImage}
              className="default__img"
              alt="default image"
            />
            <img
              style={{ width: 300, height: 350 }}
              src={defaultImage}
              className="default__img"
              alt="default image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
