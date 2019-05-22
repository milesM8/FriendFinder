var express = require("express");
var router = express.Router();

var profiles = [
	{
		name: "Disagree Dan",
		photo:
			"https://image.shutterstock.com/z/stock-photo-closeup-portrait-of-an-old-man-grandfather-corporate-executive-in-blue-shirt-and-red-tie-yelling-159507098.jpg",
		scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	},
	{
		name: "Agreeable Al",
		photo: "https://c8.alamy.com/comp/BNFKPT/young-man-giving-a-reassuring-smile-wearing-aviator-sunglasses-isolated-BNFKPT.jpg",
		scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
	}
];

// My lack of routing knowledge lead me to put my function here. The output of this function (store3) gives an array of the absolute values
// of the differences between each profile from the input profile scores and puts it next to the name of the profile. I could not
// figure out how to associate the lowest number with its adjacent, corresponding name of the matching profile to display it.

function friendFinder(latestProfile) {
	var store = [];
	var store2 = [];
	var store3 = [];
	var sum = latestProfile.reduce((partial_sum, a) => partial_sum + a, 0);

	for (let i = 0; i < profiles.length - 1; i++) {
		store.push(profiles[i].scores);
		store.push(profiles[i].name);
	}
	for (let i = 0; i < store.length; i++) {
		if (i % 2 === 0) {
			store2.push(store[i].reduce((partial_sum, a) => partial_sum + a, 0));
		} else {
			store2.push(store[i]);
		}
	}
	for (let i = 0; i < store2.length; i++) {
		if (i % 2 === 0) {
			store3.push(Math.abs(store2[i] - sum));
		} else {
			store3.push(store2[i]);
		}
	}
	console.log(store3);
}

friendFinder(latestProfile.scores);

/////////////////////////////////////////////////////////////////

router.get("/api/friends", function(req, res) {
	return res.json(profiles);
});

router.post("/api/friends", function(req, res) {
	var profile = req.body;

	profiles.push(profile);
	res.json(profile);
});

module.exports = router;
