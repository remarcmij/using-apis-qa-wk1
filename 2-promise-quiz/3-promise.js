const promise = new Promise((resolve, reject) => {
  resolve(42);
});

const foo = promise
  .then((result) => {
    console.log(1, result);
    console.log(2, promise);
  })
  .catch((err) => {
    console.log(3, err.message);
    console.log(4, promise);
  });

foo.then(() => {
  console.log(5, foo);
});

/* 
What will be the output of the above code? Where appropriate, fill in the blanks
below. If necessary, reorder the numbers to match the order of execution.

1 ...
2 ...

3 ...
4 ...

5 ...
*/
