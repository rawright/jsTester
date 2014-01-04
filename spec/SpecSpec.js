function test_Spec() {
  require('../src/jsTester');

  describe('Spec', function () {
    it('should provide global access to it', function () {
      expect(it).toBeFunction();
    });

    it('should track the number of specs', function () {
      var specs = it.specs;
      it('dummy spec');
      expect(it.specs).toBe(specs + 1);
    });

    it('should not invoke callback if callback not in args', function () {
      var specs = it.specs;
      it('dummy spec 2');
      expect(it.specs).toBe(specs + 1);
    });

    it('should log it\'s name', function () {
      var n = describe.logQueue.length;
      it('dummy spec 3');
      expect(describe.logQueue[n]).toBe('  dummy spec 3');
    });
  });

}

test_Spec();
