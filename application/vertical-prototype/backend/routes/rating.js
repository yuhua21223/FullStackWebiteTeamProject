const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();

// route to post a seller rating
router.post('/update_rating/:id', (req, res) => {
  const id = req.params.id;
  const newRating = req.body.newRating;

  let query =
    'UPDATE Ratings SET accumulated_stars=accumulated_stars+' +
    newRating +
    ', total_ratings=total_ratings+1 WHERE user_id=' +
    id;

  db.query(query, (err, result) => {
    if (err) throw err;

    if (result.affectedRows > 0)
      return res.send({
        succeed: true,
        message: 'Updated user rating.',
      });
    else
      return res.send({
        succeed: false,
        message: 'User does not exist.',
      });
  });
});

// route to get user and seller rating
router.get('/get_rating/:id', (req, res) => {
  const id = req.params.id;

  let query = 'SELECT * FROM Ratings WHERE user_id=' + id;

  db.query(query, (err, result) => {
    if (err) throw err;

    console.log(result);

    if (result.length == 0)
      return res.send({
        succeed: false,
      });

    //calculate average rating value for each user
    var accum_ratings = result[0].accumulated_stars;
    var total_ratings = result[0].total_ratings;

    return res.send({
      succeed: true,
      rating: Math.round(accum_ratings / total_ratings),
    });
  });
});

module.exports = router;
