// Request and response objects passed into
// each middleware are mutable and shared.
// We can partially process requests to make
// it easier for consumption by later middleware.

// If JSON request, try to process the body into a JS object
function parseJSON(req, res, next) {
  if (req.headers['content-type'] == 'application/json') {
    // load all of the data
    var readData = '';
    req.on('readable', function() {
      readData += req.read();
    });

    // Try parse
    req.on('end', function() {
      try {
        req.body = JSON.parse(readData);
      }
      catch (e) { }
        next();
    })
  } else {
      next();
  }
}

// because of chaining, any middleware that comes after this
// will be able to access the parsed JSON object in req.body
// if the request contains valid JSON.

var connect = require('connect');

connect()
  .use(parseJSON)
  .use(function (req, res) {
    if (req.body) {
      res.end('JSON parsed!!!, value of foo: ' + req.body.foo);
    } else {
      res.end('no JSON detected.');
    }
  }).listen(8001);
