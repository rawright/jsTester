function test_Expectation() {
  require('../src/jsTester');

  describe('Expectation', function () {
    it('should provide global access to expect', function () {
      expect(expect).toBeFunction();
    });
    
    it('should tally passes and fails and expected fails', function () {
      var passes = expect.passes,
        fails = expect.fails,
        expectedFails = expect.expectedFails;
      expect(1).toBe(1);
      expect(1).expectFail().toBe(2);
      expect(expect.passes).toBe(passes + 2);
      expect(expect.fails).toBe(fails);
      expect(expect.expectedFails).toBe(expectedFails + 1);
    });

    it('should return it\'s object for piping', function () {
      expect(expect()).toBeObject();
    });

    it('should store the actual value', function () {
      var fails = expect.fails;
      expect(expect('actual').actual).toBe('actual');
    });
  });

  describe('expectFail()', function () {
    it('should pass when the test fails', function () {
      var passes = expect.passes;
      expect(1).expectFail().toBe(2);
      expect(expect.passes).toBe(passes + 1);
    });

    it('should return false when the test fails', function () {
      expect((expect(true).expectFail().toBe(false))).toBe(false);
    });

    it('should tally both passes and expectedFails', function () {
      var passes = expect.passes,
        fails = expect.fails,
        expectedFails = expect.expectedFails;
      expect(true).expectFail().toBe(false);
      expect(expect.passes).toBe(passes + 1);
      expect(expect.fails).toBe(fails);
      expect(expect.expectedFails).toBe(expectedFails + 1);
    });
  });

  describe('toBe', function () {
    it('should match the actual value to an expected value', function () {
      expect((expect('actual').toBe('actual'))).toBe(true);
    });

    it('should return false if values do not match', function () {
      expect((expect('actual').expectFail().toBe('not actual'))).toBe(false);
    });
  });

  describe('expect.not().toBe()', function () {
    it('should return true if actual does not equal expected', function () {
      expect((expect(true).not().toBe(false))).toBe(true);
    });
  });

  describe('toBeArray', function () {
    it('should pass if actual is an array', function () {
      expect([]).toBeArray();
      expect({}).not().toBeArray();
    });
  });

  describe('toBeFunction', function () {
    it('should pass if actual is a function', function () {
      expect(function() {}).toBeFunction();
      expect({}).not().toBeFunction();
    });
  });
    
  describe('toBeNull', function () {
    it('should pass if actual is null', function () {
      expect(null).toBeNull();
      expect().not().toBeNull();
      expect(0).not().toBeNull();
      expect('').not().toBeNull();
      expect({}).not().toBeNull();
    });
  });
    
  describe('toBeNumber', function () {
    it('should pass if actual is a number', function () {
      expect(0).toBeNumber();
      expect(10).toBeNumber();
      expect(-10).toBeNumber();
      expect(1.234).toBeNumber();
      expect(-1.234).toBeNumber();
      expect('a').not().toBeNumber();
      expect('').not().toBeNumber();
      expect({}).not().toBeNumber();
      expect({}).expectFail().toBeNumber();
    });
  });
    
  describe('toBeObject', function () {
    it('should pass if actual is an object', function () {
      expect({}).toBeObject();
      expect([]).expectFail().toBeObject();
      expect(function () {}).expectFail().toBeObject();
    });
  });

  describe('toBeString', function () {
    it('should pass if actual is a string', function () {
      expect("string").toBeString();
      expect('string').toBeString();
      expect('string' + 22).toBeString();
      expect(22 + 'string').toBeString();
      expect(0).expectFail().toBeString();
      expect(9).expectFail().toBeString();
      expect({}).expectFail().toBeString();
    });
  });

  describe('toThrow', function () {
    it('should pass if the function passed in actual throws an error', function () {
      var f1 = function () { throw new Error('Test Error'); },
        f2 = function () {};
      expect(f1).toThrow();
      expect(f2).expectFail().toThrow();
    });
    
    it('should take parameters to the function via an array', function () {
      var f3 = function (a, b, c) { if (c === 'c') throw new Error('Needs parms'); };
      expect([f3, 'a', 'b', 'c']).toThrow();
      expect([f3, 'a', 'b', function() { return 'c'; }()]).toThrow();
      expect([f3, 'a', 'b', 'x']).expectFail().toThrow();
      expect([f3, 'a', 'b']).expectFail().toThrow();
    });
  });

  describe('toBeUndefined', function () {
    it('should pass if actual is a undefined', function () {
      expect().toBeUndefined();
      expect(0).expectFail().toBeString();
      expect('a').expectFail().toBeString();
      expect('').expectFail().toBeString();
      expect({}).expectFail().toBeString();
    });
  });
}

test_Expectation();
