const answerContainer = document.querySelector('#answer');

function whatIsTheMeaningOfLifeES6() {
  answerContainer.classList.add('heartbeat');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      answerContainer.classList.remove('heartbeat');
      if (Math.random() > 0.5) {
        resolve(42);
      } else {
        reject(new Error("I don't have a clue."));
      }
    }, Math.floor(Math.random() * 5000) + 3000);
  });
}

whatIsTheMeaningOfLifeES6()
  .then((result) => {
    answerContainer.classList.add('success');
    answerContainer.textContent = 'The answer is: ' + result;
  })
  .catch((error) => {
    answerContainer.classList.add('fail');
    answerContainer.textContent = 'Unfortunately, ' + error.message;
  });
