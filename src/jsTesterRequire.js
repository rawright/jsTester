var js$ = typeof module !== 'undefined' && module.exports ? global : window;
var require = require || function() {return exports;};

js$.jsTester = {};
js$.describe = require('./Suite').Suite;
js$.it = require('./Spec').Spec;
js$.expect = require('./Expectation').Expectation;
