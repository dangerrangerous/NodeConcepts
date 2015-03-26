var express = require('express');
var serveStatic = require('serve-static');

var app = express()
  .use(serveStatic(__dirname + '/Express'))
  .listen(8000);

  // using express and serve static does the follow:
  // set proper mime type of response, includes response
  // codes, does not allow people to get files above the
  // directory we want to serve (/path exploits)
