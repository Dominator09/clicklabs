
function setupServer(){
var http = require("http");

http.createServer(function(request,response){
   response.writeHead(200,{'content-type': 'text/html'});
   response.end("Hello Dheeraj\n");
}).listen(8081);

console.log("Server running at 127.0.0.1:8081...\n");
}

setupServer();
