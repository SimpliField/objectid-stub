/* eslint no-magic-numbers:0 */
'use strict';

var initObjectIdGenerator = require('./');
var assert = require('assert');

describe('objectid-stub', () => {
  var objectIdStub;

  describe('without options', () => {
    beforeEach(() => {
      objectIdStub = initObjectIdGenerator();
    });

    it('should work as expected', () => {
      assert.equal(objectIdStub(), 'abbacaca6a6affffffffffff');

      assert.equal(objectIdStub.next(), objectIdStub());

      assert.equal(objectIdStub(), 'abbacaca6a6afffffffffffd');

      objectIdStub.reset();

      assert.equal(objectIdStub(), 'abbacaca6a6affffffffffff');

      assert.equal(objectIdStub.next(4), 'abbacaca6a6afffffffffffa');
    });
  });

  describe('with prefix option', () => {
    beforeEach(() => {
      objectIdStub = initObjectIdGenerator({
        prefix: '570b570b570b',
      });
    });

    it('should work as expected', () => {
      assert.equal(objectIdStub(), '570b570b570bffffffffffff');

      assert.equal(objectIdStub.next(), objectIdStub());

      assert.equal(objectIdStub(), '570b570b570bfffffffffffd');

      objectIdStub.reset('570b570b570b');

      assert.equal(objectIdStub(), '570b570b570bffffffffffff');

      assert.equal(objectIdStub.next(4), '570b570b570bfffffffffffa');
    });
  });

  describe('with ctor option', () => {
    beforeEach(() => {
      objectIdStub = initObjectIdGenerator({ ctor: String });
    });

    it('should work as expected', () => {
      assert(objectIdStub() instanceof String, 'Return instances of ctor');

      assert.equal(objectIdStub.next().toString(), objectIdStub().toString());

      assert.equal(objectIdStub().toString(), 'abbacaca6a6afffffffffffd');

      objectIdStub.reset();

      assert.equal(objectIdStub().toString(), 'abbacaca6a6affffffffffff');

      assert.equal(objectIdStub.next(4).toString(), 'abbacaca6a6afffffffffffa');
    });
  });
});
