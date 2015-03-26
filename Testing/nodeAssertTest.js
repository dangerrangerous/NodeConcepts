var assert = require('assert');
var List = require('./nodeAssert');
var list = new List();

console.log('test list.count');
assert.equal(list.count(), 0);

console.log('test list.add');
list.add({
  id: 'testId',
  value: 'bananas'
});
assert.equal(list.count(), 1);

console.log('test list.clear');
list.clear();
assert.equal(list.count(), 0);

console.log('test list.getIds');
list.add({
  id: 'someId',
  value: 'bananas'
});
assert.equal(list.getIds()[0], 'someId');
list.clear();

console.log('testing list.remove');
list.add({
  id: 'someId',
  value: 'bananas'
});
list.remove('someId');
assert.equal(list.count(), 0);

console.log('test list.get');
list.add({
  id: 'someId',
  value: 'some value'
});
assert.equal(list.get('someId').value, 'some value');
list.clear();

// Testing assert throws takes two functions, one to carry out
// an action and one to throw the error message
console.log('test that list.add throws an err on invalid value');
assert.throws(function() {
  list.add({
    value: 'bananas'
  })
},
function (err) {
  return (err instanceof Error)
  && (err.message == 'item must have id')
});
// this did not seem to throw the error, rather, returned 'undefined'
