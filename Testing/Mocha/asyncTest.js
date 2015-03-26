// To make tests asynchronous add the argument 'done'
describe('our test suite', function() {

  it('this should pass', function(done) {
    setTimeout(function() {
      done(); // same as done(null);
    }, 500);
  });

  it('this will fail', function(done) {
    setTimeout(function() {
      done(new Error('fail'));
    }, 500);
  });
});
// done can be used with all of our hooks as well
