const mysql = require('mysql');
const Promises = require('bluebird');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let connection = mysql.createConnection({
	port: 3306,
	host: 'us-cdbr-iron-east-05.cleardb.net',
	user: 'bc1d68bfdd6766',
	password: 'f8c07cfa',
	database: 'heroku_86f9850b1300fc6'
});

module.exports = connection;