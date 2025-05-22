// This code demonstrates the evolution of promises in JavaScript, focusing on
// async/await syntax introduced in ES2017 (ES8).
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Success! Data loaded.');
      } else {
        reject(new Error('Something went wrong.'));
      }
    }, 1000);
  });
}

// Top-level await (ES2022+)
try {
  const result = await asyncOperation();
  console.log('Resolved:', result);
} catch (error) {
  console.log('Rejected:', error.message);
}
