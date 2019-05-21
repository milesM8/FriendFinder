var express = require("express");
var router = express.Router();

var profiles = [];

router.get("/api/friends", function(req, res) {
	return res.json(profiles);
});

router.post("/api/friends", function(req, res) {
	var profile = req.body;

	profiles.push(profile);
	res.json(profile);
});

module.exports = router;
