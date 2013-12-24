assert.count = 0;
function assert(a, b) {
  assert.count += 1;
  if (a === b) return true;
  throw new Error('Test: ' + assert.count + ' failed (' + a + ' !== ' + b + ')');
}

function test_Expectation() {
  var expect = exports.Expectation;
  assert(typeof expect, 'function');
  assert(expect.passes, 0);
  assert(expect.fails, 0);
  assert(typeof expect(), 'object');
  assert(expect('actual').actual, 'actual');
  assert(typeof expect('actual').toBe, 'function');
  assert(expect('actual').toBe('actual'), true);
  try {
    expect('actual').toBe('not actual');
    assert('should have thrown Error', 'did not throw Error');
  } catch (e) {
    assert(e.name, 'Error');
    assert(e.message.substr(0, 5), 'toBe:');
  }
  assert(expect.passes, 1);
  assert(expect.fails, 1);
  assert(expect('string').toBeString(), true);
  assert(expect({}).toBeString(), false);
}

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
exports.tests = exports.tests || [];
exports.tests.push(test_Expectation);

test_Expectation();
