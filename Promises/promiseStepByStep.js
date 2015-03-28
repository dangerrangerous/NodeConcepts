// Step by Step:
// require('q');
var q = require('q');
//
// first set the deferment of the promise:
// we declare the rules if we can't fulfill the promise!
function getPromise(){
// assign our deferment a variable
  var deferred = Q.defer();
// set our timeout function and delay
// resolve the deferred promise:
  setTimeout(function() {

    deferred.resolve('final value');
  }, 1000);
// return the deferred promise:
  return deferred.promise;
}
// reference the promise(not totally necessary but clean)
var promise = getPromise();
// use q's 'then' method on our promise
promise.then(function(val) {
  console.log('PROMISE RESOLVED!!!');
});

// "...but You promised me you would call me back..."
