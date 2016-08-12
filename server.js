var express = require('express');

//Create our App
var app = express();

//use() lets to add functionality to our express app
//static requires a folder location, in our case its public
app.use(express.static('public'));

//start the server
app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});
