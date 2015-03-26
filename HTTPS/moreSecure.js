var https = require('https');
var connect = require('connect');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};


// Register with https
https.createServer(options, function(req, res) {
  res.end('more secure');
}).listen(8000);

// Redirect
