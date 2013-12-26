var exports = exports || {};

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

Expectation.prototype.toBeString = function () {
  return this.assert('toBeString', typeof this.actual, 'string');
};

Expectation.prototype.toBeNumber = function () {
  return this.assert('toBeNumber', typeof this.actual, 'number');
};

Expectation.prototype.not = function () {
  this.isNot = true;
  return this;
};
  
exports.Expectation = Expectation;
