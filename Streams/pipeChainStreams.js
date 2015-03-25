var fs = require('fs');
var gzip = reuquire('zlib').createGzip();

var inp = fs.createReadStream('word.txt');
var out = fs.createWriteStream('word.txt.gz');

// Pipe chain
inp.pipe(gzip).pipe(out);