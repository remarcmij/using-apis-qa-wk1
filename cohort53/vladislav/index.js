// Based on solution from Igor
const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let currentPos = startPos;
    const step = () => {
      if (currentPos < stopPos) {
        currentPos += STEP_SIZE_PX;
        img.style.left = currentPos + 'px';
        setTimeout(step, STEP_INTERVAL_MS);
      } else {
        resolve();
      }
    };
    step();
  });
}

function _walk(img, startPos, stopPos) {
  let start;
  const distance = stopPos - startPos;
  const pixelsPerMS = STEP_SIZE_PX / STEP_INTERVAL_MS;

  return new Promise((resolve) => {
    // Adapted from:
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#examples
    const step = (timestamp) => {
      if (start === undefined) {
        start = timestamp;
        img.style.left = startPos + 'px';
      }
      const elapsed = timestamp - start;
      const shift = Math.min(pixelsPerMS * elapsed, distance);
      img.style.transform = `translateX(${shift}px)`;
      if (shift < distance) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(step);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const originalSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      requestAnimationFrame(() => {
        img.src = originalSrc;
        resolve();
      });
    }, DANCE_TIME_MS);
  });
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  walk(img, startPos, centerPos)
    .then(() => dance(img))
    .then(() => walk(img, centerPos, stopPos))
    .then(() => catWalk());
}
window.addEventListener('load', catWalk);
