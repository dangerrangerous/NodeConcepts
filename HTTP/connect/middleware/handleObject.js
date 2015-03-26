// this allows us to use class instances as middleware
// as long has they have a handle member function

var echo = {
  handle: function (req, res, next) {
    req.pipe(res);
  }
};

var connect = require('connect');

connect()
  .use(echo)
  .listen(8001);
