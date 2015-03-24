function outerFunction(arg) {
	var outerVariable = arg;

	function innerFunction() {
		console.log(arg);
	}

	innerFunction();
}

outerFunction("Zis is a closure");
// More importantly, in the next example the innerFunction
/* can access the variables from the outer scope even after
the function has returned. swiggity swoo that's how closures
do.
*/
function outerFunction(arg) {
	var outerVariable = arg;
	return function() {
		console.log(outerVariable);
	}
}
var innerFunction = outerFunction("CLOSURES FOK YEH");

innerFunction(); // logs "CLOSURES FOK YEH"