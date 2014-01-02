/*! jsTester - v0.0.1 - 2014-01-02
Learn TDD by building a testing tool for JavaScript */

function jsTester(options) {
  "use strict";
  var that = options || {};
  that.env = global;
  that.suites = [];
  that.i = -1;
  that.j = -1;
  describe.cnt = 0;
  that.env.xdescribe = function () {};
  that.env.describe = describe;
  return describe;

  function describe (suite, cb) {
    describe.cnt += 1;
    that.i += 1;
    that.j = -1;
    that.suites[that.i] = {suite: suite, specs: []};
    if (typeof cb === 'function') cb.call(that, it);
    describe.cnt -= 1;
  }

  function it (spec, cb) {
    that.j += 1;
    that.suites[that.i].specs[that.j] = {spec: spec, passes: 0, fails: 0};
    if (typeof cb === 'function') cb.call(that, expect);
  }

  function expect (actual) {
    that.actual = actual;
    that.isNot = false;
    that.toBe = function (expected) {
      return assert(that.actual, expected);
    };
    that.not = {toBe: function (expected) {
      that.isNot = true;
      return assert(that.actual !== expected, true);
    }};

    return that;
  }

  function assert (actual, expected) {
    if (actual === expected) {
      that.suites[that.i].specs[that.j].passes += 1;
      return true;
    }
    that.suites[that.i].specs[that.j].fails += 1;
    return false;
  }

  that.toEqual = function (expected) {
    return assert(that.actual == expected, true);
  };

} 

var exports = exports || {};
exports.jsTester = jsTester;
