var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

// Custom Class
function Foo() {
	EventEmitter.call(this);
}
inherits(foo, EventEmitter);

// Sample function that raises an event
Foo.prototype.connect = function() {
	this.emit('connected');
}

// Usage
var foo = new Foo();
foo.on('connected', function() {
	console.log('connection!');
});
foo.connect();