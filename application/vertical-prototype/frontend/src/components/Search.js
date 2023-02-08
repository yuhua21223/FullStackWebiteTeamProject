/**
 * Filename: Search.js
 * Description: This file is used to get resukts from search.
 */
import React, { useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchField,
  setPosts,
  setrandomMsg,
} from '../redux/actions/userActions';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //sending data to redux
  const dispatch = useDispatch();

  const searchField = useSelector((state) => state.userReducer.searchField);
  // for filter options
  const [filterBy, setFilterBy] = React.useState('Filter');

  // on enter key presses
  const handleKeyDown = (e) => {
    const search = {
      searchTable: 'paidbooks',
      searchType: filterBy,
      searchField: searchField,
    };

    if (e.key === 'Enter') {
      Axios.post(`http://${window.location.hostname}:3001/search`, search).then(
        (response) => {
          console.log(response);
          if (!response.data.msg) {
            dispatch(setPosts(response.data));
            setrandomMsg(`Showing results for ${search}`);
          } else {
            dispatch(setPosts(response.data.results));
            setrandomMsg(`Sorry, no results were found. Suggestions: `);
          }
        }
      );
    }
  };

  // when filter option selected
  const handleSelect = (e) => {
    console.log(`The selected is ${e}`);
    setFilterBy(e);
  };

  // on search icon clicked
  const handleClick = () => {
    const search = {
      searchField: searchField,
      searchType: filterBy,
      searchTable: 'paidbooks',
    };

    Axios.get('http://localhost:3001/search', search)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          if (response.data.msg) {
            //sending data to redux
            dispatch(setrandomMsg(response.data.msg));
            dispatch(setPosts(response.data.results));
            window.scrollBy({
              top: 500,
              behavior: 'smooth',
            });
          } else {
            console.log('Data coming from search click');
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

    console.log('Search clicked');
  };

  return (
    <div className="content" style={{ position: 'relative' }}>
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
        <DropdownButton
          // className="dropdown__btn"
          variant=" dropdown__btn"
          alignRight
          title="Filter By"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="title">Title</Dropdown.Item>
          <Dropdown.Item eventKey="department">Department</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default About;
