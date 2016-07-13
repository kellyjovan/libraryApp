//Set Up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Book = require('./models/books');

var port  = process.env.PORT || 8080;
var database = require('./config/database.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Configuration
mongoose.connect(database.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //We're Connected
});

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vdn.api+json'}));
app.use(methodOverride());

// var hunger = new Book({
//     title: 'The Hunger Games',
//     author_first: "Girl",
//     pages: 50
// })
//
//
// hunger.save(function(err){
//     if(err) throw err;
//
//     console.log('Book Created!');
// })

Book.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

//Start
app.listen(port);
console.log('Listening on port ' + port);
