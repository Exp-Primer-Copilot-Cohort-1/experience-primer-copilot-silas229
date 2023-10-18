// Create web server

// 1. Create a web server
var express = require('express');
var app = express();
var port = 3000;

// 2. Create a route for the home page
app.get('/', function(req, res) {
    res.send('This is the home page');
});

// 3. Create a route for the about page
app.get('/about', function(req, res) {
    res.send('This is the about page');
});

// 4. Create a route for the contact page
app.get('/contact', function(req, res) {
    res.send('This is the contact page');
});

// 5. Start and listen on the web server
app.listen(port, function() {
    console.log('Server listening on port ' + port);
});