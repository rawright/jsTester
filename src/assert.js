(function () {
  "use strict";
  assert.showStats = function () {
    console.log('Passes: ' + assert.passes, 'Fails: ' + assert.fails);
  };
  assert.reset = function () {
    assert.passes = 0;
    assert.fails = 0;
  };
  assert.reset();
  function assert(a, b) {
    if (a === b) {
      assert.passes += 1;
      return true;
    }
    assert.fails += 1;
    throw new Error(
      'Assertion ' + (assert.passes + assert.fails) +
      ' failed: (' + a + ' !== ' + b + ')'
    );
  }

  if (typeof module !== 'undefined' && module.exports) {
    global.assert = assert;
  } else {
    window.assert = assert;
  }
}());
