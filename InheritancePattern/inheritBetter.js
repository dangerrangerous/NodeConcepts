// Animal Bass class
function Animal() {
}
Animal prototype.dance = function() {
	console.log('dancing');
};

// Bird Child class
function Bird() {
}
Bird.prototype = Object.create(Animal.prototype, {
	constructor: {
		value: Bird,
		enumerable: false,
		writable: true,
		configurable: true
	}
});

var bird = new Bird();
bird.dance();
console.log(bird.constructor === Bird);