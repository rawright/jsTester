jsTester
========

Learn TDD by building a testing tool for JavaScript

Use Jasmine syntax:
* describe
* it
* expect
* toBe

Working on embedding the tests into the code. Used the "factors" module in the
/test directory as a POC for this. Got the idea listening to a JavaScript Jabber
podcast in which guest Daniel Tao, who is working on the Lazy.js project,
mentioned doing this in comments and then extracting the comments to run the
tests. My thought, which I hope to work through, is to write the tests in
front of the function being tested and build the test and the function
concurrently. The tests can be stripped out later by some code distribution
process, but they will live with the base code.
