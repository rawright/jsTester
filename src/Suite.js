var exports = exports || {};

function Suite(suite, callback) {
  if (!(this instanceof Suite)) {
    return new Suite(suite, callback);
  }
  Suite.suites += 1;
  this.suite = suite || '';
  Suite.log(suite);
  if (typeof callback === 'function') callback();
}

Suite.suites = 0;

Suite.logQueue = [];

Suite.log = function (message) { Suite.logQueue.push(message); };

Suite.showStats = function () {
  while(Suite.logQueue.length) {
    console.log(Suite.logQueue.shift());
  }
  console.log('Passes: ' + expect.passes +
    ' Fails: ' + expect.fails +
    ' Expected Fails: ' + expect.expectedFails);
};

exports.Suite = Suite;
