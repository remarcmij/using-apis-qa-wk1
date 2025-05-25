// This code demonstrates the use of Promise.finally() to clean up resources
// after a promise is settled, regardless of whether it was resolved or rejected.
// It also shows how to handle errors in a promise chain and ensure that cleanup
// code runs.

function whatIsTheMeaningOfLife() {
  let count = 0;
  const intervalTimer = setInterval(() => {
    count += 1;
    process.stdout.write('\rThinking' + '.'.repeat(count));
  }, 1000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(42);
      } else {
        reject(new Error("I don't know..."));
      }
    }, Math.floor(Math.random() * 5000) + 3000);
  }).finally(() => {
    console.log('\nDone thinking.');
    clearInterval(intervalTimer);
  });
}

whatIsTheMeaningOfLife()
  .then((result) => {
    console.log('The answer is:', result);
  })
  .catch((err) => {
    console.log('Unfortunately,', err.message);
  });
