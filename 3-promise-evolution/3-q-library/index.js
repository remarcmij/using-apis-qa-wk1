function asyncOperation() {
  var deferred = Q.defer();

  setTimeout(function () {
    if (Math.random() > 0.5) {
      deferred.resolve('Success! Data loaded.');
    } else {
      deferred.reject(new Error('Something went wrong.'));
    }
  }, 1000);

  return deferred.promise;
}

// Usage
asyncOperation()
  .then(function (result) {
    console.log('Resolved:', result);
  })
  .catch(function (error) {
    console.log('Rejected:', error.message);
  });
