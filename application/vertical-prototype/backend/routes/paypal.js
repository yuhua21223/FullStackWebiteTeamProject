const express = require('express');
const db = require('../dataBase.js');
const cors = require('cors');
const paypal = require('paypal-rest-sdk');
const e = require('express');
const router = express.Router();
router.use(cors());

//configure paypal
paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AYxDsH8hwuP2LSay4PEJYG_Xc9zlO4r9wOZoAe8gFYgqysFKNFhBSEVNPGz21tCEr1_0zxPXz5AQ0jkk',
  client_secret:
    'EAPpS2WLG-Cke7m9k8QeSnaanF5zUUYsCvDEMlxt6JW2KOf_1pIrPxOI5YC7VYqOo5CJMuvyzLDPbDM9',
});

/* reciving a post request from the frontebd */
router.post('/pay', (req, res) => {
  console.log(req.body);

  //getting the array of data from the frontend

  let arrayOfBooks = req.body.cart;
  let totalAmount = req.body.totalAmount;
  let commission = req.body.commission;

  arrayOfBooks.push({
    title: 'iShareBooks Service Fee',
    price: 0.35,
    name: 'iShareBooks, LLC',
    department: '',
    author: '',
    isbn: '',
    image: '',
    id: 0,
  });

  let booksPrice = 0.0; // Have to remove service fee -- paypal complaining that total amount does not add up
  arrayOfBooks.forEach((array) => {
    if (array.type === 'paid') {
      booksPrice = 0;
    }
  });
  //get the total total price of the books
  // adding the total price into the books

  for (let i = 0; i < arrayOfBooks.length; i++) {
    booksPrice += arrayOfBooks[i].price;
    //arrayOfBooks[i].price += booksPrice;
    arrayOfBooks[i].quantity = 1;
    arrayOfBooks[i].sku = 'item';
    arrayOfBooks[i].currency = 'USD';
  }

  booksPrice = Number.parseFloat(booksPrice).toFixed(2);

  //copying arrayOfBooks to a new array
  let paymentData = JSON.parse(JSON.stringify(arrayOfBooks));

  //filtering data from the paymentData to make it work for paypal
  paymentData.forEach((d) => {
    d.name = d.title;
    delete d.id;
    delete d.author;
    delete d.isbn;
    delete d.title;
    delete d.department;
    delete d.image;
    delete d.type;
    delete d.condition;
    delete d.sellerid;
  });

  /*PAYMENT INFO ARRAY */
  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://localhost:3000/rating',
      cancel_url: 'http://localhost:3000/cancelPayment',
    },
    transactions: [
      {
        item_list: {
          items: paymentData,
        },
        amount: {
          currency: 'USD',
          total: booksPrice,
        },
        description: 'book sale transaction',
      },
    ],
  };

  console.log(create_payment_json.transactions[0]);

  paypal.payment.create(create_payment_json, function (error, payment) {
    console.log('payment', payment);
    if (error) {
      console.log(error.response.details);

      // return res.send(error);
      // throw error;
    } else {
      /*getting the link to direct to paypal after adding 
      the data to the soldBooks and deleting from the posts */

      // Used for admin to track commissions for each transaction
      var sqlQuery = `INSERT INTO commissions (total, service_fee) VALUES (?, ?)`;
      db.query(sqlQuery, [totalAmount, commission], (err, results) => {
        if (err) console.log(err);
        else {
        }
      });

      payment.links.forEach((link) => {
        if (link.rel === 'approval_url') {
          for (let i = 0; i < arrayOfBooks.length; i++) {
            const bookTitle = arrayOfBooks[i].title;
            const bookCost = arrayOfBooks[i].price;
            const bookId = arrayOfBooks[i].id;
            const bookAuthor = arrayOfBooks[i].author;
            const bookISBN = arrayOfBooks[i].isbn;
            const bookImage = arrayOfBooks[i].image;
            const bookDepartment = arrayOfBooks[i].department;

            const data = [
              bookTitle,
              bookCost,
              bookDepartment,
              bookAuthor,
              bookISBN,
              bookImage,
              bookId,
            ];

            data.pop();

            if (bookTitle === "iShareBooks Service Fee") {}
            else {
            var sqlQuery = ` INSERT INTO soldBooks 
            (title, price) VALUES (?, ?)`;
            db.query(sqlQuery, [bookTitle, bookCost], (err, results) => {
              if (err) {
                console.log(err, 'error inserting data');
              } else {
                console.log(results);
              }
            });
          }

          }

          res.send(link.href);
        }
      });
      console.log('Create Payment Response');
      //   console.log(payment);
    }
  });
});
//success status
router.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  var execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: 'USD',
          total: booksPrice,
        },
      },
    ],
  };

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        res.send(JSON.stringify(payment));
      }
    }
  );
});

router.get('/cancel', (req, res) => {
  res.send('canceled');
});

module.exports = router;
