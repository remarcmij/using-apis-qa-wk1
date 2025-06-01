// This code demonstrates the use of Q promises to handle asynchronous operations
// in JavaScript. It simulates a function that takes some time to compute the answer
// to a question, and it uses .then and .catch to handle the result.

var answerContainer = document.querySelector('#answer');

function whatIsTheMeaningOfLife() {
  answerContainer.classList.add('heartbeat');
  var deferred = Q.defer();

  setTimeout(function () {
    answerContainer.classList.remove('heartbeat');
    if (Math.random() > 0.5) {
      deferred.resolve(42);
    } else {
      deferred.reject(
        new Error('Come back in 7.5 million years and ask me again!')
      );
    }
  }, Math.floor(Math.random() * 5000) + 3000);

  return deferred.promise;
}

function main() {
  whatIsTheMeaningOfLife()
    .then(function (result) {
      answerContainer.classList.add('success');
      answerContainer.textContent = 'The answer is: ' + result;
    })
    .catch(function (error) {
      answerContainer.classList.add('fail');
      answerContainer.textContent = error.message;
    });
}

window.addEventListener('load', main);
