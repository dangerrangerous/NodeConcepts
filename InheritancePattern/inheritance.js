function Animal(name) {
	this.name = name;
}

Animal.prototype.walk = function(destination) {
	console.log(this.name, ' is walking to ', destination);
};

Animal.prototype.eat = function(food) {
	console.log(this.name, ' took a bite of ', food);
};

var animal = new Animal('Leopard');
animal.walk('funky town');
animal.eat('a funky ball of tits from outer space');


// We cannot simply call the parent Animal from Bird. That is
// because if we do so, then 'this' within Animal will not refer
// to the newly created Bird object (new Bird). We need to
// force the meaning of 'this' within the Animal function to point
// to the value of 'this' inside of the Bird function.
// Fortunately, we can force the meaning by using the '.call'
// member function available on all JavaScript functions.

var foo = {};
var bar = {};

// A function that uses 'this'
function func(val) {
	this.val = val;
}

// Force 'this' in func to be foo
func.call(foo,123);

// Force 'this' in func to be bar
func.call(bar, 456);

// Verify
console.log(foo.val);
console.log(bar.val);

//---------------------------------------
// Calling the Parent Constructor
function Bird(name) {
	Animal.call(this, name);
	// Any additional initializations
}
//---------------------------------------
// Setting up the Prototype Chain
// Animal base class
function Animal(name) {
	this.name = name;
}
Animal.prototype.dance = function(groove) {
	console.log(this.name, 'is dancing to ', groove);
};

var animal = new Animal('Squirrel');
animal.dance('shakira');

// Bird Child class
function Bird(name) {
	Animal.call(this, name);
}
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function (destination) {
	console.log(this.name, ' is flying to ', destination);
}

var bird = new Bird('Albatraus');
bird.dance('boombox');
bird.fly('mexico');

/*
[bird] - __proto__ -> fly - __proto__-> dance (from Animal)
bird.dance? no. bird.__proto__, dance? no.
bird.__proto__proto__.dance? yes!
*/
//-------------------------------------
// Using utils and inherits

//util function
var inherits = require('utils').inherits;

//Bird child class
function Bird(name) {
	// 1. call the parent constructor
	Animal.call(this.name);
	// additional construction code
}
// 2. set up the prototype chain
inherits(Bird, Animal);

// Additional member functions
Bird.prototype.fly = function (destination) {
	console.log(this.name, " is flying to ", destination);
}

var bird = new Bird('meadowlark');
bird.walk('disney');
bird.fly('banana');