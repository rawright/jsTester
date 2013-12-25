var exports = exports || {};

Expectation.passes = 0;
Expectation.fails = 0;
function Expectation(actual) {
  if (!(this instanceof Expectation)) {
    return new Expectation(actual);
  }
  this.actual = actual;
}

Expectation.prototype.toBe = function (expected) {
  if (this.actual === expected) {
    Expectation.passes += 1;
    return true;
  }
  Expectation.fails += 1;
  throw new Error('toBe: ' + this.actual + ' !== ' + expected);
};

Expectation.prototype.toBeString = function () {
  return typeof this.actual === 'string';
};
  
exports.Expectation = Expectation;
