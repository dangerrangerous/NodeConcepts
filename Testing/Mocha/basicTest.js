var assert = require('assert');

// 'describe' and 'it' functions register callbacks with mocha
// that mocha will run in a safe environment. Mocha executes
// the 'it' callbacks, catches exceptions, and logs them for
// us. Run "mocha basicTest.js" to initiate the test
describe('our test suite', function() {
  it('should pass this test', function() {
    assert.equal(1, 1, '1 = 1');
  });

  it('should fail this test', function() {
    assert.equal(1, 0, '1 should = 0');
  });
});
