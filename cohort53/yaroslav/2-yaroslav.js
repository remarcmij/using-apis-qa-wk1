const simplePromise = new Promise((resolve, reject) => {
  // Simulate some async work
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(`Success! Number was ${randomNumber}`);
    } else {
      reject(`Failed! Number was ${randomNumber} (too low)`);
    }
  }, 1000);
});
