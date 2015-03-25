/* Streams in Node.js are based on events. The pipe operation
listens to the relevant events and bridges the gap from the
source to the destination. The most important event for streams
is 'readable'.
*/
process.stdin.on('readable', function() {
	var buf = process.stdin.read();
	if (buf != null) {
		console.log('Recieved:');
		process.stdout.write(buf.toString());
	} else {
		console.log('Read complete!');
	}
});

// In terminal navigate to this folder and enter
// $ echo 'your msg here' | node 'thisFileName.js'