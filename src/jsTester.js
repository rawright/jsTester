var exports = exports || {};

(function () {
  var isNode = typeof module === 'object',
    env = isNode ? global : window;
  env.describe = isNode ? require('./Suite').Suite : exports.Suite;
  env.it = isNode ? require('./Spec').Spec : exports.Spec;
  env.expect = isNode ? require('./Expectation').Expectation : exports.Expectation;
}());
