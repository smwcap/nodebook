var http = require("http");
var url = require("url");

function start(route, handle){
  http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname);

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
  }).listen(3000);
  console.log("Server has started.");
}

exports.start = start;
