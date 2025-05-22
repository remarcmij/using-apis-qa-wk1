// Simulate an async operation using ES6 Promises
function asyncOperation() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() > 0.5) {
        resolve('Success! Data loaded.');
      } else {
        reject('Error: Something went wrong.');
      }
    }, 1000);
  });
}

// Usage
asyncOperation()
  .then((result) => {
    console.log('Resolved:', result);
  })
  .catch((error) => {
    console.log('Rejected:', error);
  });
