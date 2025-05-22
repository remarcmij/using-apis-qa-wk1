// Example using callbacks and ES3 syntax (no promises, no arrow functions,
// no let/const)
function asyncOperation(successCallback, errorCallback) {
  setTimeout(function () {
    if (Math.random() > 0.5) {
      successCallback('Success! Data loaded.');
    } else {
      errorCallback(new Error('Something went wrong.'));
    }
  }, 1000);
}

// Usage
asyncOperation(
  function (result) {
    console.log('Resolved:', result);
  },
  function (error) {
    console.log('Rejected:', error.message);
  }
);
