const orm = require('../config/orm');

let burger = {
	selectAll: (cb) => {
		orm.selectAll("burgers", res => {
			cb(res);
		});
	},
	insertOne: (col, val, cb) => {
		orm.insertOne("burgers", col, val, res => {
			cb(res);
		});
	},
	updateOne: (newColVal, condition, cb) => {
		orm.updateOne("burgers", newColVal, condition, res => {
			cb(res);
		});
	}
};

module.exports = burger;