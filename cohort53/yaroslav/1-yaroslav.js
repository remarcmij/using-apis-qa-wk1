function waitSync(time) {
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
    waitSync(100);
  }
}

function waggle() {
  for (const char of String.raw`\|/-`.split('')) {
    process.stdout.write('\r' + buffer + char);
    waitSync(500);
  }
}

function dotWalk() {
  buffer = '';

  walk();
  waggle();
  walk();

  // Clear line in terminal
  process.stdout.write('\r\x1b[K');

  // Synchronous recursive call
  dotWalk();
}

dotWalk();
