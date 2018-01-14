var bodyParser = require("body-parser");
var express = require("express");
var methodOverride = require("method-override");


var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('The app is listening on port ' + port);
});