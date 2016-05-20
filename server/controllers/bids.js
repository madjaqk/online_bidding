// Controller

var mongoose = require("mongoose")
var Bid = mongoose.model("Bid")
var CanBid = mongoose.model("CanBid")

// Rather than the immediate function, it might be better to do this as a constructor function or just an object literal, but that's not how I've done it thus far.
module.exports = (function(){
	return {
		index: function(req, res){
			Bid.find({}).populate("_bidder").exec(function(err, results){
				if(err){
					res.json(err)
				} else {
					res.json(results)
				}
			})
		},
		create: function(req, res){
			// can_bid = new CanBid({can_bid: true}).save()
			bid = new Bid(req.body)
			bid.save(function(err){
				if(err){
					console.log("bid create error", err)
					res.json({status: "error", "error": err})
				} else {
					res.json({status: "OK"})
				}
			})
		},
		can_bid: function(req, res){
			CanBid.findOne({}, {}, {sort: {'createdAt': -1}}, function(err, results){
				if(err){
					console.log("can_bid error", err)
					res.json(err)
				} else {
					res.json(results)
				}
			})
		}
	}
})()