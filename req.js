var http = require("http"); 

var app = http.createServer(function(req, res){
    var url = req.url;
    var method = req.method;
     
    console.log("URL: " + url + ", METHOD: " + method);
    
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
     
    var data;
    
    if(url === "/student/1000"){
        data = "My name is Jack";
    } 
if(url === "/student/1001"){
        data = "My name is Peter"; 
    }
    
    if(url === "/student/1002"){
        data = "My name is Jane";
    } 
    
    res.end(JSON.stringify(data));
});

var hostname = '127.0.0.1'; 
var port = 80;

