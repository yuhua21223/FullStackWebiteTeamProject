/**
 * Filename: ViewBook.js
 * Description: This file displays the details of eacn book whenever it is
 * click by the user.
 */

import React from 'react';
import './ViewBook.css';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCartItem,
  setSeller,
  setSellerEmail,
  setSellerId,
} from '../redux/actions/userActions';
import axios from 'axios';
import SendIcon from '@material-ui/icons/Send';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';

const ViewBook = () => {
  // get array object from redux store
  const viewBooks = useSelector((state) => state.userReducer.viewBooks);
  const loggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const userid = useSelector((state) => state.userReducer.userid);
  const email = useSelector((state) => state.userReducer.email);

  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState([]);
  const [commentDivStyle, setCommentDivStyle] = React.useState({ display: '' });
  // const [postID, setPostID] = React.useState(0);

  // to dispatch value to redux store
  const dispatch = useDispatch();
  const history = useHistory();
  // auto scroll down whenever a new comment is added
  const ScrollMessages = ({ messages }) => {
    const lastMessageRef = React.useRef(null);
    const scrolltoBottom = () => {
      lastMessageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
        duration: 1000,
      });
    };
    React.useEffect(scrolltoBottom, [messages]);
    return <div ref={lastMessageRef} />;
  };

  const handleComment = () => {
    const commentSection = {
      comment: comment,
      id: userid,
      postID: viewBooks[viewBooks.length - 1].id,
    };

    axios
      .post(`http://${window.location.hostname}:3001/comments`, commentSection)
      .then((response) => {
        if (response.data.comment) {
        }
      })
      .catch((e) => console.log(e));

    setComment('');

    fetchComments();
  };

  const handleDelete = () => {
    // endpoint: /delete_book

    const deletebook = {
      book_id: viewBooks[viewBooks.length - 1].id,
      table_name: viewBooks[viewBooks.length - 1].type,
    };

    axios
      .post(`http://${window.location.hostname}:3001/delete_book`, deletebook)

      .then((response) => {
        store.addNotification({
          title: '',
          message: response.data.msg,
          type: 'success',
          insert: 'top',
          container: 'top-center',
          dismiss: {
            duration: 2000,
            showIcon: true,
          },
        });
      })
      .catch((error) => console.log(error));

    setTimeout(() => {
      history.goBack(); // redirect to book service after profile is deleted
    }, 2000);
  };

  let postID = viewBooks[viewBooks.length - 1].id;
  async function fetchComments() {
    const res = await axios.get(
      `http://${window.location.hostname}:3001/comments/${postID}`
    );
    if (res.data) {
      setComments(res.data);
    }
    // } else {
    //   return;
    // }
  }

  React.useEffect(() => {
    fetchComments();
  }, []);

  React.useEffect(() => {
    fetchComments();
  }, [comment]);

  // Function to add books posts to cart
  const handleAddCart = () => {
    dispatch(
      setCartItem({
        id: viewBooks[viewBooks.length - 1].id,
        title: viewBooks[viewBooks.length - 1].title,
        author: viewBooks[viewBooks.length - 1].author,
        department: viewBooks[viewBooks.length - 1].department,
        isbn: viewBooks[viewBooks.length - 1].isbn,
        price: viewBooks[viewBooks.length - 1].price,
        image: viewBooks[viewBooks.length - 1].image,
        name: viewBooks[viewBooks.length - 1].name,
        condition: viewBooks[viewBooks.length - 1].condition,
        type: '',
      })
    );
  };

  // make first letter of username to uppercase
  const viewBooksUsername = viewBooks[viewBooks.length - 1].name;
  const sellerid = viewBooks[viewBooks.length - 1].sellerid;
  const name =
    viewBooksUsername.charAt(0).toUpperCase() + viewBooksUsername.slice(1);
  // dispatch values to redux store
  dispatch(setSeller(name));
  dispatch(setSellerId(sellerid));
  dispatch(setSellerEmail(viewBooks[viewBooks.length - 1].sellerEmail));

  React.useEffect(() => {
    if (viewBooks[viewBooks.length - 1].type != 'tradebooks') {
      setCommentDivStyle({ display: 'none' });
    }
  }, [viewBooks, 1]);

  return (
    <div className="viewbook_container">
      {/** Navigation Bar */}
      <Navigation />
      <ReactNotification />

      <div className="viewbook">
        <div className="viewbook_box">
          <div className="viewbook_left">
            <img
              className="viewbook_image"
              style={{ height: 400, width: 300 }}
              src={`data:image/jpeg;base64,${
                viewBooks[viewBooks.length - 1].image
              }`}
              alt="book"
            />
          </div>
          <div className="viewbook_information" id="info">
            <h1 className="viewbook_title">
              {viewBooks[viewBooks.length - 1].title}
            </h1>
            <p className="viewbook_author">
              by {viewBooks[viewBooks.length - 1].author}
            </p>
            <p className="viewbook_department">
              <strong>Department:</strong>{' '}
              {viewBooks[viewBooks.length - 1].department}
            </p>
            <p className="viewbook_condition">
              <strong>Condition:</strong>{' '}
              {viewBooks[viewBooks.length - 1].condition
                .charAt(0)
                .toUpperCase() +
                viewBooks[viewBooks.length - 1].condition.slice(1)}
            </p>
            <p className="viewbook_isbn">
              <strong>ISBN: </strong>
              {viewBooks[0].isbn}
            </p>

            {/** View seller's profile */}
            <p className="viewbook_username">
              Posted by
              <Link to="./profile">
                <strong> {name}</strong>
              </Link>
            </p>

            <p className="viewbook_price">
              ${viewBooks[viewBooks.length - 1].price}
            </p>

            <Button onClick={handleAddCart} className="viewbook__button">
              Add to cart
            </Button>

            {/** Show delete button for admin*/}
            {email === 'admin@isharebooks.com' && (
              <Button
                variant="contained"
                className="delete__book"
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}

            <div
              key=""
              className="comment-box"
              id="comment_box"
              style={commentDivStyle}
            >
              <h4 className="leave__comment">
                {loggedIn ? 'Leave a comment' : 'Sign in to leave a comment'}
              </h4>
              {loggedIn && (
                <div
                  id="comments-box"
                  className="each__comment__div"
                  style={{ overflowY: 'scroll' }}
                >
                  {comments.map((message, i) => {
                    return (
                      <div className="comment__indiv" key={i}>
                        <span className="comment__username">
                          {message.name.charAt(0).toUpperCase() +
                            message.name.slice(1)}
                        </span>

                        <span className="each__comment">{message.comment}</span>
                        <ScrollMessages messages={message.comment} />
                      </div>
                    );
                  })}
                </div>
              )}

              {loggedIn ? (
                <div className="comment__input">
                  <input
                    id="comment"
                    placeholder="Add a comment here ...."
                    type="text"
                    value={comment}
                    name="comment"
                    className="comment__box"
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <div className="commentbox-buttons">
                    <Button
                      onClick={handleComment}
                      id="addcomment"
                      className="comment-button"
                    >
                      {' '}
                      <SendIcon></SendIcon>
                    </Button>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>

      {/** Footer */}
      <Footer />
    </div>
  );
};

export default ViewBook;
