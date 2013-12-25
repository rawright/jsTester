var exports = exports || {};
Suite.suites = 0;
function Suite(suite, callback) {
  if (!(this instanceof Suite)) {
    return new Suite(suite, callback);
  }
  Suite.suites += 1;
  this.suite = suite || '';
  if (typeof callback === 'function') callback();
}

exports.Suite = Suite;
