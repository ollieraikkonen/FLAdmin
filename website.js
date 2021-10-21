// Imports and init
var express = require("express");
var app = express();
const path = require("path");
require('dotenv').config();

// Links to modules and directories for use in html files
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/chart.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/mqtt/dist'));
app.use('/js', express.static(__dirname + '/node_modules/chartjs-adapter-date-fns/dist'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));

// Set pug to be our engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set our root to be the index.pug file
app.get("/", (req, res) => {
  res.render("index", { title: "FLAdmin" });
});

// Standard http listening. TODO Need to implement https
app.listen(process.env.WEB_PORT,function(){
  console.log(`Live at Port ${process.env.WEB_PORT}`);
});