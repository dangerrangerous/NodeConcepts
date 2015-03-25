// you can pipe from a stream that you can read from
// (readable/duplex/transform)
var fs = require('fs');

// Create a readable stream
var readableStream = fs.createReadableStream('./word.txt');

// Pipe it to stdout
readableStream.pipe(process.stdout);