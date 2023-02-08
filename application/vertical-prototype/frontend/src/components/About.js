/**
 * Filename: About.js
 * Description: This file displays the search bar and the landing page'scover video.
 * The search functionality is also implemented in this file to filter and display
 * books according to search input.
 */
import React, { useEffect } from 'react';
import './About.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Video from './video.mp4';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import {
  setSearchField,
  setPosts,
  setrandomMsg,
} from '../redux/actions/userActions';
import Aos from 'aos';
import 'aos/dist/aos.css';

// animation on displayed books
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //sending data to redux
  const dispatch = useDispatch();
  // needed for filter dropdown
  const [filterBy, setFilterBy] = React.useState('Filter');
  // get search object from redux
  const searchField = useSelector((state) => state.userReducer.searchField);
  // function to search input when enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // search object to be sent to the backend
      const search = {
        searchField: searchField,
        searchType: filterBy,
        searchTable: 'paidbooks',
      };

      // send search input to backend
      Axios.post(`http://${window.location.hostname}:3001/search`, search)
        .then((response) => {
          if (response.data) {
            if (response.data.msg) {
              //sending data to redux
              dispatch(setrandomMsg(response.data.msg));
              dispatch(setPosts(response.data.results));
              // smooth scroll down to trending page
              window.scrollBy({
                top: 500,
                behavior: 'smooth',
              });
            } else {
              // sending random data to redux if not a successful search
              dispatch(setPosts(response.data));
              dispatch(setrandomMsg(''));
              window.scrollBy({
                top: 500,
                behavior: 'smooth',
              });
            }
          } else {
            dispatch(setPosts([]));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // update filter value
  const handleFilterChange = (e) => {
    setFilterBy(e.target.innerText);
  };

  // function to search input on click
  const handleClick = () => {
    const search = {
      searchField: searchField,
      searchType: filterBy,
      searchTable: 'paidbooks',
    };

    // send search input to backend
    Axios.post('http://' + window.location.hostname + '/search', search)
      .then((response) => {
        if (response.data) {
          // if search was successful , update posts
          if (response.data.msg) {
            //sending data to redux
            dispatch(setrandomMsg(response.data.msg));
            dispatch(setPosts(response.data.results));
            window.scrollBy({
              top: 500,
              behavior: 'smooth',
            });
          } else {
            //if search was unsuccessful , update posts with random result
            dispatch(setPosts(response.data));
            dispatch((setrandomMsg = ''));
            window.scrollBy({
              top: 500,
              behavior: 'smooth',
            });
          }
        } else {
          dispatch(setPosts([]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="about" style={{ position: 'relative' }}>
      {/** About Section Content */}
      <div className="video__bg">
        <video
          className="video__cover"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </div>
      <div className="about__services">
        <Link className="links" to="/buybooks">
          <span className="services__link">Buy</span>
        </Link>
        <Link className="links" to="/tradebooks">
          <span className="services__link">Trade</span>
        </Link>
        <Link className="links" to="/freebooks">
          <span className="services__link">Free</span>
        </Link>
      </div>
      <div className="search__content">
        <input
          className="searchBar"
          type="text"
          placeholder="Search by textbook name, department..."
          required
          onKeyDown={handleKeyDown}
          onChange={(e) => dispatch(setSearchField(e.target.value))}
        />
        <button onClick={handleClick} className="search__btn">
          <SearchIcon className="search__icon" />
        </button>
      </div>
      <div className="filter__btn">
        <DropdownButton className="dropdown" title={filterBy} size="lg">
          <Dropdown.Item
            className="opt"
            as="button"
            onClick={handleFilterChange}
          >
            All
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className="opt"
            as="button"
            onClick={handleFilterChange}
          >
            Title
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className="opt"
            as="button"
            onClick={handleFilterChange}
          >
            Author
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className="opt"
            as="button"
            onClick={handleFilterChange}
          >
            Department
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className="opt"
            as="button"
            onClick={handleFilterChange}
          >
            ISBN
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="about__message">
        <div className="about__title" id="about" data-aos="fade-up">
          iShare Book, weShare Knowledge!
        </div>
        <div className="about__content" data-aos="fade-up">
          <p>
            iShareBooks lets you buy, sell, and trade your books with your
            friends and classmates.
          </p>
        </div>
      </div>
      <Link className="explore__link" to="/explore">
        <Button variant="success explore__btn" data-aos="fade-up">
          Explore Now!
          <ArrowForwardIosIcon className="arrow__icon" fontSize="small" />
        </Button>
      </Link>

      <div className="custom-shape-divider-bottom-1616326519">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
