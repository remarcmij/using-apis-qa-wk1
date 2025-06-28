const MAX_DEPTH = 1000;

function recurse(depth) {
  if (depth === 0) {
    return;
  }
  recurse(depth - 1);
}

recurse(MAX_DEPTH);

console.log('Done!');
