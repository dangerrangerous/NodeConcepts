var express = require('express');

express()
  .use(function (req, res, next) {
    res.end('viva express');
})
.listen(8000);
