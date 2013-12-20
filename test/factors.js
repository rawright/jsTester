var exports = exports || {};
exports.factors = function (n) {
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
