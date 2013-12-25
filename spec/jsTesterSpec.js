var assert = require('../src/assert').assert,
  jsTester = require('../src/jsTester');

assert.reset();
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
  assert.showStats();
}

test_jsTester();
