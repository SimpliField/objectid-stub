'use strict';

/**
 * Create an object id from the given number
 * @param  {Number} from Number from wich to create the id
 * @return {string}      The object id in a string representation
 * @api private
 */
function _createObjectId(from) {
  return '570b570b570b' + (from).toString(16);
}

/**
 * Instanciate a new object id generator
 * @return {Function} The new generator
 * @api public
 */
function objectIdStubInit() {
  var discount;

  /**
   * Generate the next id
   * @return {String} The generated id
   * @api public
   */
  function getNextObjectId() {
    return _createObjectId(discount--);
  }

  /**
   * Lookup what will be the next id
   * @return {String} The next id
   * @api public
   */
  getNextObjectId.next = function objectIdStubNext() {
    return _createObjectId(discount);
  };

  /**
   * Reset the internal id
   * @return {void}
   * @api public
   */
  getNextObjectId.reset = function objectIdStubReset() {
    discount = parseInt('ffffffffffff', 16);
  };

  getNextObjectId.reset();

  return getNextObjectId;
}

module.exports = objectIdStubInit;
