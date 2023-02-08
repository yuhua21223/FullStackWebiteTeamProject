/*
Filename: BookModal.js
Description: This file is used to create UI for post book forms for all book services.
Each form is generated depending on the service and the service page url.

*/

import React, { useState } from 'react';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import './Modals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useHistory } from 'react-router';
import { Box } from '@material-ui/core';

const BookModalPro1 = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [department, setDepartment] = useState('');
  const [isbn, setIsbn] = useState('');
  const [condition, setCondition] = useState('Condition');
  const [cost, setCost] = useState('');
  const [image, setImage] = useState('');
  const imageRef = React.useRef();
  const userid = useSelector((state) => state.userReducer.userid);
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  // messages
  const [imagePlaceholderMessage, setImagePlaceholderMessage] = useState(''); // message that displays over image container when no image is posted yet
  const [postHeader, setPostHeader] = useState(''); // message that displays over the form
  const [buttonMessage, setButtonMessage] = useState(''); // message for button
  const [serviceType, setServiceType] = useState('');

  const [paidBooks, setPaidBooks] = useState([]);
  const history = useHistory();

  const handleConditionSelect = (e) => {
    console.log(e.target.innerText);
    setCondition(e.target.innerText);
  };

  const handleBackClick = (e) => {
    history.goBack();
  };

  const handleSubmit = (e) => {
    if (!isLoggedIn) {
      alert('You must be logged in to post a book!');
      return;
    }

    e.preventDefault();
    var b64data = image.split(',')[1];

    const paidBook = {
      title: title,
      author: author,
      cost: cost,
      department: department,
      isbn: isbn,
      type: serviceType,
      condition: condition,
      image: b64data,
      userid: userid,
    };

    axios
      .post(`http://${window.location.hostname}:3001/posts`, paidBook)
      .then((response) => {
        if (!response.data.bookPosted) {
          //alert(response.data.msg);
          store.addNotification({
            title: 'Book could not be posted.',
            message: response.data.msg,
            type: 'danger',
            insert: 'top',
            container: 'top-center',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
              duration: 2000,
            },
          });
        } else {
          store.addNotification({
            title: 'Book has been posted.',
            message: `Redirecting to ${serviceType
              .substring(0, 1)
              .toUpperCase()
              .concat(
                serviceType.substring(1, serviceType.length)
              )} Books page...`,
            type: 'success',
            insert: 'top',
            container: 'top-center',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
              duration: 2000,
            },
          });
          setTimeout(() => {
            history.goBack();
          }, 2000);
        }
      });
  };

  React.useEffect(() => {
    var urlpath = window.location.toString();

    if (urlpath.includes('paid')) {
      //  i.e. /postbook/paid
      setServiceType('paid');
      setImagePlaceholderMessage('Sell Your Book To Help Your Friend Succeed!');
      setPostHeader('Sell your Book!');
      setButtonMessage('Sell');
    } else if (urlpath.includes('trade')) {
      setServiceType('trade');
      setImagePlaceholderMessage('Trade Books with your Friends!');
      setPostHeader('Trade your Book!');
      setButtonMessage('Trade');
    } else if (urlpath.includes('free')) {
      setServiceType('free');
      setImagePlaceholderMessage('Donate your Books to Students in Need.');
      setPostHeader('Donate your Book!');
      setButtonMessage('Donate');
    } else {
      //  i.e. /postbook/pewr31f
      setServiceType('unknown');
      setImagePlaceholderMessage(
        'Ensure that BookModal has correct serviceType (i.e. trade, free, paid)'
      );
      setPostHeader('Invalid Service Type.');
    }
  });

  if (serviceType === 'unknown')
    return (
      <div>
        <Navigation />
        <Box mt={20}></Box>
        <div className="error_login">
          {' '}
          <h1>{postHeader}</h1>
          <br />
          <h3>{imagePlaceholderMessage}</h3>
        </div>

        <Box mt={80}></Box>
        <Footer />
      </div>
    );
  else if (isLoggedIn)
    return (
      <div>
        <ReactNotification />
        <Navigation />
        <div className="wrapper">
          <div className="back_bttn" onClick={handleBackClick}>
            BACK
          </div>
          <div className="image_container">
            {image === '' ? (
              <h1 className="no_img_message">{imagePlaceholderMessage}</h1>
            ) : (
              <img src={image} width="100%"></img>
            )}
          </div>
          <div className="detail_container">
            <div className="header">
              <h1>{postHeader}</h1>
            </div>
            <div className="form">
              <p>Title</p>
              <input
                type="text"
                name="title"
                placeholder="Ex. To Kill a Mockingbird"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <p>Author</p>
              <input
                type="text"
                name="author"
                placeholder="Ex. Harper Lee"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <p>Department</p>
              <input
                type="text"
                name="department"
                placeholder="Ex. Literature"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              ></input>
              <p>ISBN</p>
              <input
                type="text"
                name="isbn"
                placeholder="Ex. (13-digit) 978-0-123456-47-2 or (10-digit) 0-123456-47-9"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              ></input>

              <div className="dropdown_">
                <Box mt={1}></Box>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {condition}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleConditionSelect}>
                      Used
                    </Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item onClick={handleConditionSelect}>
                      New
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Box mt={4}></Box>

              {serviceType === 'paid' ? (
                <div>
                  <p>Cost</p>
                  <input
                    type="text"
                    name="cost"
                    placeholder="$"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  ></input>
                </div>
              ) : (
                ''
              )}

              <p className="modal_file">Upload Image</p>
              <input
                id="input-image"
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                className="form-control"
                ref={imageRef}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();
                    reader.onload = (ev) => {
                      setImage(ev.target.result);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
                single="true"
              />

              <button className="buttn" type="button" onClick={handleSubmit}>
                {buttonMessage}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  else
    return (
      <div>
        <Navigation />
        <Box mt={20}></Box>
        <div className="error_login">
          {' '}
          <h1>You must be logged in to post a book!</h1>
        </div>

        <Box mt={80}></Box>
        <Footer />
      </div>
    );
};

export default BookModalPro1;
