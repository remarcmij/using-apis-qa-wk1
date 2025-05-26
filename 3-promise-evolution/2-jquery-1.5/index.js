// When jQuery v1.5 came out the current version of JS was EcmaScript 5 (ES5).
// For demo purposes we have used `var` instead of `let` and `const` here and
// also regular functions instead of arrow functions as the latter only became
// available in the later versions of JavaScript (ES6).

var answerContainer = document.querySelector('#answer');

function whatIsTheMeaningOfLife() {
  answerContainer.classList.add('heartbeat');
  var deferred = $.Deferred();

  setTimeout(function () {
    answerContainer.classList.remove('heartbeat');
    if (Math.random() > 0.5) {
      deferred.resolve(42);
    } else {
      deferred.reject(new Error("I don't have a clue."));
    }
  }, Math.floor(Math.random() * 5000) + 3000);

  return deferred.promise();
}

function main() {
  // The promise is returned by the function and can be used to handle the result
  // or error in a more elegant way than using callbacks.
  var promise = whatIsTheMeaningOfLife();

  promise.done(function (result) {
    answerContainer.classList.add('success');
    answerContainer.textContent = 'The answer is: ' + result;
  });

  promise.fail(function (error) {
    answerContainer.classList.add('fail');
    answerContainer.textContent = 'Unfortunately, ' + error.message;
  });
}

window.addEventListener('load', main);
