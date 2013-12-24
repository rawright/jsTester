assert.count = 0;
function assert(a, b) {
  assert.count += 1;
  if (a === b) return true;
  throw new Error('Test: ' + assert.count + ' failed (' + a + ' !== ' + b + ')');
}

function test_jsTester() {
  assert(typeof describe, 'function');
  assert(typeof it, 'function');
  assert(typeof expect, 'function');
  assert(typeof describe.suites, 'number');
  assert(typeof it.specs, 'number');
  assert(typeof expect.passes, 'number');
  assert(typeof expect.fails, 'number');
  describe('test suite 1', function () {
    var passes = expect.passes,
      fails = expect.fails;
    it('test spec 1', function () {
      expect(1).toBe(1);
      try {
        expect(1).toBe(2);
        assert('should not', 'get to this');
      } catch (e) {
        assert(e.message.substr(0, 5) !== 'Test:', true);
      }
    });
    assert(expect.passes, passes + 1);
    assert(expect.fails, fails + 1);
  });
  console.log('Suites: ' + describe.suites);
  console.log('Specs: ' + it.specs);
  console.log('Passes: ' + expect.passes);
  console.log('Fails: ' + expect.fails);
  console.log('Asserts: ' + assert.count);
}

var exports = exports || {};
(function () {
  var isNode = typeof module === 'object',
    env = isNode ? global : window;
  env.describe = isNode ? require('./Suite').Suite : exports.Suite;
  env.it = isNode ? require('./Spec').Spec : exports.Spec;
  env.expect = isNode ? require('./Expectation').Expectation : exports.Expectation;
}());

exports.tests = exports.tests || [];
exports.tests.push(test_jsTester);

//test_jsTester();
