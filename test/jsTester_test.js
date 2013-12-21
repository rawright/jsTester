var jsTester = require('../public/javascripts/jsTester'),
  describe = jsTester.describe,
  it = jsTester.it,
  expect = jsTester.expect,
  stats = jsTester.stats;
function assert(op1, op2) {
  try {
    if (op1 !== op2) throw new Error('assertion failed');
    return true;
  } catch(e) {
    console.log(e.name, e.message, op1, op2);
    return false;
  }
}
describe('Test describe verb', function () {
  it('should save suite name in stats.suite', function () {
    expect(stats.suite).toBe('Test describe verb');
  });
});
describe('Test it verb', function (suite) {
  var specs = stats.specs;
  it('should save spec in stats.spec', function (spec) {
    expect(stats.spec).toBe('should save spec in stats.spec');
  });
  it('should increment spec count in stats.specs', function () {
    expect(stats.specs).toBe(specs + 2);
  });
});
describe('Test expect verb', function () {
  it('should return ts context', function () {
    assert(typeof expect('opt1'), 'object');
  });
  it('should save the actual value passed into it', function () {
    assert(expect('opt1').actual, 'opt1');
  });
});
describe('Test toBe verb', function () {
  var passes = stats.passes,
    fails = stats.fails;
  it('should return true if its value matches the expect value', function () {
    assert(expect('opt1').toBe('opt1'), true);
  });
  it('should throw an error if the values do not match', function () {
    try {
      expect(1).toBe(2);
      assert('no error', 'thrown');
    } catch (e) {
      assert(e.name, 'Error');
    }
  });
  it('should use === to compare actual to expected', function () {
    try {
      expect(1).toBe(true);
      assert('no error thrown', 'for bad === compare');
    } catch (e) {
    }
  });
  it('should tally the results of its tests', function () {
    assert(stats.passes, passes + 1);
    assert(stats.fails, fails + 2);
  });
});
