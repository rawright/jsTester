var exports = exports || {};

Expectation.passes = 0;
Expectation.fails = 0;
Expectation.expectedFails = 0;
function Expectation(actual) {
  if (!(this instanceof Expectation)) {
    return new Expectation(actual);
  }
  this.actual = actual;
  this.isNot = false;
  this.expectToFail = false;
}

Expectation.prototype.assert = function (type, a, b) {
  if ((a === b) !== this.isNot) {
    Expectation.passes += 1;
    return true;
  }
  if (this.expectToFail) {
    Expectation.passes += 1;
    Expectation.expectedFails += 1;
    return false;
  }
  Expectation.fails += 1;
  describe.showStats();
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

Expectation.prototype.toThrow = function () {
  var f = this.actual,
    parms = [],
    passed;
  if (Object.prototype.toString.apply(this.actual) === '[object Array]') {
    f = this.actual[0];
    for (var i = 1; i < this.actual.length; i += 1) {
      parms.push(this.actual[i]);
    }
  }
  try {
    f.apply(this, parms);
    passed = false;
  } catch (e) {
    passed = true;
  }
  return this.assert('toThrow', passed, true);
};

Expectation.prototype.toBeUndefined = function () {
  return this.assert('toBeUndefined', typeof this.actual, 'undefined');
};

Expectation.prototype.not = function () {
  this.isNot = true;
  return this;
};

Expectation.prototype.expectFail = function () {
  this.expectToFail = true;
  return this;
};

exports.Expectation = Expectation;
