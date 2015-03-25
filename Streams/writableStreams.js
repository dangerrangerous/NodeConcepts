var fs = require('fs');
var ws = fs.createWriteStream('message.txt');

ws.write('Enter yo message here ');
ws.end('Ya hurr');
