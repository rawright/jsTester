assert.reset();
function test_Suite() {
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
  assert.showStats();
}

test_Suite();
