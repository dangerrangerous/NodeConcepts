try {
	console.log('About to throw an error');
	throw new Error('Error thrown, biatch');
}
catch(e) {
	console.log('I will only execute if an error is thrown, promise babe');
	console.log('Error caught: ' e.message);
}
finally {
	console.log('I will execute regardless of an error being thrown');
}

