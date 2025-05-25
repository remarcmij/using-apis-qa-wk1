// Comment out the import statement to use native Promises
// import { CustomPromise as Promise } from './custom/promise.js';

function main() {
  console.log('<<< main starting >>>');

  const promise = new Promise((resolve, reject) => {
    reject();
  });

  promise
    .then(function onFulfilled() {
      console.log('then#1');
    })
    .then(function onFulfilled() {
      console.log('then#2');
    })
    .catch(function onRejected() {
      console.log('catch#3');
    })
    .catch(function onRejected() {
      console.log('catch#4');
    })
    .then(function onFulfilled() {
      console.log('then#5');
    });

  console.log('<<< main ending >>>');
}

main();

// Questions:
// 1. What will be the output of the above code?
// 2. How many promises will be created in total?
