/**
 * Filename: Trending.js
 * Description: This file shows trending books in carousel
 */
import React, { useState } from 'react';
import './Trending.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Trending = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [carStyle, setCarStyle] = useState({
    width: '99.9%',
  });

  React.useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  // get the trending books
  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://${window.location.hostname}:3001/fire`
      );
      setTrendingBooks(res.data.results);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setCarStyle({
        width: '100%',
      });
    }, 1000);
  }, []);

  const searchField = useSelector((state) => state.userReducer.searchField);
  const posts = useSelector((state) => state.userReducer.posts);
  const randomMsg = useSelector((state) => state.userReducer.randomMsg);

  // break points for carousel
  const breakPoints = [
    { width: 500, itemsTo0how: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
    { width: 1500, itemsToShow: 6 },
  ];

  return (
    <div className="trending__container" data-aos="fade-right" id="trending">
      {randomMsg && posts.length > 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending"> {randomMsg}</h3>
          </div>

          <Carousel style={carStyle} breakPoints={breakPoints}>
            {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  // number={index}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  department={post.department}
                  isbn={post.isbn}
                  condition={post.condition}
                  image={post.image}
                  name={post.name}
                  price={post.cost}
                  defaultImage="default"
                  sellerid={post.user_id}
                  sellerEmail={post.email}
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

          <Carousel className="caro" style={carStyle} breakPoints={breakPoints}>
            {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  department={post.department}
                  isbn={post.isbn}
                  condition={post.condition}
                  image={post.image}
                  name={post.name}
                  price={post.cost}
                  sellerid={post.user_id}
                  sellerEmail={post.email}
                  defaultImage="default"
                />
              );
            })}
          </Carousel>
        </div>
      )}

      {posts.length === 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending">Trending Books!</h3>
          </div>
          <Carousel className="caro" style={carStyle} breakPoints={breakPoints}>
            {trendingBooks.map((post, index) => {
              return (
                <Card
                  key={index}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  department={post.department}
                  isbn={post.isbn}
                  condition={post.condition}
                  image={post.image}
                  name={post.name}
                  price={post.cost}
                  sellerid={post.user_id}
                  sellerEmail={post.email}
                  defaultImage="default"
                />
              );
            })}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Trending;
