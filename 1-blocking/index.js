import { beep } from '../lib/beep.js';

let setTimeoutFn;
let isRunning = false;

// This function simulates a blocking setTimeout by using a busy-wait loop.
// It blocks the main thread for the specified time before executing the
// callback function.
// Note: This is not recommended for real applications as it can freeze the UI.
function setTimeoutBlocking(callbackFn, time) {
  const endTime = Date.now() + time;

  // Busy-wait loop that blocks the main thread until the specified time has
  // passed.
  // This will prevent any other code from running, including UI updates.
  while (Date.now() < endTime) {
    // do nothing
  }
  callbackFn();
}

function timer(count) {
  // Stop recursing if the timer should no longer run.
  if (!isRunning) {
    return;
  }

  console.log('count:', count);
  document.querySelector('#counter').textContent = count;

  // If the count reaches zero, we're done.
  if (count === 0) {
    beep();
    isRunning = false;
    return;
  }

  // If the count is not zero, set a timeout to recursively call this function
  // again after 1 second.
  setTimeoutFn(() => {
    timer(count - 1);
  }, 1000);
}

function startTimer() {
  // If the timer is already running, do nothing.
  if (isRunning) {
    return;
  }

  // Determine which setTimeout function to use based on the checkbox state.
  // If the checkbox is checked, use the blocking version; otherwise, use the
  // normal one.
  setTimeoutFn = document.querySelector('#blocking').checked
    ? setTimeoutBlocking
    : setTimeout;

  // Indicate that the timer is running.
  isRunning = true;

  timer(10);
}

function stopTimer() {
  // Cause the timer to stop running.
  isRunning = false;
}

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
