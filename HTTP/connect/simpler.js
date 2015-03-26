var connect = require('connect');

// Create a connect dispatcher
var app = connect()
          .listen(8001);
console.log('server running on port 8001');
