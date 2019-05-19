var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var profiles = [];

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends", function(req, res) {
	return res.json(profiles);
});

app.post("/api/friends", function(req, res) {
	var profile = req.body;

	profiles.push(profile);
	res.json(profile);
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
