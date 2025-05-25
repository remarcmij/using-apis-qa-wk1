// Comment out the import statement to use native Promises
// import { CustomPromise as Promise } from './custom/promise.js';

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
    console.log('catch#3');
  });

  const promise5 = promise4.catch(function onRejected() {
    console.log('catch#4');
  });

  const promise6 = promise5.then(function onFulfilled() {
    console.log('then#5');
  });

  console.log('<<< main ending >>>');
}

main();

// Questions:
// 1. What will be the output of the above code?
// 2. How many promises will be created in total?
