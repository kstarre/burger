const mysql = require('mysql');
const password = require('./passwords');
const Promises = require('bluebird');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let connection = mysql.createConnection({
	port: 3306,
	host: env('DB_HOST', password.host),
	user: env('DB_USERNAME', password.user),
	password: env('DB_PASSWORD', password.password),
	database: env('DB_DATABASE', password.database)
});

module.exports = connection;