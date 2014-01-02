require('../src/assert');
assert.reset();
function test_jsTester() {
  var options = {},
    testDescribe = require('../src/jsTester').jsTester(options);

  describe('jsTester', function (it) {
    it('should return access to describe', function (expect) {
      assert(expect(typeof describe).toBe('function'), true);
      assert(expect(describe).toBe(testDescribe), true);
    });
  });

  describe('describe', function (it) {
    it('should return access to it', function (expect) {
      assert(expect(typeof it).toBe('function'), true);
    });
  });

  describe('it', function (it) {
    it('should return access to expect', function (expect) {
      assert(expect(typeof expect).toBe('function'), true);
    });
  });

  describe('expect', function (it) {
    it('should return it\'s context for chaining', function (expect) {
      assert(expect(typeof expect().toBe).toBe('function'), true);
    });
  });

  describe('toBe', function (it) {
    it('should return true when test passes', function (expect) {
      assert(expect(1).toBe(1), true);
    });
    it('should return false when test fails', function (expect) {
      assert(expect(1).toBe(2), false);
    });
  });

  describe('not.toBe', function (it) {
    it('should return true when test fails', function (expect) {
      assert(expect(1).not.toBe(2), true);
    });
    it('should return false when test passes', function (expect) {
      assert(expect(1).not.toBe(1), false);
    });
  });

  xdescribe('toThrow', function (it) {
    var throwError = function () { throw new Error('test toThrow'); },
      doNotThrowError = function () { return; };
    it('should return false if test does not throw an error', function (expect) {
      assert(expect(doNotThrowError()).toThrow(), false);
    });
  });
      

/*
  assert(typeof jsTester, 'function');
  assert(typeof jsTester(), 'function');
  assert(typeof jsTester()(), 'object');
  assert(jsTester()._suites, 1);
  assert(jsTester()().getSuites(), 2);
  assert(jsTester()().getSuite(), '');
  assert(jsTester()('Suite 1').getSuite(), 'Suite 1');
*/
  assert.showStats();
  console.log('describe.cnt', describe.cnt);
}

test_jsTester();
