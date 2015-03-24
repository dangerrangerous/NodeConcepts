// by default, if more than 10 listeners are triggered, 
// a warning will be logged to the console. Typically this
// can be caused by forgetting to unsubscribe to events.
// However sometimes this is intentional. Here's how to 
// increase the max number of listeners.
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// increase limit to 30
emitter.setMaxListeners(30);
//subscribe 20 times
for (var i = 0; i < 20; i++) {
	emitter.on('foo', function () { });
}
console.log('done');

// note that this increases the limit for all event types
// on this event emitter