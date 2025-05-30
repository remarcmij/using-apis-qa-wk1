// Comment out the import statement to use native Promises
// import { CustomPromise as Promise } from '../lib/custom-promise.js';

// In this version we have split up the chain of promises into separate variables
// that can easily be linked to the output that the custom promise library
// produces. We also used named function for the `then` and `catch` handlers
// instead of arrow functions for easy reference in the README.
//
// Functionality-wise this is the same as the previous version.

function main() {
  console.log('<<< main starting >>>');

  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  const promise2 = promise1.then(function onFulfilled() {
    console.log('then#1');
  });

  const promise3 = promise2.then(function onFulfilled() {
    console.log('then#2');
  });

  const promise4 = promise3.catch(function onRejected() {
    console.log('catch#1');
  });

  const promise5 = promise4.catch(function onRejected() {
    console.log('catch#2');
  });

  const promise6 = promise5.then(function onFulfilled() {
    console.log('then#3');
  });

  console.log('<<< main ending >>>');
}

main();

// Questions:
// 1. What will be the output of the above code?
// 2. How many promises will be created in total?
