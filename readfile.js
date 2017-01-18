
function setup()
{
     var http = require("http");
     var events = require("events");
     var fs = require("fs");
     var input;

     fs.readFile('input.txt', function (err, data) {
      if (err) return console.error(err);
      input=data.toString();
   });

  // var eventEmitter = new events.EventEmitter();
   //eventEmitter.on('read',show());

  // var show = function(){
    // fileshow = data.toString();
    // return fileshow;
  //  }



    http.createServer(function(request,response){
       response.writeHead(200,{'content-type': 'text/html'});
       response.end(input);
      // response.end("Hello Dheeraj\n");
    }).listen(8081,function(err){
      if(err){
        return console.log(err);
      }
      console.log("server is listening at 8081...");

    });

}

setup();
