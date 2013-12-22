function setup_tests() {
  if (typeof module === 'object' && module.exports) {
    require('../public/javascripts/jsTester');
  }
}

function factors_tests() {
  "use strict";
  describe('factors', function () {
    it('should return the correct factors', function () {
      expect(factors(0).join()).toBe('');
      expect(factors(1).join()).toBe('');
      expect(factors(2).join()).toBe('2');
      expect(factors(3).join()).toBe('3');
      expect(factors(4).join()).toBe('2,2');
      expect(factors(5).join()).toBe('5');
      expect(factors(6).join()).toBe('2,3');
      expect(factors(7).join()).toBe('7');
      expect(factors(8).join()).toBe('2,2,2');
      expect(factors(9).join()).toBe('3,3');
      expect(factors(10).join()).toBe('2,5');
      expect(factors(11).join()).toBe('11');
      expect(factors(69).join()).toBe('3,23');
      expect(factors(73).join()).toBe('73');
    });
  });
}
var exports = exports || {};
function factors(n) {
  "use strict";
  var arr = [],
    i = 2;
  if (n > 1) {
    while (i < n) {
      while (n % i === 0) {
        arr.push(i);
        n /= i;
      }
      i += 1;
    }
    if (n > 1) arr.push(n);
  }
  return arr;
}

function countPrimes_tests() {
  "use strict";
  describe('countPrimes', function () {
    it('should return the correct number of primes in a range', function () {
      expect(countPrimes(0, 0)).toBe(0);
      expect(countPrimes(0, 1)).toBe(0);
      expect(countPrimes(0, 2)).toBe(1);
      expect(countPrimes(0, 3)).toBe(2);
      expect(countPrimes(0, 71)).toBe(20);
      expect(countPrimes(72, 173)).toBe(20);
      expect(countPrimes(174, 281)).toBe(20);
      expect(countPrimes(282, 409)).toBe(20);
    });
  });
}
function countPrimes(start, end) {
  var primes = 0,
    i;
  for (i = start; i <= end; i += 1) {
    primes += factors(i).length === 1 ? 1 : 0;
  }
  return primes;
}

exports.factors = factors;
// Run tests
setup_tests();
factors_tests();
countPrimes_tests();
