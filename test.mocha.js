var initObjectIdGenerator = require('./');
var assert = require('assert');

describe('objectid-stub', function() {
  var gen;

  beforeEach(function() {
    objectIdStub = initObjectIdGenerator();
  });

  it('should work as expected', function() {
    assert.equal(objectIdStub(), '570b570b570bffffffffffff');

    assert.equal(objectIdStub.next(), gen());

      assert.equal(objectIdStub(), '570b570b570bfffffffffffd');

    objectIdStub.reset()

    assert.equal(objectIdStub(), '570b570b570bffffffffffff');
  });

});
