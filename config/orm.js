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
	selectAll: tableName => {
		let queryString = "SELECT * FROM " + tableName + ";";
		connection.queryAsync(queryString).then(data => {
			return data;
		});
	},
	insertOne: (tableName, col, val) => {
		let queryString = "INSERT INTO " + tableName;
		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(val.length);
		queryString += ") ";

		connection.queryAsync(queryString, val).then( data => {
			return data;
		});
	},
	updateOne: (tableName, newColVal, condition) => {
		let queryString = "UPDATE " + tableName;
		queryString += " SET ";
		queryString += objToSql(newColVal);
		queryString += " WHERE ";
		queryString += condition;

		connection.queryAsync(queryString).then( data => {
			return data;
		});
	}
};

module.exports = orm;