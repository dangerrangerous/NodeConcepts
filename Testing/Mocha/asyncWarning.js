// the nature of asynchronous callbacks can cause problems when
// testing.

function simulateAsync(callback) {
  setTimeout(function() {
    callback(new Error('This async task will fail'));
  }, 500);
}

describe('our test suite', function() {
  it('test simulateAsync', function() {
    simulateAsync(function(err) {
      if(err) throw err;
    });
  });
});
// run this in mocha and it will 'pass'... it shouldn't!
