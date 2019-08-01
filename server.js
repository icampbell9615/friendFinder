//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
//Creating express server
var app = express();
//Create PORT
var PORT = process.env.PORT || 8000;
//Setting up express app for parsing data
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
//Require routes to map data
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Start the server
app.listen(PORT, function() {
    console.log("My App is listening: " + PORT);
});