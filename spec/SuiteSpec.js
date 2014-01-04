function test_Suite() {
  require ('../src/jsTester');

  describe('Suite', function () {
    it('should expose describe as a function', function () {
      expect(describe).toBeFunction();
    });

    it('should track the number of suites', function () {
      var suites = describe.suites;
      expect(describe.suites).toBe(suites);
      describe('second suite');
      expect(describe.suites).toBe(suites + 1);
    });

    it('should log its name', function () {
      var n = describe.logQueue.length;
      describe('log suite name');
      expect(describe.logQueue[n]).toBe('log suite name');
    });

    it('should not invoke callback if it is not included', function () {
      var suites = describe.suites;
      describe('no callback provided');
      expect(describe.suites).toBe(suites + 1);
    });
  });

}

test_Suite();
