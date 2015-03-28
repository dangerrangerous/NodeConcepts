var Q = require('q');

function getPromise() {
  var deferred = Q.defer();

  // Resolve the promise after a second
  setTimeout(function() {
    deferred.resolve('final value');
  }, 1000);

  return deferred.promise;
}

var promise = getPromise();

promise.then(function(val) {
  console.log('done with:', val);
});

// note that instead of using a callback to provide
// the output we return the promise, which can
// be used to subscribe for the output at our
// convenience.
