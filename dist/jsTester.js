/*! jsTester - v0.0.1 - 2013-12-27
Learn TDD by building a testing tool for JavaScript */

var exports = exports || {};
Suite.suites = 0;
function Suite(suite, callback) {
  if (!(this instanceof Suite)) {
    return new Suite(suite, callback);
  }
  Suite.suites += 1;
  this.suite = suite || '';
  if (typeof callback === 'function') callback();
}

exports.Suite = Suite;

var exports = exports || {};

Spec.specs = 0;
function Spec(spec, callback) {
  if (!(this instanceof Spec)) {
    return new Spec(spec, callback);
  }
  this.spec = spec || '';
  Spec.specs += 1;
  if (typeof callback === 'function') callback();
}

exports.Spec = Spec;

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
  
exports.Expectation = Expectation;
