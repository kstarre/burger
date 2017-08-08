const connection = require('./connection');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

// Helper function for SQL syntax.
function objToSql(obj) {
  let arr = [];

  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      arr.push(key + "=" + obj[key]);
    }
  }

  return arr.toString();
};

let orm = {
	selectAll: (tableName, cb) => {
		let queryString = "SELECT * FROM " + tableName + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: (tableName, col, val, cb) => {
		let queryString = "INSERT INTO " + tableName;
		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(val.length);
		queryString += ") ";

		connection.query(queryString, val, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: (tableName, newColVal, condition, cb) => {
		let queryString = "UPDATE " + tableName;
		queryString += " SET ";
		queryString += objToSql(newColVal);
		queryString += " WHERE ";
		queryString += condition;

		connection.queryAsync(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;