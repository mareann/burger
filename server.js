var express = require("express");
var bodyParser = require("body-parser");
//var exphbs = require("express-handlebars");
var path = require('path');

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.text());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use('/',routes);
/*app.use(function(req,res,next){
	var err = new Error("server: "+routes+" not found");
	err.status = 404;
	next(err);
});*/

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
