function getConnection(callback) {
	var connection;
	try {
		// assume connection failed
		throw new Error('conncetion failed');
		// notify callback that connection succeded
		callback(null, connection);
	}
	catch (error) {
		// notify callback about error?
		callback(error, null);
	}
}

// Usage
getConnection(function ( error, connection) {
	console.log('Error:' , error.message);
} else {
	console.log('Connection succeded:' , connection.meesage);
	}
});

// Having the error as the first arugment ensures consistency in
// error checking. This convention is followed by All node.js functions
// that have an error condition