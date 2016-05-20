var mongoose = require("mongoose")

var ResultSchema = new mongoose.Schema(
	{
		results: []
	},
	{ timestamps: true} // This line is options for the schema, not fields
)

mongoose.model("Result", ResultSchema)