var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

//Subscribe
emitter.on('foo', function (arg1, arg2) {
	console.log('Foo raised, Args:', arg1, arg2);
});

// Emit 
emitter.emit('foo', { a:123 }, { b: 456 });

// note: listeners are called in the order that they are
// registered for the event. You can set up event listeners
// to modify the event argument. This can cause problems
// with event listeners further down the line 