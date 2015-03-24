module.exports.a = function() {
	console.log('a called');
};

module.exports.b = function() {
	console.log('b called');
};

// an example of attaching objects we want to export.
// this is possible because module.exports is set to {}
// by Node.js

// typing module.exports all the time is cumbersome.
// Node.js realized this and created an alias for module.exports
// called 'exports'. So now we can type exports.'something'
exports.a = function() {
	console.log('a called again');
};
// *using the exports alias keeps what is exported close to 
// its definition

// note: doing exports = 123 will break the reference to
// module.exports. It is very important that we only use
// the exports alias to attach stuff, not assign it directly.
// Assign single exports as module.exports =
