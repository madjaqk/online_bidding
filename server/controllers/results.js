// Controller

var mongoose = require("mongoose")
var Result = mongoose.model("Result")
var Bid = mongoose.model("Bid")

// Rather than the immediate function, it might be better to do this as a constructor function or just an object literal, but that's not how I've done it thus far.
module.exports = (function(){
	return {
		show: function(req, res){
			Result
				.findOne({}, {}, {sort: {'createdAt': -1}})
				.populate({
					path: "results",
					populate: { path: "_bidder",
								model: "User"}
					})
				.exec(function(err, query_results){
					if(err){
						res.json(err)
					} else {
						res.json(query_results)
					}
				})
		},
		create:  function(req, res){
			Bid.remove({}, function(err){
				if(err){
					console.log("Bid.remove error", err)
					res.json(err)
				} else {
					result = new Result(req.body)
					result.save(function(err){
						if(err){
							console.log("results create error", err)
							res.json({status: "error", error: err})
						} else {
							res.json({status: "OK"})
						}
					})
				}
			})
		}
	}
})()