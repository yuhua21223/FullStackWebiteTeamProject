/**
 * Filename: Navigation.js
 * Description: This file shows the navigation bar.
 */
import React, { useEffect } from 'react';
import { Link as LinkR, useHistory } from 'react-router-dom';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import axios from 'axios';
import Tippy from '@tippyjs/react';
import Avatar from '@material-ui/core/Avatar';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsLoggedIn,
  setEmail,
  setUsername,
  setPassword,
  setSeller,
  setDeleteCart,
} from '../redux/actions/userActions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import 'tippy.js/dist/tippy.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userReducer.cart);
  const id = useSelector((state) => state.userReducer.userid);
  const username = useSelector((state) => state.userReducer.username);
  const email = useSelector((state) => state.userReducer.email);

  const history = useHistory();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // select to redirect to profile/logout pages
  const handleSelect = (e) => {
    if (e === 'profile') {
      axios
        .get(`http://${window.location.hostname}:3001/profile/${id}`)
        .then((response) => {
          dispatch(setEmail(response.data[0].email));
          dispatch(setUsername(response.data[0].name));
          dispatch(setSeller(''));
        })
        .catch((e) => console.log(e));
      history.push(`/profile/${id}`);
    } else if (e === 'logout') {
      if (localStorage.getItem('token')) {
        dispatch(setIsLoggedIn(false));
        dispatch(setUsername(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        dispatch(setDeleteCart());
        localStorage.removeItem('userid');
        localStorage.removeItem('email');
        localStorage.removeItem('userrating');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('isloggedin');
        localStorage.removeItem('userposts');
        localStorage.removeItem('ratingSeller');

        // localStorage.removeItem('ratings');
        localStorage.removeItem('ratingSellerId');

        history.push('/login');
      }
    } else if (e === 'home') {
      history.push('/');
    } else if (e === 'admin') {
      history.push('/admin');
    }
  };

  return (
    <div className="navbar__div">
      {isLoggedIn && (
        <Navbar bg="" variant="dark" className="navbar__first" sticky="top">
          <NavbarBrand className="navbar__title">
            <LinkR
              className="title__link"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 25,
              }}
              to="/"
            >
              iShareBooks
            </LinkR>
          </NavbarBrand>
          <div className="navbar__left">
            <Avatar
              className="avatar"
              alt={username}
              src="/static/images/avatar/1.jpg"
            />

            <p
              className="welcome__name "
              style={{ marginTop: 25, marginRight: 10, color: 'white' }}
            >
              Hi, {username.charAt(0).toUpperCase() + username.slice(1)}
            </p>
            <div className="account__btn">
              <DropdownButton
                // className="dropdown__btn"
                variant="primary dropaccount__btn"
                alignRight
                title="My Account"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="home">Home</Dropdown.Item>

                <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>

                {email === 'admin@isharebooks.com' && (
                  <Dropdown.Item eventKey="admin">Admin</Dropdown.Item>
                )}
                <Dropdown.Item eventKey="logout">Logout</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Navbar>
      )}
      {!isLoggedIn && (
        <div>
          <Navbar bg="" variant="dark" className="navbar__first" sticky="top">
            <NavbarBrand className="navbar__title">
              <LinkR
                className="title__link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 25,
                }}
                to="/"
              >
                iShareBooks
              </LinkR>
            </NavbarBrand>
            <Nav className="ml-auto ">
              {window.location.href.slice(-1) === '/' && (
                <div>
                  <Link
                    className="nav__link"
                    data-aos="slide-down"
                    style={{
                      color: '#D3D3D3',
                      textDecoration: 'none',
                      marginRight: '20px',
                      cursor: 'pointer',
                    }}
                    to="about"
                    smooth={true}
                    duration={1000}
                  >
                    About
                  </Link>
                  <Link
                    className="nav__link"
                    data-aos="slide-down"
                    style={{
                      color: '#D3D3D3',
                      textDecoration: 'none',
                      marginRight: '20px',
                      cursor: 'pointer',
                    }}
                    to="services"
                    smooth={true}
                    duration={1000}
                  >
                    Services
                  </Link>
                  <Link
                    className="nav__link"
                    data-aos="slide-down"
                    style={{
                      color: '#D3D3D3',
                      textDecoration: 'none',
                      marginRight: '20px',
                      cursor: 'pointer',
                    }}
                    to="faq"
                    smooth={true}
                    duration={1000}
                  >
                    FAQ
                  </Link>
                </div>
              )}

              <LinkR
                className="nav__loglink"
                style={{
                  color: '#D3D3D3',
                  textDecoration: 'none',
                  marginRight: '20px',
                  cursor: 'pointer',
                }}
                to="/login"
              >
                Log In
              </LinkR>
            </Nav>

            <LinkR
              style={{
                color: 'white',
                textDecoration: 'none',

                cursor: 'pointer',
              }}
              to="/registration"
            >
              <Button variant="outline-success signup__btn">Sign Up</Button>
            </LinkR>
          </Navbar>
        </div>
      )}
      <div className="navbar__second">
        <div className="navbar__logo">
          <LinkR className="navbar__logoLink" to="/">
            <p className="logo__heading">iShareBooks</p>
          </LinkR>
        </div>

        <div className="navbar__icons">
          <LinkR className="cart__link" to="/viewlistings">
            <Tippy content="shopping cart" placement="bottom">
              <ShoppingCartIcon className="cart" />
            </Tippy>

            <span className="cart__total">{cart?.length}</span>
          </LinkR>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
