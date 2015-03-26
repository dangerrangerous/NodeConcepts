var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, function (req, res) {
  res.end('Bonjour dude');
}).listen(8000);
