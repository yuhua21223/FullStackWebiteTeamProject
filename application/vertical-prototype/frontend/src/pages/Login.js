/**
 * Filename: Login.js
 * Description: This file is used to create a login form for the registered
 * users to sign in to the website to use further services.
 * This login form is also go through input validation in this file.
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navigation';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setEmail,
  setPassword,
  setIsLoggedIn,
  setUserId,
  setUsername,
} from '../redux/actions/userActions';

import Axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';

// website copy right styling
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/login">
        iShareBooks
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

// styling to components of the login page
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  // to dispatch input values to redux store
  const dispatch = useDispatch();
  // to get the history of the browser and redirect to a page
  const history = useHistory();
  // to toggle betwee text and password form of input
  const [showPassword, setShowPassword] = React.useState(false);
  // function to toggle between text and password
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  // initial values of email and passwords
  const initialValues = {
    email: '',
    password: '',
  };

  // sign in form validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email!')
      .required('Email is required!'),
    password: Yup.string()
      .min(8, 'Password must contain at least 8 characters!')
      .required('Password is required!'),
  });

  // function to submit valid login information to backend
  const onSubmit = (values, props) => {
    // dispatch email and password to redux store
    dispatch(setEmail(values.email));
    dispatch(setPassword(values.password));

    // payload coming from login form inputs
    const payload = {
      ...values,
    };

    // object containing email and password to be sent to backend
    const loginUser = {
      email: payload.email,
      password: payload.password,
    };

    // send login information to backend for validation
    Axios.post(`http://${window.location.hostname}:3001/login`, loginUser).then(
      (response) => {
        // if login is successful
        if (response.data.auth) {
          // set values into local storage to make them persistent
          localStorage.setItem('userid', response.data.id);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('username', response.data.userName);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('isloggedin', response.data.auth);

          // dispatch vaues to redux store
          dispatch(setIsLoggedIn(response.data.auth));
          dispatch(setUsername(response.data.userName));
          dispatch(setEmail(response.data.email));
          dispatch(setUserId(response.data.id));

          // redirect to buybooks page after login
          history.push('/buybooks');
        } else {
          // if login is not successful show error message
          store.addNotification({
            title: '',
            message: response.data.message,
            type: 'danger',
            insert: 'top',
            container: 'top-center',
            dismiss: {
              duration: 2000,
              showIcon: true,
            },
          });
          // dispatch values to redux store
          dispatch(setIsLoggedIn(false));
          dispatch(setUsername(''));
          dispatch(setEmail(''));
        }
      }
    );
  };

  return (
    <div>
      {/** Navgation */}
      <Navigation />
      {/** Display error message upon unsuccessful login attempt */}
      <ReactNotification />
      <div className="login__Container">
        {/** Login Form Content */}
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" style={{ fontWeight: 700 }}>
              Login
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    className="input__field"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    className="input__field"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="password" />}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <Visibility className="eye__icon" />
                          ) : (
                            <VisibilityOff className="eye__icon" />
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="signinButton"
                    // onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
            <Grid container className="signin__link">
              <Grid item>
                <Link href="/registration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>
          <Box mt={38}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );
}
