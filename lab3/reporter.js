// my-reporter.js
var mocha = require('mocha');
module.exports = MyReporter;

function MyReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;

  runner.on('pass', function(test) {
    passes++;
    console.log('%s : pass', test.fullTitle());
  });

  runner.on('fail', function(test, err) {
    failures++;
    //console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
    console.log('%s : fail', test.fullTitle());
  });

  runner.on('end', function() {
    console.log('end: passed %d tests out of %d', passes, passes + failures);
  });
}
