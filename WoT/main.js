/////////////////////////////////////////////////////////////////////////////
//
// First, we create 'http' instance and call http.createServer() method to create a server instance.
// Second, we bind it at port 8081 using the 'listen' method associated with the server instance. 
// Third, Pass it a function with parameters request and response. 
// Finally, write the sample implementation to always return "Hello Advanced Web Class".
//
/////////////////////////////////////////////////////////////////////////////

var http = require("http");

//******************************/
//Put your code here
//Hint: see 'First and Third'
//******************************/

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello Advanced Web Class" and then Newline (\n)
   response.end('Put your massage here\n');

//******************************/
//Put your code here
//Hint: see 'Second'
//******************************/

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');