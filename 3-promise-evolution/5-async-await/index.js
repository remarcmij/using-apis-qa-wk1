// This code demonstrates the use async/await to consume ES6 Promises.

const answerContainer = document.querySelector('#answer');

function whatIsTheMeaningOfLifeES6() {
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

async function main() {
  try {
    const result = await whatIsTheMeaningOfLifeES6();
    answerContainer.classList.add('success');
    answerContainer.textContent = 'The answer is: ' + result;
  } catch (error) {
    answerContainer.classList.add('fail');
    answerContainer.textContent = error.message;
  }
}

main();
