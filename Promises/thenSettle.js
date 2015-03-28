// At it's most basic level, the 'then' member function
// is used to subscribe to a promise's result. It can
// either take the onFullfilled or onRejected handlers.
// For now it is recommended that we only pass the onFullfilled
// handler to the then function. Remember that promises
// typically have 3 states: pending, fulfilled, or rejected.
// Similar to the then function there is the catch function.
// catch only takes the onRejected handler and they are used
// as follows:



var Q = require('q');

var willFulfillDeferred = Q.defer();
var willFulfill = willFulfillDeferred.promise;
willFulfillDeferred.resolve('final value');

willFulfill
  .then(function (val) {
    console.log('success with', val); // only fulfill handler called
  })
  .catch(function (reason) {
    console.log('failed with', reason);
  });

var willRejectDeferred = Q.defer();
var willReject = willRejectDeferred.promise;
willRejectDeferred.reject(new Error('rejection reason'));
// note the use of Error

willReject
  .then(function(val) {
    console.log('success with', val);
  })
  .catch(function(reason) {
    console.log('failed with', reason);
    // only reject handler is called
  });
