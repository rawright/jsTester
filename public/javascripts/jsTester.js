var exports = exports || {};
var isNode = typeof module === 'object' && module.exports ? true : false;
var log = function (message) { console.log(message); };
(function () {
  "use strict";
  var stats = {};
  stats.passes = 0;
  stats.fails = 0;
  stats.suite = '';
  stats.spec = '';
  stats.specs = 0;
  var env = {};
  function describe(suite, callback) {
    stats.suite = suite;
    log(suite);
    callback();
  }
  function it(spec, callback) {
    stats.spec = spec;
    stats.specs += 1;
    log('\t' + 'it ' + spec);
    callback();
  }
  function Expect(actual) {
    if (!(this instanceof Expect)) {
      return new Expect(actual);
    }
    this.actual = actual;
  }
  Expect.prototype.toBe = function (expected) {
    if (expected !== this.actual) {
      stats.fails += 1;
      throw new Error('mismatch: ' + expected + ' not equal to ' + this.actual + ' (' + (stats.fails + stats.passes) + ')');
    }
    stats.passes += 1;
    return true;
  };
  env = isNode ? global : window;
  exports.describe = describe;
  exports.it = it;
  exports.expect = Expect;
  exports.stats = stats;
  env.describe = describe;
  env.it = it;
  env.expect = Expect;
}());
