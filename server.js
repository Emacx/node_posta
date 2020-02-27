var http = require("http");

function iniciar(){
	function onRequest(request, response){
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