'use strict';

var initObjectIdGenerator = require('./');
var assert = require('assert');

describe('objectid-stub', function() {
  var objectIdStub;


  describe('without ctor option', function() {

    beforeEach(function() {
      objectIdStub = initObjectIdGenerator();
    });

    it('should work as expected', function() {
      assert.equal(objectIdStub(), '570b570b570bffffffffffff');

      assert.equal(objectIdStub.next(), objectIdStub());

      assert.equal(objectIdStub(), '570b570b570bfffffffffffd');

      objectIdStub.reset();

      assert.equal(objectIdStub(), '570b570b570bffffffffffff');
    });

  });


  describe('with ctor option', function() {

    beforeEach(function() {
      objectIdStub = initObjectIdGenerator({ ctor: String });
    });

    it('should work as expected', function() {
      assert.equal(objectIdStub().toString(), '570b570b570bffffffffffff');

      assert.equal(objectIdStub.next().toString(), objectIdStub().toString());

      assert.equal(objectIdStub().toString(), '570b570b570bfffffffffffd');

      objectIdStub.reset();

      assert.equal(objectIdStub().toString(), '570b570b570bffffffffffff');
    });

  });

});
