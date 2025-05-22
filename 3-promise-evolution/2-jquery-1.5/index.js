// When jQuery v1.5 came out the current version of JS was EcmaScript 5 (ES5).
// For demo purposes we have used `var` instead of `let` and `const` here and
// also regular functions instead of arrow functions as the latter only became
// available in the later versions of JavaScript (ES6).

function asyncOperation() {
  var deferred = $.Deferred();

  setTimeout(function () {
    if (Math.random() > 0.5) {
      deferred.resolve('Success! Data loaded.');
    } else {
      deferred.reject(new Error('Something went wrong.'));
    }
  }, 1000);

  return deferred.promise();
}

// Usage
var promise = asyncOperation();
promise.done(function (result) {
  console.log('Resolved:', result);
});
promise.fail(function (error) {
  console.log('Rejected:', error.message);
});
