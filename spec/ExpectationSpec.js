function test_Expectation() {
  var assert = require('../src/assert').assert,
    expect = require('../src/Expectation').Expectation;

  assert.reset();

  // describe Expectation
    // it should be a function
    assert(typeof expect, 'function');
    // it should tally passes and fails
    assert(expect.passes, 0);
    assert(expect.fails, 0);
    // it should return an object
    assert(typeof expect(), 'object');
    // it should store the actual value
    assert(expect('actual').actual, 'actual');

  // describe toBe
    // it should match the actual value to an expected value
    assert(expect('actual').toBe('actual'), true);
    // it should throw an Error if actual does not equal expected
    try {
      expect('actual').toBe('not actual');
      assert('should have thrown Error', 'did not throw Error');
    } catch (e) {
      assert(e.name, 'Error');
      assert(e.message.substr(0, 5), 'toBe:');
    }
    // it should update passes and fails tallies
    assert(expect.passes, 1);
    assert(expect.fails, 1);

  // describe expect.not().toBe()
    // it should pass if actual is not expected
    assert(expect(true).not().toBe(false), true);

  // describe toBeString
    // it should test for a string type
    assert(expect('string').toBeString(), true);
    // it should support .not()
    assert(expect(1).not().toBeString(), true);

  // describe toBeNumber
    // it should test for a number type
    assert(expect(1).toBeNumber(), true);
    // it should support .not()
    assert(expect('a').not().toBeNumber(), true);

  // describe toBeFunction
    // it should test for a function type
    assert(expect(expect).toBeFunction(), true);
    // it should support .not()
    assert(expect({}).not().toBeFunction(), true);

  // describe toBeArray
    // it should test for an array type
    assert(expect([]).toBeArray(), true);
    // it should support .not()
    assert(expect({}).not().toBeArray(), true);

  // describe toBeObject
    // it should test for an object type
    assert(expect({}).toBeObject(), true);
    // it should support .not()
    assert(expect(true).not().toBeObject(), true);
    // in should not show array as an object
    assert(expect([]).not().toBeObject(), true);

  // describe toBeUndefined
    // it should test for type undefined
    assert(expect().toBeUndefined(), true);
    // it should support .not()
    assert(expect('a').not().toBeUndefined(), true);
    // it should not handle null as undefined
    assert(expect(null).not().toBeUndefined(), true);

  // describe toBeNull
    // it should test for null
    assert(expect(null).toBeNull(), true);
    // it should support .not()
    assert(expect().not().toBeNull(), true);

  console.log('expect.passes: ' + expect.passes);
  console.log('expect.fails: ' + expect.fails);
  assert.showStats();
}

test_Expectation();
