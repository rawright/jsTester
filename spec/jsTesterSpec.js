function test_jsTester() {
  require('../src/jsTester');

  describe('jsTester', function () {
    it('should provide global access to describe', function () {
      expect(describe).toBeFunction();
    });
    it('should provide global access to it', function () {
      expect(it).toBeFunction();
    });
    it('should provide global access to expect', function () {
      expect(expect).toBeFunction();
    });
    it('should handle not', function () {
      expect(1).not().toBe(2);
    });
  });
}

test_jsTester();

require('./SuiteSpec');
require('./SpecSpec');
require('./ExpectationSpec');

describe.showStats();
