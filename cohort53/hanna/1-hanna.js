function doSomething(task) {
  return Promise.resolve(task);
}

function doSomething2(task) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(task), 1000 - task * 100);
  });
}

const tasks = [1, 2, 3];
tasks.forEach(async (task) => {
  await doSomething2(task);
  console.log(`Done with ${task}`);
});

console.log('Done with all');
