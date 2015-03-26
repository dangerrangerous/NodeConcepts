var connect = require('connect');
var http = require('http');

// create a connect dispatcher
var app = connect();

// register with http
http.createServer(app).listen(8001);
console.log('server running on port 8001');
