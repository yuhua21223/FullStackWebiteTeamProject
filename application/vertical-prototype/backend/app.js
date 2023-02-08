const express = require('express');
const app = express();
const db = require('./dataBase.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
var cors = require('cors');
app.use(cors());

// origin: ['http://localhost:3000'],
//     methods: ['GET', 'POST'],
//     credentials: true,
app.use(fileUpload());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://35.215.84.127:3000/');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/', require('./routes/books'));
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/post'));
app.use('/', require('./routes/comments'));
app.use('/', require('./routes/paypal'));
app.use('/', require('./routes/trending_books'));
app.use('/', require('./routes/profile'));
app.use('/', require('./routes/rating'));

app.use(cookieParser());
const port = process.env.PORT || 3001;
app.listen(port, (req, res) => {
  console.log(`running on port ${port}`);
});
