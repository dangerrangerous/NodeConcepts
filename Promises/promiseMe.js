// pay attention to 'deferred' and 'then'
var Q = require('q');

var deffered = Q.defer();
var promise = deffered.promise;

promise.then(function(val) {
  console.log('done with:', val);
});

deferred.resolve('final value');
// done with final value

// Q.defer() contains the promise (deferred.promise) and
// functions to reslove (deferred.resolve) or reject
// (deferred.reject) the mentioned promise.
// note: the deferred object controls the promise.
