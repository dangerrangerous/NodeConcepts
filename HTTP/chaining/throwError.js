// Note that this method of error handling makes connect
// much safer to use than plain http.createServer where
// unhandled errors can crash the server!
var connect = require('connect');

connect()
  .use(function() { throw new Error('Srsly bad error details. Srs.'); })
  .use(function (req, res, next) { res.end('I will neverrr get called :`('); })
  .use(function (err, req, res, next) {
    // log the error on the server
    console.log('Error handled:', err.message);
    // inform the client
    res.writeHead(500);
    res.end('ERRRR');

  }).listen(8001);
