const mysql = require('mysql');
const Promises = require('bluebird');
let connection;

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'headache',
		database: 'burgers_db'
	});
};
connection.connect();
module.exports = connection;