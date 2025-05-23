import { beep } from '../lib/beep.js';

let setTimeoutFn;
let isRunning = false;

function setTimeoutBlocking(callbackFn, time) {
  const endTime = Date.now() + time;
  while (Date.now() < endTime) {
    // do nothing
  }
  callbackFn();
}

function timer(count) {
  if (!isRunning) {
    return;
  }

  console.log('count:', count);
  document.querySelector('#counter').textContent = count;

  if (count === 0) {
    beep();
    isRunning = false;
    return;
  }

  setTimeoutFn(() => {
    timer(count - 1);
  }, 1000);
}

function startTimer() {
  if (isRunning) {
    return;
  }

  setTimeoutFn = document.querySelector('#blocking').checked
    ? setTimeoutBlocking
    : setTimeout;

  isRunning = true;
  timer(10);
}

function stopTimer() {
  isRunning = false;
}

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
