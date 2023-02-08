const mysql = require('mysql');
const dotenv= require("dotenv");
dotenv.config({path: "./.env"});
var db= mysql.createPool({
  host     : process.env.HOST,
  user     : 'root',
  password : process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements:true
});

module.exports=db;
