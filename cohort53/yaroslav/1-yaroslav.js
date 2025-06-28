function wait(time) {
  const endTime = Date.now() + time;

  // Busy-wait loop that blocks the main thread until the specified time has
  // passed.
  while (Date.now() < endTime) {
    // do nothing
  }
}

let buffer = '';

function walk() {
  for (let i = 0; i < 10; i++) {
    buffer += '.';
    process.stdout.write('\r' + buffer);
    wait(100);
  }
}

function pause() {
  buffer += '|';
  process.stdout.write('\r' + buffer);
  wait(1000);
}

function catWalk() {
  buffer = '';

  walk();
  pause();
  walk();

  // Clear line in terminal
  process.stdout.write('\r\x1b[K');

  // Recursive call
  catWalk();
}

catWalk();
