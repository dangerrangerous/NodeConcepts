// once a promise has been rejected it can never be
// resolved nor rejected again. Promises maintain strict
// states of resolved, rejected, or pending.
var Q = require('q');

function getPromise(function() {
  var rejectDeffered = Q.defer();

  setTimeout(function() {
    rejectdeferred.reject(new Error ('REJECTED!'));)
  }, 300);

})
