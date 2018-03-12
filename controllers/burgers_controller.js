// controllers/ burgers_controller.js
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("controller: router.get res.render index hbsObject "+hbsObject);

    res.render("index", hbsObject);
  });
});

router.get('/burgers', function(req, res) {
	res.redirect('/');
});

module.exports = router;