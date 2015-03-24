//class definition
function someClass() {
	// properties go here
	this.someProperty = "some initial value";
}
// Member functions go here
someClass.prototype.someMemberFunction = function() {
	// do somehting using 'this'
	this.someProperty = 'modified value';
}

// Creation
var instance = new someClass();

// Usage
console.log(instance.someProperty); // some initial value
instance.someMemberFunction();
console.og(instance.someProperty); // modified value

// the main difference here vs revealingModulejs is that functions 
// are shared between all instances and don't take up memory for 
// each new instance. this is because functions are only  
// on .prototype and not on 'this'. Most classes inside core Node.js
// are written using this pattern