var express = require('express');

var app = express()
  .use(express.static(__dirname + '/Express'))
  .listen(8000);
