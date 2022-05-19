const express = require("express");
const app = express();

const mongoose = require("mongoose");

var path = require('path');

mongoose.connect("mongodb://localhost/nodepersonal");
let db = mongoose.connection;

const games = ["Runescape", "Slay the spire", "Overwatch"];

app.use(function() {
    console.log(games);
})

//check connection
db.once("open", function() {
    console.log("Connected to MongoDB");
});
//check for db errors
db.on("error", function(err){
    console.log(err);
});

//home route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/welcome.html');
});

app.get('/homepage', function(req, res){
    res.sendFile(__dirname + '/client/welcome.html');
});

app.get('/resume', function(req, res){
    res.sendFile(__dirname + '/client/resume.pdf');
});

//start server
app.listen(9001, function(){
    console.log("Listening on port 9001");
});
