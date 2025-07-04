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
        reject(new Error('Come back in 7.5 million years and ask me again!'));
      }
    }, Math.floor(Math.random() * 5000) + 3000);
  });
}

console.log(
  'What is the answer to the Ultimate Question of Life, the Universe, and Everything?'
);

whatIsTheMeaningOfLife()
  .then((result) => {
    console.log('\nThe answer is:', result);
  })
  .catch((err) => {
    console.log('\n' + err.message);
  });
