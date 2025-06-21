// This code demonstrates the use of ES6 Promises to handle asynchronous operations
// in JavaScript.

const answerContainer = document.querySelector('#answer');

function whatIsTheMeaningOfLife() {
  answerContainer.classList.add('heartbeat');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      answerContainer.classList.remove('heartbeat');
      if (Math.random() > 0.5) {
        resolve(42);
      } else {
        reject(new Error('Come back in 7.5 million years and ask me again!'));
      }
    }, Math.floor(Math.random() * 5000) + 3000);
  });
}

function main() {
  whatIsTheMeaningOfLife()
    .then((result) => {
      answerContainer.classList.add('success');
      answerContainer.textContent = 'The answer is: ' + result;
    })
    .catch((error) => {
      answerContainer.classList.add('fail');
      answerContainer.textContent = error.message;
    });
}

window.addEventListener('load', main);
