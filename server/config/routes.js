var documents = require("./../controllers/documents.js")

module.exports = function(app){
	app.get("/url/path/tk", documents.index) // No apostrophes after lines
}