// This code demonstrates the use of callbacks to handle asynchronous operations
// in JavaScript. It simulates a function that takes some time to compute the answer
// to a question, and it uses success and error callbacks to handle the result.
// This approach is common in older JavaScript code before the introduction of
// Promises (also, no const and let, no arrow functions).

var answerContainer = document.querySelector('#answer');

function whatIsTheMeaningOfLife(successCallback, errorCallback) {
  answerContainer.classList.add('heartbeat');

  setTimeout(function () {
    answerContainer.classList.remove('heartbeat');
    if (Math.random() > 0.5) {
      successCallback(42);
    } else {
      errorCallback(new Error("I don't have a clue."));
    }
  }, Math.floor(Math.random() * 5000) + 3000);
}

function main() {
  whatIsTheMeaningOfLife(
    function (result) {
      answerContainer.classList.add('success');
      answerContainer.textContent = 'The answer is: ' + result;
    },
    function (error) {
      answerContainer.classList.add('fail');
      answerContainer.textContent = 'Unfortunately, ' + error.message;
    }
  );
}

window.addEventListener('load', main);
