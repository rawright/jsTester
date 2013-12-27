(function () {
  "use strict";
  Suite.suites = 0;
  function Suite(suite, callback) {
    if (!(this instanceof Suite)) {
      return new Suite(suite, callback);
    }
    Suite.suites += 1;
    this.suite = suite || '';
    if (typeof callback === 'function') callback();
  }

  if (typeof module !== 'undefined' && module.exports) {
    global.describe = Suite;
  } else {
    window.describe = Suite;
  }
}());
