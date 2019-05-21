const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
