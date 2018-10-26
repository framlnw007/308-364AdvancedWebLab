var express = require("express"); 

var app = express();

app.use(express.static('public'));

var hostname = '127.0.0.1'; 
var port = 80;

app.listen(port, hostname);
