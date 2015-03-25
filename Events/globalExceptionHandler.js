// Global undhandled exceptions can be caught by listening
// to the 'uncaughtException' event on process.
// It's recommended to log the error and exit the process with
// an error code.

process.on('uncaughtException', function(err) {
	console.log('Caught exception: ', err);
	console.log('Stack: ', err.stack);
	process.exit(1); // <- recommended
});


