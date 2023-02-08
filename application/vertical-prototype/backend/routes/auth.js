const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
router.use(cors());

router.get('/', (req, res) => {
  //query db
  // db.query('SELECT * FROM users', (err, rows, fields) => {
  //   if (!err) {
  //     console.log(rows);
  //     //res.send(rows);
  //   } else {
  //     console.log(err);
  //   }
  // });
});

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // const values = [email];

  console.log(username);

  var hash = bcrypt.hashSync(password, 8);
  const user = [username, email, hash];

  var insertSQL = `INSERT INTO users (name,email,password) VALUES (?)`;
  db.query(insertSQL, [user], (err, results) => {
    if (err) {
      if (err.sqlMessage.includes('name')) {
        return res.send({
          registered: false,
          message: 'Username is already in use!',
        });
      } else if (err.sqlMessage.includes('email')) {
        return res.send({
          registered: false,
          message: 'Email is already in use!',
        });
      }

      return res.status(401).send(err);
    } else {
      if (err) throw err;

      // insert into ratings table
      insertSQL =
        'INSERT INTO Ratings (user_id, accumulated_stars, total_ratings) VALUES (?)';
      const data = [results.insertId, 5, 1];
      db.query(insertSQL, [data], (err2, results2) => {
        if (err2) console.log(err2);
      });
      res.status(200).send({
        registered: true,
        message: 'The user is registered successfully!',
      });

      const payload = {
        user: {
          id: email,
        },
      };

      jwt.sign(
        payload,
        'password',
        {
          expiresIn: 300000,
        },
        (err, token) => {
          if (err) {
            res.status(500).send('token error');
          } else {
            res.json({ token });
          }
        }
      );
    }
  });
});

router.post('/login', async (req, res) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: 'Please enter email and password' });
    }
    
    db.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      async (err, results) => {
        if (err) {
          console.log('ERRRRR' + err);
        }
        if (
          results[0] === undefined ||
          !bcrypt.compareSync(password, results[0].password)
        ) {
          return res.send({
            auth: false,
            message: 'Password or email is incorrect!',
          });
        } else {
          const payload = {
            user: {
              id: results[0].email,
            },
          };
          const token = jwt.sign(payload, 'password', {
            expiresIn: '90d',
          });

          const cookieOptions = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60),
            httpOnly: true,
          };
          res.cookie('jwt', token, cookieOptions);
          res.status(200).send({
            auth: true,
            id: results[0].id,
            userName: results[0].name,
            token: token,
            email: results[0].email,
            message: "You're successfully logged in.",
          });
        }
      }
    );
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});
router.get('/login', (req, res) => {
  jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
    if (err) {
      //If error send Forbidden (403)
      console.log('ERROR: Could not connect to the protected route');
      res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data
      res.json({
        message: 'Successful log in',
        authorizedData,
      });
      console.log('SUCCESS: Connected to protected route');
    }
  });
});

module.exports = router;
