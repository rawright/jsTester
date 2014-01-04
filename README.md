jsTester
========

Learning TDD by building a testing tool for JavaScript

Use Jasmine-like syntax:
* describe
* it
* expect
* expect().not() - workaround for now
* expect().expectFail() - failed test passes and passing test fails
  ``` javascript
  expect(1).expectFail().toBe(2); // icrements passes and expectedFails
  expect(1).expectFail().toBe(1); // icrements fails and thows error
  ```
* toBe
* toBeArray
* toBeFunction
* toBeNull
* toBeNumber
* toBeObject
* toBeString
* toThrow
  ``` javascript
  var f = function () { throw new Error(); };
  expect(f).toThrow();

  ... if parameters required

  var f = function (a, b) { if (b === 'b') throw new Error(); };
  expect[f, 'a', 'b']).toThrow();
  ```
* toBeUndefined
