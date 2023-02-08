const express = require('express');
const db = require('../dataBase.js');
const fs = require('fs');
const { query } = require('../dataBase.js');
//var FileReader = require('filereader');
const router = express.Router();

router.post('/trending_books', (req, res) => {

  let query;
	let trending_limit_entries = 100;	
	
	/* insert a book into trending table // THIS FUNCTION WILL BE USED WHEN SEARCHING AND/OR BUYING
			args: book_id (int) the book id of a book
	*/
	function trending_insert(book_id) {
		// limit entries in the trending table
		query = "SELECT * FROM trending";
		db.query(query, (err, result) => {
		
			if (err)
				res.status(500).send('error getting the count data from trending', err);
				
			else {
				// has enough space to insert for trending
				if (result.length < trending_limit_entries) {
					query = "INSERT INTO trending (book_id) VALUES (" + book_id +")";
					db.query(query, (err2, result2) => {
						if (err2)
							res.status(500).send('error inserting the data into trending', err);
					});
				}
				
				// too much data, remove the first entry
				else {
					console.log("RESULT " + result.length);
					query = "SELECT MIN(trending_id) as len FROM trending";
					db.query(query, (err2, result2) => {
						if (err2)
							res.status(500).send('error inserting the data into trending', err);
						else {
								var min = result2[0].len;
								// removal of min
								query = "DELETE FROM trending WHERE trending_id=" + min;
								db.query(query, (err3, result3) => {
									if (err3)
										res.status(500).send('error removing the data from trending', err);
									else {
										trending_insert(book_id);
									}
									
								});
							}
					});
				}
			}
		
		});
	} /*END trending_insert*/
	
	
	/*PASS TRENDING BOOKS TO FRONTEND*/
	query = "SELECT DISTINCT * FROM paidbooks WHERE EXISTS (SELECT book_id FROM trending WHERE trending.book_id=paidbooks.book_id)";
	db.query(query, (err, result) => {
		if (err)
			res.status(500).send('error inserting the data into trending', err);
		else
			res.send(result);
	
	});
	
	
});

module.exports = router;
