var i,
  j,
  mod;
for (i = 2; i < process.argv.length; i += 1) {
  console.log('Testing ' + process.argv[i]);
  mod = require('../src/' + process.argv[i]);
  if (mod.tests) {
    for (j = 0; j < mod.tests.length; j += 1) {
      console.log('Test ' + (j + 1));
      mod.tests[j]();
    }
  } else {
    console.log('no tests defined');
  }
  console.log('Testing ' + process.argv[i] + ' complete');
}
