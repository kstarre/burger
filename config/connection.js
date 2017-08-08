const mysql = require('mysql');
const password = require('./passwords');

let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: password,
	database: "burgers_db"
});

module.exports = connection;