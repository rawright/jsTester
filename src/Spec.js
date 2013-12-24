assert.count = 0;
function assert(a, b) {
  assert.count += 1;
  if (a === b) return true;
  throw new Error('Test: ' + assert.count + ' failed (' + a + ' !== ' + b + ')');
}

function test_Spec() {
  var it = exports.Spec;
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
}

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
exports.tests = exports.tests || [];
exports.tests.push(test_Spec); 

//test_Spec();
