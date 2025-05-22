// Comment out the import statement to use native Promises
import { CustomPromise as Promise } from './custom/promise.js';

function main() {
  console.log('<<< main starting >>>');

  const promise = new Promise((resolve, reject) => {
    setTimeout(reject, 2000);
  });

  promise
    .then(() => {
      console.log('>> then#1');
    })
    .then(() => {
      console.log('>> then#1');
    })
    .then(() => {
      console.log('>> then#2');
    })
    .catch(() => {
      console.log('>> catch#3');
    })
    .catch(() => {
      console.log('>> catch#4');
    })
    .then(() => {
      console.log('>> then#5');
    });

  console.log('<<< main ending >>>');
}

main();

// Questions:
// 1. What will be the output of the above code?
// 2. How many promises will be created in total?
