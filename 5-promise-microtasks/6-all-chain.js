// Comment out the import statement to use native Promises
import { CustomPromise as Promise } from './custom/promise.js';

function main() {
  console.log('<<< main starting >>>');

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
  });

  const promises = [promise1, promise2];

  Promise.all(promises)
    .then((results) => console.log('>>> results:', results))
    .catch((err) => console.log('>>> error:', err.message));

  console.log('<<< main ending >>>');
}

main();

// Questions:
// 1. What will be the output of the above code?
// 2. How many promises will be created in total?
