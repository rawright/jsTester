var exports = exports || {};

(function () {
  var env = {};

  if (typeof module !== 'undefined' && module.exports) {
    env = global;
    console.log('global');
  } else if (typeof window !== 'undefined') {
    env = window;
    console.log('window');
  }

  env.describe = exports.Suite;
  env.it = exports.Spec;
  env.expect = exports.Expectation;
}());
