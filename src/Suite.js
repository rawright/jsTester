assert.count = 0;
function assert(a, b) {
  assert.count += 1;
  if (a === b) return true;
  throw new Error('Test: ' + assert.count + ' failed (' + a + ' !== ' + b + ')');
}

function test_Suite() {
  var describe = exports.Suite;
  assert(typeof describe, 'function');
  assert(describe.suites, 0);
  assert(typeof describe(), 'object');
  assert(describe.suites, 1);
  assert(describe().suite, '');
  assert(describe('suite').suite, 'suite');
  var a = 1;
  describe('suite', function () {
    a = 2;
  });
  assert(a, 2);
}

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
exports.tests = exports.tests || [];
exports.tests.push(test_Suite);

//test_Suite();
