var stream = require('stream');
var EventEmitter = require('events').eventEmitter;

console.log(new stream.Stream() instanceof EventEmitter); // true

console.log(new stream.Readable({}) instanceof stream.Stream); // true
console.log(new stream.Writable({}) instanceof stream.Stream); // true
console.log(new stream.Transform({}) instanceof stream.Stream); // true
console.log(new stream.Duplex({}) instanceof stream.Stream); // true


// duplex: readable and writable.
// transform: special case of a duplex, where the output
// of the stream is computed from the input

// there are also through streams (encryption, compression)
// My idea of them is a one-way transform 