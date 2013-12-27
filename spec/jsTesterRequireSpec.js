if (typeof require === 'function') {
  require('../src/jsTesterRequire');
  var assert = require('../src/assert').assert;
  console.log('hello', typeof jsTester);
}

assert.reset();
assert(typeof jsTester, 'object');
assert(typeof describe, 'function');
assert(typeof it, 'function');
assert(typeof expect, 'function');
describe('jsTester', function () {
  it('should count suites', function () {
    expect(typeof describe.suites).toBe('number');
  });
});
console.log('Suites: ' + describe.suites);
console.log('Specs: ' + it.specs);
console.log('Passes: ' + expect.passes);
console.log('Fails: ' + expect.fails);
assert.showStats();
