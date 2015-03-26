// hook functions before(), after(), beforeEach(), afterEach()
// can be used to simplify test setup and teardown
var assert = require('assert');

describe('our test suite', function() {
  var testExecuting = 0;
  beforeEach(function() {
    testExecuting++;
  });

  it('test 1', function() {
    assert.equal(1, 1, 'test 1: 1=1');
  });
  it('test 2', function() {
    assert.equal(2, 2, 'test 2: 2=2');
  });
});
