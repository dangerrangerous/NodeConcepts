// Methods for custom streams: _read, _write, _transform, _flush

// Consuming Readable Streams
// Require Readable
var Readable = require('stream').Readable;
// Require util for inherit
var util = require('util');

function Counter() {
	Readable.call(this);
	this._max = 1000;
	this._index = 1;
}
// Inherit from Readable Class
util.inherits(Counter, Readable);

Counter.prototype._read = function() {
	var i = this._index++;
	if (i > this._max) {
		this.push(null);
	} else {
		var str = ' ' + i;
		this.push(str);
	}
};

var counter = new Counter();
counter.pipe(process.stdout);