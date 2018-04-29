var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var waitingList = [];

//When tablesReserved meets 5, send the rest to waiting list.
var tablesReserved  = 0; 

/*Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.*/
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});    

app.get('/api/tables', function(req, res) {
   res.sendFile(path.join(__dirname, 'tables.html')); 
});

app.get('/api/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.listen(PORT, function() {
    console.log('app listening on PORT: ' + PORT);
});