const express = require('express');
let router = express.Router();
let burger = require('../models/burger');

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", {
			burgers: data
		});
	});
});

router.post("/", function(req, res) {
	burger.insertOne([
		"burger_name"
	], [
		req.body.burger_name
	], () => {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	let condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, () => {
		res.redirect("/");
	});
});

module.exports = router;