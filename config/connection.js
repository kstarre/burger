const mysql = require('mysql');
const password = require('./passwords');
const Promises = require('bluebird');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: password,
	database: "burgers_db"
});

module.exports = connection;