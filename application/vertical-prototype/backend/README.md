# SWE-04

<h1>What's this project?</h1>
<p>This mainly our backend with a markup frontend for our fianl project</p>

<h1>How to run the backend?</h1> 
<ul>
<li>npm i</li>
<li>npm run</li> 
</ul>

<h1>How to run the frontend?</h1> 
<ul>
<li>cd client</li>
<li>npm i</li>
<li>npm run</li> 
</ul>

<h1>MYSQL ON AWS CONFIG</h1>
<p>Endpoint: book.c4ounpymqddx.us-east-1.rds.amazonaws.com </p>
<p>UserName: root </p>
<p>Password: Zaedzaed12 </p>

<h1> Mysql tables <span>(Already created) </span></h1>
<p> create table posts
( id INT NOT NULL auto_increment 
, image BLOB,
 description varchar(1000) NOT NULL,
 price INT NOT NULL, 
primary key(id)); </p>

<p>  create table users
( id INT NOT NULL auto_increment , name  varchar(100) NOT NULL, email varchar(100) NOT NULL,
password  varchar(100) NOT NULL,
primary key(id)); ; </p>

<p> create table comments
(commentID INT NOT NULL auto_increment , postID INT NOT NULL,
 comment varchar(1000) NOT NULL,
primary key(commentID)); </p>
