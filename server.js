var http = require("http");
var url = require("url");

function iniciar(){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request a "+ pathname + "recibido.");
		console.log("request recibido");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("holis");
		response.end();
		console.log("request terminado");

		}
http.createServer(onRequest).listen(8080);
console.log("Servidor inicial");
}
	exports.iniciar = iniciar;