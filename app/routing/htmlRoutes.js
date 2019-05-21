var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	res.sendFile("/Users/milesmoscara/bootcamp/FriendFinder/app/public/home.html");
});

router.get("/survey", function(req, res) {
	res.sendFile("/Users/milesmoscara/bootcamp/FriendFinder/app/public/survey.html");
});

module.exports = router;
