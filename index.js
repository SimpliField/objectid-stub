/* eslint prefer-numeric-literals:0 */
'use strict';

var YError = require('yerror');

/**
 * Create an object id from the given number
 * @param  {String} prefix          12 chars string to prefix the id with
 * @param  {Number} from            Number from wich to create the id
 * @param  {Function} MyConstrutor  A constructor to build ObjectId instances (default to strings)
 * @return {string|MyConstructor}   The object id in a string/MyConstructor representation
 * @api private
 */
function _createObjectId(prefix, from, MyConstrutor) {
  var hexa = 16;
  var id = prefix + (from).toString(hexa);

  return MyConstrutor ? new MyConstrutor(id) : id;
}

/**
 * Instanciate a new object id generator
 * @param  {Object}   options         Generator options
 * @param  {Function} options.ctor    Allow to specify a custom constructor)
 * @param  {String}   options.prefix  Allow to create object id with the given 12 chars prefix
 * @return {Function}                 The new generator
 * @api public
 */
function objectIdStubInit(options) {
  var discount;

  options = options || {};
  if(options.prefix && !(/([a-f0-9]{12})/).test(options.prefix)) {
    throw new YError('E_BAD_PREFIX', options.prefix);
  }

  options.prefix = options.prefix || 'abbacaca6a6a';

  /**
   * Generate the next id
   * @return {String} The generated id
   * @api public
   */
  function getNextObjectId() {
    return _createObjectId(options.prefix, discount--, options.ctor);
  }

  /**
   * Lookup what will be the next id
   * @param  {Number}   n   Number of ids to discard (defaults to 0)
   * @return {String}       The next id
   * @api public
   */
  getNextObjectId.next = function objectIdStubNext(n) {
    var start = 0;

    n = n || start;
    return _createObjectId(options.prefix, discount - n, options.ctor);
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
