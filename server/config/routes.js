var users = require("./../controllers/users.js")
var bids = require("./../controllers/bids.js")
var results = require("./../controllers/results.js")

module.exports = function(app){
	app.get("/users", users.index) // No apostrophes after lines
	app.post("/users", users.create)
	app.get("/bids", bids.index)
	app.post("/bids", bids.create)
	app.get("/can_bid", bids.can_bid)
	app.get("/results", results.show)
	app.post("/results", results.create)
}