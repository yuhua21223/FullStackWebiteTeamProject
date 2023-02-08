import React, { useState } from 'react';
import './BuyBooks.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import BookGrid from './BookGrid';
import { Box } from '@material-ui/core';
import { setPosts } from '../redux/actions/userActions';

const FreeBooks = ({ paidBooks }) => {
  const [open, setOpen] = React.useState(false);
  const [hasOpened, setHasOpened] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  const [filterBy, setFilterBy] = React.useState('Filter');
  const [searchMessage, setSearchMessage] =
    React.useState('Books You May Like');
  const search = useSelector((state) => state.userReducer.searchField);
  const posts = useSelector((state) => state.userReducer.posts);

  const handleFilterChange = (e) => {
    setFilterBy(e.target.innerText);
  };

  //const dispatch = useDispatch();
  // const handleKeyDown = (e) => {
  //   const searchData = {
  //     searchTable: 'freebooks',
  //     searchType: filterBy,
  //     searchField: search,
  //   };
  //   if (e.key === 'Enter') {
  //     setHasLoaded(false);
  //     axios.post(`http://${window.location.hostname}:3001/search`, searchData).then((response) => {
  //       console.log(response);
  //       setHasLoaded(true);
  //       if (!response.data.msg) {
  //         setPaidBooks(response.data);
  //         setSearchMessage(`Showing results for ${search}`);
  //       }
  //       else {
  //         setPaidBooks(response.data.results);
  //         setSearchMessage(`Sorry, no results were found. Suggestions: `);
  //       }
  //     });
  //   }
  // };
  // const handleSearch = (e) => {
  //   setHasLoaded(false);
  //   axios.post(`http://${window.location.hostname}:3001/search`, searchData).then((response) => {
  //     setHasLoaded(true);
  //       console.log(response);
  //       if (!response.data.msg) {
  //         setPaidBooks(response.data);
  //         setSearchMessage(`Showing results for ${search}`);
  //       }
  //       else {
  //         setPaidBooks(response.data.results);
  //         setSearchMessage(`Sorry, no results were found. Suggestions: `);
  //       }
  //     });
  // };

  // // const [paidBooks, setPaidBooks] = useState([]);

  // React.useEffect(() => {
  //   setHasLoaded(false);
  //   async function fetchData() {
  //     const res = await axios.get(
  //       `http://${window.location.hostname}:3001/freebooks`
  //     );
  //     console.log(res.data.results);
  //     setPaidBooks(res.data.results);
  //     setHasLoaded(true);
  //   }
  //   fetchData();
  // }, []);

  // const handleClickOpen = () => {
  //   setOpen(true);
  //   setHasOpened(true);
  // };

  // if (!open && hasOpened) {
  //   console.log("...d");
  //   setHasOpened(false);
  //   axios.get(`http://${window.location.hostname}:3001/freebooks`).then((res) => {
  //     console.log(res.data.results);
  //     setPaidBooks(res.data.results);
  //   });
  // }

  return (
    <div className="buybooks">
      <div className="buybooks__page">
        <div className="buybooks__container">
          <div className="post__book__content">
            {/* <h2 className="post__book__title">
                Computer 
              </h2> */}
          </div>
        </div>
        <div className="post__book__grid">
          {posts.map((book, index) => {
            if (book.cost == null) book.cost = 0.0;
            console.log(book.cost);
            return (
              <BookGrid
                key={index}
                id={book.book_id}
                title={book.title}
                author={book.author}
                department={book.department}
                isbn={book.isbn}
                condition={book.condition}
                image={book.image}
                price={book.cost}
                type="paid"
                name={book.name}
                sellerid={book.user_id}
                sellerEmail={book.email}
                defaultImage="default"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreeBooks;
