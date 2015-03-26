// We can use closures to create configurable middleware

// Configurable middleware creator
function greeter(message) {
  return function(req, res, next) {
    res.end(message);
  };
}

var helloWorldGreeter = greeter('Hello World!');
var getBentGreeter = greeter('Get bent!');

var connect = require('connect');
connect()
  .use('/hello', helloWorldGreeter)
  .use('/getbent', getBentGreeter)
  .listen(8001);
