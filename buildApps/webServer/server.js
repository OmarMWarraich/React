var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

// Set Port

app.set('port', ( process.env.PORT || 3000 ));

// Set Path

app.use(express.static(path.join(__dirname, 'client')));

// Body parser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Start server

app.listen(app.get('port'), function() {
    console.log('listening on port ' + app.get('port'));
})