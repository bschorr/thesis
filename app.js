//var env = process.env;
var express = require('express');
var app  = express();
var common = require(__dirname + "/common");
var memory = require("memory-cache");

// // Instantiate and populate the input set for the choreo
var currentUser = null;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
require(__dirname + "/auth")(app);
require(__dirname + "/newsfeed")(app);
app.get("/index", function(req, res, next){
	res.send("index");
});
app.listen(3000);