(function () {
  "use strict";
  var jsTester = require('../public/javascripts/jsTester'),
    describe = jsTester.describe,
    it = jsTester.it,
    expect = jsTester.expect,
    factors = require('./factors').factors;
  describe('Test factors', function () {
    it('should return no factors of [] for zero', function () {
      expect(factors(0).length).toBe(0);
    });
    it('should return no factors of [] for one', function () {
      expect(factors(0).length).toBe(0);
    });
    it('should return 1 factor of [2] for two', function () {
      expect(factors(2).length).toBe(1);
      expect(factors(2).join()).toBe('2');
    });
    it('should return 1 factor of [3] for three', function () {
      expect(factors(3).length).toBe(1);
      expect(factors(3).join()).toBe('3');
    });
    it('should return 2 factors of [2,2] for four', function () {
      expect(factors(4).length).toBe(2);
      expect(factors(4).join()).toBe('2,2');
    });
    it('should return 1 factor of 5 for five', function () {
      expect(factors(5).length).toBe(1);
      expect(factors(5).join()).toBe('5');
    });
    it('should return 2 factors of [2,3] for six', function () {
      expect(factors(6).length).toBe(2);
      expect(factors(6).join()).toBe('2,3');
    });
    it('should return 1 factor of 7 for seven', function () {
      expect(factors(7).length).toBe(1);
      expect(factors(7).join()).toBe('7');
    });
    it('should return 3 factors of [2,2,2] for eight', function () {
      expect(factors(8).length).toBe(3);
      expect(factors(8).join()).toBe('2,2,2');
    });
    it('should return 2 factors of [3,3] for nine', function () {
      expect(factors(9).length).toBe(2);
      expect(factors(9).join()).toBe('3,3');
    });
    it('should return 2 factors of [2,5] for ten', function () {
      expect(factors(10).length).toBe(2);
      expect(factors(10).join()).toBe('2,5');
    });
    it('should return 1 factor of [11] for eleven', function () {
      expect(factors(11).length).toBe(1);
      expect(factors(11).join()).toBe('11');
    });
    it('should return 2 factors of [3,23] for sixty-nine', function () {
      expect(factors(69).length).toBe(2);
      expect(factors(69).join()).toBe('3,23');
    });
    it('should return 1 factor of [73] for seventy-three', function () {
      expect(factors(73).length).toBe(1);
      expect(factors(73).join()).toBe('73');
    });
  });
}());
