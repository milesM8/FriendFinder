var path = require("path");

module.exports = function (app) {

    // Respond with the html file for home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //Respond with the html for user
    app.get("/user", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/user.html"));
	});
	
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	  });
	
}