(function () {
  "use strict";
  var stats = {};
  stats.passes = 0;
  stats.fails = 0;
  stats.suite = '';
  stats.spec = '';
  stats.specs = 0;
  function describe(suite, callback) {
    stats.suite = suite;
    console.log(suite);
    callback();
  };
  function it(spec, callback) {
    stats.spec = spec;
    stats.specs += 1;
    console.log('\t' + 'it ' + spec);
    callback();
  };
  function expect(actual) {
    if (!(this instanceof expect)) {
      return new expect(actual);
    }
    this.actual = actual;
  }
  expect.prototype.toBe = function (expected) {
    if (expected !== this.actual) {
      stats.fails += 1;
      throw new Error('toBe compare mismatch');
    }
    stats.passes += 1;
    return true;
  };
  exports.describe = describe;
  exports.it = it;
  exports.expect = expect;
  exports.stats = stats;
}());
