
function setupServer(){
var htt = require("http");

var server = http.createServer(function(request,response){
   console.log("ok1");
   response.statusCode  = 200;
   console.log("ok2");
   response.setHeader('content-type','text/html');
   console.log("ok3");
   response.end("Hello Dheeraj yadav\n");
   console.log("ok4");
});
server.listen(8081,function(err){
  if(err)
  {
    return console.log("error");
  }
  console.log("Server running at 127.0.0.1:8081...\n");

});
}
setupServer();
