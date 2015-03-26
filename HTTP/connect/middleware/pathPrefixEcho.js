function echo(req, res, next) {
  req.pipe(res);
}

var connect = require('connect');

connect()
  .use('/echo', echo)
  .use(function (req, res) { res.end ("What's good"); })
  .listen(8001);
