const mysql = require('mysql');
const Promises = require('bluebird');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'headache',
	database: 'burgers_db'
});

module.exports = connection;