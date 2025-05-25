// This code demonstrates the use of Promise.finally() to clean up resources
// after a promise is settled, regardless of whether it was resolved or rejected.
// It also shows how to handle errors in a promise chain and ensure that cleanup
// code runs.

function whatIsTheMeaningOfLife() {
  let count = 0;
  const intervalTimer = setInterval(() => {
    count += 1;
    console.log('Thinking..' + '.'.repeat(count));
  }, 1000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(42);
      } else {
        reject(new Error("I don't know..."));
      }
    }, Math.floor(Math.random() * 5000) + 1000);
  });
}

whatIsTheMeaningOfLife()
  .then((result) => {
    console.log('The meaning of life is:', result);
  })
  .catch((err) => {
    console.log('Sorry:', err.message);
  });
