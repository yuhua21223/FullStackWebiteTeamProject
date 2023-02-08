var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "book.c4ounpymqddx.us-east-1.rds.amazonaws.com",
  user: "root",
  password: "Zaedzaed12"
});

function getUserInfo (email, callback) {
	connection.connect(function(err) { if (err) throw err;});
    var query = connection.query('SELECT password from users WHERE email = '+connection.escape(email));
    query.on('result', function(row) {
        callback(null, row.dynamicField);
    });
	connection.end();
	
	return result;
};