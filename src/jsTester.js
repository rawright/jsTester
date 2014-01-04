(function () {
  "use strict";
  global.describe = require('./Suite').Suite;
  global.it = require('./Spec').Spec;
  global.expect = require('./Expectation').Expectation;
}());
