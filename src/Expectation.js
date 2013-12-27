(function () {
  "use strict";
  Expectation.passes = 0;
  Expectation.fails = 0;
  function Expectation(actual) {
    if (!(this instanceof Expectation)) {
      return new Expectation(actual);
    }
    this.actual = actual;
    this.isNot = false;
  }

  Expectation.prototype.assert = function (type, a, b) {
    if ((a === b) !== this.isNot) {
      Expectation.passes += 1;
      return true;
    }
    Expectation.fails += 1;
    throw new Error(type + ': comparison failed');
  };

  Expectation.prototype.toBe = function (expected) {
    return this.assert('toBe', this.actual, expected);
  };

  Expectation.prototype.toBeArray = function () {
    return this.assert('toBeArray',
      Object.prototype.toString.apply(this.actual),
      '[object Array]');
  };

  Expectation.prototype.toBeFunction = function () {
    return this.assert('toBeFunction', typeof this.actual, 'function');
  };

  Expectation.prototype.toBeNumber = function () {
    return this.assert('toBeNumber', typeof this.actual, 'number');
  };

  Expectation.prototype.toBeNull = function () {
    return this.assert('toBeNull', this.actual, null);
  };

  Expectation.prototype.toBeObject = function () {
    return this.assert('toBeObject',
      Object.prototype.toString.apply(this.actual),
      '[object Object]');
  };

  Expectation.prototype.toBeString = function () {
    return this.assert('toBeString', typeof this.actual, 'string');
  };

  Expectation.prototype.toBeUndefined = function () {
    return this.assert('toBeUndefined', typeof this.actual, 'undefined');
  };

  Expectation.prototype.not = function () {
    this.isNot = true;
    return this;
  };
    
  if (typeof module !== 'undefined' && module.exports) {
    global.expect = Expectation;
  } else {
    window.expect = Expectation;
  }
}());
