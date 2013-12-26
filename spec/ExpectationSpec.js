var assert = require('../src/assert').assert,
  expect = require('../src/Expectation').Expectation;

assert.reset();
function test_Expectation() {
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
  assert(expect(1).not().toBe(2), true);
  assert(expect(1).not().toBeString(), true);
  assert(expect(1).toBeNumber(), true);
  try {
    expect(1).toBeString();
  } catch (e) {
    assert(e.message.substr(0, 11), 'toBeString:');
  }
  console.log('expect.passes: ' + expect.passes);
  console.log('expect.fails: ' + expect.fails);
  assert.showStats();
}

test_Expectation();
