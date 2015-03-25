var Writable = require('stream').Writable;
var util = require('util');

function Logger() {
	Writable.call(this);
}
util.inherits(Logger, Writable);

Logger.prototype._write = function(chunk) {
	console.log(chunk.toString());
};

// Use it!
var logger = new Logger();

var readStream = require('fs').createReadStream('counter.js');
readStream.pipe(logger);