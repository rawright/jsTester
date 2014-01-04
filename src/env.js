var exports = exports || {};

(function () {
  var env = {};

  if (typeof module !== 'undefined' && module.exports) {
    env = global;
  } else if (typeof window !== 'undefined') {
    env = window;
  }

  env.describe = exports.Suite;
  env.it = exports.Spec;
  env.expect = exports.Expectation;
}());
