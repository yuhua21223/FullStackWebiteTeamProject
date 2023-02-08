/**
 * Filename: ServiceBuy.js
 * Description: The file creates the
 */

import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../redux/actions/userActions';

const ServiceBuy = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(setIsLoggedIn(false));
      return <Redirect to="/" />;
    }
  };

  return (
    <div>
      This is buy, you are authenticate
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default withRouter(ServiceBuy);
