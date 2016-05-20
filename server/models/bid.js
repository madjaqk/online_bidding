// Model

var mongoose = require("mongoose")

var CanBidSchema = new mongoose.Schema(
	{
		can_bid: Boolean		
	},
	{ timestamps: true }
)

var BidSchema = new mongoose.Schema(
	{
		amount: { 
			type: Number, 
			required: true,
			min: 0.01, 
		},
		_product: {
			type: Number,
			required: true
		},
		_bidder: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	},
	{ timestamps: true} // This line is options for the schema, not fields
)

mongoose.model("Bid", BidSchema)
mongoose.model("CanBid", CanBidSchema)