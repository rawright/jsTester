var assert = require('../src/assert').assert,
  it = require('../src/Spec').Spec;

assert.reset();
function test_Spec() {
  assert(typeof it, 'function');
  assert(it.specs, 0);
  assert(typeof it('spec1'), 'object');
  var a = 1;
  it('spec2', function () {
    a = 2;
  });
  assert(a, 2);
  assert(it.specs, 2);
  assert(it('spec3').spec, 'spec3');
  assert(it().spec, '');
  assert.showStats();
}

test_Spec();
