console.log('assert');
require('../src/assert');

console.log('SuiteSpec');
require('../src/Suite');
require('./SuiteSpec');

console.log('SpecSpec');
require('../src/Spec');
require('./SpecSpec');

console.log('ExpectationSpec');
require('../src/Expectation');
require('./ExpectationSpec');
