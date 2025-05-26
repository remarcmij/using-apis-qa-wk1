const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise
  .then((result) => {
    console.log(1, result);
    console.log(2, promise);
  })
  .catch((err) => {
    console.log(3, err.message);
    console.log(4, promise);
  });

/* 
What will be the output of the above code? Where appropriate, fill in the blanks
below:

1 ...
2 ...

3 ...
4 ...
*/
