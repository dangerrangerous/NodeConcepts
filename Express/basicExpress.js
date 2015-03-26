var express = require('express');
var http = require('http');

// Create an express app
var app = express()
  // Register a middleware
  .use(function(req, res, next) {
    res.end('expresso');
  });

// Register with http
http.createServer(app)
  .listen(8000);

// registering as a listener w/ http allows us to use
// https as well.
