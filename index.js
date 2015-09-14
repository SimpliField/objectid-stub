'use strict';

/**
 * Create an object id from the given number
 * @param  {Number} from            Number from wich to create the id
 * @param  {Function} MyConstrutor  A constructor to build ObjectId instances (default to strings)
 * @return {string|MyConstructor}   The object id in a string/MyConstructor representation
 * @api private
 */
function _createObjectId(from, MyConstrutor) {
  var id = '570b570b570b' + (from).toString(16);

  return MyConstrutor ? new MyConstrutor(id) : id;
}

/**
 * Instanciate a new object id generator
 * @param  {Object} options generator options (options.ctor to specify a custom constructor)
 * @return {Function} The new generator
 * @api public
 */
function objectIdStubInit(options) {
  var discount;

  options = options || {};

  /**
   * Generate the next id
   * @return {String} The generated id
   * @api public
   */
  function getNextObjectId() {
    return _createObjectId(discount--, options.ctor);
  }

  /**
   * Lookup what will be the next id
   * @return {String} The next id
   * @api public
   */
  getNextObjectId.next = function objectIdStubNext() {
    return _createObjectId(discount, options.ctor);
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
