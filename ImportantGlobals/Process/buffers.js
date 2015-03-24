// Buffer conversion
var str = "Hello Buffer World!";

// from string to Buffer
var buffer = new Buffer(str, 'utf-8');

// from buffer to string
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip);