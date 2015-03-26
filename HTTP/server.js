// Serves directories. Note: this is vulnerable to exploits
// path.resolve can be exploited to request any file from
// the server file system... error handling and file caching
// are also lacking


var http = require('http');
var fs = require('fs');
var path = require('path');

function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: Resource.');
  response.end();
}

var mimeLookup = {
  '.js': 'application/javascript',
  '.html': 'text/html'
};

var server = http.createServer(function (req, res) {

  if (req.method == 'GET') {
    // resolve file path to filesystem path
    var fileurl;
    if (req.url == '/') fileurl = '/index.html';
    else fileurl = req.url;
    var filepath = path.resolve('./public' + fileurl);

    // lookup mime type
    var fileExt = path.extname(filepath);
    var mimeType = mimeLookup[fileExt];
    if (!mimeType) {
      send404(res);
      return;
    }

    // see if we have that file
    fs.exists(filepath, function (exists) {

      // if we don't (or directory tree is improperly organized)
      if (!exists) {
        send404(res);
        return;
      };

      // stream the file
      res.writeHead(200, { 'content-type': mimeType });
      fs.createReadStream(filepath).pipe(res);
    });
  } else {
    send404(res);
  }
}).listen(8000);
console.log('server running on port 8000');
