var express = require("express");

var app = express();
 
app.get("/student/:id", function(req, res){
    var studentId = req.params.id;
    
    var data;
    
    if(studentId === "1000"){
data = {
            id: 1000, 
            name: "Korakot"
        };
    }
    
    if(studentId === "1001"){ 
        data = {
            id: 1001,
            name: "Chayada"
        };
    } 
    
    if(studentId === "1002"){
        data = {
            id: 1002,
            name: "Tanong"
        }; 
    }
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(data));
}); 

var hostname = '127.0.0.1';
var port = 80;

app.listen(port, hostname);
