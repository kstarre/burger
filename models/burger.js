const orm = require('../config/orm');

let burger = {
	selectAll: () => {
		orm.selectAll("burgers", res => {
			return res;
		});
	},
	insertOne: (col, val) => {
		orm.insertOne("burgers", col, val, res => {
			return res;
		});
	},
	updateOne: (newColVal, condition) => {
		orm.updateOne("burgers", newColVal, condition, res => {
			return res;
		});
	}
};

module.exports = burger;