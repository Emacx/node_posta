var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("holis");
	response.end();

}
http.createServer(onRequest).listen(8080);