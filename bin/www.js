var app = require("../app");
var http = require("http");

var port = process.env.PORT || "3001";

// console.log(app);
app.set("port", port);

var server = http.createServer(app);

server.listen(port);

server.on("error", onError);
server.on("listening", onListening);

function onError() {
  debugger;
}

function onListening() {
  debugger;
}
