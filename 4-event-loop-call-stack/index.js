function console_log(...args) {
  console.log(...args);
  debugger;
}

function main() {
  console_log('main starting');

  setTimeout(() => {
    console_log('timeout#1');
  }, 0);

  setTimeout(() => {
    console_log('timeout#2');
  }, 0);

  Promise.resolve()
    .then(() => {
      console_log('then#1');
    })
    .then(() => {
      console_log('then#2');
    });

  console_log('main ending');
}

document.querySelector('button').addEventListener('click', main);
