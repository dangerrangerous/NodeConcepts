// util function
var inherits = require('util').inherits;

// Base
function Bass() {this.message = 'message';};
Bass.prototype.foo = function() {
	return this.message + ' base foo';
};

// Child
function Child() { Bass.call(this); };
inherits(Child, Bass);

// Overide parent behaviour in Child
Child.prototype.foo = function() {
	// Call bass implementation + customize
	return Bass.prototype.foo.call(this) + ' child foo';
}

// Test
var child = new Child();
console.log(child.foo());